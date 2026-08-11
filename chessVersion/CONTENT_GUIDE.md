# Editing the site

The homepage is driven by `src/data/chapters.ts`.

- Each object is one half-move of the 15-ply Légal Trap and one chapter of your story.
- Change `title`, `period`, `summary`, and `tags` freely.
- Keep `ply`, `move`, `square`, and `piece` unless you deliberately want to alter the board replay.

To preview changes locally:

```bash
npm install
npm run dev
```

To create the production files for Cloudflare Pages:

```bash
npm run build
```

Configure Cloudflare Pages with build command `npm run build` and output directory `dist`.
