import "./globals.css";
import { Inter } from "next/font/google";

import ActiveSectionContext from "@/context/active-section-context";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ThemSwitch from "@/app/components/ThemeSwitch";
import { Toaster } from "react-hot-toast";
import { CSSProperties } from "react";

import { siteData } from "@/src/data/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(siteData.siteUrl),
  title: {
    default: "Ahmed Shebl — Frontend Software Engineer | React & Next.js",
    template: "%s | Ahmed Shebl",
  },
  description:
    "Ahmed Shebl is a Frontend Software Engineer specializing in React, Next.js, and TypeScript. Building responsive, high-performance web applications from Cairo, Egypt.",
  keywords: [
    "Ahmed Shebl",
    "Frontend Software Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Cairo",
    "Egypt",
  ],
  authors: [{ name: "Ahmed Shebl" }],
  creator: "Ahmed Shebl",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteData.siteUrl,
    siteName: "Ahmed Shebl",
    title: "Ahmed Shebl — Frontend Software Engineer | React & Next.js",
    description:
      "Ahmed Shebl is a Frontend Software Engineer specializing in React, Next.js, and TypeScript. Building responsive, high-performance web applications from Cairo, Egypt.",
    images: [
      {
        url: `${siteData.siteUrl}/personalImages/shebllImage.png`,
        width: 150,
        height: 100,
        alt: "Ahmed Shebl",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Ahmed Shebl — Frontend Software Engineer | React & Next.js",
    description:
      "Ahmed Shebl is a Frontend Software Engineer specializing in React, Next.js, and TypeScript.",
    images: [`${siteData.siteUrl}/personalImages/shebllImage.png`],
  },
  icons: { icon: "/personalImages/shebllImage.png" },
};

const setInitialTheme = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 relative dark:bg-[#090c13] dark:text-gray-50 overflow-x-hidden`}
      >
        <div style={containerStyle}>
          <div style={backgroundStyle}></div>
        </div>
        <div
          className="spotlight opacity-0 bg-[#ffccce] absolute -z-10
          right-[5rem] top[-6rem]
          md:right-[10rem] h-[32rem] w-[32rem] sm:w-[68rem]
          rounded-full blur-[9rem]
          dark:bg-[#946263]
          "
        ></div>
        <div
          className="spotlight opacity-0 bg-[#dbd7fb] absolute top[0rem] -z-10
          left-[-15rem] md:left-[-16rem] lg:left-[-10rem] xl:left-[-5rem] 2xl:left-[5rem]
          h-[32rem] w-[32rem] sm:w-[68rem]
          rounded-full blur-[9rem]
          dark:bg-[#696394]
          "
        ></div>
        <ActiveSectionContext>
          <Toaster position="bottom-center" />
          <Header />
          {children}
          <Footer />
        </ActiveSectionContext>
        <ThemSwitch />
      </body>
    </html>
  );
}
const containerStyle: CSSProperties = {
  flex: "none",
  height: "100vh",
  left: "50%",
  transform: "translateX(-50%)",
  position: "fixed",
  top: 0,
  width: "100%",
};

const backgroundStyle = {
  width: "100%",
  height: "100%",
  backgroundSize: "128px",
  backgroundRepeat: "repeat",
  backgroundImage:
    "url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
  opacity: 0.045,
};
