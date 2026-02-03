# Netlify Deployment Guide

This guide will help you deploy your Astro portfolio to Netlify with AWS S3 resume functionality.

## Overview

This project has been converted from Deno Deploy to Netlify. The main changes include:
- Removed `@astrojs/deno` adapter
- Added `@astrojs/netlify` adapter (for hybrid mode if needed)
- Converted API routes to Netlify Functions
- Added proper redirects and configuration

## Quick Deployment Steps

### 1. Repository Setup
1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Make sure all Deno-related files have been removed

### 2. Netlify Site Creation
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect your Git provider and select your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18.18.0

### 3. Environment Variables
In your Netlify site dashboard, go to **Site settings** → **Environment variables** and add:

```
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
S3_BUCKET_NAME=your-resume-bucket-name
S3_RESUME_KEY=resume.pdf
```

### 4. Deploy
1. Click "Deploy site" 
2. Netlify will automatically build and deploy your site
3. Future commits to your main branch will trigger automatic deployments

## File Structure Changes

### Added Files:
- `netlify.toml` - Netlify configuration
- `netlify/functions/download-resume.ts` - Resume download function
- `public/_redirects` - URL routing for functions
- `.nvmrc` - Node version specification

### Removed Files:
- `deno.json` - Deno configuration (no longer needed)
- `src/pages/api/download-resume.ts` - Moved to Netlify function

### Modified Files:
- `package.json` - Updated dependencies (removed Deno, added Netlify)
- `astro.config.mjs` - Updated for static/hybrid mode
- `src/pages/about.astro` - Removed server rendering directive

## Configuration Files

### netlify.toml
```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18.18.0"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[functions]
  directory = "netlify/functions"
  node_bundler = "esbuild"
```

### _redirects
```
/api/download-resume /.netlify/functions/download-resume 200
```

## AWS S3 Setup

Ensure your S3 bucket is configured with:
1. A PDF file named `resume.pdf` (or update `S3_RESUME_KEY`)
2. Proper IAM permissions for the access keys
3. The bucket should be in the region specified in `AWS_REGION`

Required IAM policy:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": "arn:aws:s3:::your-resume-bucket-name/*"
        }
    ]
}
```

## Local Development

For local development with Netlify functions:

### Option 1: Using Netlify CLI (Recommended)
```bash
npm install -g netlify-cli
netlify dev
```

### Option 2: Standard Astro Dev Server
```bash
npm run dev
```
Note: API functions won't work in standard dev mode.

## Testing the Deployment

1. **Static Pages**: All pages should load normally
2. **Resume Button**: On the About page, clicking "Get My Resume" should download the PDF from S3
3. **Function Logs**: Check Netlify dashboard → Functions → download-resume → View logs for any errors

## Troubleshooting

### Build Failures
- Check Node version is compatible (18.18.0 recommended)
- Verify all dependencies are correctly installed
- Check build logs in Netlify dashboard

### Function Errors
- Verify environment variables are set correctly
- Check AWS credentials and S3 bucket permissions
- Review function logs in Netlify dashboard

### Resume Download Issues
- Confirm S3 bucket name and region are correct
- Verify the PDF file exists at the specified key
- Check AWS IAM permissions

## Performance Considerations

- Static assets are automatically optimized by Netlify
- CDN distribution is included in Netlify's free tier
- Function cold starts may cause slight delay on first resume download

## Security Notes

- Environment variables are encrypted in Netlify
- AWS credentials should use minimal IAM permissions
- Consider rotating AWS access keys regularly
- Never commit `.env` files to version control

## Cost Breakdown

**Free Tier Limits:**
- Netlify: 100GB bandwidth, 125K function invocations/month
- AWS S3: Minimal cost for single PDF storage and retrieval
- Total monthly cost should be under $1 for typical portfolio usage

## Support

- [Netlify Documentation](https://docs.netlify.com/)
- [Astro Documentation](https://docs.astro.build/)
- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)