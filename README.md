# Grace Mae Gozali - Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, glass morphism design, and a professional layout.

## 🚀 Tech Stack

- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool & Dev Server
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## ✨ Features

- **Responsive Design** - Works on all devices
- **Smooth Animations** - Powered by Framer Motion
- **Glass Morphism UI** - Modern design aesthetic
- **Custom Cursor** - Interactive cursor effect (desktop only)
- **Project Showcase** - Filterable project gallery with modals
- **Contact Form** - Functional contact section
- **Animated Background** - Dynamic floating particles

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to the portfolio directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── Hero.tsx        # Hero/landing section
│   │   ├── About.tsx       # About section with skills
│   │   ├── Projects.tsx    # Project showcase
│   │   ├── Contact.tsx     # Contact form & info
│   │   ├── Footer.tsx      # Footer component
│   │   └── CustomCursor.tsx # Custom cursor effect
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles & Tailwind
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Colors

The color scheme can be customized in `src/index.css` under the `@theme` block.

### Projects

Update the `projects` array in `src/components/Projects.tsx` to add/modify projects.

### Personal Info

Update personal information in:
- `src/components/Hero.tsx` - Name, tagline, description
- `src/components/About.tsx` - Bio, skills
- `src/components/Contact.tsx` - Contact info, social links
- `src/components/Footer.tsx` - Quick links

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

---

Created with ❤️ by Grace Mae Gozali
