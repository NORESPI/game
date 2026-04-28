import type { ArtAsset } from '../types';

export const artAssets: ArtAsset[] = [
  {
    id: 'bg-bus-dawn',
    type: 'background',
    title: 'Bus vers le campus',
    localPath: '/generated/bg-bus-dawn.webp',
    prompt:
      'Dramatic light novel style, first-year elite university students in a bus at dawn, cold blue palette, cinematic depth of field, psychological tension, original uniforms, no known franchise references.',
  },
  { id: 'bg-main-gate', type: 'background', title: 'Portail principal', localPath: '/generated/bg-main-gate.webp', prompt: 'Elite closed-campus gate with biometric scanners, chilly morning mist, elegant architecture, suspenseful visual novel background, original design.' },
  { id: 'bg-auditorium', type: 'background', title: 'Auditorium', localPath: '/generated/bg-auditorium.webp', prompt: 'Grand university auditorium with severe lighting, dramatic stage, cold tones, high-status atmosphere, no logos.' },
  { id: 'bg-ranking-hall', type: 'background', title: 'Hall affectations', localPath: '/generated/bg-ranking-hall.webp', prompt: 'Modern ranking hall with giant screens, students in elegant uniforms, social pressure vibe, cinematic perspective.' },
  { id: 'bg-courtyard-night', type: 'background', title: 'Cour intérieure', localPath: '/generated/bg-courtyard-night.webp', prompt: 'Night courtyard in elite campus, reflective tiles after rain, subtle neon lighting, tense dramatic mood.' },
  { id: 'bg-classroom-c', type: 'background', title: 'Classe 1-C', localPath: '/generated/bg-classroom-c.webp', prompt: 'Classroom of class C in elite school, cold daylight, orderly desks, atmosphere of silent strategy.' },
  { id: 'bg-corridor', type: 'background', title: 'Couloir central', localPath: '/generated/bg-corridor.webp', prompt: 'Wide school corridor with upper walkways, students observing each other, depth of field, suspense.' },
  { id: 'bg-campus-esplanade', type: 'background', title: 'Esplanade', localPath: '/generated/bg-campus-esplanade.webp', prompt: 'Beautiful elite campus esplanade, minimalist luxury, chilly light, psychological thriller tone.' },
  { id: 'bg-arena', type: 'background', title: 'Arène académique', localPath: '/generated/bg-arena.webp', prompt: 'Academic challenge arena, digital boards, spectators, dramatic contrast and tension.' },
  { id: 'bg-announcement-stage', type: 'background', title: 'Plateforme annonce', localPath: '/generated/bg-announcement-stage.webp', prompt: 'Administrative announcement stage in elite university, polished wood and steel, intimidating atmosphere.' },
  { id: 'bg-bde-chamber', type: 'background', title: 'Chambre BDE', localPath: '/generated/bg-bde-chamber.webp', prompt: 'Student council chamber controlled by seniors, authoritarian elegance, cold luxury interior.' },
  { id: 'bg-hearing-room', type: 'background', title: 'Salle audition', localPath: '/generated/bg-hearing-room.webp', prompt: 'Formal hearing room with legal ambiance, dramatic focused lights, psychological pressure.' },
  { id: 'bg-bde-corridor', type: 'background', title: 'Annexe BDE', localPath: '/generated/bg-bde-corridor.webp', prompt: 'Narrow corridor in student council annex, surveillance cameras, tense silence.' },
  { id: 'bg-dorm-common', type: 'background', title: 'Résidence C', localPath: '/generated/bg-dorm-common.webp', prompt: 'Common room in student dorm, subdued evening light, strategic planning vibe.' },
  { id: 'bg-lantern-garden', type: 'background', title: 'Jardin lanternes', localPath: '/generated/bg-lantern-garden.webp', prompt: 'Lantern-lit garden at night, refined pathways, secret political negotiation atmosphere.' },
  { id: 'bg-digital-wall', type: 'background', title: 'Mur numérique', localPath: '/generated/bg-digital-wall.webp', prompt: 'Dark room with large digital forum wall, leaked messages visualized, cyber-social tension.' },
  { id: 'bg-forum-night', type: 'background', title: 'Forum de nuit', localPath: '/generated/bg-forum-night.webp', prompt: 'Central forum at night with crowd and confrontation, cold dramatic tones, motion blur highlights.' },
  { id: 'bg-tribune', type: 'background', title: 'Tribune', localPath: '/generated/bg-tribune.webp', prompt: 'Institutional tribunal stage, student council and director presence, severe cinematic framing.' },
];

export const artById = Object.fromEntries(artAssets.map((a) => [a.id, a]));
