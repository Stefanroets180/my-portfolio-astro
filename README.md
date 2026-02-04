# Stefan Roets - Portfolio Website

A modern, responsive portfolio website built with Astro, React, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Astro for optimal loading speeds
- **Interactive Components**: React components for enhanced user experience
- **Resume Download**: Direct PDF download functionality
- **Project Showcase**: Detailed project gallery with videos and descriptions
- **Contact Information**: Easy ways to get in touch

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **UI Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **TypeScript**: Full TypeScript support
- **Package Manager**: pnpm

## 📦 Installation

1. Clone the repository:
```sh
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```sh
pnpm install
```

3. Start the development server:
```sh
pnpm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm run dev`            | Starts local dev server at `localhost:4321`     |
| `pnpm run build`          | Build your production site to `./dist/`         |
| `pnpm run preview`        | Preview your build locally, before deploying    |
| `pnpm run astro ...`      | Run CLI commands like `astro add`, `astro check`|
| `pnpm run astro -- --help`| Get help using the Astro CLI                    |

## 📄 Setup Instructions

### Resume Download Feature

To enable the resume download functionality:

1. Add your resume PDF file to the `public` folder:
```
public/resume.pdf
```

2. The resume will be downloadable via the "Get My Resume" button on the site.

### Customization

1. **Personal Information**: Update your details in the components and pages
2. **Projects**: Modify `src/data/projects.ts` to showcase your projects
3. **Styling**: Customize colors and styling in the Tailwind configuration
4. **Content**: Update the content in the various page components

## 🚀 Deployment

This site can be deployed to any static hosting service:

### Vercel
```sh
npm i -g vercel
vercel --prod
```

### Netlify
```sh
npm run build
# Upload the 'dist' folder to Netlify
```

### GitHub Pages
1. Build the project: `pnpm run build`
2. Deploy the `dist` folder to GitHub Pages

## 📁 Project Structure

```
/
├── public/
│   ├── assets/           # Static assets (images, icons)
│   ├── favicon.svg       # Site favicon
│   └── resume.pdf        # Your resume (add this file)
├── src/
│   ├── components/       # React components
│   ├── data/            # Data files (projects, etc.)
│   ├── layouts/         # Astro layouts
│   ├── pages/           # Astro pages
│   └── styles/          # Global styles
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Customization Tips

- Colors can be customized in `tailwind.config.mjs`
- Add your own projects to `src/data/projects.ts`
- Update contact information in the relevant components
- Replace placeholder images with your own in `public/assets/`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

Feel free to reach out if you have any questions or suggestions!

- **Email**: [Your email]
- **LinkedIn**: [Your LinkedIn profile]
- **GitHub**: [Your GitHub profile]