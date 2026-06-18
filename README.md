# Amazon Clone

A simple React + Vite e-commerce frontend configured for GitHub Pages deployment.

Live site URL after deployment:

```text
https://Devyansh008.github.io/Amazon-Clone/
```

## GitHub Pages Configuration

This project is configured for GitHub Pages with:

- `homepage` in `package.json`
- `predeploy` and `deploy` npm scripts in `package.json`
- `gh-pages` as a dev dependency
- `base: "/Amazon-Clone/"` in `vite.config.js`
- `public/.nojekyll` so GitHub Pages serves the built files without Jekyll processing
- `.github/workflows/deploy.yml` for automatic GitHub Actions deployment from `main`

The app currently uses state-based navigation instead of route paths, so page refreshes and direct visits work on GitHub Pages. If React Router is added later, use `HashRouter` or configure a GitHub Pages fallback before deploying route-based pages.

## Install

Run this once after cloning the repository:

```bash
npm install
```

## Local Development

Start the local development server:

```bash
npm run dev
```

Build the production files locally:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deploy with GitHub Actions

This is the recommended deployment method for this project.

Commit and push changes to `main`:

```bash
git status
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

GitHub Actions will run automatically after the push.

For the first Actions-based deploy, open the GitHub repository settings:

```text
Settings -> Pages -> Build and deployment -> Source
```

Select:

```text
GitHub Actions
```

Then open the repository's `Actions` tab and wait for `Deploy to GitHub Pages` to finish. The site will be available at:

```text
https://Devyansh008.github.io/Amazon-Clone/
```

## Deploy Manually with npm

Make sure the repository remote points to GitHub:

```bash
git remote -v
```

Deploy the app:

```bash
npm run deploy
```

The deploy script runs `npm run build` first and then publishes the `dist` folder to the `gh-pages` branch.

If using the manual `gh-pages` deploy instead of GitHub Actions, open the GitHub repository settings:

```text
Settings -> Pages -> Build and deployment -> Source
```

Select:

```text
Deploy from a branch
Branch: gh-pages
Folder: / (root)
```

Then save. The site will be available at:

```text
https://Devyansh008.github.io/Amazon-Clone/
```

## Deploy Updates

After making changes, use this exact sequence:

```bash
npm run build
git status
git add .
git commit -m "Update Amazon clone"
git push origin main
```

If your default branch is not `main`, replace `main` with the correct branch name.

GitHub Actions deploys automatically after `git push origin main`. If you choose manual deployment instead, run this after pushing:

```bash
npm run deploy
```

## Notes

- Do not remove `base: "/Amazon-Clone/"` from `vite.config.js`; it keeps CSS, JavaScript, icons, and images loading correctly from the GitHub Pages subpath.
- Do not commit the `dist` folder. It is generated and published to the `gh-pages` branch by `npm run deploy`.
