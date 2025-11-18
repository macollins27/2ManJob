# It's a 2 Man Job - Marketing Website

A modern, fluid, single-page marketing website for a local handyman and small renovations business built with React, TypeScript, Tailwind CSS, and Framer Motion.

![Hero Section](https://github.com/user-attachments/assets/a1c2c670-fa6a-4bed-90b6-f5d89dcb56cb)

## Features

- 🎨 **Modern SaaS-Style Design** - Contemporary, polished landing page aesthetic
- ✨ **Smooth Animations** - Subtle Framer Motion animations throughout
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ♿ **Accessible** - ARIA attributes, keyboard navigation, respects prefers-reduced-motion
- 🎯 **Interactive Elements** - Before/after sliders, FAQ accordion, form validation
- 🚀 **Fast Performance** - Optimized build with Vite

## Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript 5.9** - Type-safe code
- **Vite 7** - Fast build tool and dev server
- **Tailwind CSS 3** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Hook Form** - Form validation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/macollins27/2ManJob.git
cd 2ManJob
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Sticky navigation
│   ├── Hero.tsx        # Hero section with CTA
│   ├── Services.tsx    # Services grid
│   ├── Process.tsx     # 3-step process
│   ├── Projects.tsx    # Before/after projects
│   ├── About.tsx       # About section
│   ├── Testimonials.tsx # Customer reviews
│   ├── FAQ.tsx         # Accordion FAQ
│   ├── Contact.tsx     # Contact form
│   └── ...
├── hooks/              # Custom React hooks
│   ├── useScrollSpy.ts
│   └── usePrefersReducedMotion.ts
├── data/               # Static data
│   ├── services.ts
│   ├── testimonials.ts
│   ├── faq.ts
│   └── projects.ts
├── types/              # TypeScript types
├── utils/              # Utility functions
└── index.css           # Global styles & Tailwind

```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: {
    DEFAULT: '#0F172A',  // Deep navy
    soft: '#1D2940',
  },
  accent: {
    DEFAULT: '#FBBF24',  // Warm amber
    soft: '#F59E0B',
  },
  // ...
}
```

### Content

Update the data files in `src/data/`:
- `services.ts` - Service offerings
- `testimonials.ts` - Customer reviews
- `faq.ts` - FAQ items
- `projects.ts` - Before/after projects

### Contact Information

Update contact details in:
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/components/StickyCtaBar.tsx`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or inquiries about this project, please contact:
- Email: info@2manjob.com
- Phone: (555) 123-4567
