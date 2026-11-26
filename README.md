# Open Seeds — Website

Next.js 15 (App Router) + Tailwind CSS v4 + Framer Motion.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Editing content
All content (products, phones, stats, testimonials, gallery, downloads) lives in `src/lib/data.ts`.

- Brand images: `public/images/`
- Background photos: Unsplash URLs in `IMG` (data.ts)
- Logo colour palette: `src/app/globals.css` → `@theme`
- WhatsApp number: `SITE.whatsapp` (international format, no +)
