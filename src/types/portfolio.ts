export type SectionName =
  | "Home"
  | "About"
  | "Projects"
  | "Skills"
  | "Experience"
  | "Resume"
  | "Contact";

export interface NavigationLink {
  name: SectionName;
  hash: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  birthday: string; // ISO date string, e.g. "2001-12-26"
  email: string;
  image: string;
}

export interface HeroContent {
  title: string;
  highlightedWords: string[];
  description: string;
  descriptionHighlightedWords: string[];
  buttons: {
    contact: { label: string; icon: string };
    downloadCv: { label: string; icon: string };
  };
}

export interface AboutContent {
  title: string;
  subtitle: string;
  paragraphs: string[];
  highlightedWords: string[];
  questions: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  upwork: string;
  email: string;
}

export interface CvInfo {
  url: string;
  downloadLabel: string;
  viewLabel: string;
}

export interface UpworkCta {
  title: string;
  description: string;
  linkLabel: string;
}

export interface SiteData {
  personal: PersonalInfo;
  hero: HeroContent;
  about: AboutContent;
  social: SocialLinks;
  cv: CvInfo;
  upworkCta: UpworkCta;
  siteUrl: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
  bullets: string[];
  technologies: string[];
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}

export interface ProjectLinks {
  demo?: string;
  repo?: string;
  linkedin?: string;
}

export interface ProjectCaseStudy {
  challenge: string;
  solution: string;
  approach: string;
  results: string;
  lessonsLearned: string[];
}

export interface ProjectSeo {
  title?: string;
  description?: string;
  ogImage?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  featured: boolean;
  year: string;
  role: string;
  thumbnail: string;
  technologies: string[];
  highlights: string[];
  images: string[];
  links: ProjectLinks;
  caseStudy: ProjectCaseStudy;
  seo?: ProjectSeo;
}
