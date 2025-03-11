# Deployment Process

This document outlines the deployment process for the Cybernex Academy website. We use Vercel for hosting and employ a structured approach to ensure quality and reliability.

## Environments

The project uses three environments:

1. **Development** - Local development environment
2. **Preview** - Automated preview deployments for testing changes before production
3. **Production** - Live site visible to users

## Deployment Workflow

### Development to Preview

1. All work should be done in feature branches (`feature/feature-name` or `fix/bug-name`)
2. When ready for testing, push to the `develop` branch or open a Pull Request
3. GitHub Actions automatically creates a preview deployment on Vercel
4. The preview URL will be provided in the PR comments or can be found in the GitHub Actions logs

### Preview to Production

We use a manual promotion process to ensure only verified changes are pushed to production:

1. Test the preview deployment thoroughly
2. When ready to deploy to production, use one of these methods:

#### Option 1: GitHub Actions Manual Promotion

1. Go to the GitHub repository
2. Navigate to "Actions" > "Promote to Production" workflow
3. Click "Run workflow"
4. Enter the preview URL you want to promote and optional version/notes
5. Click "Run workflow" to start the promotion process

#### Option 2: GitHub Actions Production Deployment

1. Go to the GitHub repository
2. Navigate to "Actions" > "Production Deployment" workflow
3. Click "Run workflow"
4. Enter optional version/notes
5. Click "Run workflow" to start a new production deployment

## Vercel Configuration

Our Vercel setup is configured to:

1. Automatically create preview deployments for all branches except `main`
2. Disable automatic production deployments
3. Require manual promotion to production

## GitHub Actions Workflows

The project includes three GitHub Actions workflows:

1. **Preview Deployment** (`.github/workflows/preview.yml`)
   - Triggered by pushes to non-production branches and PRs
   - Creates preview deployments

2. **Production Deployment** (`.github/workflows/production.yml`)
   - Can be triggered manually or by pushes to `main` (if enabled)
   - Creates a new production deployment

3. **Promote to Production** (`.github/workflows/promote-to-production.yml`)
   - Triggered manually
   - Promotes an existing preview deployment to production

## Required Secrets

For the workflows to function, the following secrets must be set in the GitHub repository:

- `VERCEL_TOKEN` - Your Vercel API token
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

## Setting Up Vercel Project Information

To find your Vercel project information:

1. Install Vercel CLI: `npm install -g vercel`
2. Login to Vercel: `vercel login`
3. Link your project: `vercel link`
4. Check the `.vercel/project.json` file for `orgId` and `projectId`

## Rollbacks

If issues are discovered in production:

1. Identify the last known good deployment
2. Use the "Promote to Production" workflow to promote that deployment to production
3. Alternatively, use the Vercel dashboard to rollback to a previous deployment 