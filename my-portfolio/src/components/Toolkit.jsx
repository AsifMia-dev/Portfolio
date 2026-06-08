// Toolkit.jsx
import { motion } from "framer-motion";
import {
  SiGit,
  SiPostman,
  SiDocker,
  SiFigma,
  SiGithub,
  SiSlack,
  SiUbuntu,
  SiNotion,
} from "react-icons/si";

// ✅ VS Code SVG inline — no react-icons dependency
const VsCodeIcon = ({ style, className }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M90.767 127.126a10.273 10.273 0 006.35-.244l23.069-9.223a10.289 10.289 0 006.512-9.573V19.914a10.289 10.289 0 00-6.512-9.573L97.117 1.118a10.273 10.273 0 00-11.115 2.238L45.81 41.042 27.087 26.775a6.86 6.86 0 00-8.765.353L2.656 42.177A6.873 6.873 0 002.64 52.94L19.03 64 2.64 75.06a6.873 6.873 0 00.016 10.763l15.666 15.049a6.86 6.86 0 008.765.353L45.81 86.958l40.192 37.686a10.273 10.273 0 004.765 2.482zM97.44 35.22L61.708 64 97.44 92.78V35.22z"
    />
    <path
      fill="none"
      d="M97.44 35.22L61.708 64 97.44 92.78V35.22z"
    />
  </svg>
);

const tools = [
  { name: "VS Code", icon: VsCodeIcon, color: "#007ACC" }, // ✅ uses inline SVG
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Notion", icon: SiNotion, color: "#FFFFFF" },
];

/* ── Animation ── */
const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: d, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
});

/* ── CSS ── */
const CSS = `
.toolkit {
  width: 100%;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%);
  position: relative;
  font-family: 'DM Sans', sans-serif;
  padding: 4rem 0 5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.toolkit-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px 40px;
  position: relative;
  z-index: 1;
}

.toolkit-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 200px;
  background: radial-gradient(ellipse, rgba(168, 85, 247, 0.12) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.toolkit-title {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 800;
  color: #f0f0ff;
  position: relative;
  margin-bottom: 40px;
  z-index: 1;
}

.toolkit-title::after {
  content: "";
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #f59e0b, #ec4899);
  position: absolute;
  left: 50%;
  bottom: -12px;
  transform: translateX(-50%);
  border-radius: 10px;
}

.toolkit-row {
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
}

.toolkit-card {
  width: 105px;
  height: 105px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  transition: all 0.25s ease;
}

.toolkit-card:hover {
  transform: translateY(-6px) scale(1.06);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px rgba(168, 85, 247, 0.2);
}

.toolkit-icon {
  font-size: 32px;
  transition: 0.2s ease;
}

.toolkit-card:hover .toolkit-icon {
  filter: drop-shadow(0 0 8px currentColor);
}

.toolkit-name {
  font-size: 13px;
  color: #cbd5f5;
  font-weight: 500;
}

.toolkit-card:hover .toolkit-name {
  color: #fff;
}

.toolkit-label {
  font-size: 11px;
  color: rgba(210, 210, 255, 0.45);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 8px;
  display: inline-block;
}
`;

export default function Toolkit() {
  return (
    <>
      <style>{CSS}</style>
      <section className="toolkit">
        <div className="toolkit-inner">
          <motion.h2 className="toolkit-title" {...fadeUp(0.2)}>
            Tools & Workflow
          </motion.h2>
          <motion.div className="toolkit-row" {...fadeUp(0.4)}>
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={i}
                  className="toolkit-card"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon
                    className="toolkit-icon"
                    style={{ color: tool.color }}
                  />
                  <span className="toolkit-name">{tool.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}