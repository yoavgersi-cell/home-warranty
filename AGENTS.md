<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Article images (required for new articles)

Every article published on or after `IMAGE_REQUIRED_FROM` (src/lib/article-images.ts) must ship with a hero image and alt text - `npm run build` runs `scripts/check-article-images.ts` first and fails otherwise.

- Generate for new articles: `npm run images:generate -- --new` (in a Claude cloud session prefix with `NODE_USE_ENV_PROXY=1` so Node's fetch uses the proxy; the OpenAI key is injected by the environment).
- Regenerate specific ones: `npm run images:generate -- --slug=a,b`.
- Images land in `public/article-images/<slug>.webp`; metadata in `src/lib/seeds/article-images.json` (merged into articles at load).
- The `Article images` GitHub Action illustrates 5 backlog articles a day (needs the `OPENAI_API_KEY` repository secret).
- Look at generated images before committing: no text, logos or brands; the subject should be the home system/appliance the article is about.
