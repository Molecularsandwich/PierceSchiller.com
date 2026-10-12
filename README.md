# pierceschiller.com

A one-page personal site. Plain HTML and CSS in a single `index.html`, so there's no build step. It's hosted free on GitHub Pages.

## Publish it

1. Create a public repo on GitHub, for example `pierceschiller.github.io` or `website`.
2. Upload `index.html`, `README.md`, and `.nojekyll` to the repo root.
3. In the repo, open **Settings > Pages**. Set **Source** to "Deploy from a branch," pick `main` and `/ (root)`, and save.
4. After about a minute, the site is live at `https://<username>.github.io/` (or `/<repo>/`).

## Point pierceschiller.com at it

1. In **Settings > Pages > Custom domain**, enter `pierceschiller.com` and save. GitHub adds a `CNAME` file to the repo.
2. At your domain registrar, set these DNS records:
   - Four `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` pointing to `<username>.github.io`
3. Once DNS resolves, tick **Enforce HTTPS** in the Pages settings.

## Edit the gel

Each band in the hero gel is one `<a class="band">`. Two custom properties place it:

- `--y` is the start year (decimals are fine, for example `2014.7` for September 2014)
- `--len` is years held, which sets band thickness

Add the class `exit` for a brighter band that marks an acquisition. The `href` should match the `id` of that role's entry in "The work."

## CSS features used

- Bands positioned entirely with `calc()` from year values, so data drives layout
- A single load animation that "runs" the gel, disabled under `prefers-reduced-motion`
- `:target` highlight when a band links to its timeline entry
- `color-mix()` band glow, automatic dark mode via `prefers-color-scheme`
- Variable font axes (weight, width, optical size) from Bricolage Grotesque

## To do

- Add a link to the Poets & Quants profile once you have the URL
- Add a description for the IPG role if you want more than the title
