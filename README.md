# 💼 Portfolio Website

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8.svg)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success.svg)](https://mertp06.github.io/Portfolio/)

> **A modern, responsive portfolio website showcasing my projects, skills, and experience as a Computer Engineering student.**

## 🌟 Features

- ✨ **Modern UI/UX** - Clean, responsive design with smooth animations
- 🎨 **Dark Theme** - Eye-friendly dark mode interface
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Optimized with Vite and code splitting
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- 🌐 **Multi-page Navigation** - React Router for smooth page transitions
- 📊 **Skills Visualization** - Interactive skill bars and progress indicators
- 💼 **Project Showcase** - Featured projects with links and tech stacks
- 📝 **Experience Timeline** - Education and work experience display
- 📧 **Contact Form** - Easy way to get in touch

## 🛠️ Technology Stack

- **React 19.1.1** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
 ```bash
 git clone https://github.com/MertP06/Portfolio.git
 cd Portfolio
 ```

2. **Install dependencies**
 ```bash
 npm install
 ```

3. **Start development server**
 ```bash
 npm run dev
 ```

4. **Open your browser**
 Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Portfolio/
├── public/          # Static assets
│   └── profile.jpeg
├── src/
│   ├── components/  # Reusable components
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── GlowBackground.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── Reveal.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── SkillBar.tsx
│   │   └── TypingText.tsx
│   ├── data/        # Data files
│   │   └── profile.ts
│   ├── pages/       # Page components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx      # Main app component
│   ├── index.css    # Global styles
│   └── main.tsx     # Entry point
├── .github/
│   └── workflows/   # GitHub Actions workflows
├── index.html       # HTML template
├── package.json     # Dependencies
├── tsconfig.json    # TypeScript config
├── vite.config.ts   # Vite configuration
└── tailwind.config.cjs # Tailwind config
```

## 🌐 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Deployment Process

1. Push changes to `main` branch
2. GitHub Actions workflow runs automatically
3. Builds the project with Vite
4. Deploys to GitHub Pages

**Live Site:** [https://mertp06.github.io/Portfolio/](https://mertp06.github.io/Portfolio/)

### Manual Deployment

If you need to deploy manually:

1. Build the project: `npm run build`
2. The `dist/` folder contains the production files
3. Deploy `dist/` contents to your hosting service

## 🎨 Customization

### Update Profile Information

Edit `src/data/profile.ts` to update:
- Personal information
- Skills and experience
- Projects
- Education
- Contact details

### Styling

- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.cjs`
- Component styles: Inline Tailwind classes

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mert Polat**

- GitHub: [@MertP06](https://github.com/MertP06)
- LinkedIn: [Mert Polat](https://www.linkedin.com/in/mert-polat-b05195302/)
- Email: mert06polat@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

**⭐ Star this repository if you find it helpful!**
