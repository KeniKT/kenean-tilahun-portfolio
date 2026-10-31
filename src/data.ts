export const navItems = [
  { id: "about", label: "About" },
  { id: "work", label: "Selected work" },
  { id: "experience", label: "Experience" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
] as const;

export const experience = [
  {
    company: "ZK Flower Export",
    role: "Web Developer",
    period: "2025–2026",
    description:
      "Built and delivered a professional business website to showcase products and services for an export-oriented company. Implemented responsive layouts and optimized performance to meet production standards. Worked closely with stakeholders to translate business requirements into a functional and visually consistent web solution.",
  },
  {
    company: "BM Coffee Export",
    role: "Web Developer",
    period: "2025–2026",
    description:
      "Designed, developed, and deployed the official BM Coffee Export website, delivering a production-ready platform that strengthens the company's online presence. Managed the full development lifecycle including responsive UI implementation, hosting setup, domain and DNS configuration, and resolution of production-level issues. Ensured cross-device compatibility and reliable performance across modern browsers.",
  },
  {
    company: "Mercor",
    role: "AI Trainer",
    period: "2025–2026",
    description:
      "Trained AI models focused on API behavior and developer tooling by authoring and evaluating code samples across REST API design, GitHub workflows, and version control best practices. Delivered structured, expert-level feedback on code correctness, documentation quality, and real-world applicability, directly shaping model responses for developer-facing use cases.",
  },
  {
    company: "Outlier",
    role: "AI Trainer",
    period: "2024–2025",
    description:
      "Trained and evaluated computer vision models by annotating, labeling, and reviewing large-scale image and video datasets. Delivered high-precision training data through systematic object detection, segmentation, and classification tasks, directly improving model accuracy and reliability across visual recognition benchmarks.",
  },
  {
    company: "E-Learning Platform",
    role: "Moodle Developer",
    period: "2022–2023",
    description:
      "Developed and maintained interactive e-learning modules for over six technical and mathematics courses using the Moodle platform. Built and customized course components using Moodle's module programming interface, improving content structure, interactivity, and accessibility for a broad student base.",
  },
  {
    company: "BITS College",
    role: "Teaching Assistant",
    period: "2021–2023",
    description:
      "Delivered hands-on academic support across Computer Systems, Python programming, and Java Object-Oriented Programming courses. Guided students through lab sessions, one-on-one mentoring, and practical debugging exercises, consistently improving comprehension and course performance outcomes.",
  },
  {
    company: "Data Entry",
    role: "Data Entry Clerk",
    period: "2021–2022",
    description:
      "Performed accurate data entry and maintained records across digital systems to ensure consistency and integrity. Organized, verified, and updated information while meeting deadlines and supporting administrative workflows. Developed attention to detail when handling structured information.",
  },
] as const;

export const projects = [
  {
    name: "Tsion Beauty Salon",
    category: "Client services",
    year: "2026",
    description:
      "Premium single-page site for a Falls Church, VA beauty salon.",
    stack: ["React 19", "Vite", "Tailwind CSS 4", "Framer Motion", "Lucide"],
    live: "https://tsion-beauty-salon.vercel.app",
    repo: "https://github.com/KeniKT/tsion-beauty-salon",
    image: "/images/projects/tsion-beauty-salon.jpg",
    featured: true,
  },
  {
    name: "Lydda Market & Bakery",
    category: "Commerce",
    year: "2026",
    description:
      "Bilingual, bento-layout site for a Falls Church, VA bakery with a lightweight procedural 3D hero and validated catering-inquiry form.",
    stack: [
      "React 19",
      "Vite",
      "Framer Motion",
      "Lenis",
      "React Hook Form",
      "Zod",
    ],
    live: "https://lydda-market-bakery.vercel.app",
    repo: "https://github.com/KeniKT/lydda-market-bakery",
    image: "/images/projects/lydda-market-bakery.jpg",
    featured: true,
  },
  {
    name: "BookShare",
    category: "Full-stack platform",
    year: "2026",
    description:
      "Full-stack book lending/rental platform with authentication, listings, and a rental request workflow.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Django REST API backend",
    ],
    live: "https://book-share-hazel.vercel.app",
    repo: "https://github.com/KeniKT/BookShare",
    image: "/images/projects/bookshare.jpg",
    featured: true,
  },
  {
    name: "NUNU Traditional Clothing (ኑኑ የባህል አልባሳት)",
    category: "Fashion & commerce",
    year: "2026",
    description:
      "Bilingual (Amharic/English) concept site for an Ethiopian fashion brand, with a bespoke-order journey and culturally grounded editorial art direction.",
    stack: ["React 19", "Vite", "Tailwind CSS 4", "Framer Motion", "Lucide"],
    live: "https://nunu-traditional-clothing.vercel.app",
    repo: "https://github.com/KeniKT/nunu-traditional-clothing",
    image: "/images/projects/nunu-traditional-clothing.jpg",
    featured: false,
  },
  {
    name: "ZK Flowers",
    category: "Export & commerce",
    year: "2026",
    description:
      "Multi-page site for a premium flower export company — product catalog, production process, sustainability practices, and global export regions across seven routed pages.",
    stack: [
      "React 18",
      "React Router 7",
      "Vite",
      "Tailwind CSS",
      "Lucide React",
    ],
    live: "https://zkflowers.com",
    repo: "https://github.com/KeniKT/zk-flowers",
    image: "/images/projects/zk-flowers.jpg",
    featured: false,
  },
  {
    name: "BM Coffee Export",
    category: "Export & commerce",
    year: "2026",
    description:
      "Production-ready business website for BM Coffee Export, built to present the company clearly and reliably across modern devices.",
    stack: ["React", "Vite", "Tailwind CSS"],
    live: "https://bm-motors.vercel.app",
    repo: null,
    image: "/images/projects/bm-coffee-export.jpg",
    featured: false,
  },
] as const;

export const skillGroups = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "Django", "REST API design"],
  Mobile: ["Flutter"],
  Other: [
    "Git/GitHub workflows",
    "CI basics",
    "DNS/domain/hosting configuration",
    "Moodle development",
  ],
} as const;
