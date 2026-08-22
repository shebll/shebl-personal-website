# Ahmed Shebl — Frontend Software Engineer

A modern, responsive, and SEO-friendly portfolio website built with Next.js, React, and TypeScript. This portfolio showcases my projects, skills, experience, and professional background as a Frontend Software Engineer specializing in React and Next.js.

## About Me

I'm **Ahmed Shebl**, a Frontend Software Engineer based in Cairo, Egypt. I specialize in Front-End Development with a solid foundation in backend technologies. With experience building responsive, interactive, seamless, scalable, and high-performance websites and mobile applications, my expertise includes React and Next.js, and I'm passionate about delivering modern, user-friendly web solutions.

## About This Website

This portfolio is a content-driven application that showcases:

- My professional background and experience
- Featured projects with detailed case studies
- Skills and technologies I work with
- A downloadable CV
- A contact form and Upwork profile link

## Features

- **Responsive design** — fully responsive across mobile, tablet, and desktop
- **Content-driven architecture** — all content lives in typed data files, making it easy to update
- **Dynamic project case studies** — each project has a dedicated `/projects/[slug]` page generated from data
- **SEO optimized** — dynamic metadata, Open Graph, Twitter cards, JSON-LD structured data, sitemap, and robots.txt
- **Performance optimized** — Next.js Image optimization, lazy loading, reduced client-side rendering, and passive scroll listeners
- **Accessible navigation** — keyboard-friendly mobile menu, ARIA labels, and focus states
- **Responsive animations** — desktop animations preserved, mobile uses lightweight effects, and `prefers-reduced-motion` is respected
- **Dark mode** — theme switcher with system preference detection

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: Resend + React Email
- **Notifications**: React Hot Toast
- **Smooth Scroll**: Lenis

## Architecture

The website uses a **data-driven architecture**. All content is defined in typed data files under `src/data/`, and components consume this data. This means you can update content without touching component code.

### Project Structure

```text
app/
  components/        # Reusable UI components
  projects/[slug]/   # Dynamic project case study pages
  layout.tsx         # Root layout with metadata
  page.tsx           # Homepage
  sitemap.ts         # Sitemap generation
  robots.ts          # Robots.txt generation
src/
  data/              # All content data (site, projects, skills, experience, navigation)
  types/             # TypeScript types for all data
  components/        # Shared components (e.g. ProjectGallery)
  lib/               # Utility functions
public/
  files/             # CV download
  personalImages/    # Personal images
  projectImages/     # Project screenshots
  skillsSVG/         # Skill icons
```

## Content Management

All content is centralized in `src/data/`. Here's where to update each piece of content:

| Content                                  | File                                  |
| ---------------------------------------- | ------------------------------------- |
| Personal info (name, role, email, image) | `src/data/site.ts`                    |
| Hero section                             | `src/data/site.ts`                    |
| About section                            | `src/data/site.ts`                    |
| Projects                                 | `src/data/projects.ts`                |
| Experience                               | `src/data/experience.ts`              |
| Skills                                   | `src/data/skills.ts`                  |
| Social links (GitHub, LinkedIn, Upwork)  | `src/data/site.ts`                    |
| CV                                       | `src/data/site.ts`                    |
| SEO data (site URL, metadata)            | `src/data/site.ts` + `app/layout.tsx` |

### Adding a Project

To add a new project, add an entry to `src/data/projects.ts` following the `Project` type. The project will automatically appear on the homepage (if `featured: true`) and get its own `/projects/[slug]` page with a case study, gallery, and SEO metadata. No new React page is needed.

## Local Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start the production server
npm run start

# Lint the code
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Links

- **Website**: [https://shebll.vercel.app](https://shebll.vercel.app)
- **GitHub**: [https://github.com/shebll](https://github.com/shebll)
- **LinkedIn**: [https://www.linkedin.com/in/ahmed-shebl-07a331268/](https://www.linkedin.com/in/ahmed-shebl-07a331268/)
- **Upwork**: [https://www.upwork.com/freelancers/~014ebf95d7586f1308](https://www.upwork.com/freelancers/~014ebf95d7586f1308)
