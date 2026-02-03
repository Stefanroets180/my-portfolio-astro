# My Projects Page Documentation

## Overview

The "My Projects" page is a showcase of your portfolio projects, featuring interactive blocks with live demos and YouTube video demonstrations. Each project block contains:

- **Project Preview**: Clickable thumbnail that redirects to the live project
- **Demo Video**: Embedded YouTube video showing how the project works
- **Technology Stack**: Interactive pills showing languages and technologies used
- **Action Buttons**: Links to live site and source code

## File Structure

```
src/
├── pages/
│   └── my-projects.astro          # Main projects page
├── components/
│   ├── ProjectCard.astro          # Individual project block component
│   └── Pill.astro                 # Technology badge component
└── data/
    └── projects.ts                # Project data configuration
```

## Adding New Projects

To add a new project, edit `src/data/projects.ts` and add a new project object:

```typescript
{
  title: "Your Project Name",
  description: "Detailed description of your project, its features, and purpose.",
  projectUrl: "https://your-live-site.com",
  githubUrl: "https://github.com/username/repo-name", // Optional
  videoId: "YouTubeVideoID", // Just the ID, not full URL
  previewImage: "/assets/projects/your-image.jpg",
  technologies: ["React", "TypeScript", "Node.js", "MongoDB"]
}
```

## Project Images

Store project preview images in `public/assets/projects/`. Recommended specifications:
- **Format**: PNG or JPG
- **Aspect Ratio**: 16:10 (recommended)
- **Resolution**: 1200x750px minimum
- **File Size**: Keep under 500KB for optimal loading

## YouTube Video Setup

1. Upload your project demo to YouTube
2. Copy the video ID from the URL
   - Example: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - Video ID: `dQw4w9WgXcQ`
3. Add the video ID to your project configuration

## Technology Pills

The technology stack is displayed as interactive pills. Supported technologies with special styling:

- **JavaScript/TypeScript**: Yellow accent
- **React/Next.js**: Blue accent  
- **Python**: Blue accent
- **Node.js**: Green accent
- **Default**: Uses theme accent color

## Customization

### Project Card Layout

Edit `src/components/ProjectCard.astro` to modify:
- Card styling and hover effects
- Button appearance and behavior
- Technology pill layout
- Responsive breakpoints

### Page Header

Edit `src/pages/my-projects.astro` to customize:
- Hero section content
- Statistics display
- Page description
- Overall layout

### Color Scheme

Technology-specific colors can be customized in `src/components/Pill.astro`:

```css
.pill:has-text("YourTech") {
    border-color: #your-color;
    background: linear-gradient(
        135deg,
        rgba(your-rgb-values, 0.15) 0%,
        rgba(your-rgb-values, 0.05) 100%
    );
}
```

## Responsive Design

The projects page is fully responsive with breakpoints at:
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px-1199px (stacked content)
- **Mobile**: <768px (single column)

## Performance Optimization

- Project images are lazy-loaded
- YouTube videos use `loading="lazy"`
- CSS animations are optimized with `transform` and `opacity`
- Hover effects use hardware acceleration

## SEO Considerations

- Each project includes proper alt tags for images
- YouTube embeds include descriptive titles
- Structured data can be added to project cards for better search visibility

## Analytics Integration

Track project engagement by adding analytics to:
- Project URL clicks
- GitHub repository visits  
- YouTube video plays
- Technology pill interactions

## Content Guidelines

### Project Descriptions
- Keep descriptions between 100-200 words
- Focus on key features and technologies
- Mention target audience or use cases
- Include any notable achievements or metrics

### Video Recommendations
- Keep demos under 3 minutes
- Show key features and user interactions
- Include clear audio narration
- Start with an engaging hook in first 10 seconds

### Technology Selection
- List technologies in order of importance
- Include both frontend and backend technologies
- Mention deployment platforms
- Keep the list focused (5-8 technologies max)

## Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths and ensure images exist in `public/assets/projects/`
2. **YouTube videos not displaying**: Verify video ID and ensure video is public
3. **Broken links**: Test all project URLs and GitHub repositories
4. **Responsive issues**: Test on various screen sizes and adjust CSS breakpoints

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Future Enhancements

Consider adding:
- Project filtering by technology
- Search functionality
- Project categories/tags
- Animation on scroll
- Project comparison feature
- User favorites/bookmarking