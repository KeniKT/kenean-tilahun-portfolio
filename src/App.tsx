import { useEffect, useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  BriefcaseBusiness,
  Code2,
  Mail,
  Menu,
  Send,
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
type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

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
            aria-label="Kenean Tilahun, back to top"
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

function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<
      string,
      string
    >;
    const next: FormErrors = {};
    if (!data.name?.trim()) next.name = "Please enter your name.";
    if (!data.email?.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = "Please enter a valid email address.";
    if (!data.message?.trim()) next.message = "Please enter a message.";
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("Please correct the highlighted fields.");
      return;
    }
    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok)
        throw new Error(result.message || "Unable to send your message.");
      form.reset();
      setStatus("Thanks — your message has been sent.");
    } catch (error) {
      setStatus(
        error instanceof Error ? error.message : "Unable to send your message.",
      );
    } finally {
      setSending(false);
    }
  }
  const field =
    "focus-ring mt-2 w-full rounded-xl border border-[var(--border-strong)] bg-[var(--input)] px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)]";
  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          className={field}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-[var(--danger)]">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={field}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-[var(--danger)]">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${field} resize-y`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-[var(--danger)]">
            {errors.message}
          </p>
        )}
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <Button type="submit" disabled={sending}>
        {sending ? "Sending…" : "Send message"}
        <Send size={16} aria-hidden="true" />
      </Button>
      <p
        aria-live="polite"
        className="min-h-6 text-sm text-[var(--text-secondary)]"
      >
        {status}
      </p>
    </form>
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
            <Reveal className="max-w-5xl">
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
                  View selected work <ArrowDown size={17} aria-hidden="true" />
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
          </Container>
        </section>

        <section id="about" aria-labelledby="about-title" className="section">
          <Container>
            <Reveal>
              <SectionHeading eyebrow="About" intro="The craft behind the code">
                A product-minded engineer who cares about the whole system.
              </SectionHeading>
              <div className="grid gap-6 lg:grid-cols-[1.5fr_0.7fr]">
                <GlassPanel className="rounded-[var(--radius-xl)] p-7 sm:p-10">
                  <p className="text-[length:var(--text-xl)] leading-[1.7] text-[var(--text-primary)]">
                    Software Engineer and full-stack developer with four years
                    of experience delivering production-grade web and mobile
                    applications across fintech, AI, and enterprise platforms.
                    Proficient in Python, JavaScript, and TypeScript with strong
                    expertise in React, Node.js, Next.js, Django, and Flutter.
                    Passionate about clean architecture, scalable system design,
                    and building user-focused solutions that drive real impact.
                  </p>
                </GlassPanel>
                <Card>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    Education
                  </p>
                  <h3 className="mt-5 font-display text-2xl">
                    BSc Software Engineering
                  </h3>
                  <p className="mt-2 text-[var(--text-secondary)]">
                    BITS College — GPA 3.5/4.0
                  </p>
                </Card>
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
        <section id="work" aria-labelledby="work-title" className="section">
          <Container>
            <SectionHeading
              eyebrow="Selected work"
              intro="Six shipped and evolving products across client services, commerce, education, and full-stack platforms."
            >
              Work built to be used, not just viewed.
            </SectionHeading>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
              {projects.map((project, index) => (
                <Reveal
                  key={project.name}
                  className={
                    project.featured ? "lg:col-span-2" : "lg:col-span-2"
                  }
                >
                  <Card
                    className={`flex h-full min-h-[22rem] flex-col ${index < 3 ? "border-[var(--border-strong)]" : ""}`}
                  >
                    <div className="mb-auto">
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-sm tabular-nums text-[var(--gold-strong)]">
                          0{index + 1}
                        </span>
                        {project.featured && (
                          <Badge className="text-[var(--accent)]">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <h3 className="mt-8 font-display text-[length:var(--text-2xl)] leading-tight">
                        {project.name}
                      </h3>
                      <p className="mt-4 leading-7 text-[var(--text-secondary)]">
                        {project.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <Badge key={tech}>{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8 flex gap-5 border-t border-[var(--border)] pt-5">
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live demo <ArrowUpRight className="inline" size={14} />
                      </Link>
                      <Link
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        subtle
                      >
                        GitHub <ArrowUpRight className="inline" size={14} />
                      </Link>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <Divider />
        <section id="skills" aria-labelledby="skills-title" className="section">
          <Container>
            <SectionHeading eyebrow="Skills">
              Tools chosen around the problem.
            </SectionHeading>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(skillGroups).map(([group, skills]) => (
                <Reveal key={group}>
                  <Card className="h-full">
                    <h3 className="font-display text-xl">{group}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill}>{skill}</Badge>
                      ))}
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
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
              intro="Have a role, product, or collaboration in mind? Send a note and I’ll get back to you."
            >
              Let’s build something useful.
            </SectionHeading>
            <div className="grid gap-6 lg:grid-cols-2">
              <GlassPanel className="rounded-[var(--radius-xl)] p-7 sm:p-10">
                <ContactForm />
              </GlassPanel>
              <div className="flex flex-col justify-between rounded-[var(--radius-xl)] bg-[var(--accent)] p-7 text-white sm:p-10">
                <div>
                  <Mail aria-hidden="true" />
                  <h3 className="mt-8 font-display text-3xl">Prefer email?</h3>
                  <a
                    className="focus-ring mt-4 inline-block rounded-sm text-lg underline underline-offset-4"
                    href="mailto:keni232127@gmail.com"
                  >
                    keni232127@gmail.com
                  </a>
                </div>
                <div className="mt-14 flex flex-wrap gap-5">
                  <a
                    className="focus-ring rounded-sm"
                    href="https://github.com/KeniKT"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Code2 className="mr-2 inline" size={18} />
                    GitHub
                  </a>
                  <a
                    className="focus-ring rounded-sm"
                    href="https://linkedin.com/in/kenean"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BriefcaseBusiness className="mr-2 inline" size={18} />
                    LinkedIn
                  </a>
                  <a
                    className="focus-ring rounded-sm"
                    href="https://leetcode.com/u/keniKT"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LeetCode
                  </a>
                </div>
                {/* TODO: Add confirmed current location before final deployment. */}
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
