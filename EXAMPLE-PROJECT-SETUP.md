# Example Project Setup

This file shows you exactly how to replace the placeholder projects with your own real projects.

## Example: Replacing the E-Commerce Project

### Before (Placeholder):
```typescript
{
  title: "E-Commerce Platform",
  description: "Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard. Features include shopping cart, order tracking, and inventory management.",
  projectUrl: "https://your-ecommerce-app.vercel.app", // Replace with your live URL
  githubUrl: "https://github.com/yourusername/ecommerce-platform", // Optional GitHub link
  videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  previewImage: "/assets/projects/ecommerce-preview.jpg",
  technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
}
```

### After (Your Real Project):
```typescript
{
  title: "ShopMaster Pro",
  description: "A modern e-commerce platform I built for a local business. Features include real-time inventory, Stripe payments, admin dashboard, and mobile-responsive design. Increased their online sales by 300%.",
  projectUrl: "https://shopmaster-pro.vercel.app",
  githubUrl: "https://github.com/stefanroets/shopmaster-ecommerce",
  videoId: "Ke90Tje7VS0", // Your actual YouTube demo video
  previewImage: "/assets/projects/shopmaster-preview.jpg",
  technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Prisma"],
}
```

## Step-by-Step Process:

### 1. Deploy Your Project
First, make sure your project is deployed and accessible:

```bash
# Example deployment to Vercel
npx vercel --prod

# Or to Netlify
npm run build
netlify deploy --prod --dir=dist
```

### 2. Create a Demo Video (Optional)
- Record a 1-2 minute demo of your project
- Upload to YouTube
- Copy the video ID from the URL: `https://youtube.com/watch?v=VIDEO_ID_HERE`

### 3. Add a Preview Image
- Take a screenshot of your project
- Save it as `/public/assets/projects/your-project-preview.jpg`
- Optimize the image (recommended: 800x500px, under 100KB)

### 4. Update the Project Data
Replace the placeholder with your real information:

```typescript
// In src/data/projects.ts
export const projects: Project[] = [
  {
    title: "Your Real Project Name",
    description: "What does your project do? What problem does it solve? What makes it special?",
    projectUrl: "https://your-deployed-app.com", // This is where people click "View Live Project"
    githubUrl: "https://github.com/yourusername/your-repo", // Optional - remove if private
    videoId: "your-youtube-video-id", // Optional - use placeholder if no video
    previewImage: "/assets/projects/your-preview-image.jpg",
    technologies: ["List", "of", "technologies", "you", "used"],
  },
  // ... other projects
];
```

## Real-World Examples:

### Personal Blog
```typescript
{
  title: "My Developer Blog",
  description: "Personal blog where I share web development tutorials, project breakdowns, and tech insights. Built with Next.js and MDX for optimal performance and SEO.",
  projectUrl: "https://stefanroets.dev",
  githubUrl: "https://github.com/stefanroets/dev-blog",
  videoId: "dQw4w9WgXcQ", // Replace or use placeholder
  previewImage: "/assets/projects/blog-preview.jpg",
  technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
}
```

### SaaS Application
```typescript
{
  title: "TaskFlow - Project Management SaaS",
  description: "A collaborative project management tool I built for freelancers and small teams. Features real-time collaboration, time tracking, and client invoicing.",
  projectUrl: "https://taskflow-saas.com",
  githubUrl: "https://github.com/stefanroets/taskflow", // Remove if private/proprietary
  videoId: "Ke90Tje7VS0",
  previewImage: "/assets/projects/taskflow-preview.jpg",
  technologies: ["React", "Node.js", "Socket.io", "Stripe", "PostgreSQL"],
}
```

### Open Source Tool
```typescript
{
  title: "React Component Library",
  description: "An open-source component library I created and maintain. Used by 500+ developers with 1000+ GitHub stars. Focuses on accessibility and customization.",
  projectUrl: "https://my-components.dev", // Documentation site
  githubUrl: "https://github.com/stefanroets/react-components",
  videoId: "component-demo-video-id",
  previewImage: "/assets/projects/components-preview.jpg",
  technologies: ["React", "TypeScript", "Storybook", "Rollup"],
}
```

### Mobile App
```typescript
{
  title: "FitTracker Mobile App",
  description: "Cross-platform fitness tracking app built with React Native. Features workout logging, progress charts, and social challenges. Available on both iOS and Android.",
  projectUrl: "https://apps.apple.com/app/fittracker/id123456789", // App Store link
  githubUrl: "https://github.com/stefanroets/fittracker-mobile",
  videoId: "mobile-app-demo-id",
  previewImage: "/assets/projects/fittracker-preview.jpg",
  technologies: ["React Native", "Expo", "Firebase", "Redux"],
}
```

## Quick Tips:

### For Different Project Types:

**Web Apps:**
- Use your deployment URL (Vercel, Netlify, etc.)
- Include GitHub link if it's public

**Mobile Apps:**
- Link to App Store/Google Play if published
- Link to Expo demo if in development
- Consider linking to a landing page

**APIs/Backend:**
- Link to API documentation
- Link to a frontend that uses the API
- Link to Postman collection or OpenAPI docs

**Static Sites:**
- Link to the live site
- Perfect for GitHub Pages

**Private/Client Work:**
- Use a demo version if possible
- Link to a case study page
- Remove GitHub link for proprietary code

### Testing Your Setup:

1. **Check all links work** - Click each "View Live Project" and "View Code" button
2. **Test on mobile** - Make sure your projects are mobile-friendly
3. **Verify images load** - Check that preview images display correctly
4. **Test video embeds** - Ensure YouTube videos play properly

### Common Mistakes to Avoid:

❌ Using localhost URLs (won't work for visitors)
❌ Linking to development/staging instead of production
❌ Using HTTP instead of HTTPS
❌ Forgetting to update preview images
❌ Including broken or private GitHub links

✅ Use live, publicly accessible URLs
✅ Test all links before publishing
✅ Use HTTPS when available
✅ Update images to match your actual projects
✅ Only include GitHub links for public repos

Remember: Your portfolio is often the first impression potential employers or clients get of your work. Make sure your projects are polished, working, and represent your best efforts!