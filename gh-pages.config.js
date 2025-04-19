// This is a simplified configuration file for GitHub Pages deployment
const fs = require('fs');
const path = require('path');

// Function to copy directory recursively
function copyDir(src, dest) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read source directory
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    // Copy directories recursively
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      // Copy files
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Define paths
const distPath = path.resolve(__dirname, 'dist');
const publicPath = path.resolve(distPath, 'public');
const ghPagesPath = path.resolve(__dirname, 'gh-pages-dist');

// Create GitHub Pages output directory
if (fs.existsSync(ghPagesPath)) {
  fs.rmSync(ghPagesPath, { recursive: true, force: true });
}
fs.mkdirSync(ghPagesPath, { recursive: true });

// Copy built files to GitHub Pages directory
if (fs.existsSync(publicPath)) {
  copyDir(publicPath, ghPagesPath);
}

// Create .nojekyll file to disable Jekyll processing
fs.writeFileSync(path.join(ghPagesPath, '.nojekyll'), '');

// Create a redirect index.html if not in the right structure
const indexPath = path.join(ghPagesPath, 'index.html');
if (!fs.existsSync(indexPath)) {
  const indexContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Susmita Padala | Portfolio</title>
  <meta http-equiv="refresh" content="0;url=./index.html">
</head>
<body>
  <p>Redirecting to portfolio...</p>
  <script>
    window.location.href = "./index.html";
  </script>
</body>
</html>
  `;
  
  fs.writeFileSync(indexPath, indexContent);
}

console.log('GitHub Pages files prepared successfully!');