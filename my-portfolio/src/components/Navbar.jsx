import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Work", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');

  :root {
    --nb-black:  #0F162A;
    --nb-white:  #f5f5f3;
    --nb-gray:   #16193B;
    --nb-muted:  rgba(245,245,243,0.42);
    --nb-border: rgba(245,245,243,0.1);
  }

  body { background: #0a0a0a; margin: 0; }

  .nb-spacer {
    height: 16px;
    background: var(--nb-black);
  }

  .nb-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--nb-black);
    border-bottom: 1px solid transparent;
    transition: border-color 0.35s;
  }

  .nb-header--scrolled {
    border-bottom-color: var(--nb-border);
  }

  .nb-bar {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 72px;
    padding: 0 36px;
    max-width: 1440px;
    margin: 0 auto;
  }

  .nb-logo {
    font-family:sans-serif;
    font-weight: 800;
    font-size: 30px;
    color: var(--nb-white);
    text-decoration: none;
    letter-spacing: -1px;
    padding-top: 20px;
    position: relative;
    z-index: 5;
    line-height: 1;
  }

  .nb-logo span { opacity: 0.3; }

  /* ── Curved tray ── */
  .nb-tray-wrap {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: clamp(260px, 44%, 430px);
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
  }

  .nb-tray-svg {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
  }

  .nb-tray-svg path {
    fill: var(--nb-gray);
    stroke: rgba(245,245,243,0.12);
    stroke-width: 1.2;
  }

  .nb-links {
    display: flex;
    gap: 2px;
    position: relative;
    z-index: 5;
    padding-bottom: 10px;
    padding-top: 4px;
  }

  .nb-link {
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    font-weight: 400;
    color: var(--nb-muted);
    text-decoration: none;
    padding: 6px 14px;
    border-radius: 8px;
    transition: color 0.18s, background 0.18s;
    white-space: nowrap;
    cursor: pointer;
  }

  .nb-link:hover {
    color: var(--nb-white);
    background: rgba(255,255,255,0.07);
  }

  .nb-link--active {
    color: var(--nb-white);
    background: rgba(255,255,255,0.1);
    font-weight: 500;
  }

  /* ── Right area ── */
  .nb-right {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-top: 20px;
    position: relative;
    z-index: 5;
  }

  .nb-cta {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: var(--nb-black);
    background: var(--nb-white);
    border: none;
    padding: 9px 22px;
    border-radius: 100px;
    cursor: pointer;
    white-space: nowrap;
    line-height: 1;
    transition: background 0.18s;
  }

  .nb-cta:hover { background: #deded8; }

  /* ── Hamburger ── */
  .nb-hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
  }

  .nb-ham-line {
    display: block;
    width: 22px;
    height: 1.5px;
    background: var(--nb-white);
    border-radius: 2px;
    transition: transform 0.22s, opacity 0.22s, width 0.2s;
    transform-origin: center;
  }

  .nb-ham-mid  { width: 14px; }
  .nb-ham-x1   { transform: translateY(6.5px) rotate(45deg);  width: 22px !important; }
  .nb-ham-x2   { opacity: 0; transform: scaleX(0); }
  .nb-ham-x3   { transform: translateY(-6.5px) rotate(-45deg); width: 22px !important; }

  /* ── Mobile menu ── */
  .nb-mobile-menu {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 10px 18px 24px;
    background: #111;
    border-top: 1px solid var(--nb-border);
  }

  .nb-mobile-link {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    color: var(--nb-muted);
    text-decoration: none;
    padding: 11px 14px;
    border-radius: 8px;
    transition: color 0.15s, background 0.15s;
  }

  .nb-mobile-link:hover        { color: var(--nb-white); background: rgba(255,255,255,0.06); }
  .nb-mobile-link--active      { color: var(--nb-white); font-weight: 500; }

  .nb-cta-mob {
    margin-top: 10px;
    width: 100%;
    padding: 13px;
    border-radius: 10px;
    font-size: 14px;
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .nb-tray-wrap   { display: none !important; }
    .nb-cta-desk    { display: none !important; }
    .nb-hamburger   { display: flex; }
    .nb-bar         { padding: 0 20px; align-items: center; height: 60px; }
    .nb-logo        { padding-top: 0; }
    .nb-right       { padding-top: 0; }
  }

  @media (min-width: 769px) {
    .nb-hamburger   { display: none !important; }
    .nb-cta-mob     { display: none !important; }
  }

  @media (max-width: 980px) and (min-width: 769px) {
    .nb-tray-wrap   { width: 290px; }
    .nb-link        { font-size: 12.5px; padding: 6px 10px; }
  }
`;

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{CSS}</style>

      <div className="nb-spacer" />

      <motion.header
        className={`nb-header${scrolled ? " nb-header--scrolled" : ""}`}
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 155, damping: 20, delay: 0.05 }}
      >
        <div className="nb-bar">

          {/* Logo */}
          <motion.a
            href="#"
            className="nb-logo"
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.45 }}
          >
            ASIF<span>.</span>
          </motion.a>

          {/* Curved tray */}
          <div className="nb-tray-wrap">
            <svg
              className="nb-tray-svg"
              viewBox="0 0 360 64"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/*
                Shape: attached full-width at top (y=0),
                curves inward on both sides then drops down,
                rounded bottom corners.
              */}
              <path d="M0,0 Q38,0 38,24 L38,46 Q38,64 56,64 L304,64 Q322,64 322,46 L322,24 Q322,0 360,0 Z" />
            </svg>

            <nav className="nb-links">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={`nb-link${active === link.label ? " nb-link--active" : ""}`}
                  onClick={() => setActive(link.label)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.34 + i * 0.07, duration: 0.38 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Right */}
          <motion.div
            className="nb-right"
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.45 }}
          >
            <motion.button
              className="nb-cta nb-cta-desk"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get started
            </motion.button>

            <button
              className="nb-hamburger"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span className={`nb-ham-line${open ? " nb-ham-x1" : ""}`} />
              <span className={`nb-ham-line nb-ham-mid${open ? " nb-ham-x2" : ""}`} />
              <span className={`nb-ham-line${open ? " nb-ham-x3" : ""}`} />
            </button>
          </motion.div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.nav
              className="nb-mobile-menu"
              initial={{ opacity: 0, y: -12, scaleY: 0.93 }}
              animate={{ opacity: 1,  y: 0,   scaleY: 1 }}
              exit={{   opacity: 0,  y: -8,   scaleY: 0.96 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={`nb-mobile-link${active === link.label ? " nb-mobile-link--active" : ""}`}
                  onClick={() => { setActive(link.label); setOpen(false); }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.055 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                className="nb-cta nb-cta-mob"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.22 }}
              >
                Get started
              </motion.button>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}