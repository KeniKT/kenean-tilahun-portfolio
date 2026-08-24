import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Download,
  BriefcaseBusiness,
  Code2,
  Mail,
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
  progress,
  animated,
}: {
  project: (typeof projects)[number];
  index: number;
  progress: MotionValue<number>;
  animated: boolean;
}) {
  const reduce = useReducedMotion();
  const center = projects.length > 1 ? index / (projects.length - 1) : 0;
  const scaleRange =
    center - 0.22 < 0
      ? [center, center + 0.22]
      : center + 0.22 > 1
        ? [center - 0.22, center]
        : [center - 0.22, center, center + 0.22];
  const opacityRange =
    center - 0.3 < 0
      ? [center, center + 0.3]
      : center + 0.3 > 1
        ? [center - 0.3, center]
        : [center - 0.3, center, center + 0.3];
  const scale = useTransform(
    progress,
    scaleRange,
    center - 0.22 < 0
      ? [1, 0.96]
      : center + 0.22 > 1
        ? [0.96, 1]
        : [0.96, 1, 0.96],
  );
  const opacity = useTransform(
    progress,
    opacityRange,
    center - 0.3 < 0
      ? [1, 0.72]
      : center + 0.3 > 1
        ? [0.72, 1]
        : [0.72, 1, 0.72],
  );

  return (
    <motion.article
      className="work-card"
      style={!animated || reduce ? undefined : { scale, opacity }}
    >
      <ProjectImage src={project.image} name={project.name} />
      <div className="work-card-copy">
        <div className="work-card-meta">
          <span>{project.category}</span>
          <time>{project.year}</time>
        </div>
        <div className="work-card-title-row">
          <div>
            <span className="work-card-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{project.name}</h3>
          </div>
          <p>{project.description}</p>
        </div>
        <div className="work-card-links">
          <Link href={project.live} target="_blank" rel="noreferrer">
            Live project <ArrowUpRight className="inline" size={15} />
          </Link>
          {project.repo && (
            <Link href={project.repo} target="_blank" rel="noreferrer" subtle>
              GitHub <ArrowUpRight className="inline" size={15} />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [desktop, setDesktop] = useState(false);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
  const smoothX = useSpring(rawX, {
    stiffness: 120,
    damping: 28,
    mass: 0.45,
  });

  useEffect(() => {
    const measure = () => {
      const isDesktop = matchMedia("(min-width: 768px)").matches;
      setDesktop(isDesktop);
      if (!isDesktop || !trackRef.current) {
        setScrollDistance(0);
        return;
      }
      setScrollDistance(
        Math.max(0, trackRef.current.scrollWidth - window.innerWidth),
      );
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      aria-labelledby="work-title"
      className="work-story"
      style={desktop ? { height: `calc(100svh + ${scrollDistance}px)` } : undefined}
    >
      <div className="work-sticky">
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
        </Container>
        <motion.div
          ref={trackRef}
          className="work-track"
          style={desktop && !reduce ? { x: smoothX } : undefined}
        >
          {projects.map((project, index) => (
            <WorkCard
              key={project.name}
              project={project}
              index={index}
              progress={scrollYProgress}
              animated={desktop}
            />
          ))}
        </motion.div>
      </div>
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
                  {/* Uses the existing original abstract artwork. TODO: replace with /images/hero-portrait.jpg if a professional portrait is supplied. */}
                  <img
                    src="/og-image.png"
                    alt="Abstract oxblood, ivory, and gold architectural forms"
                    width="1200"
                    height="630"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </Reveal>
            </div>
          </Container>
        </section>

        <section id="about" aria-labelledby="about-title" className="section">
          <Container>
            <Reveal>
              <SectionHeading eyebrow="About" intro="The craft behind the code">
                A product-minded engineer who cares about the whole system.
              </SectionHeading>
              <div className="about-statement">
                <p className="about-statement-lead">
                  Software Engineer and full-stack developer with four years of
                  experience delivering production-grade web and mobile
                  applications across fintech, AI, and enterprise platforms.{" "}
                </p>
                <p className="about-statement-body">
                  Proficient in Python, JavaScript, and TypeScript with strong
                  expertise in React, Node.js, Next.js, Django, and Flutter.
                  Passionate about clean architecture, scalable system design,
                  and building user-focused solutions that drive real impact.
                </p>
              </div>
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
            <SectionHeading
              eyebrow="Contact"
              intro="Have a role, product, or collaboration in mind? I’m always open to a thoughtful conversation."
            >
              Let’s build something useful.
            </SectionHeading>
            <div className="contact-links">
              <a
                className="contact-link focus-ring"
                href="mailto:keni232127@gmail.com"
              >
                <span className="contact-link-icon">
                  <Mail aria-hidden="true" />
                </span>
                <span>
                  <strong>Email</strong>
                  <small>keni232127@gmail.com</small>
                </span>
              </a>
              <a
                className="contact-link focus-ring"
                href="https://linkedin.com/in/kenean"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-icon">
                  <BriefcaseBusiness aria-hidden="true" />
                </span>
                <span>
                  <strong>LinkedIn</strong>
                  <small>linkedin.com/in/kenean</small>
                </span>
                <ArrowUpRight aria-hidden="true" className="ml-auto" />
              </a>
              <a
                className="contact-link focus-ring"
                href="https://leetcode.com/u/keniKT"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-icon">
                  <Braces aria-hidden="true" />
                </span>
                <span>
                  <strong>LeetCode</strong>
                  <small>leetcode.com/u/keniKT</small>
                </span>
                <ArrowUpRight aria-hidden="true" className="ml-auto" />
              </a>
              <a
                className="contact-link focus-ring"
                href="https://github.com/KeniKT"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-icon">
                  <Code2 aria-hidden="true" />
                </span>
                <span>
                  <strong>GitHub</strong>
                  <small>github.com/KeniKT</small>
                </span>
                <ArrowUpRight aria-hidden="true" className="ml-auto" />
              </a>
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
