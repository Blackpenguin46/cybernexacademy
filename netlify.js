module.exports = {
  onPreBuild: () => {
    console.log('Current directory:', process.cwd());
    console.log('Directory contents:', require('fs').readdirSync('.'));
  }
}; 