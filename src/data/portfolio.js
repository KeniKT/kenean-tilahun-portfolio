import BMImage from '../assets/BM.png';
import ZKImage from '../assets/ZK.png';
import BookShareImage from '../assets/BookShare.png';
import SiraImage from '../assets/sira.png';

export const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/KeniKT' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kenean/' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/keniKT/' },
];

export const projects = [
  {
    id: 'bm-coffee',
    title: 'BM Coffee Export',
    eyebrow: 'Production website · 2025',
    image: BMImage,
    description: 'A market-facing digital home for an Ethiopian coffee exporter, designed and shipped from interface to domain configuration.',
    challenge: 'Turn a product-led export business into a clear, credible web presence that works reliably across devices and international audiences.',
    outcome: 'Owned responsive UI delivery, production deployment, hosting, DNS configuration, browser QA, and post-launch issue resolution.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'DNS'],
    liveUrl: 'https://bmcoffeeexport.com',
    featured: true,
  },
  {
    id: 'zk-flowers',
    title: 'ZK Flowers',
    eyebrow: 'Business platform · 2025',
    image: ZKImage,
    description: 'A polished product showcase for an export-oriented flower company, translating stakeholder goals into a responsive experience.',
    challenge: 'Present a visual product range without sacrificing clarity, speed, or consistency across mobile and desktop.',
    outcome: 'Built the responsive layouts, established a consistent visual system, and optimized the production experience.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
    liveUrl: 'https://zk-flowers.vercel.app/',
    featured: true,
  },
  {
    id: 'bookshare',
    title: 'BookShare',
    eyebrow: 'Full-stack platform · 2022—23',
    image: BookShareImage,
    description: 'A book-sharing product where people can discover titles, manage collections, and participate through authenticated profiles.',
    challenge: 'Coordinate authentication, persistent content, discovery, and collection workflows inside a simple, responsive product.',
    outcome: 'Delivered the full-stack application with typed React, Firebase-backed data, authentication, and a maintainable Vite architecture.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Vite'],
    sourceUrl: 'https://github.com/KeniKT/bookshare',
    liveUrl: 'https://book-share-hazel.vercel.app',
    featured: true,
  },
  {
    id: 'sira',
    title: 'SIRA',
    eyebrow: 'Mobile product · 2024—25',
    image: SiraImage,
    description: 'A two-sided freelancing application connecting employers and skilled professionals through real-time job workflows.',
    challenge: 'Design secure, understandable flows for job posting, bidding, messaging, and notifications across two distinct user roles.',
    outcome: 'Implemented authentication, real-time Firestore data, notifications, messaging, and scalable state management in Flutter.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Provider'],
    sourceUrl: 'https://github.com/KeniKT/sira',
    featured: false,
  },
];

export const capabilities = [
  { number: '01', title: 'Product-minded frontend', text: 'Interfaces with purposeful hierarchy, responsive behavior, and interaction details that support the task.' },
  { number: '02', title: 'Full-stack delivery', text: 'Applications spanning typed frontend architecture, APIs, authentication, data, and maintainable integrations.' },
  { number: '03', title: 'Production ownership', text: 'Deployment, domains, browser QA, performance work, and the unglamorous details that make software dependable.' },
  { number: '04', title: 'Mobile engineering', text: 'Cross-platform Flutter products with real-time data, thoughtful state management, and user-centered flows.' },
];

export const stack = [
  { group: 'Interfaces', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vue.js'] },
  { group: 'Applications', items: ['Flutter', 'Dart', 'Node.js', 'Python', 'Django'] },
  { group: 'Data & delivery', items: ['Firebase', 'Firestore', 'Vite', 'Vercel', 'Git'] },
];

export const experience = [
  { period: '2025—Now', role: 'Web Developer', company: 'BM Coffee Export', text: 'Designed, built, deployed, and now maintain the company’s production website, including its responsive interface, hosting, domain configuration, and reliability.' },
  { period: '2024—2025', role: 'Community Engagement Lead', company: 'GDGoC · BITS College', text: 'Led developer events, technical workshops, bootcamps, and collaborative learning initiatives for the campus technology community.' },
  { period: '2022—2025', role: 'Teaching Assistant', company: 'BITS College', text: 'Supported Computer Systems, Python, and Java OOP courses through labs, mentoring, feedback, and hands-on debugging guidance.' },
];

export const contact = {
  email: 'keni232127@gmail.com',
  phone: '+251917557529',
  location: 'Addis Ababa, Ethiopia',
};
