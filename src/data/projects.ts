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
      "AWS S3",
      "imgix",
      "Email Integration",
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
      "AWS S3",
      "HTML Export",
      "Vercel",
      "React",
      "Email Verification",
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
    title: "JavaScript Chess Game",
    description:
      "Interactive chess game built with vanilla JavaScript featuring complete chess logic, move validation, piece highlighting, and game state management. Includes drag-and-drop functionality, legal move detection, and responsive design for desktop and mobile play.",
    projectUrl: "https://stefanroets180.github.io/JavaScript_Chess/",
    githubUrl: "https://github.com/Stefanroets180/JavaScript_Chess",
    videoId: "6stlCkUDG_s", // Placeholder for chess game demo
    previewImage: "/assets/projects/JavaScript_Chess.png",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "DOM Manipulation",
      "Game Logic",
      "Responsive Design",
    ],
  },
  {
    title: "Task Management System",
    description:
      "Full-featured project management application with kanban boards, team collaboration, time tracking, and deadline management. Includes real-time notifications, file attachments, and project analytics.",
    projectUrl: "https://spring-boot-next-postgresql-fronten.vercel.app/",
    githubUrl: "https://github.com/Stephan-Roets/spring-boot-next-postgresql-frontend, https://github.com/Stephan-Roets/spring-boot-backend-main",
    videoId: "MtCbVcEtqwg",
    previewImage: "/assets/projects/Taskflow.png",
    technologies: [
      "Next.js",
      "Spring Boot",
      "PostgreSQL",
      "TypeScript",
      "Java",
      "JWT Authentication",
      "Spring Security",
      "Email Verification",
      "Vercel",
    ],
  },
  {
    title: "Rain Gauge App",
    description:
      "Interactive weather application with location-based forecasts, detailed weather maps, historical data analysis, and severe weather alerts. Features responsive design, offline capabilities, and 7-day forecasts.",
    projectUrl: "https://anton-rainfall-tracker.vercel.app/",
    githubUrl: "https://github.com/Stephanroets/anton-rainfall-tracker",
    videoId: "wPElVpR1rwA", // Placeholder for weather app demo
    previewImage: "/assets/projects/rain.png",
    technologies: [
      "JavaScript",
      "OpenWeather API",
      "Chart.js",
      "CSS3",
      "Service Workers",
      "Geolocation API",
      "User Authentication",
      "Email Verification",
      "Role-Based Access Control",
    ],
  },
  {
    title: "Marble Racer",
    description:
        "3D marble racing game built with React Three Fiber featuring realistic physics simulation, post-processing effects, and dynamic obstacle courses. Players navigate a marble through challenging tracks with gravity-based mechanics and performance-optimized rendering.",
    projectUrl: "https://melodious-gumdrop-17ca66.netlify.app/",
    githubUrl: "https://github.com/Stephan-Roets/marble-race-game",
    videoId: "MtCbVcEtqwg",
    previewImage: "/assets/projects/marble_racist.png",
    technologies: [
      "React",
      "Three.js",
      "React Three Fiber",
      "React Three Drei",
      "React Three Rapier",
      "Zustand",
      "Vite",
      "3D Graphics",
      "Physics Simulation",
    ],
  },
  {
    title: "Space Invaders App",
    description:
        "Classic arcade-style Space Invaders game built with Python and Pygame. Features enemy wave mechanics, player movement and shooting, collision detection, score tracking, and progressive difficulty levels. Includes retro-style graphics and sound effects.",
    projectUrl: "https://stefanroets180.github.io/space_inventor_python/",
    githubUrl: "https://github.com/Stefanroets180/space_inventor_python",
    videoId: "YR5ApYxkU-U",
    previewImage: "/assets/projects/space.png",
    technologies: [
      "Python",
      "Pygame",
      "Game Development",
      "Collision Detection",
      "Event Handling",
      "Graphics",
    ],
  },
];
