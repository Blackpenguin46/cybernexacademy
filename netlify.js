module.exports = {
  onPreBuild: () => {
    console.log('Using Node.js for build process');
    console.log('Node version:', process.version);
    console.log('NPM version:', process.env.npm_version);
  }
}; 