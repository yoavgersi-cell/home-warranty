# Top Home Warranty

Source for tophomewarranty.com (placeholder domain): an independent comparison site for US home warranty companies.

Built from the same Next.js template as hrtwomen.com. All site content (providers, rankings, reviews, comparisons, articles, FAQs) lives in `src/lib/seeds/home-warranty.ts`.

Providers: Choice Home Warranty, American Home Shield, Select Home Warranty, First American Home Warranty, Home Warranty of America, The Home Service Club, 2-10 Home Buyers Warranty.

## Before launch

- Replace each provider's `affiliateUrl` (currently the provider homepage) with your tracking link.
- Refresh Trustpilot ratings and add verbatim `trustpilotReviews` from the live profiles.
- Confirm plan names, prices and state exclusions flagged in the seed file header.
- Set the real domain in `src/lib/site-context.ts`, `src/data/reviewers.ts` and the page metadata (search for `tophomewarranty.com`).

## Development

```bash
npm install
npm run dev
```

## Environment variables (Vercel)

- `ADMIN_PASSWORD`: password for `/admin`
- `NEXT_PUBLIC_GA_ID`: Google Analytics measurement ID (optional)
- `NEXT_PUBLIC_META_PIXEL_ID`: Meta Pixel ID (optional)
