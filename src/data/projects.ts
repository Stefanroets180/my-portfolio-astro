export interface Project {
  title: string;
  description: string;
  projectUrl: string;
  githubUrl?: string; // Optional GitHub repository URL
  videoId: string;
  previewImage: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "Photography Portfolio Gallery",
    description:
      "Professional photography portfolio showcasing various categories including landscapes, urban photography, portraits, and commercial work. Features responsive gallery design, category filtering, and optimized image display with lightbox functionality.",
    projectUrl: "https://stefansphotogallerymain.vercel.app",
    githubUrl: "https://github.com/Stefanroets180/stefansphotogallerymain",
    videoId: "tgbNymZ7vqY", // Placeholder for web development demo
    previewImage: "/assets/projects/stefansphotogallery.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Radix UI",
      "Vercel",
    ],
  },
  {
    title: "Fuel Logbook Tracker",
    description:
      "Comprehensive fuel tracking application designed for South African drivers. Features include fuel efficiency calculations, receipt storage, SARS-compliant reporting, and multi-vehicle management. Tracks consumption in km/L and expenses in South African Rand.",
    projectUrl: "https://steph-fuel-logbook.vercel.app/",
    githubUrl: "https://github.com/Stefanroets180/steph-fuel-logbook-app",
    videoId: "hVimVzgtD6w", // Placeholder for app demo
    previewImage: "/assets/projects/steph-fuel-logbook.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
      "React",
    ],
  },
  {
    title: "Image Upload Platform",
    description:
      "Modern image upload and management platform with drag-and-drop functionality, automatic image optimization, cloud storage integration, and responsive gallery display. Features real-time upload progress and image metadata extraction.",
    projectUrl: "https://stefan-roets-pics-uploader.vercel.app/",
    githubUrl: "https://github.com/Stefanroets180/stefan-roets-pics-uploader",
    videoId: "ScMzIvxBSi4", // Placeholder for file upload demo
    previewImage: "/assets/projects/pics-uploader.png",
    technologies: ["React", "Node.js", "Express", "AWS S3", "Multer", "CSS3"],
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Comprehensive e-commerce analytics dashboard with real-time sales tracking, inventory management, customer analytics, and automated reporting. Features interactive charts and data visualization for business insights.",
    projectUrl: "https://demo-ecommerce-dashboard.netlify.app",
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    videoId: "6stlCkUDG_s", // Placeholder for dashboard demo
    previewImage: "/assets/projects/ecommerce-preview.jpg",
    technologies: [
      "React",
      "Redux",
      "Chart.js",
      "Node.js",
      "MongoDB",
      "Material-UI",
    ],
  },
  {
    title: "Task Management System",
    description:
      "Full-featured project management application with kanban boards, team collaboration, time tracking, and deadline management. Includes real-time notifications, file attachments, and project analytics.",
    projectUrl: "https://task-manager-pro.herokuapp.com",
    githubUrl: "https://github.com/yourusername/task-management",
    videoId: "MtCbVcEtqwg", // Placeholder for project management demo
    previewImage: "/assets/projects/taskapp-preview.jpg",
    technologies: [
      "Vue.js",
      "Vuex",
      "Node.js",
      "Socket.io",
      "PostgreSQL",
      "Vuetify",
    ],
  },
  {
    title: "Weather Forecast App",
    description:
      "Interactive weather application with location-based forecasts, detailed weather maps, historical data analysis, and severe weather alerts. Features responsive design, offline capabilities, and 7-day forecasts.",
    projectUrl: "https://weather-app-advanced.vercel.app",
    githubUrl: "https://github.com/yourusername/weather-forecast",
    videoId: "wPElVpR1rwA", // Placeholder for weather app demo
    previewImage: "/assets/projects/weather-preview.jpg",
    technologies: [
      "JavaScript",
      "OpenWeather API",
      "Chart.js",
      "CSS3",
      "Service Workers",
      "Geolocation API",
    ],
  },
  {
    title: "Social Media Analytics Platform",
    description:
      "Advanced analytics dashboard for social media performance tracking with data visualization, engagement metrics, automated reporting, and competitor analysis across multiple platforms including Instagram, Twitter, and Facebook.",
    projectUrl: "https://social-analytics-pro.railway.app",
    githubUrl: "https://github.com/yourusername/social-analytics",
    videoId: "Ke90Tje7VS0", // Placeholder for analytics demo
    previewImage: "/assets/projects/analytics-preview.jpg",
    technologies: [
      "Python",
      "Django",
      "D3.js",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
    ],
  },
  {
    title: "Cryptocurrency Tracker",
    description:
      "Real-time cryptocurrency portfolio tracker with price alerts, market analysis, trading history, and performance metrics. Features dark/light themes, customizable watchlists, and detailed coin information.",
    projectUrl: "https://crypto-tracker-advanced.netlify.app",
    githubUrl: "https://github.com/yourusername/crypto-tracker",
    videoId: "YQHsXMglC9A", // Placeholder for crypto app demo
    previewImage: "/assets/projects/fitness-preview.jpg",
    technologies: [
      "React",
      "TypeScript",
      "CoinGecko API",
      "Recharts",
      "Local Storage",
      "Styled Components",
    ],
  },
];
