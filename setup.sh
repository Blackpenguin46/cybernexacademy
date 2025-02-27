#!/bin/bash

# Remove existing node_modules and lock files
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

# Install dependencies
npm install

# Verify stripe installation
npm list stripe 