# Resume Feature Setup Guide

This guide will help you set up the resume download feature for your portfolio website deployed on Netlify.

## Prerequisites

1. **AWS S3 Bucket**: You need an S3 bucket to store your resume PDF
2. **Netlify Account**: Sign up for a free Netlify account for deployment
3. **Environment Variables**: Configure the required environment variables in Netlify

## Environment Variables

For local development, create a `.env` file in your project root with the following variables:

```env
# AWS S3 Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
S3_BUCKET_NAME=your-resume-bucket-name
S3_RESUME_KEY=resume.pdf
```

**Important**: For production, you'll configure these as environment variables in the Netlify dashboard (see deployment section below).

## Setup Steps

### 1. AWS S3 Setup

1. **Create an S3 Bucket**:
   - Go to AWS S3 Console
   - Keep default settings for security

2. **Upload Your Resume**:
   - Upload your resume PDF to the bucket
   - Name it `resume.pdf` or update the `S3_RESUME_KEY` variable

3. **Create IAM User**:
   - Go to AWS IAM Console
   - Create a new user for programmatic access
   - Attach the following policy:

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

4. **Get Access Keys**:
   - Generate access keys for the IAM user
   - Add them to your environment variables
   

### 2. Netlify Deployment Setup

1. **Connect Repository**:
   - Go to [netlify.com](https://netlify.com) and log in
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository (GitHub, GitLab, or Bitbucket)
   - Select your portfolio repository

2. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 or higher

3. **Set Environment Variables**:
   - In your Netlify site dashboard, go to Site settings → Environment variables
   - Add the following variables:
     - `AWS_REGION`: us-east-1
     - `AWS_ACCESS_KEY_ID`: your_aws_access_key_id
     - `AWS_SECRET_ACCESS_KEY`: your_aws_secret_access_key
     - `S3_BUCKET_NAME`: your-resume-bucket-name
     - `S3_RESUME_KEY`: resume.pdf

### 3. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 4. Deploy to Netlify

1. **Deploy**:
   - After connecting your repository and setting environment variables, Netlify will automatically deploy your site
   - Future commits to your main branch will trigger automatic deployments

2. **Verify Function Deployment**:
   - Check that the Netlify function was deployed successfully in the Functions tab of your site dashboard
   - The `download-resume` function should be listed there

## Testing

1. **Local Testing**:
   - Make sure your `.env` file is properly configured
   - Run `npm run dev` to start the development server
   - Navigate to the About page and test the resume button
   - Note: In local development, API calls will fail unless you're running the Netlify CLI

2. **Local Testing with Netlify CLI** (Recommended):
   - Install Netlify CLI: `npm install -g netlify-cli`
   - Run: `netlify dev`
   - This will run your site with Netlify functions locally

3. **Production Testing**:
   - Test the feature after deploying to Netlify
   - Click the resume button on your About page
   - Verify the PDF downloads correctly

## Security Notes

- Never commit your `.env` file to version control
- Use IAM policies with minimal required permissions
- Keep your API keys secure and rotate them regularly
- Netlify environment variables are encrypted and secure
- Consider using AWS Secrets Manager for additional security

## Troubleshooting

### Common Issues

1. **"Failed to retrieve resume from S3"**:
   - Check your AWS credentials
   - Verify the bucket name and file key
   - Ensure the IAM user has GetObject permission

2. **"Function not found" or 404 errors**:
   - Check that the Netlify function deployed correctly
   - Verify the `_redirects` file is configured properly
   - Ensure the function file is in the correct location: `netlify/functions/download-resume.ts`

3. **"Network error"**:
   - Check if all environment variables are set in Netlify dashboard
   - Verify the API endpoint is accessible
   - Check Netlify function logs for errors

### Logs

Check the Netlify function logs in your site dashboard under Functions → [function-name] → View logs for detailed error messages.

## Cost Considerations

- **AWS S3**: Very minimal cost for storing and retrieving a single PDF file
- **Netlify**: Free tier includes 125K function invocations per month, which should be more than sufficient for portfolio usage

## Future Enhancements

Consider adding:
- Rate limiting to prevent spam (using Netlify Edge Functions)
- Analytics tracking for resume requests
- Different resume versions (e.g., technical vs general)
- Caching for better performance
- Email notification when resume is downloaded (using a service like Resend)
