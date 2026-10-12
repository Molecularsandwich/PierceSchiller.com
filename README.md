# pierceschiller.com

Personal site for Pierce Schiller. Plain HTML, CSS, and a few lines of JavaScript, with no build step. GitHub Pages serves it straight from the `main` branch.

## Layout

```
index.html              the page
404.html                shown for any missing URL
assets/css/styles.css   all styles, including the gel
assets/js/main.js       builds the email link, sets the footer year
assets/img/favicon.svg  tab icon
robots.txt, sitemap.xml search engine basics
.nojekyll               tells Pages to serve files as-is
```

## Turn on GitHub Pages

1. The repo must be **public** on a free GitHub plan. Private repos need Pro, Team, or Enterprise.
2. Go to **Settings > Pages**. Set **Source** to "Deploy from a branch," pick `main` and `/ (root)`, then save.
3. In about a minute the site is live at `https://molecularsandwich.github.io/pierceschiller.com/`.

## Point pierceschiller.com at it

1. In **Settings > Pages > Custom domain**, enter `pierceschiller.com` and save. GitHub commits a `CNAME` file.
2. At your domain registrar, set:
   - Four `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` pointing to `molecularsandwich.github.io`
3. When DNS resolves, check **Enforce HTTPS**.

Set the custom domain only after DNS is ready. Pages redirects the github.io address to the custom domain as soon as it's set.

## Edit content

Roles live in two places in `index.html`:

- **The gel** in the hero. Each `<a class="band">` sets `--y` (start year, decimals allowed) and `--len` (years held, which sets thickness). Add `exit` to the class for a brighter band marking an acquisition.
- **The work** section below it. Each role is an `<li class="role">` whose `id` matches its band's `href`.

Push to `main` and Pages redeploys on its own.

## To do

- Add a link to the Poets & Quants profile
- Add a description for the IPG role
