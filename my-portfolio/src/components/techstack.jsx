import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss,SiExpress, SiMysql } from "react-icons/si";

/* ── Tech Data with Brand Colors ── */
const techs = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "SQL", icon: SiMysql, color: "#4479A1" },
];

/* ── Animation ── */
const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: d, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
});

/* ── CSS ── */
const CSS = `
.tech {
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  clip-path: polygon(0 80px, 100% 0%, 100% 100%, 0 100%);
  margin-top: -80px;
  position: relative;
  font-family: 'DM Sans', sans-serif;
  padding-bottom: 3rem;
}

.tech-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 130px 20px 60px;
  position: relative;
  z-index: 1;
}

/* glow */
.tech-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 200px;
  margin-top:4rem;
  background: radial-gradient(ellipse, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* heading */
.tech-title {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 800;
  color: #f0f0ff;
  position: relative;
  margin-bottom: 40px;
  z-index: 1;
}

/* underline */
.tech-title::after {
  content: "";
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #22d3ee, #a78bfa);
  position: absolute;
  left: 50%;
  bottom: -12px;
  transform: translateX(-50%);
  border-radius: 10px;
}

/* row */
.tech-row {
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
}

/* card */
.tech-card {
  width: 105px;
  height: 105px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.25s ease;
}

.tech-card:hover {
  transform: translateY(-6px) scale(1.06);
  background: rgba(255, 255, 255, 0.09);
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.2);
}

/* icon */
.tech-icon {
  font-size: 32px;
  transition: 0.2s ease;
}

/* glow effect */
.tech-card:hover .tech-icon {
  filter: drop-shadow(0 0 8px currentColor);
}

/* text */
.tech-name {
  font-size: 13px;
  color: #cbd5f5;
}

.tech-card:hover .tech-name {
  color: #fff;
}
`;

export default function TechStack() {
  return (
    <>
      <style>{CSS}</style>
      <section className="tech">
        <div className="tech-inner">
          <motion.h2 className="tech-title" {...fadeUp(0.2)}>
            Tech Stack
          </motion.h2>
          <motion.div className="tech-row" {...fadeUp(0.4)}>
            {techs.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={i}
                  className="tech-card"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon
                    className="tech-icon"
                    style={{ color: tech.color }}
                  />
                  <span className="tech-name">{tech.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}