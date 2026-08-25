# Luna Fit Living

Static MVP for **Luna Fit Living**, an editorial fitness, wellness and healthy-lifestyle brand. The site uses plain HTML, CSS and a small amount of JavaScript so it stays fast, easy to understand and compatible with GitHub Pages.

## Project structure

```text
.
├── index.html                     # Homepage
├── about/index.html               # About page
├── contact/index.html             # Contact page
├── privacy-policy/index.html      # Privacy Policy
├── affiliate-disclosure/index.html # Affiliate disclosure
├── 404.html                       # GitHub Pages not-found page
├── categories/
│   ├── fitness/index.html
│   ├── healthy-lifestyle/index.html
│   ├── gym-style/index.html
│   └── wellness/index.html
├── home-workout-essentials-for-women/
│   └── index.html                 # First published editorial article
├── assets/
│   ├── css/styles.css             # Shared colors, typography and layouts
│   ├── js/main.js                 # Mobile menu and automatic footer year
│   └── images/                    # Optimized WebP photography and favicon
├── sitemap.xml
├── robots.txt
└── .github/workflows/pages.yml    # Automatic GitHub Pages deployment
```

Each page lives in its own folder and uses `index.html`. This creates clean URLs such as `/categories/fitness/` and `/home-workout-essentials-for-women/`.

## Edit text

Open the relevant `index.html` file and edit the visible copy between the HTML tags. For example:

```html
<h1>Home Workout Essentials for Women</h1>
<p>Your updated introduction goes here.</p>
```

Keep one `<h1>` per page. Use `<h2>` for main article sections and `<h3>` for sections inside them.

## Replace images

1. Add the new image to `assets/images/`. Prefer descriptive lowercase WebP filenames such as `luna-home-workout.webp`.
2. Replace the old `src` value in the page.
3. Update the image `alt` text so it describes the new image.
4. If the image is the main social preview, update the absolute `og:image` URL in the page `<head>`.

For article and Pinterest traffic, a wide main image around 1600 × 1000 px is a useful starting point. Compress JPG/WebP files before publishing.

## Add an article

1. Copy the folder `home-workout-essentials-for-women/`.
2. Rename the copy with a short lowercase slug, for example `best-resistance-bands-for-beginners/`.
3. Edit the new `index.html`:
   - `<title>` and meta description;
   - canonical and Open Graph URLs;
   - article title, introduction, headings and body;
   - main image and alt text;
   - Article JSON-LD fields;
   - any product buttons or related links included in that article's publishing brief.
4. Add an article card to the matching category page and, if featured, to the homepage.
5. Add the new public URL to `sitemap.xml`.

When product links are introduced later, they should use `rel="nofollow sponsored"` and follow the site's final affiliate disclosure.

## Add a category

1. Copy one folder inside `categories/` and rename it with a clear slug.
2. Update its title, description, canonical URL, Open Graph data and visible heading.
3. Add the category to the header/footer navigation where appropriate.
4. Add its URL to `sitemap.xml`.

## Change the visual style

Shared design tokens are at the top of `assets/css/styles.css`. Changing values such as `--color-sage`, `--color-blush`, `--color-ink` or `--font-display` updates the full site.

## Test locally

From the repository root, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Test both desktop and a narrow mobile viewport. Do not rely on opening HTML files directly because relative paths behave more reliably through a local server.

## Publish with GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the repository whenever `main` changes.

1. In GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source if it is not already selected.
3. Open **Actions** and confirm that **Deploy static site to GitHub Pages** succeeds.

The public site is available at:

`https://lunafitliving.com/`

## Custom domain

The custom domain is configured through GitHub Pages. Canonical URLs, social metadata, `robots.txt` and `sitemap.xml` use `https://lunafitliving.com/` as the official address.

## Suggested next steps

- Create the remaining article pages using the prepared cover and in-article photography.
- Connect the newsletter section to a real provider when email collection is ready.
- Add analytics and Pinterest Tag after the content strategy is ready.
- Consider a small static site generator when the article library becomes large, while keeping the same URLs and design system.
