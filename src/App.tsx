import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Download,
  ExternalLink,
  Code2,
  Menu,
  X,
} from "lucide-react";
import { experience, navItems, projects, skillGroups } from "./data";
import {
  Badge,
  Button,
  Card,
  Container,
  Divider,
  GlassPanel,
  Link,
  SectionHeading,
  ThemeToggle,
} from "./components/ui";

type Theme = "light" | "dark";

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    return (
      stored ??
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [
    theme,
    () => setTheme((value) => (value === "dark" ? "light" : "dark")),
  ] as const;
}

function Header() {
  const [theme, toggleTheme] = useTheme();
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-30% 0px -60%", threshold: 0 },
    );
    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-5">
      <Container>
        <GlassPanel className="flex min-h-14 items-center justify-between rounded-full px-3 py-2 shadow-[var(--shadow-sm)]">
          <a
            href="#top"
            className="focus-ring rounded-full px-2 font-display text-lg font-semibold tracking-tight"
            aria-label="KT — Kenean Tilahun, back to top"
          >
            KT<span className="text-[var(--accent)]">.</span>
          </a>
          <nav
            aria-label="Primary navigation"
            className={`${open ? "absolute left-5 right-5 top-[4.5rem] flex" : "hidden"} glass-panel flex-col gap-1 rounded-2xl p-3 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none`}
          >
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                aria-current={active === id ? "location" : undefined}
                className={`focus-ring rounded-full px-3 py-2 text-sm font-medium transition-colors ${active === id ? "bg-[var(--accent-soft)] text-[var(--accent)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              type="button"
              className="focus-ring grid size-11 place-items-center rounded-full md:hidden"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle navigation"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </GlassPanel>
      </Container>
    </header>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ProjectImage({ src, name }: { src: string; name: string }) {
  const [missing, setMissing] = useState(false);
  return (
    <div className="project-image" data-missing={missing || undefined}>
      {!missing && (
        <img
          src={src}
          alt={`${name} website preview`}
          width="960"
          height="600"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          onError={() => setMissing(true)}
        />
      )}
      {missing && (
        <span className="project-image-placeholder">
          Screenshot coming soon
        </span>
      )}
    </div>
  );
}

function WorkCard({
  project,
  index,
  active,
}: {
  project: (typeof projects)[number];
  index: number;
  active: boolean;
}) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <article className={`work-card${detailsOpen ? " is-detailed" : ""}`} aria-hidden={!active}>
      <ProjectImage src={project.image} name={project.name} />
      <div className="work-card-caption">
        <div>
          <p className="work-card-kicker">
            {String(index + 1).padStart(2, "0")} / {project.category} / {project.year}
          </p>
          <h3>{project.name}</h3>
          <p className="work-card-tagline">{project.description}</p>
        </div>
        <div className="work-card-links">
          <a className="icon-link focus-ring" href={project.live} target="_blank" rel="noreferrer" tabIndex={active ? 0 : -1} aria-label={`Open ${project.name} live project`}>
            <ExternalLink aria-hidden="true" size={18} />
          </a>
          {project.repo && (
            <a className="icon-link focus-ring" href={project.repo} target="_blank" rel="noreferrer" tabIndex={active ? 0 : -1} aria-label={`Open ${project.name} GitHub repository`}>
              <Code2 aria-hidden="true" size={18} />
            </a>
          )}
          <button className="details-toggle focus-ring" type="button" tabIndex={active ? 0 : -1} aria-expanded={detailsOpen} onClick={() => setDetailsOpen((open) => !open)}>
            {detailsOpen ? "Close" : "Details"}
          </button>
        </div>
      </div>
      <div className="work-card-details" aria-hidden={!detailsOpen}>
        <p>{project.description}</p>
        <ul aria-label="Technology stack">
          {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
    </article>
  );
}

function WorkSection() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const touchStart = useRef<number | null>(null);
  const previous = () => setActive((value) => Math.max(0, value - 1));
  const next = () => setActive((value) => Math.min(projects.length - 1, value + 1));

  return (
    <section id="work" aria-labelledby="work-title" className="work-story section">
      <Container>
          <motion.div
            className="work-heading"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>Selected Work</p>
            <h2 id="work-title">Digital products shaped around real people.</h2>
            <span>
              Shipped and evolving work across commerce, client services, and
              full-stack platforms.
            </span>
          </motion.div>
          <div className="work-slider" role="region" aria-roledescription="carousel" aria-label="Selected projects" tabIndex={0}
            onKeyDown={(event) => { if (event.key === "ArrowLeft") previous(); if (event.key === "ArrowRight") next(); }}
            onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
            onTouchEnd={(event) => { if (touchStart.current === null) return; const distance = event.changedTouches[0].clientX - touchStart.current; if (distance > 45) previous(); if (distance < -45) next(); touchStart.current = null; }}>
            <div className="work-viewport">
              <div className="work-track" style={{ transform: `translate3d(-${active * 100}%, 0, 0)`, transition: reduce ? "none" : undefined }}>
                {projects.map((project, index) => <WorkCard key={project.name} project={project} index={index} active={index === active} />)}
              </div>
            </div>
            <button type="button" className="slider-arrow slider-arrow-left focus-ring" onClick={previous} disabled={active === 0} aria-label="Previous project"><ArrowLeft aria-hidden="true" /></button>
            <button type="button" className="slider-arrow slider-arrow-right focus-ring" onClick={next} disabled={active === projects.length - 1} aria-label="Next project"><ArrowRight aria-hidden="true" /></button>
            <p className="slider-status" aria-live="polite">{active + 1} / {projects.length}</p>
          </div>
      </Container>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <section
          id="top"
          aria-labelledby="hero-title"
          className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28"
        >
          <div className="orb orb-one" aria-hidden="true" />
          <div className="orb orb-two" aria-hidden="true" />
          <Container className="relative">
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
              <Reveal className="max-w-4xl">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                  Kenean Tilahun · Software Engineer
                </p>
                <h1
                  id="hero-title"
                  className="font-display text-[length:var(--text-hero)] leading-[0.96] tracking-[-0.055em] text-[var(--text-primary)]"
                >
                  Software Engineer{" "}
                  <span className="text-[var(--text-secondary)]">
                    & Full-Stack Developer
                  </span>
                </h1>
                <p className="mt-7 max-w-2xl text-[length:var(--text-xl)] leading-relaxed text-[var(--text-secondary)]">
                  I build thoughtful, production-grade web and mobile products
                  with clean architecture and measurable purpose.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button href="#work">
                    View selected work{" "}
                    <ArrowDown size={17} aria-hidden="true" />
                  </Button>
                  {/* TODO: Replace /kenean-tilahun-resume.pdf with the supplied resume PDF path before deployment. */}
                  <Button
                    href="/kenean-tilahun-resume.pdf"
                    download
                    variant="secondary"
                  >
                    Download résumé <Download size={17} aria-hidden="true" />
                  </Button>
                </div>
              </Reveal>
              <Reveal className="hero-visual-wrap">
                <figure className="hero-visual glass-panel">
                  <img
                    src="/images/projects/KT.jpg"
                    alt="Kenean Tilahun, Software Engineer and Full-Stack Developer"
                    width="1600"
                    height="2000"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="hero-portrait h-full w-full object-cover"
                  />
                </figure>
              </Reveal>
            </div>
          </Container>
        </section>

        <section id="about" aria-labelledby="about-title" className="section about-section">
          <Container>
            <Reveal>
              <div className="about-hero-statement">
                <div className="section-title-rule">
                  <h2 id="about-title">About</h2>
                </div>
              </div>

              <div className="about-overview">
                <p className="about-lead">
                  I build production-grade software that turns complex systems
                  into seamless experiences.
                </p>
                <p>
                  I&apos;m Kenean. I&apos;m a Software Engineer and full-stack developer
                  working across fintech, AI, and enterprise platforms. Whether
                  it&apos;s designing a clean API, architecting a resilient
                  backend, or building an interface people actually enjoy using,
                  I focus on shipping code that&apos;s maintainable and actually
                  moves the product forward.
                </p>
              </div>

              <p className="about-principles-label">Engineering principles</p>
              <div className="about-philosophy" aria-label="Engineering philosophy">
                <article className="about-philosophy-card">
                  <span aria-hidden="true">01</span>
                  <h3>Clean Architecture</h3>
                  <p>
                    Modularity, strong typing, and code that can scale without
                    turning into spaghetti. I&apos;d rather write it right the
                    first time than untangle it later.
                  </p>
                </article>
                <article className="about-philosophy-card">
                  <span aria-hidden="true">02</span>
                  <h3>Performance First</h3>
                  <p>
                    Runtime efficiency, sane state management, and page speed
                    aren&apos;t an afterthought — they&apos;re part of the initial
                    design, not a cleanup pass at the end.
                  </p>
                </article>
                <article className="about-philosophy-card">
                  <span aria-hidden="true">03</span>
                  <h3>Built for the Real Problem</h3>
                  <p>
                    Good code that solves the wrong problem is still a failure. I
                    care about understanding what a project actually needs before
                    I start writing it.
                  </p>
                </article>
              </div>

              {/* TODO: Add a personal-touch line here when a non-work interest is supplied. */}
              <p className="about-cta">
                <Link
                  href="https://github.com/KeniKT"
                  target="_blank"
                  rel="noreferrer"
                >
                  ↗ github
                </Link>
              </p>
            </Reveal>
          </Container>
        </section>

        <Divider />
        <section
          id="experience"
          aria-labelledby="experience-title"
          className="section"
        >
          <Container>
            <SectionHeading eyebrow="Experience">
              A timeline of building, teaching, and training.
            </SectionHeading>
            <div className="relative ml-2 border-l border-[var(--border-strong)] pl-6 sm:ml-4 sm:pl-10">
              {experience.map((item) => (
                <Reveal
                  key={`${item.company}-${item.role}`}
                  className="relative mb-6 last:mb-0"
                >
                  <span
                    className="absolute -left-[1.93rem] top-8 size-3 rounded-full border-2 border-[var(--bg)] bg-[var(--gold)] sm:-left-[2.94rem]"
                    aria-hidden="true"
                  />
                  <Card>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <h3 className="font-display text-2xl text-[var(--text-primary)]">
                          {item.company}
                        </h3>
                        <p className="mt-1 font-medium text-[var(--accent)]">
                          {item.role}
                        </p>
                      </div>
                      <time className="text-sm text-[var(--text-secondary)]">
                        {item.period}
                      </time>
                    </div>
                    <p className="mt-5 max-w-4xl leading-7 text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <Divider />
        <WorkSection />

        <Divider />
        <section id="skills" aria-labelledby="skills-title" className="section">
          <Container>
            <SectionHeading eyebrow="Skills">
              Tools chosen around the problem.
            </SectionHeading>
            <GlassPanel className="skills-panel rounded-[var(--radius-xl)] p-7 sm:p-10 lg:p-12">
              <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {Object.entries(skillGroups).map(([group, skills]) => (
                  <Reveal key={group}>
                    <div className="h-full border-t border-[var(--border-strong)] pt-5">
                      <h3 className="font-display text-[length:var(--text-2xl)] leading-tight text-[var(--text-primary)]">
                        {group}
                      </h3>
                      <div className="mt-6 flex flex-wrap gap-2.5">
                        {skills.map((skill) => (
                          <Badge key={skill} className="px-4 py-2">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </GlassPanel>
          </Container>
        </section>

        <Divider />
        <section
          id="contact"
          aria-labelledby="contact-title"
          className="section pb-16"
        >
          <Container>
            <div className="section-title-rule">
              <h2 id="contact-title">Contact</h2>
            </div>
            <div className="contact-directory">
              <div className="contact-group">
                <h3>Mail</h3>
                <a className="arrow-text-link focus-ring" href="mailto:keni232127@gmail.com"><span aria-hidden="true">↗</span> keni232127@gmail.com</a>
              </div>
              <div className="contact-group">
                <h3>Social medias</h3>
                <div className="contact-socials">
                  <a className="arrow-text-link focus-ring" href="https://linkedin.com/in/kenean" target="_blank" rel="noreferrer"><span aria-hidden="true">↗</span> LinkedIn</a>
                  <a className="arrow-text-link focus-ring" href="https://github.com/KeniKT" target="_blank" rel="noreferrer"><span aria-hidden="true">↗</span> GitHub</a>
                  <a className="arrow-text-link focus-ring" href="https://leetcode.com/u/keniKT" target="_blank" rel="noreferrer"><span aria-hidden="true">↗</span> LeetCode</a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <footer className="border-t border-[var(--border)] py-7">
        <Container className="flex flex-col gap-2 text-sm text-[var(--text-secondary)] sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Kenean Tilahun</p>
          <p>Designed and built with care.</p>
        </Container>
      </footer>
    </>
  );
}
