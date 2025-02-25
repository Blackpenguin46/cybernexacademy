#!/bin/bash
echo "Current directory:"
pwd
echo "Directory contents:"
ls -la
echo "Installing dependencies..."
npm install
echo "Building..."
npm run build 