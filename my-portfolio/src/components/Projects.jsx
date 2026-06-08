// Projects.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

import pothikImg from "../assets/pothik.png";
import pcImg from "../assets/pc.jpeg";

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
);

const GithubProjectIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
);

const fu = (d = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: d, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
});

const projectsData = [
  {
    id: 1,
    title: "Pothik",
    description: "An online travel platform where users can build custom tour packages by selecting destination, duration, vehicle, accommodation, and guide — or book a prebuilt package instantly.",
    fullDescription: "Pothik is a full-stack online travel platform designed to give travelers complete control over how they explore. Users can either browse and book curated prebuilt packages or craft their own custom tour from scratch — choosing their destination, trip duration, preferred vehicle, accommodation type, and local guide. Once the journey is complete, travelers can relive and share their experience through Pothik's built-in blog feature, posting stories, photos, and reviews for the community. The platform also includes a fully integrated payment system, allowing seamless transactions from booking to checkout — all in one place.",
     features: [
    "Custom package builder: destination, duration, vehicle, accommodation & guide",
    "Browse and instantly book prebuilt tour packages",
    "Integrated payment system for seamless checkout",
    "Post-tour blog feature to share travel stories",
    "JWT-based authentication with role-based access",
    "Fully responsive UI built with React & Tailwind",
  ],

  learned: "Learned how to architect a multi-feature platform with complex relational data, secure JWT authentication, and payment integration.",
   
    tech: ["React", "Express.js", "MySQL", "Tailwind"],
    image: pothikImg,
    status: "live",
    liveLink: "https://pothik-six.vercel.app/",
    githubFrontend: "https://github.com/AsifMia-dev/Pothik-Frontend.git",
    githubBackend: "https://github.com/IbrahimZihad/Pothik-Backend.git",
  },
  {
    id: 2,
    title: "Pc store",
    description: "A React-based e-commerce web application for browsing and purchasing PC components and pre-built systems.",

fullDescription: "This project is a frontend e-commerce application built with React, designed for a PC store. It allows users to explore various computer components and pre-built PCs, add items to their cart, and place orders. The application uses a JSON-based API for data management and demonstrates core frontend concepts such as reusable components, routing, and state management using Context API. An admin panel is also included for managing products, where admins can add or delete items from the store.",

features: [
"Browse PC components and pre-built PCs",
"Add to cart and place orders",
"Reusable component-based architecture",
"Client-side routing with React Router",
"State management using Context API",
"Admin panel to add and delete products",
"Data handling using JSON API"
],

learned: "Built my first React application and gained hands-on experience with reusable components, API consumption, routing, Context API for state management, and structuring a scalable frontend project.",
    tech: ["React.js","JSON Data","Tailwind"],
    image: pcImg,
    status: "github",
    githubLink: "https://github.com/AsifMia-dev/PcStore.git",
  }
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');

  .projects-section {
    width: 100%;
    padding: 100px 2rem 120px 2rem;
    background: #0f0e2a;
    position: relative;
    font-family: 'DM Sans', sans-serif;
  }

  .projects-container { max-width: 1400px; margin: 0 auto; }
  .projects-header { text-align: center; margin-bottom: 60px; }

  .projects-title {
    font-family: sans-serif;
    font-weight: 800;
    font-size: clamp(36px, 4.5vw, 56px);
    letter-spacing: -1.5px;
    color: #f0f0ff;
    margin-bottom: 18px;
    text-align: center;
  }

  .projects-title .grad {
    background: linear-gradient(90deg, #22d3ee 0%, #a78bfa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .projects-subtitle {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.65;
    color: rgba(210,210,255,0.55);
    max-width: 520px;
    margin: 0 auto;
    text-align: center;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 40px 32px;
  }

  .project-card {
    position: relative;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 24px;
    overflow: visible;
    transition: all 0.3s ease;
    margin-top: 14px;
  }

  .project-card:hover {
    border-color: rgba(255, 255, 255, 0.14);
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  }

  .project-sticker {
    position: absolute;
    top: -14px; left: 18px;
    z-index: 10;
    transform: rotate(-2deg);
    filter: drop-shadow(0 4px 12px rgba(250, 100, 150, 0.5));
  }

  .project-sticker-inner {
    background: linear-gradient(135deg, #ff6b9d, #ff3d77, #c9195a);
    color: #fff;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 6px 14px 6px 10px;
    border-radius: 4px 4px 4px 0px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.15);
  }

  .project-sticker-inner::after {
    content: '';
    position: absolute;
    bottom: -6px; left: 0;
    border-left: 6px solid #8b0f34;
    border-bottom: 6px solid transparent;
  }

  .project-sticker-inner::before {
    content: '';
    position: absolute;
    top: -7px; left: 50%;
    transform: translateX(-50%);
    width: 28px; height: 10px;
    background: rgba(255,255,255,0.2);
    border-radius: 2px;
    backdrop-filter: blur(2px);
  }

  .sticker-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #fff;
    position: relative;
    flex-shrink: 0;
  }

  .sticker-dot::after {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: rgba(255,255,255,0.4);
    animation: stickerPulse 1.5s ease-in-out infinite;
  }

  @keyframes stickerPulse {
    0%, 100% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.6); opacity: 0; }
  }

  .project-card-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 24px;
    overflow: hidden;
  }

  .project-image {
    position: relative;
    aspect-ratio: 16/10;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(6,182,212,0.05), rgba(99,102,241,0.05));
  }

  .project-image img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .project-card:hover .project-image img { transform: scale(1.05); }

  .project-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(15,14,42,0.95), rgba(99,102,241,0.85));
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    padding: 16px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card:hover .project-overlay { opacity: 1; }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 18px;
    background: #fff;
    color: #0f0e2a;
    text-decoration: none;
    border-radius: 100px;
    font-size: 12px;
    font-weight: 600;
    transition: transform 0.2s ease;
    white-space: nowrap;
    border: none;
    cursor: pointer;
  }

  .project-link:hover { transform: translateY(-2px); }
  .project-link.fe { background: #22d3ee; color: #0f0e2a; }
  .project-link.be { background: #c084fc; color: #0f0e2a; }

  .project-content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .project-title {
    font-size: 20px;
    font-weight: 700;
    color: #f0f0ff;
    margin-bottom: 14px;
  }

  .project-learned {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    background: rgba(34, 211, 238, 0.05);
    border: 1px solid rgba(34, 211, 238, 0.1);
    border-radius: 10px;
    padding: 10px 12px;
    font-size: 12px;
    line-height: 1.6;
    color: rgba(210, 210, 255, 0.45);
    margin-bottom: 16px;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
  }

  .tech-pill {
    padding: 4px 12px;
    background: rgba(168, 85, 247, 0.08);
    border: 1px solid rgba(168, 85, 247, 0.15);
    border-radius: 100px;
    font-size: 10px;
    font-family: 'DM Mono', monospace;
    color: #c084fc;
    letter-spacing: 0.3px;
  }

  /* Description button */
  .desc-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(241, 200, 105, 0.06);
    border: 1px solid rgba(241, 200, 105, 0.18);
    color: #F1C869;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    padding: 7px 16px;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-bottom: 16px;
    width: fit-content;
  }

  .desc-btn:hover {
    background: rgba(241, 200, 105, 0.12);
    border-color: rgba(241, 200, 105, 0.4);
    transform: translateY(-1px);
  }

  .desc-btn-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: #F1C869;
    flex-shrink: 0;
  }

  .project-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    margin-top: auto;
    gap: 10px;
  }

  .project-live-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #22d3ee;
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    transition: gap 0.2s ease;
  }

  .project-live-link:hover { gap: 10px; }

  .github-btn-group { display: flex; align-items: center; gap: 8px; }

  .project-github-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: rgba(210,210,255,0.5);
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  .project-github-link:hover { color: #f0f0ff; }

  .repo-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 10px;
    border-radius: 100px;
    font-size: 11px;
    font-family: 'DM Mono', monospace;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .repo-badge.frontend {
    background: rgba(34, 211, 238, 0.08);
    border: 1px solid rgba(34, 211, 238, 0.2);
    color: #22d3ee;
  }

  .repo-badge.backend {
    background: rgba(168, 85, 247, 0.08);
    border: 1px solid rgba(168, 85, 247, 0.2);
    color: #c084fc;
  }

  .repo-badge.frontend:hover { background: rgba(34,211,238,0.18); border-color: rgba(34,211,238,0.5); transform: translateY(-1px); }
  .repo-badge.backend:hover { background: rgba(168,85,247,0.18); border-color: rgba(168,85,247,0.5); transform: translateY(-1px); }

  .tooltip-wrap { position: relative; display: inline-flex; }

  .tooltip-tip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);
    background: rgba(15,14,42,0.95);
    border: 1px solid rgba(255,255,255,0.12);
    color: #f0f0ff;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.05em;
    padding: 5px 10px;
    border-radius: 6px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.18s ease, transform 0.18s ease;
    z-index: 100;
  }

  .tooltip-tip::after {
    content: '';
    position: absolute;
    top: 100%; left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: rgba(255,255,255,0.12);
  }

  .tooltip-wrap:hover .tooltip-tip { opacity: 1; transform: translateX(-50%) translateY(0); }

  .no-live { font-size: 12px; color: rgba(210,210,255,0.2); }

  /* ── MODAL ── */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(6, 5, 20, 0.82);
    backdrop-filter: blur(12px);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }

  .modal-box {
    position: relative;
    background: #13122e;
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 28px;
    width: 100%;
    max-width: 680px;
    max-height: 88vh;
    overflow-y: auto;
    scrollbar-width: none;
  }

  .modal-box::-webkit-scrollbar { display: none; }

  .modal-image {
    width: 100%;
    aspect-ratio: 16/8;
    object-fit: cover;
    border-radius: 28px 28px 0 0;
    display: block;
  }

  .modal-close {
    position: absolute;
    top: 14px; right: 14px;
    width: 34px; height: 34px;
    border-radius: 50%;
    background: rgba(10, 9, 30, 0.75);
    border: 1px solid rgba(255,255,255,0.12);
    color: rgba(210,210,255,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    z-index: 10;
  }

  .modal-close:hover {
    background: rgba(255,255,255,0.1);
    color: #fff;
    border-color: rgba(255,255,255,0.3);
  }

  .modal-body { padding: 28px 32px 32px; }

  .modal-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 6px;
    flex-wrap: wrap;
  }

  .modal-title {
    font-family: 'Syne', sans-serif;
    font-size: 26px;
    font-weight: 800;
    color: #f0f0ff;
    letter-spacing: -0.5px;
  }

  .modal-live-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 13px;
    background: rgba(34,197,94,0.08);
    border: 1px solid rgba(34,197,94,0.22);
    border-radius: 100px;
    font-size: 10px;
    font-family: 'DM Mono', monospace;
    color: #4ade80;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .modal-live-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: #4ade80;
    animation: stickerPulse 1.5s ease-in-out infinite;
  }

  .modal-desc {
    font-size: 14.5px;
    line-height: 1.78;
    color: rgba(210,210,255,0.6);
    margin-bottom: 24px;
    margin-top: 14px;
  }

  .modal-label {
    font-size: 9.5px;
    font-family: 'DM Mono', monospace;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(210,210,255,0.25);
    margin-bottom: 10px;
  }

  .modal-features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9px;
    margin-bottom: 24px;
  }

  .modal-feature {
    display: flex;
    align-items: flex-start;
    gap: 9px;
    font-size: 13px;
    line-height: 1.5;
    color: rgba(210,210,255,0.55);
  }

  .modal-feature-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: linear-gradient(135deg, #22d3ee, #a78bfa);
    flex-shrink: 0;
    margin-top: 5px;
  }

  .modal-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
  }

  .modal-tech-pill {
    padding: 5px 13px;
    background: rgba(168,85,247,0.08);
    border: 1px solid rgba(168,85,247,0.15);
    border-radius: 100px;
    font-size: 11px;
    font-family: 'DM Mono', monospace;
    color: #c084fc;
  }

  .modal-learned {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    background: rgba(34,211,238,0.04);
    border: 1px solid rgba(34,211,238,0.1);
    border-radius: 12px;
    padding: 12px 16px;
    font-size: 13px;
    line-height: 1.65;
    color: rgba(210,210,255,0.45);
    margin-bottom: 28px;
  }

  .modal-actions {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    padding-top: 22px;
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  .modal-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 22px;
    background: linear-gradient(135deg, #22d3ee, #a78bfa);
    color: #0f0e2a;
    text-decoration: none;
    border-radius: 100px;
    font-size: 13px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.2s;
    white-space: nowrap;
  }

  .modal-btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }

  .modal-btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 18px;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.1);
    color: rgba(210,210,255,0.55);
    text-decoration: none;
    border-radius: 100px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .modal-btn-ghost:hover { border-color: rgba(255,255,255,0.28); color: #f0f0ff; transform: translateY(-1px); }
  .modal-btn-ghost.fe { border-color: rgba(34,211,238,0.25); color: #22d3ee; }
  .modal-btn-ghost.be { border-color: rgba(192,132,252,0.25); color: #c084fc; }
  .modal-btn-ghost.fe:hover { border-color: rgba(34,211,238,0.6); background: rgba(34,211,238,0.06); }
  .modal-btn-ghost.be:hover { border-color: rgba(192,132,252,0.6); background: rgba(192,132,252,0.06); }

  @media (max-width: 860px) {
    .projects-section { padding: 60px 20px; }
    .projects-grid { grid-template-columns: 1fr; }
    .modal-features { grid-template-columns: 1fr; }
    .modal-backdrop { padding: 12px; align-items: flex-end; }
    .modal-box { border-radius: 24px 24px 0 0; max-height: 92vh; }
    .modal-image { border-radius: 24px 24px 0 0; }
    .modal-body { padding: 20px 20px 28px; }
  }
`;

// Github buttons — split or single
function GithubButtons({ project, inOverlay = false }) {
  const isSplit = !!(project.githubFrontend && project.githubBackend);

  if (isSplit) {
    return (
      <>
        <div className="tooltip-wrap">
          <motion.a
            href={project.githubFrontend}
            className={inOverlay ? "project-link fe" : "repo-badge frontend"}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()}
          >
            <GithubProjectIcon /> {inOverlay ? "Frontend" : "FE"}
          </motion.a>
          <span className="tooltip-tip">Frontend Repo</span>
        </div>
        <div className="tooltip-wrap">
          <motion.a
            href={project.githubBackend}
            className={inOverlay ? "project-link be" : "repo-badge backend"}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()}
          >
            <GithubProjectIcon /> {inOverlay ? "Backend" : "BE"}
          </motion.a>
          <span className="tooltip-tip">Backend Repo</span>
        </div>
      </>
    );
  }

  return (
    <motion.a
      href={project.githubLink}
      className={inOverlay ? "project-link" : "project-github-link"}
      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
      target="_blank" rel="noreferrer"
      onClick={e => e.stopPropagation()}
    >
      <GithubProjectIcon /> Code
    </motion.a>
  );
}

// Description Modal
function DescriptionModal({ project, onClose }) {
  const isSplit = !!(project.githubFrontend && project.githubBackend);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-box"
        initial={{ opacity: 0, scale: 0.93, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 32 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        onClick={e => e.stopPropagation()}
      >
        {/* Banner image */}
        <img className="modal-image" src={project.image} alt={project.title} />

        {/* Close */}
        <button className="modal-close" onClick={onClose}>
          <CloseIcon />
        </button>

        <div className="modal-body">
          {/* Title + live badge */}
          <div className="modal-top">
            <h2 className="modal-title">{project.title}</h2>
            {project.status === "live" && (
              <span className="modal-live-badge">
                <span className="modal-live-dot" /> Live
              </span>
            )}
          </div>

          {/* Full description */}
          <p className="modal-desc">
            {project.fullDescription || project.description}
          </p>

          {/* Features */}
          {project.features && (
            <>
              <p className="modal-label">Features</p>
              <div className="modal-features">
                {project.features.map((f, i) => (
                  <div className="modal-feature" key={i}>
                    <span className="modal-feature-dot" />
                    {f}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Tech */}
          <p className="modal-label">Tech Stack</p>
          <div className="modal-tech">
            {project.tech.map((t, i) => (
              <span className="modal-tech-pill" key={i}>{t}</span>
            ))}
          </div>

          {/* Learned */}
          <div className="modal-learned">
            <span>💡</span>
            <span>{project.learned}</span>
          </div>

          {/* Actions */}
          <div className="modal-actions">
            {project.status === "live" && (
              <motion.a
                href={project.liveLink}
                className="modal-btn-primary"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                target="_blank" rel="noreferrer"
              >
                <ExternalLinkIcon /> View Live
              </motion.a>
            )}
            {isSplit ? (
              <>
                <motion.a
                  href={project.githubFrontend}
                  className="modal-btn-ghost fe"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  target="_blank" rel="noreferrer"
                >
                  <GithubProjectIcon /> Frontend Code
                </motion.a>
                <motion.a
                  href={project.githubBackend}
                  className="modal-btn-ghost be"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  target="_blank" rel="noreferrer"
                >
                  <GithubProjectIcon /> Backend Code
                </motion.a>
              </>
            ) : (
              <motion.a
                href={project.githubLink}
                className="modal-btn-ghost"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                target="_blank" rel="noreferrer"
              >
                <GithubProjectIcon /> View Code
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, idx }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="project-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6 }}
      >
        {project.status === "live" && (
          <div className="project-sticker">
            <div className="project-sticker-inner">
              <span className="sticker-dot" /> ✦ Live
            </div>
          </div>
        )}

        <div className="project-card-inner">
          {/* Image */}
          <div className="project-image">
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
              {project.status === "live" && (
                <motion.a
                  href={project.liveLink}
                  className="project-link"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  target="_blank" rel="noreferrer"
                >
                  <ExternalLinkIcon /> Live Demo
                </motion.a>
              )}
              <GithubButtons project={project} inOverlay={true} />
            </div>
          </div>

          {/* Content */}
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>

            <div className="project-learned">
              <span>💡</span>
              <span>{project.learned}</span>
            </div>

            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-pill">{tech}</span>
              ))}
            </div>

            {/* Description button → opens modal */}
            <motion.button
              className="desc-btn"
              onClick={() => setModalOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="desc-btn-dot" />
              Read Description
            </motion.button>

            {/* Footer */}
            <div className="project-footer">
              {project.status === "live" ? (
                <motion.a
                  href={project.liveLink}
                  className="project-live-link"
                  whileHover={{ x: 4 }}
                  target="_blank" rel="noreferrer"
                >
                  <ExternalLinkIcon /> View Project →
                </motion.a>
              ) : (
                <span className="no-live">No live demo yet</span>
              )}
              <div className="github-btn-group">
                <GithubButtons project={project} inOverlay={false} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal — rendered per card so AnimatePresence works correctly */}
      <AnimatePresence>
        {modalOpen && (
          <DescriptionModal project={project} onClose={() => setModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  return (
    <>
      <style>{CSS}</style>
      <section className="projects-section">
        <div className="projects-container">

          <motion.div className="projects-header" {...fu(0.1)}>
            <h2 className="projects-title">
              Featured<span className="grad"> Projects</span>
            </h2>
            <p className="projects-subtitle">
              Real solutions I've built — from concept to development.
              Each project reflects my approach to clean code and problem solving.
            </p>
          </motion.div>

          <div className="projects-grid">
            {projectsData.map((project, idx) => (
              <ProjectCard key={project.id} project={project} idx={idx} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}