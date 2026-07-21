# Engineer Vector ⚡

> **Level Up Every Day** — Daily engineering content, interview prep, MCQs, and memes for software engineers, students, and developers.

![Next.js](https://img.shields.io/badge/Next.js-14%2B-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-Latest-purple?style=for-the-badge)

---

## 🎯 About Engineer Vector

**Engineer Vector** is built on a simple philosophy: *small improvements every day create extraordinary engineers (consistency > intensity)*.

Most engineers consume random content — a reel here, a thread there — without structure. Engineer Vector delivers a curated, daily rep of engineering knowledge right inside the channel:
- **Daily MCQs**: Questions from JavaScript, React, Node.js, Python, SQL, DBMS, OS, Computer Networks, and System Design.
- **Relatable Engineering Memes**: Programming humor because 2 AM debugging deserves a laugh.
- **In-Channel Poll MCQs**: Quick-fire interactive polls with live community vote results.

---

## ✨ Features & Sections

- **Header & Navigation**: Sticky header with glassmorphism, brand logo, and Telegram CTAs.
- **Launch Countdown**: Real-time interactive countdown timer targeting `August 1, 2026`.
- **Start With Why**: Highlighting the problem, solution, and core mission.
- **What You Get Today**: Highlighted feature cards with statistics, tags, and equal-height layout formatting.
- **Automated Ecosystem Roadmap**: Timeline covering upcoming DSA challenges, System Design, AI updates, and off-campus job drives.
- **Built For & Join With Us**: Target audience specifications and direct **Team Contact WhatsApp integration** (`+91 9581193026`).
- **Interactive FAQ Accordion**: Expandable questions covering domain topics, time commitment, and roadmaps.
- **Social ShareBar**: Instant sharing buttons for WhatsApp, LinkedIn, and Clipboard copy referencing `https://t.me/engineer_vector`.

---

## 🛠️ Tech Stack & Design System

- **Framework**: [Next.js 14+ (App Router)](https://nextjs.org/)
- **Language**: TypeScript (`.tsx`)
- **Styling**: Tailwind CSS v4 & custom dark mode tokens (`#0a0a0a` background base, `#229ED9` growth cyan accent)
- **Typography**: [Google Fonts](https://fonts.google.com/) via `next/font/google` (`Poppins`, `Inter`, `JetBrains Mono`)
- **Icons**: Exclusively using [`lucide-react`](https://lucide.dev/) for clean, consistent vector icons across the entire app.

---

## 📁 Project Structure

```text
Engineer_Vector/
├── app/
│   ├── globals.css        # Global CSS variables, animations & design tokens
│   ├── layout.tsx         # Root layout, Google Fonts & SEO metadata
│   └── page.tsx           # Main Engineer Vector landing page
├── components/
│   ├── JoinButton.tsx     # Reusable CTA button with custom WhatsApp/Telegram links
│   ├── LaunchCountdown.tsx# Real-time launch countdown timer component
│   ├── Reveal.tsx          # IntersectionObserver scroll-reveal wrapper
│   ├── SectionEyebrow.tsx  # Section title eyebrows & dividers
│   ├── ShareBar.tsx        # Social share bar (WhatsApp, LinkedIn, Clipboard)
│   └── VectorDivider.tsx   # Signature growth vector SVG line motif
├── public/                 # Static assets & favicon
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tarunbommali/engineer_vector.git
   cd Engineer_Vector
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Build & Production

To create an optimized production build:

```bash
npm run build
```

To run the production server locally:

```bash
npm start
```

---

## 🌐 Community & Contact

- **Telegram Channel**: [@engineer_vector](https://t.me/engineer_vector)
- **WhatsApp Team Contact**: [+91 9581193026](https://wa.me/919581193026)
- **GitHub Repository**: [tarunbommali/engineer_vector](https://github.com/tarunbommali/engineer_vector.git)

---

*Made with ❤️ for engineers everywhere.*
