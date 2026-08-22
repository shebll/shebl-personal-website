import type { Project } from "@/src/types/portfolio";

export const projectsData: Project[] = [
  {
    slug: "jotion",
    title: "Jotion",
    category: "Full-Stack",
    shortDescription:
      "A feature-rich note-taking app built with Next.js, React.js, Tailwind CSS, and more.",
    description:
      "🚀 Excited to share my new project – a feature-rich note-taking app! 📝✨ Built with Next.js, React.js, Tailwind CSS, and more. 🔐 GitHub login, smart note restoration, real-time updates, and a mobile-responsive design. 💻📱 Effortlessly manage, create, and organize notes anytime, anywhere! Explore it here and let me know your thoughts! 🌟",
    featured: true,
    year: "2024",
    role: "Full-Stack Developer",
    thumbnail: "/projectImages/jotion.png",
    technologies: [
      "React",
      "Next.js",
      "Tailwind",
      "Clerk",
      "Convex",
      "Zustand",
      "Sonner",
      "Blocknote",
      "Edgestore",
      "Emoji-mart",
    ],
    highlights: [
      "GitHub login authentication",
      "Smart note restoration",
      "Real-time updates",
      "Mobile-responsive design",
    ],
    images: ["/projectImages/jotion.png"],
    links: {
      demo: "https://note-taking-tan.vercel.app/",
      repo: "https://github.com/shebll/notion",
      linkedin:
        "https://www.linkedin.com/posts/ahmed-shebl-07a331268_nextjs-reactjs-tailwindcss-activity-7147915666933690368-Q5SJ?utm_source=share&utm_medium=member_desktop",
    },
    caseStudy: {
      challenge:
        "Build a feature-rich note-taking application with authentication, real-time updates, and a responsive design.",
      solution:
        "Developed a full-stack note-taking app using Next.js, React.js, and Tailwind CSS, integrating Clerk for GitHub login, Convex for real-time data, and Edgestore for file storage.",
      approach:
        "Leveraged a modern full-stack stack with Zustand for state management, Blocknote for rich text editing, and Sonner for notifications.",
      results:
        "Delivered a mobile-responsive note-taking app with smart note restoration and real-time updates.",
      lessonsLearned: [
        "Integrating multiple services (Clerk, Convex, Edgestore) requires careful coordination",
        "Real-time updates significantly improve the user experience",
      ],
    },
  },
  {
    slug: "jobflow",
    title: "JobFlow",
    category: "Full-Stack",
    shortDescription:
      "A job listing web app with dynamic SEO, static generation, and secure admin controls.",
    description:
      "Developed a job listing web app using Next.js 14, featuring dynamic SEO, static generation for fast performance, server actions for enhanced user experience, and secure admin controls with Clerk.",
    featured: true,
    year: "2024",
    role: "Full-Stack Developer",
    thumbnail: "/projectImages/jobflow.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Shadcn UI",
      "Prisma",
      "Vercel",
    ],
    highlights: [
      "Dynamic SEO",
      "Static generation for fast performance",
      "Server actions for enhanced UX",
      "Secure admin controls with Clerk",
    ],
    images: ["/projectImages/jobflow.png"],
    links: {
      demo: "https://jobflow-clone.vercel.app/",
      repo: "https://github.com/shebll/jobflow",
      linkedin:
        "https://www.linkedin.com/posts/ahmed-shebl-07a331268_jobflow-discover-jobs-activity-7244053153489338369-tMyU?utm_source=share&utm_medium=member_desktop",
    },
    caseStudy: {
      challenge:
        "Build a job listing web app with fast performance, dynamic SEO, and secure admin controls.",
      solution:
        "Used Next.js 14 with static generation for performance, dynamic SEO, server actions for UX, and Clerk for secure admin controls.",
      approach:
        "Combined Shadcn UI for a polished interface with Prisma for data persistence.",
      results:
        "Delivered a fast, SEO-friendly job listing app with secure admin controls.",
      lessonsLearned: [
        "Static generation combined with dynamic SEO improves both performance and discoverability",
        "Server actions streamline the user experience",
      ],
    },
  },
  {
    slug: "answerflow",
    title: "AnswerFlow",
    category: "Full-Stack",
    shortDescription:
      "A personal landing page with heavy animation and a custom chatbot, built as an Upwork freelance project.",
    description:
      "I worked as a freelancer front-end developer on an Upwork project for a client, the client wanted to make personal landing page which has a lot of animation and user interaction, My role involved collaborating with backend developers to implement the application, which included building a custom chatbot capable of engaging with users based on provided data. review from the client  ⭐⭐⭐⭐⭐",
    featured: true,
    year: "2024",
    role: "Front-End Developer (Freelance)",
    thumbnail: "/projectImages/answer.png",
    technologies: [
      "React",
      "Next.js",
      "Next-auth",
      "Framer-motion",
      "Tailwind",
      "gsap",
      "Zod",
    ],
    highlights: [
      "Custom chatbot engaging with users based on provided data",
      "Heavy animation and user interaction",
      "Collaboration with backend developers",
      "5-star client review",
    ],
    images: ["/projectImages/answer.png"],
    links: {
      demo: "https://answerflowai.com/",
      repo: "https://github.com/shebll/AnswerFlow",
      linkedin:
        "https://www.linkedin.com/posts/ahmed-shebl-07a331268_excited-to-share-my-latest-project-answerflow-activity-7191452152068747264-FG2G?utm_source=share&utm_medium=member_desktop",
    },
    caseStudy: {
      challenge:
        "Build a personal landing page with extensive animation and user interaction, including a custom chatbot.",
      solution:
        "Collaborated with backend developers to implement the application, building a custom chatbot capable of engaging with users based on provided data.",
      approach:
        "Used Framer Motion and GSAP for animations, with Next.js and React for the frontend.",
      results:
        "Delivered a highly interactive landing page with a 5-star client review.",
      lessonsLearned: [
        "Collaborating with backend developers is key to delivering integrated features",
        "Heavy animation requires careful performance management",
      ],
    },
  },
  {
    slug: "shadel",
    title: "SHADEL",
    category: "Full-Stack",
    shortDescription:
      "A CMS-driven application for WadyEline (Shadel) with a Sanity.io backend and Next.js frontend.",
    description:
      "During my tenure at WadyEline (Shadel) company, I freelanced as a Fullstack developer. My responsibilities encompassed working on the CMS backend using sanity.io and frontend development with Next.js. The application I contributed to offers a seamless dashboard for administrators to effortlessly add and manage products and machines through sanity.io.",
    featured: true,
    year: "2024",
    role: "Full-Stack Developer (Freelance)",
    thumbnail: "/projectImages/shadel.png",
    technologies: ["React", "Next.js", "Santiy.io", "Tailwind"],
    highlights: [
      "CMS backend using Sanity.io",
      "Frontend development with Next.js",
      "Admin dashboard to add and manage products and machines",
    ],
    images: ["/projectImages/shadel.png"],
    links: {
      demo: "https://shadel.vercel.app/",
      repo: "https://github.com/shebll/shadel",
      linkedin:
        "https://www.linkedin.com/posts/ahmed-shebl-07a331268_excited-to-share-my-contribution-to-wadyeline-activity-7191078122912448514-P0tJ?utm_source=share&utm_medium=member_desktop",
    },
    caseStudy: {
      challenge:
        "Build a CMS-driven application for WadyEline (Shadel) with a seamless admin dashboard.",
      solution:
        "Freelanced as a Fullstack developer, working on the CMS backend using Sanity.io and frontend development with Next.js.",
      approach:
        "Provided a dashboard for administrators to effortlessly add and manage products and machines through Sanity.io.",
      results:
        "Delivered a seamless admin dashboard and frontend for the Shadel application.",
      lessonsLearned: [
        "Sanity.io provides a flexible CMS backend",
        "A well-designed admin dashboard improves content management efficiency",
      ],
    },
  },
  {
    slug: "nexus-admin",
    title: "Nexus-Admin",
    category: "Front-End",
    shortDescription:
      "A comprehensive admin dashboard for the Nexus mental health platform.",
    description:
      "The Nexus Admin Dashboard is a comprehensive management tool designed for administrators of the Nexus mental health platform, which serves both users and doctors. This dashboard allows admins to efficiently monitor and manage various aspects of the platform.",
    featured: false,
    year: "2024",
    role: "Front-End Developer",
    thumbnail: "/projectImages/nexus-admin.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Shadcn",
      "Chart.js",
      "React Hook Form",
      "Zod",
      "Zustand",
      "TanStack Query",
    ],
    highlights: [
      "Comprehensive management tool for the Nexus mental health platform",
      "Monitor and manage users and doctors",
      "Data visualization with Chart.js",
    ],
    images: ["/projectImages/nexus-admin.png"],
    links: {
      demo: "https://nexus-admin-panel.vercel.app/",
      repo: "https://github.com/shebll/mental-health-admin-dashboard",
      linkedin:
        "https://www.linkedin.com/posts/ahmed-shebl-07a331268_nextjs-reactjs-zustand-activity-7234954626238734337-cItB?utm_source=share&utm_medium=member_desktop",
    },
    caseStudy: {
      challenge:
        "Build a comprehensive admin dashboard for the Nexus mental health platform serving both users and doctors.",
      solution:
        "Developed a dashboard allowing admins to efficiently monitor and manage various aspects of the platform.",
      approach:
        "Used React, Next.js, TypeScript, Shadcn, Chart.js, React Hook Form, Zod, Zustand, and TanStack Query.",
      results:
        "Delivered a comprehensive management tool for the Nexus platform.",
      lessonsLearned: [
        "TanStack Query simplifies server state management",
        "Zod provides robust form validation",
      ],
    },
  },
  {
    slug: "thebest",
    title: "THEBEST",
    category: "Front-End",
    shortDescription:
      "A game player-manager application with dashboards for administrators and users.",
    description:
      "In this project, I freelanced as a front-end developer, actively collaborating with backend developers to bring the application to life. This application served as a game player-manager, featuring dashboards tailored for both administrators and users.",
    featured: false,
    year: "2024",
    role: "Front-End Developer (Freelance)",
    thumbnail: "/projectImages/thebest.png",
    technologies: ["React", "Node.js", "Next.js", "Next-auth", "Tailwind"],
    highlights: [
      "Game player-manager application",
      "Dashboards for administrators and users",
      "Collaboration with backend developers",
    ],
    images: ["/projectImages/thebest.png"],
    links: {
      demo: "https://thebest-football.vercel.app/",
      repo: "https://github.com/shebll/thebest",
      linkedin:
        "https://www.linkedin.com/posts/ahmed-shebl-07a331268_excited-to-share-my-latest-project-thebest-activity-7190422087499472896-VxEv?utm_source=share&utm_medium=member_desktop",
    },
    caseStudy: {
      challenge:
        "Build a game player-manager application with dashboards for administrators and users.",
      solution:
        "Freelanced as a front-end developer, collaborating with backend developers to bring the application to life.",
      approach:
        "Used React, Node.js, Next.js, Next-auth, and Tailwind to build the application.",
      results:
        "Delivered a game player-manager application with tailored dashboards.",
      lessonsLearned: [
        "Collaboration with backend developers is essential for full-stack features",
        "Role-based dashboards improve the user experience",
      ],
    },
  },
  {
    slug: "bento",
    title: "Bento 0.2",
    category: "Front-End",
    shortDescription:
      "A Bento landing page clone with heavy animation, built as an Upwork freelance project.",
    description:
      "I worked as a freelancer front-end developer on an Upwork project for a client, the client wanted to copy the Bento landing page which has a lot of animation and user interaction, review from the client  ⭐⭐⭐⭐⭐",
    featured: false,
    year: "2024",
    role: "Front-End Developer (Freelance)",
    thumbnail: "/projectImages/bento.png",
    technologies: ["React", "Next.js", "Framer-motion", "Tailwind"],
    highlights: [
      "Bento landing page clone",
      "Heavy animation and user interaction",
      "5-star client review",
    ],
    images: ["/projectImages/bento.png"],
    links: {
      demo: "https://bentoclone.vercel.app/",
      repo: "https://github.com/shebll/bento",
      linkedin: "https://github.com/shebll/notion",
    },
    caseStudy: {
      challenge:
        "Clone the Bento landing page with extensive animation and user interaction.",
      solution:
        "Freelanced as a front-end developer to replicate the Bento landing page.",
      approach:
        "Used React, Next.js, Framer Motion, and Tailwind to build the page.",
      results:
        "Delivered a Bento landing page clone with a 5-star client review.",
      lessonsLearned: [
        "Replicating complex landing pages requires strong animation skills",
        "Framer Motion enables sophisticated interactions",
      ],
    },
  },
];
