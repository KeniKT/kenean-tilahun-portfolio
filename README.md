# Kenean Tilahun - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full-Stack Developer. Built with React, featuring smooth animations, dynamic content, and a professional design system.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Styling](#styling)
- [Performance Optimizations](#performance-optimizations)
- [Accessibility](#accessibility)
- [Browser Support](#browser-support)
- [Contact Form Integration](#contact-form-integration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)

## Overview

This portfolio website serves as a comprehensive showcase of my professional experience, technical skills, and completed projects. The site is designed with a focus on user experience, performance, and accessibility, featuring a dark theme with strategic use of red accents throughout the interface.

The website includes sections for personal introduction, professional experience, technical skills demonstration, project showcases, and direct contact functionality.

## Features

### Core Functionality
- **Single Page Application (SPA)** with client-side routing
- **Responsive Design** optimized for all device sizes
- **Dark Theme** with consistent color scheme
- **Smooth Scrolling** and page transitions
- **Interactive Animations** using Framer Motion
- **Contact Form** with EmailJS integration
- **CV/Resume Download** functionality

### User Experience
- **Scroll-triggered Animations** for enhanced engagement
- **Loading States** and error handling
- **Keyboard Navigation** support
- **Screen Reader** compatibility
- **Performance Optimized** with lazy loading
- **Cross-browser Compatible**

### Professional Presentation
- **Skills Visualization** with animated progress bars
- **Project Filtering** by category
- **Timeline-based Experience** display
- **Social Media Integration**
- **Professional Contact** information

## Technology Stack

### Frontend Framework
- **React 18** - Component-based UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and development server

### Styling & Design
- **Tailwind CSS** - Utility-first CSS framework
- **CSS3** - Custom animations and transitions
- **Google Fonts** - Typography (Inter, Poppins, Roboto)

### Animations & Interactions
- **Framer Motion** - React animation library
- **Lucide React** - Icon library
- **CSS Animations** - Custom hover effects and transitions

### Form Handling
- **EmailJS** - Email service integration
- **React Hooks** - State management

### Development Tools
- **ESLint** - Code linting
- **Modern JavaScript** - ES6+ features
- **Intersection Observer API** - Scroll animations

## Project Structure

```
kenean-tilahun-portfolio/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   └── pages/
│       ├── About.jsx
│       ├── Contact.jsx
│       ├── Experience.jsx
│       ├── Home.jsx
│       ├── Projects.jsx
│       └── Skills.jsx
├── App.css
├── App.jsx
├── index.css
├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Modern web browser

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/KeniKT/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory for EmailJS configuration:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open browser**
   Navigate to `http://localhost:5173`

## Usage

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Navigation
The website features smooth navigation between sections:
- **Home** - Landing page with introduction
- **About** - Personal story and background
- **Skills** - Technical proficiencies
- **Experience** - Professional timeline
- **Projects** - Portfolio showcase
- **Contact** - Contact form and information

## Components

### Core Components

#### Home.jsx
- Hero section with animated introduction
- Social media links integration
- Call-to-action buttons
- Scroll indicator
- Integrated all other sections

#### About.jsx
- Personal narrative with timeline
- Interactive story elements
- Scroll-triggered animations
- Background visual effects

#### Skills.jsx
- Animated skill progress bars
- Technology categorization
- Core values presentation
- Interactive hover effects

#### Experience.jsx
- Professional timeline
- Role descriptions and responsibilities
- Technology tags
- Duration indicators

#### Projects.jsx
- Project showcase with filtering
- Live demo and source code links
- Technology stack display
- Featured project highlighting

#### Contact.jsx
- Functional contact form
- Social media integration
- Location and contact information
- EmailJS integration

### Shared Features
- **Scroll Animation Hook** - Reusable intersection observer
- **Responsive Design** - Mobile-first approach
- **Loading States** - User feedback during interactions
- **Error Handling** - Graceful error management

## Styling

### Design System
- **Color Palette**: Dark theme with red accents
  - Primary: `#900C0D` (Red)
  - Background: `#0f172a` (Slate-900)
  - Text: `#ffffff` (White)
  - Accent: Various shades of red and gray

- **Typography**:
  - Primary: Inter
  - Headings: Poppins
  - Body: Roboto

- **Spacing**: Consistent Tailwind spacing scale
- **Animations**: Smooth transitions and micro-interactions

### Responsive Breakpoints
```css
xs: 475px    /* Extra small devices */
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large devices */
```

## Performance Optimizations

### Implementation
- **Lazy Loading** - Images and components
- **Code Splitting** - Route-based splitting
- **Intersection Observer** - Efficient scroll animations
- **Optimized Images** - Compressed project images
- **Minimal Bundle Size** - Tree-shaking and optimization

### Metrics
- Fast loading times across all devices
- Smooth 60fps animations
- Minimal layout shifts
- Efficient memory usage

## Accessibility

### Features
- **Semantic HTML** - Proper heading hierarchy
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Focus Management** - Visible focus indicators
- **Color Contrast** - WCAG AA compliant
- **Alternative Text** - Image descriptions

### Testing
- Screen reader compatibility
- Keyboard-only navigation
- High contrast mode support
- Mobile accessibility

## Browser Support

### Supported Browsers
- **Chrome** 80+
- **Firefox** 78+
- **Safari** 13+
- **Edge** 80+

### Features Used
- CSS Grid and Flexbox
- IntersectionObserver API
- Modern JavaScript (ES6+)
- CSS Custom Properties

## Contact Form Integration

### EmailJS Configuration
The contact form uses EmailJS for email delivery:

1. **Service Setup**
   - EmailJS service configuration
   - Template creation
   - Public key authentication

2. **Form Features**
   - Real-time validation
   - Loading states
   - Success/error feedback
   - Spam protection

3. **Email Template**
   - Professional formatting
   - Contact information inclusion
   - Automated responses

## Deployment

### Recommended Platforms
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**

### Build Process
```bash
npm run build        # Creates optimized production build
npm run preview      # Test production build locally
```

### Environment Variables
Ensure all environment variables are configured in your deployment platform:
- EmailJS credentials
- Any API keys
- Base URLs if needed

## Contributing

### Development Guidelines
1. Follow existing code style and patterns
2. Maintain responsive design principles
3. Test across multiple browsers and devices
4. Ensure accessibility standards are met
5. Update documentation for new features

### Commit Convention
```
feat: add new feature
fix: bug fix
docs: documentation updates
style: formatting changes
refactor: code refactoring
test: adding tests
```

## Contact

**Kenean Tilahun**
- **Email**: keni232127@gmail.com
- **Phone**: +251917557529
- **Location**: Addis Ababa, Ethiopia
- **GitHub**: [KeniKT](https://github.com/KeniKT)
- **LinkedIn**: [kenean](https://www.linkedin.com/in/kenean/)
- **LeetCode**: [keniKT](https://leetcode.com/u/keniKT/)

---

*This portfolio represents my journey as a Full-Stack Developer and showcases my commitment to creating high-quality, user-focused digital experiences.*