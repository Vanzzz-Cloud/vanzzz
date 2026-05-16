# Vanzzz — Personal Portfolio Website

![Vanzzz Banner](assets/images/hero.jpg)

> A sleek, high-performance personal portfolio for a Full Stack Developer & UI/UX Designer — built with pure HTML, CSS, and vanilla JavaScript.

---

## 🌐 Live Preview

> Replace with your actual deployed URL after hosting.

```
https://vanzzz-cloud.github.io/Vanzzz
```

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Sections](#sections)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Contact & Social](#contact--social)
- [License](#license)

---

## About

**Vanzzz** is a personal portfolio website for a full-stack developer and UI/UX designer based in **Phnom Penh, Cambodia 🇰🇭**. It showcases skills, services, featured projects, and contact information — all wrapped in a polished, modern UI with smooth animations and full dark/light mode support.

---

## ✨ Features

- **Dark / Light Mode Toggle** — Persistent theme switching with a moon/sun icon button
- **Animated Hero Section** — Typewriter text effect, animated gradient background, and floating particle canvas
- **Glass Morphism Navigation** — Frosted-glass navbar with smooth active-section highlighting on scroll
- **Responsive & Mobile-First** — Full hamburger menu for mobile, optimized for all screen sizes
- **Scroll-triggered Animations** — Fade-up reveals powered by the Intersection Observer API
- **Animated Skill Bars** — Progress bars animate into view when scrolled into the viewport
- **Contact Form with Validation** — Client-side form validation with clear error states and a success/failure message
- **CV Download** — Direct download link for a PDF résumé
- **Social Links** — GitHub, Facebook, LinkedIn, Telegram, Instagram, Twitter/X
- **SEO & Open Graph Ready** — Meta tags for description, Open Graph, and Twitter Card
- **SVG Favicon** — Auto-generated gradient favicon matching the brand colors
- **Accessibility** — ARIA labels, roles, and keyboard-friendly navigation

---

## 📄 Sections

| Section | Description |
|---|---|
| **Home / Hero** | Full-screen intro with typewriter animation, CTA buttons, and particle background |
| **About** | Profile photo, bio, years of experience, project count, client count |
| **Services** | 6 service cards — Web Dev, Mobile-First, UI/UX, Backend & API, Database, Maintenance |
| **Skills** | Animated progress bars for Frontend, Backend, Database & DevOps, UI/UX, plus tech tags |
| **Projects** | 3 featured project cards with tech tags and Live Demo / GitHub links |
| **Contact** | Contact info (email, phone, location), availability badge, social links, contact form |
| **Footer** | Navigation links, social icons, copyright |

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure and semantics |
| **CSS3** + Custom Properties | Theming, animations, glass morphism |
| **Tailwind CSS** (CDN) | Utility-first layout and responsive classes |
| **Vanilla JavaScript** | Interactions, typewriter, particles, scroll logic, form validation |
| **Lucide Icons** (CDN) | Lightweight SVG icon library |
| **Google Fonts** | Syne (headings) + DM Sans (body) |

### Skills showcased in the portfolio

**Frontend:** React / Next.js (90%), TypeScript (85%), Tailwind CSS (95%)

**Backend:** Node.js (88%), Python (82%), PHP / Laravel (80%)

**Database & DevOps:** MySQL / PostgreSQL (85%), MongoDB (78%), Docker / Git (75%)

**UI/UX Design:** Figma (88%), Adobe XD (80%), Prototyping (90%)

**Additional Technologies:** Java, C++, HTML5, CSS3, JavaScript, Vue.js, GraphQL, REST API, Redis, AWS

---

## 📁 Project Structure

```
Vanzzz/
├── index.html              # Main HTML file (single-page application)
├── assets/
│   ├── css/
│   │   └── style.css       # Custom styles, CSS variables, animations
│   ├── js/
│   │   └── main.js         # All JavaScript — theme, nav, typewriter, particles, form
│   ├── images/
│   │   ├── hero.jpg        # Profile / hero photo
│   └── cv.pdf              # Downloadable CV / résumé
└── README.md
```

---

## 🚀 Getting Started

This is a **static website** — no build step or dependencies to install.

### 1. Clone or download the project

```bash
git clone https://github.com/vanzzz/vanzzz.git
cd vanzzz
```

Or simply unzip the downloaded archive.

### 2. Open locally

```bash
# Option A — open directly in browser
open index.html

# Option B — serve with a local dev server (recommended)
npx serve .
# or
python3 -m http.server 8080
```

### 3. Deploy

Upload the entire `Vanzzz/` folder to any static hosting provider:

| Platform | Command / Method |
|---|---|
| **Vercel** | `vercel --prod` |
| **Netlify** | Drag & drop the folder on netlify.com |
| **GitHub Pages** | Push to `gh-pages` branch |
| **Hostinger / cPanel** | Upload via File Manager or FTP |

---

## 🎨 Customization Guide

### Replace personal information

Open `index.html` and update the following placeholders:

| What to change | Where to find it |
|---|---|
| Your name / brand | `<title>`, `<meta>` tags, navbar, hero, footer |
| Hero tagline | Inside typewriter phrases array in `main.js` |
| About bio text | `#about` section paragraphs |
| Stats (years, projects, clients) | Three stat cards in `#about` |
| Services | Six `.service-card` divs in `#services` |
| Skill percentages | `data-width` attributes on `.progress-fill` elements |
| Project names, descriptions, links | `.project-card` divs in `#projects` |
| Email address | `href="mailto:..."` and display text in `#contact` |
| Phone number | `href="tel:..."` and display text in `#contact` |
| Location | Location paragraph in `#contact` |
| Social media URLs | All `social-icon-btn` anchor tags |
| Open Graph domain | `og:image` and `og:url` meta tags |

### Replace your photo

Drop your photo into `assets/images/` and update the `src` attribute in the `#about` section:

```html
<img src="assets/images/YOUR_PHOTO.jpg" alt="Your Name" ...>
```

Recommended size: **600×600 px** (square), JPEG or WebP format.

### Replace your CV

Replace `assets/cv.pdf` with your own résumé PDF. The filename must stay the same, or update both `href="assets/cv.pdf"` links in `index.html`.

### Change brand colors

All colors are defined as CSS custom properties in `assets/css/style.css`:

```css
:root {
  --color-primary: #5b4cf5;   /* Indigo/purple */
  --color-secondary: #06b6d4; /* Cyan */
  /* ... */
}
```

Update `--color-primary` and `--color-secondary` to match your brand.

### Typewriter phrases

Edit the phrases array inside `assets/js/main.js`:

```js
const phrases = [
  "Full Stack Developer.",
  "UI/UX Designer.",
  "Problem Solver.",
  // Add your own here
];
```

---

## 📬 Contact & Social

| Platform | Link |
|---|---|
| ✉️ Email | [vannsothunh@gmail.com](mailto:vannsothunh@gmail.com) |
| 📞 Phone / WhatsApp | +855 096 327 5843 |
| 📍 Location | Phnom Penh, Cambodia 🇰🇭 |
| GitHub | [github.com/vanzzz](https://github.com/vanzzz) |
| Facebook | [facebook.com/vanzzz](https://facebook.com/vanzzz) |
| LinkedIn | [linkedin.com/in/vanzzz](https://linkedin.com/in/vanzzz) |
| Telegram | [t.me/vanzzz](https://t.me/vanzzz) |
| Instagram | [instagram.com/vanzzz](https://instagram.com/vanzzz) |
| Twitter / X | [twitter.com/vanzzz](https://twitter.com/vanzzz) |

> ✅ **Currently available for freelance projects.** Responds within 24 hours.

---

## 📄 License

This project is personal and not open-source licensed by default. If you'd like to use this template, please reach out via the contact links above.

---

<p align="center">
  Made with ❤️ by <strong>Vanzzz</strong> — Phnom Penh, Cambodia 🇰🇭
</p>
