import type { SiteData } from "@/src/types/portfolio";

export const siteData: SiteData = {
  personal: {
    name: "Ahmed Shebl",
    role: "Frontend Software Engineer",
    location: "Cairo, Egypt",
    birthday: "2001-12-26",
    email: "sheb4900@gmail.com",
    image: "/personalImages/shebllImage.png",
  },

  hero: {
    title: "Hey, I'm Ahmed Shebl",
    highlightedWords: ["Software Engineer"],
    description:
      "I specialize in Front-End Development with expertise in React and Next.js, creating responsive, interactive, seamless, scalable, and high-performance websites and mobile applications",
    descriptionHighlightedWords: ["Front-End Development", "React and Next.js"],
    buttons: {
      contact: { label: "Contact Me here", icon: "📨" },
      downloadCv: { label: "Download CV", icon: "📑" },
    },
  },

  about: {
    title: "About Me",
    subtitle: "Answers To All Questions In Your Mind .",
    paragraphs: [
      "My name is Ahmed Mohamed, and I'm a {age}-year-old graduate in Computer Science from Cairo University, specializing in Information Systems. I reside in Cairo, Egypt.",
      "specializing in Front-End Development with a solid foundation in backend technologies. With 1 year of experience, I creating responsive, interactive, seamless, scalable, and high-performance websites and mobile applications. My expertise includes React and Next.js, and I am passionate about delivering modern, user-friendly web solutions.",
    ],
    highlightedWords: ["Front-End Development"],
    questions: [
      "What Are You Study ?",
      "What Is Your Passion ?",
      "How Old Are You ?",
      "Where do you reside?",
      "Which university are you attending ?",
    ],
  },

  social: {
    github: "https://github.com/shebll",
    linkedin: "https://www.linkedin.com/in/ahmed-shebl-07a331268/",
    upwork: "https://www.upwork.com/freelancers/~014ebf95d7586f1308",
    email: "sheb4900@gmail.com",
  },

  cv: {
    url: "/files/AhmedResume.pdf",
    downloadLabel: "Download CV",
    viewLabel: "View CV",
  },

  upworkCta: {
    title: "Looking to work together?",
    description:
      "Available for freelance projects through Upwork. Let's build something great.",
    linkLabel: "View my Upwork profile",
  },

  siteUrl: "https://shebll.vercel.app",
};
