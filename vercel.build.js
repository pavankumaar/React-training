// This file is used by Vercel to build the project
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create .env file if it doesn't exist
if (!fs.existsSync('.env')) {
  console.log('Creating .env file...');
  fs.writeFileSync('.env', 'REACT_APP_API_URL=/api\nCI=false\nNODE_ENV=production\nVERCEL=1\nPUBLIC_URL=\n');
}

// Run the build command
console.log('Building the React app...');
try {
  execSync('CI=false npm run build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
  
  // Ensure the image is properly copied to the build directory
  console.log('Ensuring static assets are properly copied...');
  if (fs.existsSync('public/image.jpg') && !fs.existsSync('build/image.jpg')) {
    fs.copyFileSync('public/image.jpg', 'build/image.jpg');
    console.log('Copied image.jpg to build directory');
  }
  
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}