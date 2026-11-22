# TNBNU Media

A static React/Vite site for TNBNU Media, using the company's published film stories and stills. Content is separated into `src/content.js`; presentation is in `src/main.jsx` and `src/style.css`.

## Requirements and local development

Node.js 22.12+ (22.22+ recommended) and npm are required.

```sh
npm install
npm run dev
npm run build
npm run preview
```

The build writes `dist/`. Static HTML entry points are generated for all known paths so direct navigation and refresh work on static hosts; unknown paths use `404.html` where the host supports it. React renders the content in the browser. Metadata in `index.html` supplies a general description and social preview; page titles update in the browser.

## Content and assets

Project copy, film URLs, credits and image URLs live in `src/content.js`. Change a project's slug in both that file and `scripts/routes.js` when adding or renaming a project. Add a page's route to `scripts/routes.js` and navigation in `src/main.jsx`. The contact form opens a pre-filled email draft; it does not send mail itself or claim a message was delivered. Visitors need an email application, or can use the email or WhatsApp links directly.

### Source inventory and limitations

Source inspected: [tnbnu.media](https://tnbnu.media/), [works](https://tnbnu.media/works), [contact](https://tnbnu.media/contact), and each linked project page. The source supplied no accessible standalone logo file or team portrait in the extracted pages; the site uses a typographic wordmark and a simple initial favicon instead. No client testimonials were verified. The WhatsApp number is taken from the contact page; no separate telephone number is asserted.

| Project / source | Cover | Detail stills | Film |
| --- | --- | --- | --- |
| [Me and My Friend](https://tnbnu.media/works/eleven-motors) | `iHImKeuPfYmSzjCp30JQJZgXSLo.jpg` | `mVz7jMpEMVgVhZwKj8M1me2JSk.jpg`, `dWxQUp3fo8rWSqkU2WxMLT05it4.jpg`, `1mrsauO9SUbiGYpSYz7JnC0DSkI.jpg`, `ihzZoSWYLnfWr0SBeXp43XyMfC0.jpg` | Original Google Drive link in content file |
| [Heart of the Ocean](https://tnbnu.media/works/elias-jewellers) | `XLgxorbotdc1RNc2Y2oJJBJJ5g.png` | `Fxz81yolTiKEkTegPNb6Go9ht9E.png`, `Mw1ICQO1cbGx2q5DQt8bD4Ael0.png`, `EAs8pjid0VlE16dYTPaPkpZpEl0.png` | Original Google Drive link in content file |
| [Endurance and Beyond](https://tnbnu.media/works/endurance-and-beyond) | `YQB1AP2caGbmR9kAdXwz0V5UfU.png` | `Vs8Py2Z7CVDcwNlCHIiPPOEjkVo.png`, `egZi6BWVLDRVqsKQkRSFmX2anGw.png`, `C9zTJyVFXHjavBAqu4zAuEKy7Ds.png`, `1Dev5DlQqW8dPtmSRcVLyotTmA.png` | Original Google Drive link in content file |
| [Beyond the Wild](https://tnbnu.media/works/pearl-mara) | `ThNjzcDgnU3luwMP3Eztxk108wE.jpg` | `g7EGZHrpvMpWAMPF6w5lsQRiS2I.jpg`, `lMdweRtyPP8PP84Dah5qh24LSks.jpg`, `XQQqOxxDtW9x2FrLi3LxRq2oxF0.jpg` | Original Google Drive link in content file |

The filenames above are hosted at `https://framerusercontent.com/images/`. **They are remote dependencies, not local files:** the development environment could read links through a page extraction service but could not download the binary assets from Framer's host. A site owner should download the original files with permission, place optimized copies in `public/images/`, and update `src/content.js` to local paths before relying on this as a permanent archive. The original Drive links may require sharing permissions and were not independently verified for playback. Original contact image `5SdsQngT1R2PoxjiERZ9fmKd8.png` was identified but is not used. No unrelated stock images have been substituted.

The reference [Black Bean Productions](https://blackbeanproductions.com/) homepage extraction exposed only its title, while the accessible Who Are We and Contact pages exposed their written architecture. Its rendered design, video, mobile navigation and interactive behavior were not available for detailed inspection in this environment. This implementation is an approximation rather than a verified pixel-perfect recreation. Review side-by-side with the live reference and original TNBNU assets on real devices before launch.

## Deployment

### GitHub Pages

`deployment/github-pages.yml` is a workflow template that builds on pushes to `main` and publishes `dist` via GitHub Pages, with `VITE_BASE_PATH=/tnbumedia/`. A repository owner must copy it to `.github/workflows/deploy.yml` (the current GitHub integration cannot push workflow files). In repository **Settings → Pages**, set the source to **GitHub Actions**, and ensure Actions and Pages deployment permissions are enabled. Merge the working branch into `main` using your normal review process; subsequent pushes to `main` trigger redeployment. The expected project URL is `https://techygggf.github.io/tnbumedia/`, but it is not live until Pages is enabled and the workflow succeeds. This repository's current integration could not enable Pages (GitHub API returned 403). The custom domain must not be changed without confirming ownership and DNS configuration.

### Netlify alternative

Connect this repository in Netlify, choose the production branch, build command `npm run build`, and publish directory `dist`. `netlify.toml` includes these settings and a 404 rule. Do not set `VITE_BASE_PATH` for a root-domain deployment. Future pushes to the configured branch trigger builds. Use one hosting platform, not both, unless a separate staging environment is intentional.

For either host, verify all pages and direct URLs after deployment, verify Framer images and Drive films from an unauthenticated browser, and test the contact email draft. If deploying under a different subdirectory, set `VITE_BASE_PATH` to that path with leading and trailing slashes. If changing the project path or publishing to a custom root domain, update the workflow's base accordingly.
