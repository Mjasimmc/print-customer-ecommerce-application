# Vercel Deployment Guide for Customer Application

This guide explains how to deploy the **Customer PWA Application** (`@print-delivery/customer`) to **Vercel**.

---

## 1. Vercel Configuration Files

The following configuration files are included in the repository:

- **`vercel.json`**: SPA routing rewrites (`/(.*) -> /index.html`), framework presets (`vite`), output directory (`dist`), security headers (`X-Frame-Options`, `X-Content-Type-Options`), and static asset caching policies.
- **`.vercelignore`**: Excludes `node_modules`, logs, test coverage, and local IDE metadata during upload.

---

## 2. Deploying via Vercel Dashboard

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Log in to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New" -> "Project"**.
3. Import the `print-customer-ecommerce-application` repository.
4. Configure Project Settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./` (if standalone repo) or `apps/customer` (if monorepo)
   - **Build Command**: `vite build` or `pnpm build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.

---

## 3. Deploying via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Log in to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## 4. Single Page Application (SPA) Routing

Because this application uses `react-router-dom` in HTML5 History mode (`createBrowserRouter`), `vercel.json` routes all client requests to `/index.html`. This ensures direct URL navigation (e.g. `/search`, `/product/prod-101`, `/cart`, `/checkout`, `/pricing`, `/providers`) works seamlessly without 404 errors.
