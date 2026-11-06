import { motion } from "framer-motion";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: d, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
});

const worked = [
  "Databases",
  "APIs",
  "UI Design",
  "Responsive Frontend",
  "Reusable Components",
];

const focus = [
  {
    no: "01",
    title: "AI-Native Software",
    text: "Building products where intelligence is part of the foundation, not an add-on.",
  },
  {
    no: "02",
    title: "Autonomous AI Agents",
    text: "Exploring agents that can reason, use tools and carry tasks through on their own.",
  },
  {
    no: "03",
    title: "Cloud Infrastructure",
    text: "Learning the systems underneath, so what I build stays reliable as it grows.",
  },
];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');

.about {
  width: 100%;
  background: #0f0e2a;
  font-family: 'DM Sans', sans-serif;
  position: relative;
}

.about-inner {
  max-width: 820px;
  margin: 0 auto;
  padding: 160px 32px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
}

/* glow */
.about-inner::before {
  content: '';
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 250px;
  background: radial-gradient(ellipse, rgba(167, 139, 250, 0.12) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* label */
.about-label {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #22d3ee;
  margin-bottom: 14px;
  z-index: 1;
}

/* title */
.about-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 800;
  color: #f0f0ff;
  margin-bottom: 36px;
  position: relative;
  z-index: 1;
}

.about-title::after {
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

/* story */
.about-story {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.9;
  color: rgba(210, 210, 255, 0.75);
  margin-bottom: 18px;
  max-width: 680px;
  z-index: 1;
}

.about-story span {
  color: #a78bfa;
  font-weight: 500;
}

/* sub labels */
.about-sub {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(210, 210, 255, 0.45);
  margin-bottom: 18px;
  margin-top: 44px;
  z-index: 1;
}

/* chips */
.about-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  z-index: 1;
}

.about-chip {
  padding: 7px 16px;
  border-radius: 100px;
  background: rgba(34, 211, 238, 0.07);
  border: 1px solid rgba(34, 211, 238, 0.2);
  font-size: 12px;
  font-weight: 500;
  color: #22d3ee;
  letter-spacing: 0.04em;
}

/* focus cards */
.about-focus {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 16px;
  width: 100%;
  z-index: 1;
}

.about-card {
  text-align: left;
  padding: 22px 22px 24px;
  border-radius: 18px;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.2);
  transition: all 0.25s ease;
}

.about-card:hover {
  background: rgba(99, 102, 241, 0.13);
  border-color: rgba(167, 139, 250, 0.4);
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.15);
}

.about-card-no {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  color: #22d3ee;
  margin-bottom: 12px;
}

.about-card-title {
  font-family: 'Syne', sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: #f0f0ff;
  margin-bottom: 8px;
}

.about-card-text {
  font-size: 13.5px;
  font-weight: 300;
  line-height: 1.7;
  color: rgba(210, 210, 255, 0.7);
}
`;

export default function About() {
  return (
    <>
      <style>{CSS}</style>
      <section className="about" id="about">
        <div className="about-inner">

          {/* Label */}
          <motion.p className="about-label" {...fadeUp(0.1)}>
            — who I am
          </motion.p>

          {/* Title */}
          <motion.h2 className="about-title" {...fadeUp(0.2)}>
            About Me
          </motion.h2>

          {/* Story */}
          <motion.p className="about-story" {...fadeUp(0.3)}>
            Hi, I'm <span>Asif Mia</span>, a CSE graduate from <span>United International University</span>.
            These days I'm actively working at the meeting point of <span>software engineering</span> and{" "}
            <span>AI</span>, learning every day and slowly turning curiosity into real, working skills.
          </motion.p>

          <motion.p className="about-story" {...fadeUp(0.35)}>
            Throughout my university journey, I built a number of course and personal{" "}
            <span>web-based projects</span>. Along the way I got comfortable breaking an interface into
            small, clean, <span>reusable components</span> that are easy to maintain and grow over time.
          </motion.p>

          {/* What I've worked with */}
          <motion.p className="about-sub" {...fadeUp(0.45)}>
            what I've worked with
          </motion.p>
          <motion.div className="about-chips" {...fadeUp(0.5)}>
            {worked.map((w) => (
              <span key={w} className="about-chip">{w}</span>
            ))}
          </motion.div>

          {/* Where I'm headed */}
          <motion.p className="about-sub" {...fadeUp(0.6)}>
            where I'm headed
          </motion.p>
          <motion.div className="about-focus" {...fadeUp(0.65)}>
            {focus.map((f) => (
              <div key={f.no} className="about-card">
                <p className="about-card-no">{f.no}</p>
                <h3 className="about-card-title">{f.title}</h3>
                <p className="about-card-text">{f.text}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}