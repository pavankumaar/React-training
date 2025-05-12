#!/bin/bash

# Build script for Vercel deployment

# Copy environment variables if .env.vercel exists
if [ -f .env.vercel ]; then
  cp .env.vercel .env
  echo "Copied .env.vercel to .env"
fi

# Install dependencies with legacy peer deps
npm install --legacy-peer-deps

# Build the React app with CI=false to ignore warnings
CI=false npm run build

# Log completion
echo "Build completed successfully!"