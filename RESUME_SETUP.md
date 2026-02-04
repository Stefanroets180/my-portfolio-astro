# Resume Download Setup Guide

This guide explains how to set up the resume download feature for your portfolio website.

## Overview

The resume download feature allows visitors to download your resume as a PDF file directly from your website. This is implemented as a simple file download from the public folder - no server-side functionality required.

## Setup Steps

### 1. Add Your Resume PDF

1. **Prepare your resume**:
   - Export your resume as a PDF file
   - Name it `resume.pdf`
   - Ensure the file size is reasonable (under 5MB for faster downloads)

2. **Add to the project**:
   - Place the `resume.pdf` file in the `public` folder:
   ```
   public/
   └── resume.pdf
   ```

3. **File naming**: The filename should be `resume.pdf` exactly, as the download components expect this path.

### 2. Verify the Setup

1. **Build and test locally**:
   ```bash
   pnpm run build
   pnpm run preview
   ```

2. **Test the download**:
   - Visit your local site
   - Click the "Get My Resume" button
   - Verify the PDF downloads correctly

### 3. Customize (Optional)

If you want to use a different filename or customize the download:

1. **Update the filename**: Edit the `href` and `download` attributes in:
   - `src/components/ResumeButton.tsx`
   - `src/components/ResumeModal.tsx`

2. **Example customization**:
   ```typescript
   link.href = "/my-custom-resume.pdf";
   link.download = "John_Doe_Resume_2024.pdf";
   ```

## How It Works

The resume download feature works through simple client-side JavaScript:

1. When a user clicks the download button
2. The browser creates a temporary download link
3. The link points to `/resume.pdf` in the public folder
4. The file downloads with the filename "Stefan_Roets_Resume.pdf"

## Deployment

Since this uses static file serving, it works with any hosting provider:

- **Vercel**: Files in `public/` are automatically served
- **Netlify**: Files in `public/` are automatically served  
- **GitHub Pages**: Files in `public/` are automatically served
- **Any static host**: Just upload the built `dist/` folder

## Security & Privacy

- No server-side processing required
- No user data is collected
- Resume is publicly accessible at `/resume.pdf`
- Consider the privacy implications of making your resume publicly accessible

## Troubleshooting

**Download not working?**
1. Ensure `resume.pdf` exists in the `public/` folder
2. Check browser console for errors
3. Verify the file isn't corrupted

**Wrong filename when downloading?**
- Update the `download` attribute in the components to your preferred filename

**File not found (404)?**
- Double-check the file is in `public/resume.pdf`
- Ensure you've rebuilt the project after adding the file

## Alternative Approaches

If you prefer not to make your resume publicly accessible:

1. **Password protection**: Use a hosting service that supports password-protected files
2. **Contact form**: Replace download with a contact form requesting the resume
3. **Email gate**: Require email before download (would need server-side functionality)

## File Structure

```
my-portfolio/
├── public/
│   └── resume.pdf          # Your resume file here
├── src/
│   └── components/
│       ├── ResumeButton.tsx    # Main download button
│       └── ResumeModal.tsx     # Modal with download
└── README.md
```

That's it! The resume download feature is now ready to use.