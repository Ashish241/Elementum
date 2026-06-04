# Elementum

Elementum is a premium landing page experience built for modern creative teams of strategists, designers, communicators, and researchers. The project combines elegant typography, refined color palettes, smooth scroll-triggered animations, and responsive layouts.

---

## 🚀 Tech Stack

- **React** (v19) + **TypeScript**
- **Vite** for fast development and production builds
- **Tailwind CSS** (v3) + **PostCSS** for styling
- **GSAP** + **ScrollTrigger** for scroll-driven animation
- **Lucide React** for icons
- **@fontsource** for Playfair Display and Inter typography
- **npm workspaces** with a root-level workspace for `app`

---

## 📁 Project Structure

```text
Elementum/
├── app/                  # Main Vite + React + TypeScript application
│   ├── public/           # Static assets (images, icons, vectors)
│   ├── src/
│   │   ├── components/   # Shared UI components and Shadcn UI wrappers
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility helpers
│   │   ├── pages/        # Page-level components
│   │   ├── sections/     # Landing page sections
│   │   ├── App.css       # Application-specific styles
│   │   ├── App.tsx       # Main layout and routing
│   │   ├── index.css     # Global styles and Tailwind directives
│   │   └── main.tsx      # React entry point
│   ├── package.json      # App package manifest
│   ├── postcss.config.js # PostCSS configuration
│   ├── tailwind.config.js# Tailwind configuration
│   ├── tsconfig.app.json # App TypeScript config
│   ├── tsconfig.json     # App-wide TypeScript config
│   └── vite.config.ts    # Vite configuration
├── package.json          # Root npm workspace manifest
└── README.md             # Project documentation
```

---

## ⚙️ Getting Started

From the repository root, install dependencies and run the app using the workspace scripts.

```bash
npm install
npm run dev
```

If the app does not start from the root, you can also run the commands from the `app` folder directly:

```bash
cd app
npm install
npm run dev
```

---

## 📦 Available Scripts

Run from the repository root:

- `npm run dev` — start the development server for `app`
- `npm run build` — build the production bundle for `app`
- `npm run preview` — preview the production build locally

---

## ✨ Core Features

- Responsive landing page layout designed for desktop, tablet, and mobile
- Smooth scroll reveal animations with GSAP and ScrollTrigger
- Elegant typography using Playfair Display for headings and Inter for body text
- Modular section-based structure for easy content reordering
- Modern UI components using Radix primitives and Shadcn-inspired wrappers
- Hover-enabled image reveal and subtle motion interactions

---

## 📌 Notes

- The root `package.json` uses npm workspaces to manage the `app` package.
- The main application lives in `app/`, so development and build commands target that workspace.
- Use `npm run lint` inside `app/` if you want to run ESLint on the React source.
