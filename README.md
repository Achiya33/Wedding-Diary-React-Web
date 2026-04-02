# Moods-style React Website (Vite + Tailwind)

This is a React website template inspired by the **structure** of modern wedding photography sites:
- Home (Hero quote + Services + Latest Works + Testimonials)
- About Us
- Portfolio (filter + load more)
- Portfolio Details pages (dynamic route)
- Packages (form + PDF download)
- Contact

> ⚠️ Note: Do **not** copy images/text from other websites unless you own rights. Replace the placeholders in `public/images` with your own work.

## 1) Install & Run

```bash
npm install
npm run dev
```

Build:
```bash
npm run build
npm run preview
```

## 2) Customize (Important)

### Brand + Contact Details
Edit:
- `src/data/site.js`

### Services
Edit:
- `src/data/services.js`

### Portfolio Items
Edit:
- `src/data/portfolio.js`

### Testimonials
Edit:
- `src/data/testimonials.js`

### Forms (Contact & Packages)
This project uses **Formspree**.
1) Create a form in Formspree
2) Copy the endpoint (example: `https://formspree.io/f/abcdwxyz`)
3) Paste it into:
- `src/data/site.js` -> `formspreeEndpoint`

## 3) Replace Images
All placeholder images are inside:
- `public/images/`

You can replace them with your own `.jpg/.png` using the **same filenames**.

## 4) Replace Packages PDF
Replace:
- `public/packages.pdf`
