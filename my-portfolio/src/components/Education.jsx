import { motion } from "framer-motion";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: d, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
});

const educations = [
  {
    degree: "B.Sc in Computer Science & Engineering",
    institution: "United International University",
    duration: "2022 — 2026",
    type: "University",
    icon: "🎓",
    tags: ["DSA", "Theory of Computation", "Discrete Math", "AI", "Networking"],
    color: "#22d3ee",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Advance Residential Model College",
    location: "Mymensingh",
    duration: "Passed 2020",
    type: "College",
    icon: "🏫",
    tags: ["Science Group"],
    color: "#a78bfa",
  },
];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');

.edu {
  width: 100%;
  background: #13112f;
  font-family: 'DM Sans', sans-serif;
  position: relative;
}

.edu-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 160px 32px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}

/* glow */
.edu-inner::before {
  content: '';
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 250px;
  background: radial-gradient(ellipse, rgba(34, 211, 238, 0.08) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* label */
.edu-label {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #22d3ee;
  margin-bottom: 14px;
  z-index: 1;
}

/* title */
.edu-title {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 800;
  color: #f0f0ff;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
  text-align: center;
}

.edu-title::after {
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

/* cards row */
.edu-cards {
  display: flex;
  gap: 28px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  z-index: 1;
}

/* card */
.edu-card {
  flex: 1;
  min-width: 280px;
  max-width: 420px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 24px;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* card glow on hover */
.edu-card::before {
  content: '';
  position: absolute;
  top: -60px;
  left: -60px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--card-color, #22d3ee) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.edu-card:hover::before {
  opacity: 0.07;
}

.edu-card:hover {
  border-color: rgba(255, 255, 255, 0.18);
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

/* top row */
.edu-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* icon */
.edu-icon {
  font-size: 32px;
}

/* type badge */
.edu-badge {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 100px;
  border: 1px solid;
  font-weight: 500;
}

/* degree */
.edu-degree {
  font-size: 17px;
  font-weight: 700;
  color: #f0f0ff;
  line-height: 1.4;
}

/* institution */
.edu-institution {
  font-size: 14px;
  font-weight: 400;
  color: rgba(210, 210, 255, 0.55);
}

/* location */
.edu-location {
  font-size: 13px;
  color: rgba(210, 210, 255, 0.35);
}

/* duration */
.edu-duration {
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  color: rgba(210, 210, 255, 0.4);
  letter-spacing: 0.06em;
}

/* divider */
.edu-divider {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.07);
}

/* tags */
.edu-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.edu-tag {
  font-size: 11px;
  padding: 4px 12px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.09);
  color: rgba(210, 210, 255, 0.5);
}

/* responsive */
@media (max-width: 700px) {
  .edu-cards { flex-direction: column; align-items: center; }
  .edu-card { max-width: 100%; }
}
`;

export default function Education() {
  return (
    <>
      <style>{CSS}</style>
      <section className="edu">
        <div className="edu-inner">

          {/* Label */}
          <motion.p className="edu-label" {...fadeUp(0.1)}>
            — my background
          </motion.p>

          {/* Title */}
          <motion.h2 className="edu-title" {...fadeUp(0.2)}>
            Education
          </motion.h2>

          {/* Cards */}
          <motion.div className="edu-cards" {...fadeUp(0.3)}>
            {educations.map((edu, i) => (
              <motion.div
                key={i}
                className="edu-card"
                style={{ "--card-color": edu.color }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Top */}
                <div className="edu-card-top">
                  <span className="edu-icon">{edu.icon}</span>
                  <span
                    className="edu-badge"
                    style={{
                      color: edu.color,
                      borderColor: edu.color,
                      background: `${edu.color}12`,
                    }}
                  >
                    {edu.type}
                  </span>
                </div>

                {/* Degree */}
                <p className="edu-degree">{edu.degree}</p>

                {/* Institution */}
                <p className="edu-institution">{edu.institution}</p>

                {/* Location */}
                {edu.location && (
                  <p className="edu-location">📍 {edu.location}</p>
                )}

                {/* Duration */}
                <p className="edu-duration">📅 {edu.duration}</p>

                <div className="edu-divider" />

                {/* Tags */}
                <div className="edu-tags">
                  {edu.tags.map((tag, j) => (
                    <span key={j} className="edu-tag">{tag}</span>
                  ))}
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}