# Project URLs Setup Guide

This guide explains how to add live project URLs to your portfolio and manage project links effectively.

## Overview

Your portfolio supports two types of project links:
- **Live Project URL**: The main link to your deployed application
- **GitHub URL**: Optional link to the source code repository

## Quick Setup

1. **Edit your project data** in `src/data/projects.ts`
2. **Replace placeholder URLs** with your actual project URLs
3. **Add optional GitHub links** for source code access

## Project Data Structure

Each project in `src/data/projects.ts` has the following structure:

```typescript
{
  title: "Your Project Name",
  description: "Project description...",
  projectUrl: "https://your-live-app.com", // Main project URL
  githubUrl: "https://github.com/username/repo", // Optional GitHub link
  videoId: "youtube-video-id",
  previewImage: "/assets/projects/preview.jpg",
  technologies: ["React", "Node.js", "etc"]
}
```

## URL Types and Examples

### Live Project URLs

Replace the placeholder URLs with your actual deployed applications:

| Deployment Platform | Example URL Format |
|---------------------|-------------------|
| **Vercel** | `https://your-app.vercel.app` |
| **Netlify** | `https://your-app.netlify.app` |
| **GitHub Pages** | `https://username.github.io/repo-name` |
| **Heroku** | `https://your-app.herokuapp.com` |
| **Railway** | `https://your-app.railway.app` |
| **Render** | `https://your-app.onrender.com` |
| **Firebase** | `https://your-app.web.app` |
| **Expo** | `https://expo.dev/@username/app-name` |
| **Custom Domain** | `https://yourdomains.com` |

### Mobile Apps

For mobile applications:
- **App Store**: `https://apps.apple.com/app/your-app/id123456789`
- **Google Play**: `https://play.google.com/store/apps/details?id=com.yourapp`
- **Expo Snack**: `https://snack.expo.dev/@username/project-name`

## Step-by-Step Setup

### 1. Update Project URLs

Edit `src/data/projects.ts` and replace the placeholder URLs:

```typescript
// Before
projectUrl: "https://github.com/yourusername/ecommerce-platform",

// After
projectUrl: "https://my-ecommerce-app.vercel.app",
githubUrl: "https://github.com/yourusername/ecommerce-platform",
```

### 2. Test Your Links

Make sure all URLs are:
- ✅ Working and accessible
- ✅ Using HTTPS when possible
- ✅ Opening correctly in new tabs

### 3. Optional: Remove GitHub Links

If you don't want to show GitHub links for a project, simply omit the `githubUrl` field:

```typescript
{
  title: "Private Project",
  projectUrl: "https://my-app.com",
  // githubUrl not included - no GitHub button will show
}
```

## UI Components

### Project Card Features

Each project card displays:
- **Project Preview Image** - Clickable, opens live project
- **"View Live Project" Button** - Main call-to-action
- **"View Code" Button** - Shows only if `githubUrl` is provided
- **Video Demo** - YouTube embed
- **Technology Tags** - Skills showcase

### Button Behavior

- **Live Project**: Opens in new tab with `target="_blank"`
- **GitHub Code**: Opens in new tab with security attributes
- **All links**: Include `rel="noopener noreferrer"` for security

## Deployment Checklist

Before updating your portfolio:

- [ ] All project URLs are working
- [ ] Projects load quickly (good user experience)
- [ ] Mobile-responsive projects work on phones/tablets
- [ ] HTTPS is enabled where possible
- [ ] No broken links or 404 errors
- [ ] Preview images match the actual projects

## Common Hosting Platforms

### Free Hosting Options
- **Vercel**: Perfect for Next.js, React, static sites
- **Netlify**: Great for static sites, JAMstack apps
- **GitHub Pages**: Ideal for static sites and documentation
- **Render**: Good for full-stack applications
- **Railway**: Easy deployment for various frameworks

### Paid Options
- **Heroku**: Full-stack apps (has free tier limits)
- **DigitalOcean App Platform**: Scalable applications
- **AWS Amplify**: Amazon's hosting solution
- **Google Cloud Run**: Container-based hosting

## Pro Tips

### 1. Use Custom Domains
Instead of: `my-app.vercel.app`
Use: `myawesomeapp.com`

### 2. Add Analytics
Track project visits with:
- Google Analytics
- Vercel Analytics
- Netlify Analytics

### 3. Performance Optimization
- Compress images
- Enable CDN
- Use lazy loading
- Optimize for Core Web Vitals

### 4. SEO Optimization
- Add meta tags
- Include Open Graph images
- Use descriptive URLs
- Add structured data

## Troubleshooting

### Common Issues

**Links not working?**
- Check for typos in URLs
- Verify the project is deployed and running
- Test in incognito mode

**GitHub button not showing?**
- Make sure `githubUrl` field is included
- Check for syntax errors in `projects.ts`

**Styling issues?**
- Clear browser cache
- Check for CSS conflicts
- Test on different devices

### Testing Your Portfolio

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Security Considerations

- Always use `rel="noopener noreferrer"` for external links
- Use HTTPS for all project URLs when possible
- Don't expose sensitive API keys in client-side code
- Consider adding Content Security Policy headers

## Next Steps

1. **Update your projects** with real URLs
2. **Add project screenshots** to `/public/assets/projects/`
3. **Create demo videos** and upload to YouTube
4. **Test everything** before deploying
5. **Share your portfolio** with the world!

---

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify all file paths are correct
3. Test with simple URLs first
4. Check that your hosting platform is working

Your portfolio is now ready to showcase your live projects! 🚀