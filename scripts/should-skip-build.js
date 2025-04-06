// Check if required environment variables are present
const requiredEnvVars = [
  'SUPABASE_URL',
  'SUPABASE_SERVICE_KEY'
];

const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.warn('Warning: Missing environment variables:', missingVars.join(', '));
  // Don't fail the build, just warn
}

// Exit with 0 to continue the build
process.exit(0); 