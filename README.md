# Elementum

Elementum is a premium, state-of-the-art landing page website designed for a modern creative team consisting of strategists, designers, communicators, and researchers. The website features rich aesthetics, sleek typography, harmonious HSL palettes, smooth ScrollTrigger-based animations, and responsive layouts.

---

## 🚀 Tech Stack & Libraries

The website is built using the following modern web technologies:

- **Core**: React (v19) + TypeScript + Vite
- **Styling**: TailwindCSS (v3) + PostCSS
- **Animations**: GSAP (GreenSock Animation Platform) + ScrollTrigger plugin + Tailwind Animate
- **Icons**: Lucide React
- **Typography**: Playfair Display (Headers) & Inter (Body text) via `@fontsource`

---

## 📁 Project Structure

The project has its main application files nested within the `/app` directory:

```text
Elementum/
├── app/                  # Main Vite + React + TypeScript workspace
│   ├── public/           # Static assets (images, team photos, vectors)
│   ├── src/
│   │   ├── components/   # Shared UI components (Navbar, Footer, Shadcn UI elements)
│   │   ├── hooks/        # Custom React hooks
│   │   ├── pages/        # Main pages (Home page template)
│   │   ├── sections/     # Modular section components:
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TomorrowSection.tsx
│   │   │   ├── ProgressSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── NewsletterSection.tsx
│   │   ├── App.css       # App-specific overrides
│   │   ├── App.tsx       # Main page layout coordinator
│   │   ├── index.css     # Global style sheet and custom tailwind layers
│   │   └── main.tsx      # Application entry point
│   ├── package.json      # Node.js project manifests
│   └── vite.config.ts    # Vite bundler configurations
└── README.md             # Project documentation (this file)
```

---

## 🛠️ Installation & Setup

Follow these steps to run the website locally on your system:

### 1. Prerequisite
Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed on your system.

### 2. Navigate to the App directory
Open your terminal in the root of the project and navigate to the `app` directory:
```bash
cd app
```

### 3. Install Dependencies
Run the install command to fetch all required libraries:
```bash
npm install
```

### 4. Run the Development Server
Launch the local development environment:
```bash
npm run dev
```
Once started, the server will output the local address, typically:
`http://localhost:3000/`

---

## 🛠️ Production Build & Preview

To compile the application into static HTML/JS/CSS assets for deployment:

1. **Build the production bundle**:
   ```bash
   npm run build
   ```
2. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## ✨ Features & Polish

- **Vibrant Aesthetic**: Handpicked HSL-based color tokens, curated typography, and subtle layout highlights (`highlight-yellow`, `highlight-pink`, `highlight-green`).
- **Dynamic Scroll Animations**: Interactive visual components powered by GSAP and ScrollTrigger animate into view smoothly as you scroll down.
- **Spotlight Image Zoom Hover Effects**: Every image (floating team avatar circles, meeting graphics, working illustrations, client avatars) zooms in smoothly on hover, remaining perfectly masked by its parent boundaries.
- **Responsive Layout**: Designed to adapt seamlessly across mobile, tablet, and desktop screens.
