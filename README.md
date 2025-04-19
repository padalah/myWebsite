# Susmita Padala - Portfolio Website

A modern, responsive personal portfolio website showcasing technical projects with a focus on data science, machine learning, and artificial intelligence.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- Responsive design
- Font Awesome for icons
- Dynamic project filtering
- Dark/Light mode support

## Local Development

To run this project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at http://localhost:5000

## Deploying to GitHub Pages

This project is configured for easy deployment to GitHub Pages at https://padalah.github.io/myWebsite/

### Option 1: Using the deploy script

The simplest way to deploy is using the included deploy script:

```bash
# Make the script executable (if needed)
chmod +x deploy.sh

# Run the deployment script
./deploy.sh
```

This will:
1. Build the project with the correct base path
2. Create a GitHub Pages-ready version
3. Push to the gh-pages branch of your repository

### Option 2: Manual deployment

If you prefer to deploy manually:

1. Build the project with GitHub Pages configuration:
   ```bash
   npx vite build --config vite.gh-pages.config.js
   ```

2. Copy the built files to a deployment directory:
   ```bash
   mkdir -p gh-pages-deploy
   cp -r dist/* gh-pages-deploy/
   cp gh-pages-index.html gh-pages-deploy/index.html
   touch gh-pages-deploy/.nojekyll
   ```

3. Push to GitHub:
   ```bash
   cd gh-pages-deploy
   git init
   git add .
   git commit -m "Deploy to GitHub Pages"
   git remote add origin https://github.com/padalah/myWebsite.git
   git push -f origin master:gh-pages
   ```

## Project Structure

- `/client/src/components`: UI components
- `/client/src/pages`: Page components
- `/client/src/lib`: Utility functions and data
- `/attached_assets`: Images and other assets

## GitHub Authentication

For deployment, you might need to set up GitHub authentication. Consider using:

1. Personal Access Token
2. SSH Keys
3. GitHub CLI authentication

## Features

- Responsive design that works on mobile, tablet, and desktop
- Dark/light mode toggle with system preference detection
- Project filtering by category
- Detailed project pages
- Publications section
- Contact information