# 🚀 Deploy Predora.ai to GitHub Pages

This guide explains how to deploy your Predora.ai demo to GitHub Pages.

## 📋 Prerequisites

- Git installed
- GitHub account
- Repository created on GitHub

## 🔧 Configuration Done

The following files have been configured for GitHub Pages deployment:

1. ✅ **angular.json** - Set baseHref to `/predora/`
2. ✅ **public/404.html** - SPA redirect for GitHub Pages routing
3. ✅ **src/index.html** - Added redirect script
4. ✅ **.github/workflows/deploy.yml** - GitHub Actions workflow
5. ✅ **package.json** - Added `build:github` script

## 📤 Deployment Steps

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy your app

3. **Access Your App:**
   - URL: `https://YOUR-USERNAME.github.io/predora/`
   - Wait 2-3 minutes for the first deployment

### Option 2: Manual Deployment

1. **Build for Production:**
   ```bash
   npm run build:github
   ```

2. **Install gh-pages (first time only):**
   ```bash
   npm install -D gh-pages
   ```

3. **Add deploy script to package.json:**
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist/predora/browser"
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** → **/ (root)**
   - Save

## 🔍 Troubleshooting

### 404 Error on Refresh

✅ **Already Fixed!** The `404.html` and redirect script handle this.

### Assets Not Loading

If CSS/JS files show 404 errors:

1. **Check baseHref in angular.json:**
   ```json
   "baseHref": "/predora/"
   ```

2. **Ensure repository name matches:**
   - If repo is `predora` → baseHref should be `/predora/`
   - If repo is different, update baseHref accordingly

### Blank Page

1. **Check browser console** for errors
2. **Verify build output:**
   ```bash
   npm run build:github
   ls -la dist/predora/browser
   ```
3. **Check that index.html exists** in dist folder

## 🌐 Custom Domain (Optional)

To use a custom domain like `demo.predora.ai`:

1. **Create CNAME file:**
   ```bash
   echo "demo.predora.ai" > public/CNAME
   ```

2. **Update DNS settings:**
   - Add CNAME record: `demo` → `YOUR-USERNAME.github.io`

3. **Update angular.json:**
   ```json
   "baseHref": "/"
   ```

4. **Rebuild and deploy**

## 📊 GitHub Actions Workflow

The workflow (`.github/workflows/deploy.yml`) automatically:
- ✅ Checks out code
- ✅ Installs Node.js and dependencies
- ✅ Builds the Angular app
- ✅ Deploys to GitHub Pages

**Triggered on:**
- Push to `main` branch
- Manual workflow dispatch

## 🔐 Repository Settings

Ensure these settings are configured:

1. **Actions Permissions:**
   - Go to **Settings** → **Actions** → **General**
   - Enable: "Read and write permissions"

2. **Pages:**
   - Go to **Settings** → **Pages**
   - Source: **GitHub Actions**

## ✅ Verification

After deployment, verify:

1. **App loads** at `https://YOUR-USERNAME.github.io/predora/`
2. **Login page** appears with green theme
3. **Navigation** works (all 9 modules)
4. **Direct URL access** works (e.g., `/predora/dashboard`)
5. **Page refresh** doesn't break (404.html handles it)

## 🆘 Common Issues

| Issue | Solution |
|-------|----------|
| 404 on page refresh | ✅ Already fixed with 404.html |
| Assets not loading | Check baseHref matches repo name |
| Workflow fails | Check Actions permissions |
| Blank page | Check browser console for errors |
| Wrong URL | Verify repository name = baseHref |

## 📝 Notes

- **First deployment** takes 2-3 minutes
- **Subsequent deployments** are faster (~1 minute)
- **Demo credentials** still work: `demo@predora.ai` / `demo`
- **All 9 modules** are included in the deployment

## 🎯 Quick Deploy Checklist

- [ ] Push code to GitHub
- [ ] Enable GitHub Pages (Settings → Pages → GitHub Actions)
- [ ] Wait for workflow to complete (~2-3 min)
- [ ] Visit `https://YOUR-USERNAME.github.io/predora/`
- [ ] Test login and navigation
- [ ] Share URL with clients! 🎉

---

**Need help?** Check the Actions tab in your repository to see deployment logs.
