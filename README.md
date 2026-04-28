# Mandat A — Visual Novel (TypeScript + React + Vite)

Prototype jouable localement d'un visual novel psychologique en université d'élite.

## Lancer

```bash
npm install
npm run dev
```

## Direction artistique (GPT Image 2)

Le jeu lit les fonds depuis `public/generated/*.webp`.

1. Générer les images via GPT Image 2 avec les prompts de l'onglet **ART** (ou `src/data/artAssets.ts`).
2. Sauvegarder chaque rendu dans `public/generated/` avec le nom exact de l'ID (ex: `bg-bus-dawn.webp`).
3. Le moteur affichera automatiquement les images; sinon un fallback gradient est utilisé.

## Contenu

- Chapitres complets jouables : Prologue + Chapitres 1 à 6.
- Dossiers personnages (filtres année/classe).
- Ecrans Classes, BDE, Administration.
- Statuts narratifs persistants (Zustand + localStorage).
