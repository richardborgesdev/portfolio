# Richard Borges Portfolio

A minimal Docusaurus-based portfolio website deployed on GitHub Pages.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or above
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Your site will be available at `http://localhost:3000/portfolio/`

### Build for Production

```bash
# Build static files
npm run build

# Test production build locally
npm run serve
```

## 📦 Deployment to GitHub Pages

This site is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to Pages section
   - Set source to "GitHub Actions"

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy Docusaurus portfolio"
   git push origin main
   ```

3. **Automatic Deployment**:
   - The GitHub Action will automatically build and deploy your site
   - Your site will be available at: `https://richardborgesdev.github.io/portfolio/`

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build and deploy to gh-pages branch
npm run deploy
```

## 🛠 Configuration

Key configuration files:

- `docusaurus.config.ts` - Main configuration
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `docs/` - Documentation pages
- `blog/` - Blog posts
- `src/pages/` - Custom pages

### GitHub Pages Configuration

The site is configured with:
- **URL**: `https://richardborgesdev.github.io`
- **Base URL**: `/portfolio/`
- **Organization**: `richardborgesdev`
- **Project**: `portfolio`

## 📝 Customization

### Adding Content

1. **Documentation**: Add `.md` files to the `docs/` folder
2. **Blog Posts**: Add `.md` files to the `blog/` folder
3. **Pages**: Add React components to `src/pages/`

### Styling

- Edit `src/css/custom.css` for global styles
- Component-specific styles in their respective modules

## 📚 Learn More

- [Docusaurus Documentation](https://docusaurus.io/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 🤝 Contributing

Feel free to submit issues and pull requests!

## 📄 License

This project is open source and available under the MIT License.
