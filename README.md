# Personal website

A dependency-free, static website for GitHub Pages. A minimal brushed-metal finish with silver type, purple and gold accents, and a persistent left sidebar at every screen size. No build step, account, or API key is needed.

## Run locally

From `/workspace/chengfgao.github.io`:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

## Edit your pages

Each section is a separate HTML page, editable in any text editor or GitHub's file editor:

- `about/index.html`: the verbatim supplied biography and social icons. **Also update `index.html`**, which contains the same About page at the site root (root-relative links there use `./` instead of `../`).
- `cv/index.html`: CV introduction and display area.
- `publications/index.html`: duplicate the commented `<article class="work-card">` block for each paper. Fill in title, authors, venue/year, summary, and your contribution. Replace placeholder link spans with `<a href="VERIFIED_URL">Paper ↗</a>` or `Code ↗`. Omit code links when no repository exists.
- `writing/index.html`: duplicate the article block for each piece and replace its placeholder link with the real URL.
- `fun/index.html`: intentionally empty below the heading.
- `assets/style.css`: colors, typography, and layout.

The supplied biography is preserved verbatim. LinkedIn and X profiles are populated. Edit the social anchors in both About files to change their destinations. Personalize page titles and descriptions as needed.

### Add your CV

Place the real PDF at `assets/cv.pdf`. The CV page detects it, embeds the full document, and enables the download button. Mobile browsers without embedded PDF support can use the download link. No fabricated CV is included.

### Publications

Google Scholar is linked to the supplied profile. The environment could not access Scholar, so publication cards currently contain explicit templates, not imported or invented papers. Add verified publication metadata and paper/code links manually. Automatic scraping is not used.

## Publish

This site is compatible with GitHub Pages without a build. After committing and pushing the files, enable Pages in the repository settings using the branch containing them and the repository root. Publishing is a separate action; local setup does not publish the site.
