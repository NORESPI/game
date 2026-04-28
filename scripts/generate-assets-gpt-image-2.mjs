import { mkdir, readFile, writeFile } from 'node:fs/promises';

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error('OPENAI_API_KEY manquant. Impossible de générer les images avec gpt-image-2.');
  process.exit(1);
}

const assets = JSON.parse(await readFile(new URL('./art-prompts.json', import.meta.url), 'utf-8'));
await mkdir('public/generated', { recursive: true });

for (const asset of assets) {
  console.log(`Generating ${asset.id}...`);
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-image-2',
      prompt: `${asset.prompt} -- cinematic visual novel background, no text, no watermark`,
      size: '1536x1024',
      output_format: 'webp'
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Echec ${asset.id}: ${response.status} ${err}`);
  }

  const json = await response.json();
  const b64 = json?.data?.[0]?.b64_json;
  if (!b64) throw new Error(`Pas d'image reçue pour ${asset.id}`);

  const outPath = `public/generated/${asset.id}.webp`;
  await writeFile(outPath, Buffer.from(b64, 'base64'));
  console.log(`Saved ${outPath}`);
}

console.log('Generation terminee.');
