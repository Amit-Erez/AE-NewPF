import type { Project } from "../types";
import eqPhoto from "../assets/pluginScreenshot.png";
import pulsePhoto from "../assets/pulse-splitscreens.png";
import summaristPhoto from "../assets/summarist-PS.png";
import skinstricPhoto from "../assets/Skinstric-PS.png";
import ultraversePhoto from "../assets/NFT-PS.png";
import musicIp from "../assets/Music-ip-dash.png"

export const projects: Project[] = [
  {
    id: 1,
    num: "01 / 06",
    year: "2026 — Live",
    title: "Music IP Dashboard",
    subtitle: "Funding Review App",
    description:
      "An internal admin tool for a fictionalised music-financing company. Analysts review catalogue-backed funding applications, update status, leave timestamped notes, and flag records for follow-up. Built with React, TypeScript, and a Node/Express backend.",
    tags: ["React", "TypeScript", "TanStack Query", "Tailwind CSS", "shadcn/ui", "Express", "Node", "Zod", "Vitest", "React Testing Library"],
    liveDemoUrl: "https://music-ip-ae.vercel.app/",
    githubUrl: "https://github.com/Amit-Erez/MusicIP",
    imageSrc: musicIp,
    canvasClass: "canvas-eq",
  },
  {
    id: 2,
    num: "02 / 06",
    year: "2026 — Live",
    title: "Pulse",
    subtitle: "Campaign Analytics",
    description:
      "A unified dashboard for digital-agency teams: sortable, filterable, chart-ready, and built on URL-persistent state so filtered views can be shared between accounts. Zustand + Radix UI + Recharts, tested with Vitest.",
    tags: ["React", "TypeScript", "Zustand", "Tailwind", "Recharts", "Vitest"],
    liveDemoUrl: "https://ae-pulse.vercel.app/",
    githubUrl: "https://github.com/Amit-Erez/CampaignDashboard",
    imageSrc: pulsePhoto,
    canvasClass: "canvas-pulse",
  },
  {
    id: 3,
    num: "03 / 06",
    year: "2026 — Live",
    title: "EQ-6",
    subtitle: "Parametric Equalizer",
    description:
      "A browser-based six-band parametric EQ built with React, TypeScript and the Web Audio API. Real-time BiquadFilterNode signal chain, draggable SVG handles, and a live spectrum analyser that blends with the EQ curve.",
    tags: ["React", "TypeScript", "Web Audio API", "SVG", "BiquadFilter"],
    liveDemoUrl: "https://ae-eq6.vercel.app/",
    githubUrl: "https://github.com/Amit-Erez/eq-app",
    imageSrc: eqPhoto,
    canvasClass: "canvas-eq",
  },
  {
    id: 4,
    num: "04 / 06",
    year: "2025 — Live",
    title: "Summarist",
    subtitle: "Book Platform",
    description:
      "A production book-summary app built with Next.js, TypeScript and Redux. Firebase Auth (email/Google/guest), Stripe-managed tiered subscriptions with webhook gating, audio playback, protected routes and a 96 Lighthouse score across performance, SEO and accessibility.",
    tags: ["Next.js", "Redux", "Firebase", "Stripe", "SSR", "Webhooks"],
    liveDemoUrl: "https://summarist-io.vercel.app/",
    githubUrl: "https://github.com/Amit-Erez/Summarist",
    imageSrc: summaristPhoto,
    canvasClass: "canvas-summarist",
  },
  {
    id: 5,
    num: "05 / 06",
    year: "2025 — Live",
    title: "Skinstric-AI ",
    subtitle: "AI Skin Analysis",
    description:
      "A responsive React app integrating an AI skin-analysis API. Custom camera capture and upload flow with client-side previews, an interactive results dashboard rendering complex health metrics for non-technical users, and sub-1.5s First Contentful Paint.",
    tags: [
      "React",
      "REST APIs",
      "Camera API",
      "Async/Error States",
      "Lazy loading",
    ],
    liveDemoUrl: "https://skinstric-app.vercel.app/",
    githubUrl: "https://github.com/Amit-Erez/Skinstric-AI",
    imageSrc: skinstricPhoto,
    canvasClass: "canvas-skinstric",
  },
  {
    id: 6,
    num: "06 / 06",
    year: "2025 — Live",
    title: "Ultraverse ",
    subtitle: "NFT Marketplace",
    description:
      "Converting a static marketplace into a fully dynamic application consuming multiple REST APIs. Axios async fetching, Owl Carousel and AOS for scroll-driven interactions, fully responsive across breakpoints, and a 15% load-time improvement after migrating from GitHub Pages to Vercel.",
    tags: ["React", "Axios", "REST APIs", ">Owl Carousel", "AOS", "Vercel"],
    liveDemoUrl: "https://ultraverse-app.vercel.app/",
    githubUrl: "https://github.com/Amit-Erez/NFT-Marketplace-Internship",
    imageSrc: ultraversePhoto,
    canvasClass: "canvas-ultra",
  },
];
