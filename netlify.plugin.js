module.exports = {
  onPreBuild: async ({ utils }) => {
    // Ensure required environment variables are set
    const requiredEnvVars = ['NEXT_PUBLIC_APP_URL']
    requiredEnvVars.forEach(env => {
      if (!process.env[env]) {
        utils.build.failBuild(`Missing required environment variable: ${env}`)
      }
    })
  },
  onBuild: async () => {
    // Additional build steps if needed
  }
} 