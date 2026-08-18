import BMImage from '../assets/BM.webp';
import ZKImage from '../assets/ZK.webp';
import BookShareImage from '../assets/BookShare.webp';
import SiraImage from '../assets/sira.webp';

export const profile = {
  name: 'Kenean Tilahun',
  role: 'Software Engineer',
  email: 'keni232127@gmail.com',
  phone: '+251917557529',
  location: 'Addis Ababa, Ethiopia',
  availability: 'Open to software engineering opportunities',
};

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/KeniKT' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kenean/' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/keniKT/' },
];

export const proof = [
  { value: '4+', label: 'Years engineering', detail: 'Web, mobile, fintech & AI' },
  { value: '2B+', label: 'Birr transaction scale', detail: 'SantimPay platform' },
  { value: '150K+', label: 'Monthly orders', detail: 'BeU Delivery platform' },
  { value: '3', label: 'Product surfaces', detail: 'Frontend, backend & mobile' },
];

export const projects = [
  {
    id: 'kinderbeam',
    title: 'KinderBeam',
    eyebrow: 'Full-stack administration platform',
    description: 'A kindergarten operations system that brings student, user, and role-based workflows into one secure product.',
    challenge: 'Coordinate authenticated workflows across multiple roles while keeping dashboard data useful and backend boundaries secure.',
    outcome: 'Built a Next.js 15 frontend with server-side proxy routes, JWT authentication, RBAC, real-time dashboards, and a Django REST API.',
    technologies: ['Next.js 15', 'React', 'Django REST', 'JWT', 'RBAC', 'Recharts'],
    visual: 'dashboard',
    featured: true,
  },
  {
    id: 'bookshare',
    title: 'BookShare',
    eyebrow: 'Full-stack community platform',
    image: BookShareImage,
    imageWidth: 1500,
    imageHeight: 761,
    description: 'A responsive book-sharing product for discovering titles, managing collections, and participating through authenticated profiles.',
    challenge: 'Coordinate authentication, persistent content, discovery, and collection workflows inside a simple product experience.',
    outcome: 'Delivered the application with typed React, Firebase-backed data, authentication, and a maintainable Vite architecture.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Vite'],
    sourceUrl: 'https://github.com/KeniKT/bookshare',
    liveUrl: 'https://book-share-hazel.vercel.app',
    featured: true,
  },
  {
    id: 'sira',
    title: 'SIRA',
    eyebrow: 'Cross-platform mobile product',
    image: SiraImage,
    imageWidth: 1200,
    imageHeight: 800,
    description: 'A two-sided freelancing application connecting employers and skilled professionals through real-time workflows.',
    challenge: 'Design understandable flows for authentication, job activity, data storage, and messaging across two distinct user roles.',
    outcome: 'Implemented the Flutter application with Firebase services and BLoC-based state management.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'BLoC', 'Messaging'],
    sourceUrl: 'https://github.com/KeniKT/sira',
    featured: true,
  },
];

export const additionalProjects = [
  {
    id: 'bm-coffee', title: 'BM Coffee Export', period: '2025—2026', image: BMImage, imageWidth: 1500, imageHeight: 754,
    text: 'Owned the production website lifecycle—from responsive UI and stakeholder communication to deployment, hosting, DNS, browser QA, and issue resolution.',
    technologies: ['React', 'TypeScript', 'Vercel', 'DNS'], liveUrl: 'https://bmcoffeeexport.com',
  },
  {
    id: 'zk-flowers', title: 'ZX Flower Export', period: '2025—2026', image: ZKImage, imageWidth: 1500, imageHeight: 757,
    text: 'Translated business requirements into a responsive export-company website with consistent presentation, production deployment, and performance-conscious implementation.',
    technologies: ['React', 'TypeScript', 'Responsive UI'], liveUrl: 'https://zk-flowers.vercel.app/',
  },
];

export const skills = [
  { group: 'Frontend', accent: '01', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 'Tailwind CSS'] },
  { group: 'Backend', accent: '02', items: ['Python', 'Node.js', 'Django', 'Django REST Framework', 'REST APIs', 'Microservices'] },
  { group: 'Mobile', accent: '03', items: ['Flutter', 'Dart', 'BLoC', 'Firebase', 'Messaging'] },
  { group: 'Data & delivery', accent: '04', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Git', 'GitHub', 'Vercel', 'Render'] },
  { group: 'AI & data quality', accent: '05', items: ['Computer Vision', 'Object Detection', 'Segmentation', 'Classification', 'Dataset Evaluation'] },
];

export const experience = [
  {
    period: '2025—2026', role: 'Web Developer', company: 'BM Coffee Export · ZX Flower Export', type: 'Production web',
    impact: 'End-to-end delivery', text: 'Built and supported two production business websites, translating stakeholder needs into responsive interfaces and owning deployment, hosting, DNS, and production issue resolution.',
    technologies: ['React', 'TypeScript', 'Responsive UI', 'Vercel', 'DNS'],
  },
  {
    period: '2024—2025', role: 'AI Trainer', company: 'Mercor · Outlier', type: 'AI systems',
    impact: 'Code + vision data', text: 'Evaluated REST API design, GitHub workflows, code correctness, developer tooling, and documentation quality; also worked with image and video datasets for object detection, segmentation, and classification.',
    technologies: ['REST APIs', 'GitHub', 'Code Evaluation', 'Computer Vision', 'Data Quality'],
  },
  {
    period: '2023—2024', role: 'Full Stack Developer', company: 'SantimPay', type: 'Fintech',
    impact: '2B+ Birr processed', text: 'Contributed to a high-volume digital payments platform across POS systems, a UPI wallet, payment gateway integrations, a voucher product, and microservices architecture.',
    technologies: ['React', 'Redux', 'Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    period: 'Production engagement', role: 'Full Stack Developer', company: 'BeU Delivery', type: 'Delivery platform',
    impact: '150K+ monthly orders', text: 'Built restaurant and customer features, strengthened order workflows, optimized database access, and developed API endpoints for peak-demand operation.',
    technologies: ['Python', 'Django', 'React', 'REST APIs', 'Database Optimization'],
  },
];

export const approach = [
  { number: '01', title: 'Understand the operating reality', text: 'Start with users, constraints, data, and the failure modes that matter—not just the interface request.' },
  { number: '02', title: 'Design the system boundary', text: 'Shape maintainable components, API contracts, state, permissions, and deployment responsibilities before complexity compounds.' },
  { number: '03', title: 'Ship, observe, improve', text: 'Test across devices, resolve production issues, optimize what measurement exposes, and leave the system easier to maintain.' },
];

export const education = {
  school: 'BITS College', program: 'Software Engineering', period: '2022—2026', location: 'Addis Ababa, Ethiopia',
  detail: 'Software engineering study complemented by teaching and mentoring across Computer Systems, Python, Java OOP, and technical coursework.',
};
