# Sridhar's Portfolio 🚀

A high-performance, visually stunning portfolio website built with a cyberpunk aesthetic. This project showcases frontend expertise, 3D visualizations, and interactive components.

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://sridhar-dev-portfolio.vercel.app)
[![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20TS%20%7C%20Tailwind-blue?style=for-the-badge)](https://sridhar-dev-portfolio.vercel.app)

---

## 🌟 Overview

This portfolio is designed to be more than just a resume; it's an interactive experience. It features a "terminal-first" design philosophy, blending retro-futurism with modern web technologies.

**Live Demo:** [sridhar-dev-portfolio.vercel.app](https://sridhar-dev-portfolio.vercel.app)

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/) for ultra-fast development and optimized builds.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for a utility-first, responsive design.
- **Animations:** [Framer Motion](https://www.framer.com/motion/) for fluid, scroll-based, and interactive animations.
- **3D Graphics:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) & [Drei](https://github.com/pmndrs/drei) (Three.js) for the immersive star background and interactive planets.
- **Backend/Database:** [Supabase](https://supabase.com/) for contact form handling and data persistence.
- **Icons:** [Lucide React](https://lucide.dev/) for clean, consistent iconography.

---

## 🚀 Key Features

- **Interactive 3D Visuals:** A dynamic star field and planetary systems that respond to user interaction.
- **Command Palette:** `Ctrl+K` (or Cmd+K) access to a custom command palette for fast navigation across sections.
- **Live Interactive Terminal:** A retro-style terminal component that prints real-time status updates and system information.
- **Code Guessing Game:** An integrated mini-game to engage visitors and showcase logic implementation.
- **Cyberpunk UI Layers:** Custom scanlines, data streams, and ambient lighting effects for a deep, immersive theme.
- **Responsive & Optimized:** Mobile-first layout with lazy loading for "below-the-fold" components to ensure high performance (Lighthouse optimized).
- **Custom Cursor Trail:** Interactive canvas-based cursor trailing effect.

---

## 📁 Project Structure

```text
src/
├── Assets/             # Static assets (Resume, Profile Image)
├── components/         # Atomic and complex UI components
│   ├── About.tsx       # Profile details
│   ├── CodeGuessGame   # Mini-game logic & UI
│   ├── CommandPalette  # Global navigation utility
│   ├── Hero.tsx        # Landing section with 3D elements
│   └── ...             # Other specialized components
├── contexts/           # React Contexts (e.g., Theme/Global State)
├── App.tsx             # Main application entry and layout
├── main.tsx            # DOM mounting and initial setup
└── index.css           # Global styles and Tailwind directives
```

---

## ⚙️ Installation & Usage

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/sr1-dev-1205/PortfolioWebsite.git
   ```
2. Navigate to the project directory:
   ```bash
   cd PortfolioWebsite
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production

```bash
npm run build
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ⚡ by [Sridhar](https://github.com/sr1-dev-1205)
