"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const fade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.6 },
};

const experience = [
  {
    company: "New York Knicks / Madison Square Garden Sports Corp",
    location: "New York, NY",
    role: "Software Engineer, Basketball Products",
    dates: "September 2025 – Present",
    bullets: [
      "Building on the Basketball Products team.",
    ],
  },
  {
    company: "Credera",
    location: "New York, NY",
    role: "Senior Software Engineering Technology Consultant",
    dates: "June 2022 – September 2025",
    bullets: [
      "Drove ecommerce innovation for a multimillion-dollar storefront serving a major professional sports league, shipping 20+ full-stack features across Next.js, TypeScript, TailwindCSS, and Spring Boot.",
      "Managed 15+ biweekly production releases and led modernization of legacy systems to improve performance, scalability, and checkout reliability for high-volume fan commerce.",
      "Increased storefront engagement through a custom marketing integration for a prominent college athletics program, boosting visibility of team-branded merchandise.",
      "Built responsive, accessible interfaces aligned with WCAG standards, ensuring broad usability across devices and user groups.",
      "Maintained 95%+ billable utilization while acting as a trusted engineering partner, translating complex requirements into intuitive, scalable solutions used by thousands of fans.",
    ],
  },
  {
    company: "Credera",
    location: "Dallas, TX",
    role: "Technology Consulting Intern",
    dates: "January 2022 – April 2022",
    bullets: [
      "Implemented A/B testing and marketing technologies to optimize lead generation, driving tens of thousands of conversions for a Fortune 500 home improvement company.",
    ],
  },
  {
    company: "Keysight Technologies",
    location: "Austin, TX",
    role: "Software Engineering Intern",
    dates: "June 2021 – August 2021",
    bullets: [
      "Built new ExtJS/JavaScript components for a financial market monitoring platform.",
      "Pioneered new dashboard interactions including drag-and-drop and dynamic component positioning.",
    ],
  },
  {
    company: "Texas A&M Rec Sports",
    location: "College Station, TX",
    role: "Graphic Design Artist",
    dates: "August 2019 – December 2021",
    bullets: [
      "Designed promotional materials for over 150 Rec Sports events and programs.",
      "Delivered marketing and design services across 10+ departments using the Adobe Suite.",
    ],
  },
];

const portfolioItems = [
  {
    src: "/assets/img/portfolio/thumbnails/1.png",
    full: "/assets/img/portfolio/fullsize/1.png",
    category: "Prograde",
    title: "Branding and Website Design",
  },
  {
    src: "/assets/img/portfolio/thumbnails/2.png",
    full: "/assets/img/portfolio/fullsize/2.png",
    category: "Prograde",
    title: "Branding and Website Design",
  },
  {
    src: "/assets/img/portfolio/thumbnails/3.png",
    full: "/assets/img/portfolio/fullsize/3.png",
    category: "Comic Sans",
    title: "Typeface Brochure",
  },
];

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm font-medium tracking-wide text-muted hover:text-ink transition-colors duration-150"
    >
      {children}
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display mt-4 text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl">
      {children}
    </h2>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur-sm transition-shadow duration-200 ${scrolled ? "shadow-[0_1px_0_0_#d9d4cc]" : ""}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a
          href="#top"
          className="font-display text-base font-semibold tracking-tight text-ink hover:opacity-80 transition-opacity"
        >
          Drew Spooner
        </a>
        <nav className="flex items-center gap-6">
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <div className="bg-paper" id="top">
      <Header />

      {/* Hero */}
      <section className="border-b border-rule px-5 pt-20 pb-24 md:px-8 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fade}>
            <Eyebrow>Software Engineer</Eyebrow>
          </motion.div>
          <motion.h1
            className="font-display mt-4 text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[3.4rem] md:text-[4rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Drew Spooner.
          </motion.h1>
          <motion.p
            className="mt-5 text-[17px] leading-[1.65] text-ink/85"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            New York, NY.
          </motion.p>
          <motion.p
            className="mt-3 max-w-2xl text-[17px] leading-[1.65] text-ink/85"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Software Engineer, Sports Enthusiast, Creative.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a
              href="https://linkedin.com/in/drewspooner"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink px-7 py-3 text-sm font-medium tracking-wide text-paper hover:bg-ink/90 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/drewspooner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium tracking-wide text-ink underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="border-b border-rule px-5 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-4xl">
          <motion.div {...fade}>
            <Eyebrow>Experience</Eyebrow>
            <SectionHeading>Where I&apos;ve worked.</SectionHeading>
          </motion.div>

          <div className="mt-12 space-y-0">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                {...fade}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="border-t border-rule py-8"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="font-display text-lg font-semibold leading-snug tracking-tight text-ink">
                      {job.company}
                    </p>
                    <p className="mt-0.5 text-sm text-muted">{job.role}</p>
                  </div>
                  <p className="text-xs tracking-wide text-muted mt-1 sm:mt-0 sm:text-right shrink-0">
                    {job.location}
                    <br />
                    <span className="text-muted/70">{job.dates}</span>
                  </p>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-[15px] leading-[1.65] text-ink/80"
                    >
                      <span className="mt-[0.45em] h-[5px] w-[5px] shrink-0 rounded-full bg-rule" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <div className="border-t border-rule" />
          </div>
        </div>
      </section>

      {/* Design Work */}
      <section
        id="work"
        className="border-b border-rule px-5 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-4xl">
          <motion.div {...fade}>
            <Eyebrow>Design Work</Eyebrow>
            <SectionHeading>Graphic design & branding.</SectionHeading>
            <p className="mt-5 max-w-2xl text-[17px] leading-[1.65] text-ink/85">
              Alongside software engineering, I&apos;ve spent years doing
              graphic design — branding, typography, and digital design. A
              selection of projects below; full portfolio on Behance.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-3">
            {portfolioItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.full}
                target="_blank"
                rel="noopener noreferrer"
                {...fade}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative block overflow-hidden bg-paper"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={`${item.category} — ${item.title}`}
                    fill
                    className="object-cover transition-opacity duration-300 group-hover:opacity-80"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="border-t border-rule px-4 py-3">
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted">
                    {item.category}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-ink">
                    {item.title}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div {...fade} className="mt-8">
            <a
              href="https://behance.net/drewhspooner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium tracking-wide text-ink underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Full portfolio on Behance &rarr;
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-b border-rule px-5 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-3xl">
          <motion.div {...fade}>
            <Eyebrow>Contact</Eyebrow>
            <SectionHeading>Say hello.</SectionHeading>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.65] text-ink/85">
              LinkedIn and GitHub are the best places to find me.
            </p>
          </motion.div>
          <motion.div {...fade} className="mt-8 flex flex-col gap-3">
            <a
              href="https://linkedin.com/in/drewspooner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-ink underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              linkedin.com/in/drewspooner
            </a>
            <a
              href="https://github.com/drewspooner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-ink underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              github.com/drewspooner
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 py-8 md:px-8">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <p className="text-xs text-muted tracking-wide">
            &copy; {new Date().getFullYear()} Drew Spooner
          </p>
          <p className="text-xs text-muted tracking-wide">New York, NY</p>
        </div>
      </footer>
    </div>
  );
}
