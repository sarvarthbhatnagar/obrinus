# Obrinus Group — Website

Premium company website for **Obrinus Group**, operated through Obrinus Technologies Limited.

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **React Router v7**
- **Framer Motion v12**
- **Lucide React**

## Getting Started

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build to /dist
npm run preview    # preview production build
```

## Deployment (Vercel)

Push to GitHub and connect via [vercel.com](https://vercel.com). The included `vercel.json` handles SPA routing automatically.

```bash
# Or deploy directly with the CLI
vercel --prod
```

## Project Structure

```
src/
  config/
    brand.js          ← Brand name, legal entity, nav, emails, social links
  data/
    products.js       ← Product definitions (names, descriptions, store links)
  components/
    Navbar.jsx
    Footer.jsx
    SectionHeader.jsx
    ServiceCard.jsx
    CapabilityCard.jsx
    ProductCard.jsx
    CTASection.jsx
    ContactForm.jsx
    StatsStrip.jsx
    Badge.jsx
    PageMeta.jsx
  pages/
    Home.jsx
    About.jsx
    Consulting.jsx
    AISolutions.jsx
    Products.jsx
    Contact.jsx
    Privacy.jsx
    Terms.jsx
    products/
      ProductDetail.jsx   ← Shared template
      MidnightCouncil.jsx
      SurvivalRank.jsx
      QRUtility.jsx
```

## Rebranding

To rename the company site (e.g., from "Obrinus Group" to "Avenues Group"), update only `src/config/brand.js`:

```js
export const BRAND = {
  name: 'Avenues Group',           // ← change here
  legalName: 'Avenues Technologies Limited',
  ...
}
```

## Adding Products

Edit `src/data/products.js` to add, remove, or update products. Each product includes:
- `id`, `slug`, `name`, `tagline`, `shortDescription`, `overview`
- `features` array
- `category`, `platform`
- `links.appStore`, `links.playStore`, `links.youtube`
- `color` (Tailwind gradient classes) and `accentColor` (hex)

## Contact Form

The form in `src/components/ContactForm.jsx` is pre-wired for [Formspree](https://formspree.io). Replace `YOUR_FORM_ID` with your actual Formspree endpoint, or swap the `fetch` call with any other email service.
