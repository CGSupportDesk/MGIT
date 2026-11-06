# MGIT Computer Education — Website

A complete, responsive six-page website for MGIT Computer Education, built from the supplied client website proposal, existing HTML, C-DIT reference PDF, Tally Education reference PDF and MGIT logo.

## Website pages

1. `index.html` — Home
2. `about.html` — About MGIT
3. `courses.html` — All Courses (search + category, duration, collection filters)
4. `cdit.html` — 48 C-DIT reference entries across five original sections
5. `tally.html` — Six Tally Education programme references
6. `contact.html` — Contact information, location and a WhatsApp enquiry form

Course descriptions appear in accessible pop-up detail panels, not separate pages. The main catalogue shows 49 unique offerings after accounting for overlaps across the two supplied reference documents.

## Preview locally

Open `index.html` directly in a modern browser, or serve the folder with a local static server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish

Upload **all** files and folders to a static hosting provider (e.g., Netlify, GitHub Pages, Cloudflare Pages, or Vercel). No build step, database, or subscription is required to display this website.

For Vercel, import the folder as a static project with framework preset `Other`. Do not override the build command. The HTML entry point is `index.html`.

## Features

- Responsive desktop/mobile header, mobile menu and sticky navigation
- Home-page category links and six featured courses
- Full course search and filters, plus load-more pagination
- C-DIT grouped catalogue and Tally Education catalogue
- Course detail dialogs, keyboard Escape support and enquiry links
- WhatsApp enquiry form with prefilled course from catalogue/URL
- Google Maps search link; no unverified embedded pin
- Basic SEO title/description per page, descriptive headings, accessibility and reduced-motion support
- No external application backend; the form **opens WhatsApp** and the user must press **Send** themselves

## Source and content handling

`data/source-course-catalogue.json` preserves the supplied catalogue records, while `assets/js/course-data.js` contains the browser-ready course data. Descriptions are references, not official detailed syllabi. Course availability, eligibility, approvals, certification and costs are not claimed as confirmed. Photographs, placements, accreditation logos and fabricated testimonials have not been inserted.

## Items requiring MGIT approval before launch

- Confirm phone number **+91 86066 22111**, WhatsApp access, exact street address and map pin.
- Confirm whether `mgit.in` is the intended production domain.
- Confirm current course availability, prices, batches, duration, certification, eligibility and exact affiliation descriptions.
- Confirm the right to describe C-DIT and Tally associations and any applicable trademark usage.
- Replace or edit course records and the preview-site caveats after approval.
- Consider a privacy policy and data protection requirements before connecting any backend form or analytics platform.

## Edit styling and data

- Brand/design variables: `assets/css/styles.css` at `:root`.
- Site interactions and default WhatsApp number: `assets/js/app.js`.
- Course data: `assets/js/course-data.js` (browser-ready) / `data/source-course-catalogue.json` (readable reference).
- Individual page headings, sections and contact number: relevant `.html` page.

The site uses the MGIT logo provided by the client. Google Fonts are an optional external enhancement; system fonts are used if fonts cannot be loaded.
