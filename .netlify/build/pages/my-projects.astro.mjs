/* empty css                                 */
import { e as createComponent, m as maybeRenderHead, g as addAttribute, k as renderComponent, r as renderTemplate, h as createAstro } from '../chunks/astro/server_kJpNU5V_.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B-L9K7ML.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_DjhuZmuO.mjs';
import { $ as $$Pill } from '../chunks/Pill_DHbKwMbb.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    title,
    description,
    projectUrl,
    githubUrl,
    videoId,
    previewImage,
    technologies
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="project-card" data-astro-cid-mspuyifq> <div class="project-header" data-astro-cid-mspuyifq> <h2 class="project-title" data-astro-cid-mspuyifq>${title}</h2> <p class="project-description" data-astro-cid-mspuyifq>${description}</p> </div> <div class="project-content" data-astro-cid-mspuyifq> <!-- Project Preview --> <div class="project-preview" data-astro-cid-mspuyifq> <a${addAttribute(projectUrl, "href")} target="_blank" rel="noopener noreferrer" class="preview-link"${addAttribute(`View ${title} live`, "title")} data-astro-cid-mspuyifq> <div class="preview-container" data-astro-cid-mspuyifq> <img${addAttribute(previewImage, "src")}${addAttribute(`${title} preview`, "alt")} class="preview-image" onerror="this.src='/assets/placeholder-project.jpg'" data-astro-cid-mspuyifq> <div class="preview-overlay" data-astro-cid-mspuyifq> <div class="preview-content" data-astro-cid-mspuyifq> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "globe-outline", "class": "preview-icon", "data-astro-cid-mspuyifq": true })} <span class="preview-text" data-astro-cid-mspuyifq>View Live Project</span> <div class="preview-arrow" data-astro-cid-mspuyifq> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "arrow-forward-outline", "data-astro-cid-mspuyifq": true })} </div> </div> </div> </div> <div class="preview-label" data-astro-cid-mspuyifq> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "link-outline", "data-astro-cid-mspuyifq": true })} <span data-astro-cid-mspuyifq>Live Demo</span> </div> </a> </div> <!-- Video Demo --> <div class="video-demo" data-astro-cid-mspuyifq> <div class="video-container" data-astro-cid-mspuyifq> <iframe${addAttribute(`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`, "src")}${addAttribute(`${title} Demo Video`, "title")} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="demo-video" loading="lazy" data-astro-cid-mspuyifq>
                </iframe> </div> <div class="video-label" data-astro-cid-mspuyifq> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "play-circle-outline", "data-astro-cid-mspuyifq": true })} <span data-astro-cid-mspuyifq>Demo Video</span> </div> </div> </div> <!-- Project Links --> <div class="project-actions" data-astro-cid-mspuyifq> ${githubUrl && renderTemplate`<a${addAttribute(githubUrl, "href")} target="_blank" rel="noopener noreferrer" class="action-btn github-btn" data-astro-cid-mspuyifq> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "logo-github", "data-astro-cid-mspuyifq": true })} <span data-astro-cid-mspuyifq>Source Code</span> </a>`} <a${addAttribute(projectUrl, "href")} target="_blank" rel="noopener noreferrer" class="action-btn live-btn" data-astro-cid-mspuyifq> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "open-outline", "data-astro-cid-mspuyifq": true })} <span data-astro-cid-mspuyifq>Live Site</span> </a> </div> <!-- Technology Stack --> <div class="tech-stack" data-astro-cid-mspuyifq> <h3 class="tech-title" data-astro-cid-mspuyifq> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "code-working-outline", "data-astro-cid-mspuyifq": true })}
Built With:
</h3> <div class="tech-pills" data-astro-cid-mspuyifq> ${technologies.map((tech) => renderTemplate`${renderComponent($$result, "Pill", $$Pill, { "data-astro-cid-mspuyifq": true }, { "default": ($$result2) => renderTemplate`${tech}` })}`)} </div> </div> </div> `;
}, "/Users/stefanroets/WebstormProjects/GitHub/my-portfolio-main/src/components/ProjectCard.astro", void 0);

const projects = [
  {
    title: "Photography Portfolio Gallery",
    description: "Professional photography portfolio showcasing various categories including landscapes, urban photography, portraits, and commercial work. Features responsive gallery design, category filtering, and optimized image display with lightbox functionality.",
    projectUrl: "https://stefansphotogallerymain.vercel.app",
    githubUrl: "https://github.com/Stefanroets180/stefansphotogallerymain",
    videoId: "tgbNymZ7vqY",
    // Placeholder for web development demo
    previewImage: "/assets/projects/stefansphotogallery.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Radix UI",
      "Vercel"
    ]
  },
  {
    title: "Fuel Logbook Tracker",
    description: "Comprehensive fuel tracking application designed for South African drivers. Features include fuel efficiency calculations, receipt storage, SARS-compliant reporting, and multi-vehicle management. Tracks consumption in km/L and expenses in South African Rand.",
    projectUrl: "https://steph-fuel-logbook.vercel.app/",
    githubUrl: "https://github.com/Stefanroets180/steph-fuel-logbook-app",
    videoId: "hVimVzgtD6w",
    // Placeholder for app demo
    previewImage: "/assets/projects/steph-fuel-logbook.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
      "React"
    ]
  },
  {
    title: "Image Upload Platform",
    description: "Modern image upload and management platform with drag-and-drop functionality, automatic image optimization, cloud storage integration, and responsive gallery display. Features real-time upload progress and image metadata extraction.",
    projectUrl: "https://stefan-roets-pics-uploader.vercel.app/",
    githubUrl: "https://github.com/Stefanroets180/stefan-roets-pics-uploader",
    videoId: "ScMzIvxBSi4",
    // Placeholder for file upload demo
    previewImage: "/assets/projects/pics-uploader.png",
    technologies: ["React", "Node.js", "Express", "AWS S3", "Multer", "CSS3"]
  },
  {
    title: "E-Commerce Dashboard",
    description: "Comprehensive e-commerce analytics dashboard with real-time sales tracking, inventory management, customer analytics, and automated reporting. Features interactive charts and data visualization for business insights.",
    projectUrl: "https://demo-ecommerce-dashboard.netlify.app",
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    videoId: "6stlCkUDG_s",
    // Placeholder for dashboard demo
    previewImage: "/assets/projects/ecommerce-preview.jpg",
    technologies: [
      "React",
      "Redux",
      "Chart.js",
      "Node.js",
      "MongoDB",
      "Material-UI"
    ]
  },
  {
    title: "Task Management System",
    description: "Full-featured project management application with kanban boards, team collaboration, time tracking, and deadline management. Includes real-time notifications, file attachments, and project analytics.",
    projectUrl: "https://task-manager-pro.herokuapp.com",
    githubUrl: "https://github.com/yourusername/task-management",
    videoId: "MtCbVcEtqwg",
    // Placeholder for project management demo
    previewImage: "/assets/projects/taskapp-preview.jpg",
    technologies: [
      "Vue.js",
      "Vuex",
      "Node.js",
      "Socket.io",
      "PostgreSQL",
      "Vuetify"
    ]
  },
  {
    title: "Weather Forecast App",
    description: "Interactive weather application with location-based forecasts, detailed weather maps, historical data analysis, and severe weather alerts. Features responsive design, offline capabilities, and 7-day forecasts.",
    projectUrl: "https://weather-app-advanced.vercel.app",
    githubUrl: "https://github.com/yourusername/weather-forecast",
    videoId: "wPElVpR1rwA",
    // Placeholder for weather app demo
    previewImage: "/assets/projects/weather-preview.jpg",
    technologies: [
      "JavaScript",
      "OpenWeather API",
      "Chart.js",
      "CSS3",
      "Service Workers",
      "Geolocation API"
    ]
  },
  {
    title: "Social Media Analytics Platform",
    description: "Advanced analytics dashboard for social media performance tracking with data visualization, engagement metrics, automated reporting, and competitor analysis across multiple platforms including Instagram, Twitter, and Facebook.",
    projectUrl: "https://social-analytics-pro.railway.app",
    githubUrl: "https://github.com/yourusername/social-analytics",
    videoId: "Ke90Tje7VS0",
    // Placeholder for analytics demo
    previewImage: "/assets/projects/analytics-preview.jpg",
    technologies: [
      "Python",
      "Django",
      "D3.js",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker"
    ]
  },
  {
    title: "Cryptocurrency Tracker",
    description: "Real-time cryptocurrency portfolio tracker with price alerts, market analysis, trading history, and performance metrics. Features dark/light themes, customizable watchlists, and detailed coin information.",
    projectUrl: "https://crypto-tracker-advanced.netlify.app",
    githubUrl: "https://github.com/yourusername/crypto-tracker",
    videoId: "YQHsXMglC9A",
    // Placeholder for crypto app demo
    previewImage: "/assets/projects/fitness-preview.jpg",
    technologies: [
      "React",
      "TypeScript",
      "CoinGecko API",
      "Recharts",
      "Local Storage",
      "Styled Components"
    ]
  }
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$MyProjects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '  <!-- Include Ionicons for the icons --> <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"><\/script> <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"><\/script>'])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Projects | Stefan Roets", "description": "Explore my portfolio of web development projects, applications, and technical demonstrations.", "data-astro-cid-zaygx4ul": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-zaygx4ul> <main class="wrapper stack gap-8" data-astro-cid-zaygx4ul> <header class="hero" data-astro-cid-zaygx4ul> <div class="roles" data-astro-cid-zaygx4ul> ${renderComponent($$result2, "Pill", $$Pill, { "data-astro-cid-zaygx4ul": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "ion-icon", "ion-icon", { "name": "code-working", "data-astro-cid-zaygx4ul": true })}Projects` })} </div> <h1 class="title" data-astro-cid-zaygx4ul>My Projects</h1> <p class="tagline" data-astro-cid-zaygx4ul>
Discover my collection of web applications, mobile
                    solutions, and technical innovations. Each project
                    demonstrates unique problem-solving approaches, modern
                    technologies, and creative implementations. From interactive
                    dashboards to real-time applications, explore the diverse
                    range of solutions I've built.
</p> <div class="hero-stats" data-astro-cid-zaygx4ul> <div class="stat" data-astro-cid-zaygx4ul> <span class="stat-number" data-astro-cid-zaygx4ul>${projects.length}+</span> <span class="stat-label" data-astro-cid-zaygx4ul>Projects</span> </div> <div class="stat" data-astro-cid-zaygx4ul> <span class="stat-number" data-astro-cid-zaygx4ul>15+</span> <span class="stat-label" data-astro-cid-zaygx4ul>Technologies</span> </div> <div class="stat" data-astro-cid-zaygx4ul> <span class="stat-number" data-astro-cid-zaygx4ul>100%</span> <span class="stat-label" data-astro-cid-zaygx4ul>Live Demos</span> </div> </div> </header> <section class="projects-grid" data-astro-cid-zaygx4ul> ${projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": project.title, "description": project.description, "projectUrl": project.projectUrl, "githubUrl": project.githubUrl, "videoId": project.videoId, "previewImage": project.previewImage, "technologies": project.technologies, "data-astro-cid-zaygx4ul": true })}`)} </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-zaygx4ul": true })} </div> ` }));
}, "/Users/stefanroets/WebstormProjects/GitHub/my-portfolio-main/src/pages/my-projects.astro", void 0);

const $$file = "/Users/stefanroets/WebstormProjects/GitHub/my-portfolio-main/src/pages/my-projects.astro";
const $$url = "/my-projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$MyProjects,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
