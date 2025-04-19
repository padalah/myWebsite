#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🏗️ Building website for GitHub Pages deployment..."

# Build the project using the GitHub Pages-specific config
npx vite build --config vite.config.gh-pages.js

# Create a temporary directory for GitHub Pages deployment
mkdir -p gh-pages-deploy

echo "📂 Setting up directory structure for GitHub Pages..."

# Copy the built files directly to our deployment directory
if [ -d "dist/public" ]; then
  # If built files are in dist/public, copy from there
  cp -r dist/public/* gh-pages-deploy/
elif [ -d "dist" ]; then
  # Otherwise copy everything from dist
  cp -r dist/* gh-pages-deploy/
fi

# Create the .nojekyll file (prevents GitHub from processing with Jekyll)
touch gh-pages-deploy/.nojekyll

# Copy our custom index.html for GitHub Pages
echo "Setting up custom index.html for GitHub Pages..."
cp gh-pages-index.html gh-pages-deploy/index.html

echo "🔄 Setting up git for deployment..."

# Move to the deployment directory
cd gh-pages-deploy

# Initialize git
git init

# Configure git (optional - uncomment if needed)
# git config user.name "GitHub Actions"
# git config user.email "actions@github.com"

# Add all files
git add .

# Commit changes
git commit -m "Deploy to GitHub Pages"

echo "🚀 Pushing to GitHub Pages branch..."

# Add GitHub remote and push
git remote add origin https://github.com/padalah/myWebsite.git

# Force push to the gh-pages branch
git push -f origin master:gh-pages

# Clean up
cd ..
rm -rf gh-pages-deploy

echo "✅ Deployed successfully to GitHub Pages at https://padalah.github.io/myWebsite/"