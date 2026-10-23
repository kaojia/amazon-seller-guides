# Amazon Seller Operating Guides

Single-page operating guides for Taiwanese sellers launching on Amazon (pure static HTML with instant search, role / stage filters, progress checkboxes, and interactive tools). Currently covers Australia, the Middle East, Japan, and Europe.

## 🔗 Live URLs

| Page | URL |
|---|---|
| 🏠 Portal (marketplace picker) | https://kaojia.github.io/amazon-seller-guides/ |
| 🇦🇺 Australia guide | https://kaojia.github.io/amazon-seller-guides/au-seller-guide/ |
| 🌐 Middle East guide (UAE AE / Saudi Arabia SA) | https://kaojia.github.io/amazon-seller-guides/mena-seller-guide/ |
| 🇯🇵 Japan guide | https://hsinyi94.github.io/amazon-jp-seller-guide |
| 🇪🇺 Europe guide (Jenny's version) | https://kaojia.github.io/eu-guide/ (repo [kaojia/eu-guide](https://github.com/kaojia/eu-guide)) |
| 🇪🇺 Europe guide (Eddie's version) | https://eddiechu1009-bit.github.io/amazon-eu-seller-guide/ |

Each guide's header has a "switch marketplace" button to jump between guides, plus a "🏠 back to index" link to the portal.

> Note: the Japan guide and Eddie's Europe guide are deployed from independent repos under other accounts; this repo only links to them from the index and switcher. Whether those pages have a "back to index" link is up to their own maintainers. Jenny's Europe guide (kaojia/eu-guide) has the switcher built in.

## 🔀 Europe link switches on the `?am=` parameter

The portal's "Europe" card links to a Europe guide based on the URL parameter `am` (account manager code). Other marketplace links are unaffected.

| Link sent to sellers | Europe card goes to |
|---|---|
| https://kaojia.github.io/amazon-seller-guides/?am=jenny | Jenny's version |
| https://kaojia.github.io/amazon-seller-guides/?am=eddie | Eddie's version |
| No parameter, or a code not in the table | Default (currently Eddie's version) |

- The mapping lives in the `EU_GUIDES` object in the shared file `assets/eu-guides.js`; the portal default is `EU_DEFAULT`. The portal and the Australia / Middle East guides all load this file.
- **Adding someone**: add one line `code: 'Europe guide URL',` to `EU_GUIDES` (use a lowercase English code; matching is case-insensitive). After editing, bump the `eu-guides.js?v=1` version on each page to bust the cache.
- **The code follows the seller**: clicking Australia / Middle East in the portal carries the current code (or the default when there is none); the Australia / Middle East guides use the code to decide where "🇪🇺 Go to Europe" and "🏠 back to index" point, and keep it when switching between guides. Opening the Australia / Middle East guide directly (no parameter) defaults to `jenny`.
- Link markers: `data-eu` = replaced with the matching Europe guide URL; `data-am-pass` = `?am=code` is appended to the original link.
- The parameter is only matched against the table; anything not in the table falls back to the default and is never inserted into page content.
- Jenny's Europe guide (kaojia/eu-guide) always links "🏠 back to index" to `?am=jenny`; Eddie's version has no switcher, so sellers use the browser's Back button.

## 📦 Coverage

- **Australia**: registration & KYC, the four main costs, 10% GST, brand authorization, cross-marketplace migration, FBA and ISPM-15 pallets, Vine, new-product cold start, the full-year promotion calendar, Amazon Business (B2B)
- **Middle East**: registration & KYC, tax (AE 5% / SA 15% VAT), brand, listing, FBA, major sale events

## 🛠 Tech

- Each guide is a single `index.html` with inline CSS and vanilla JavaScript; no backend or build step
- Progress checkboxes are stored in browser localStorage (per device / browser, not synced across devices)
- Deployed with GitHub Pages (root of the `main` branch)

## ✏️ Updating

1. Edit the relevant `index.html`
2. Run:
   ```bash
   git add .
   git commit -m "update"
   git push
   ```
3. GitHub Pages redeploys automatically in about a minute (hard-refresh with Ctrl+F5)

## ⚠️ Disclaimer

These guides are supplementary reference material compiled by an Amazon account manager to coach sellers. They do not represent Amazon's official position and do not constitute legal, tax, or compliance advice. Always refer to Seller Central, official announcements, and the latest notices from local authorities for current fees, incentives, sale dates, and regulatory timelines.
