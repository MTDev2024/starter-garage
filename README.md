# AutoPro — template de site garage automobile

Site vitrine pour garage/atelier automobile, construit avec [Astro](https://astro.build), piloté par **une seule source de vérité**.

## Architecture : tout part de `src/config/`

- **`src/config/theme.ts`** — couleurs, polices, rayons de bordure, ombres.
- **`src/config/client.ts`** — tous les textes (copywriting), liens, coordonnées, horaires, services, véhicules en stock, articles de blog, images (importées depuis `src/assets/images`). C'est le fichier à modifier pour décliner le site pour un autre garage.
- **`src/config/types.ts`** — le schéma TypeScript de `client.ts`. Toute donnée manquante ou mal typée est signalée immédiatement par `npm run check`.

Aucun composant dans `src/components/` ne contient de texte, couleur ou image en dur : ils lisent toujours `client.ts`. Pour décliner le site pour un nouveau client :

1. Remplacez les fichiers dans `src/assets/images/` (gardez les mêmes noms, ou mettez à jour les imports en haut de `client.ts`).
2. Modifiez les textes, liens, horaires, véhicules, etc. dans `client.ts`.
3. Ajustez les couleurs et polices dans `theme.ts` — les classes Tailwind (`bg-brand`, `text-ink`, `font-heading`...) sont générées automatiquement à partir de ces valeurs par `src/config/generate-theme-css.mjs`, il n'y a rien à toucher ailleurs.

Pour changer de police : installez un autre paquet [Fontsource](https://fontsource.org/) (variable de préférence pour le poids réglable), importez-le dans `src/layouts/Layout.astro`, et mettez à jour `theme.fonts` dans `theme.ts`.

## Formulaires

Le formulaire de devis (`#devis`) et l'inscription newsletter envoient leurs données en `POST` (fetch + repli HTML natif) vers l'URL renseignée dans `client.quoteForm.endpoint` / `client.newsletter.endpoint`. Ces champs sont vides par défaut : tant qu'ils ne sont pas renseignés (ex. avec un endpoint [Formspree](https://formspree.io/)), le formulaire affiche un message explicite au lieu de simuler un envoi.

## Structure du projet

```text
src/
├── assets/images/        # Photos (optimisées automatiquement en AVIF/WebP au build)
├── components/
│   ├── sections/          # Un composant par section de la page d'accueil
│   └── ui/                 # Boutons, conteneurs, titres de section réutilisables
├── config/                # client.ts, theme.ts — la source de vérité
├── layouts/Layout.astro   # <head>, SEO, police, header/footer communs
├── lib/seo.ts             # JSON-LD (données structurées AutoRepair)
└── pages/
    ├── index.astro
    └── vehicules/[slug].astro   # Fiche véhicule générée pour chaque entrée de client.vehicles
```

## Commandes

| Commande          | Action                                                    |
| :----------------- | :--------------------------------------------------------- |
| `npm install`       | Installe les dépendances                                   |
| `npm run dev`       | Démarre le serveur de développement sur `localhost:4321`   |
| `npm run check`     | Vérifie les types TypeScript/Astro                          |
| `npm run build`     | Build de production dans `./dist/`                          |
| `npm run preview`   | Prévisualise le build de production en local                |

## Choix techniques (pourquoi)

- **Astro, sans framework JS global** : chaque page ne charge que le strict nécessaire (pas de runtime React/Vue). Les quelques interactions (menu mobile, carrousel, formulaires) sont de petits scripts natifs intégrés par composant.
- **Images** : optimisées et converties en WebP au build via `astro:assets`, avec dimensions explicites (pas de décalage de mise en page) et chargement différé (`loading="lazy"`) hors de la zone visible initiale.
- **Polices auto-hébergées** (Fontsource) : pas de requête vers Google Fonts, meilleur temps de chargement et confidentialité.
- **Accessibilité** : navigation au clavier, focus visible, contrastes vérifiés (WCAG AA), structure sémantique (landmarks, `<nav>`, liens d'évitement), attributs `alt` pilotés par `client.ts`.
- **SEO** : balises meta + Open Graph dynamiques, `sitemap.xml`, `robots.txt`, données structurées `AutoRepair` (adresse, horaires, téléphone) pour un meilleur référencement local.
