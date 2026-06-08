import { motion } from "framer-motion";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: d, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
});

const hobbies = [
  { emoji: "⚽", label: "Football" },
  { emoji: "🏓", label: "Table Tennis" },
  { emoji: "✈️", label: "Travelling" },
  { emoji: "📚", label: "Reading" },
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
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 800;
  color: #f0f0ff;
  margin-bottom: 28px;
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
  font-size: 15px;
  font-weight: 300;
  line-height: 1.9;
  color: rgba(210, 210, 255, 0.6);
  margin-bottom: 18px;
  max-width: 680px;
  z-index: 1;
}

.about-story span {
  color: #a78bfa;
  font-weight: 500;
}

/* vision box */
.about-vision {
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 16px;
  padding: 20px 28px;
  margin: 28px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.75;
  color: rgba(210, 210, 255, 0.7);
  max-width: 640px;
  z-index: 1;
  position: relative;
}

.about-vision::before {
  content: '🎯';
  font-size: 20px;
  display: block;
  margin-bottom: 10px;
}

.about-vision span {
  color: #22d3ee;
  font-weight: 500;
}

/* fuel label */
.about-sub {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(210, 210, 255, 0.3);
  margin-bottom: 14px;
  margin-top: 36px;
  z-index: 1;
}

/* fuel chips */
.about-fuels {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 52px;
  z-index: 1;
}

.about-fuel-chip {
  padding: 7px 16px;
  border-radius: 100px;
  background: rgba(34, 211, 238, 0.07);
  border: 1px solid rgba(34, 211, 238, 0.2);
  font-size: 12px;
  font-weight: 500;
  color: #22d3ee;
  letter-spacing: 0.04em;
}

/* hobbies */
.about-hobbies {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
  z-index: 1;
}

.about-hobby-card {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.25s ease;
  cursor: default;
}

.about-hobby-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(167, 139, 250, 0.35);
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.15);
}

.about-hobby-emoji {
  font-size: 28px;
}

.about-hobby-label {
  font-size: 12px;
  color: rgba(210, 210, 255, 0.6);
}

.about-hobby-card:hover .about-hobby-label {
  color: #f0f0ff;
}

/* fun fact */
.about-fact {
  margin-top: 52px;
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  color: rgba(210, 210, 255, 0.3);
  letter-spacing: 0.04em;
  z-index: 1;
}

.about-fact span {
  color: #a78bfa;
}
`;

export default function About() {
  return (
    <>
      <style>{CSS}</style>
      <section className="about">
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
            Hey, I'm <span>Asif Mia</span> — a CSE graduate who started coding in <span>2022</span>.
            The moment I wrote my first lines of code, something clicked. It wasn't just programming —
            it was a new way to <span>think logically</span>, break down complex problems and build real solutions.
          </motion.p>

          <motion.p className="about-story" {...fadeUp(0.35)}>
            Subjects like <span>Discrete Mathematics</span>, <span>Theory of Computation</span> and <span>DSA</span> didn't
            feel like coursework — they felt like fuel. When I started building projects with HTML, CSS and MySQL,
            I hit a wall. My strong logical thinking had nowhere to land yet. But instead of quitting,
            I kept digging — and that's when <span>Backend Engineering</span> started making sense to me.
          </motion.p>

          {/* Vision */}
          <motion.div className="about-vision" {...fadeUp(0.4)}>
            My vision is to go deep into <span>one domain</span> — like agriculture —
            and use <span>AI, ML and cloud applications</span> to solve real, specific problems in that space.
            Not just building apps, but building things that <span>actually matter</span>.
          </motion.div>
          {/* Hobbies */}
          <motion.p className="about-sub" {...fadeUp(0.55)}>
            outside the terminal
          </motion.p>
          <motion.div className="about-hobbies" {...fadeUp(0.6)}>
            {hobbies.map((h, i) => (
              <motion.div
                key={i}
                className="about-hobby-card"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="about-hobby-emoji">{h.emoji}</span>
                <span className="about-hobby-label">{h.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Fun fact */}
          <motion.p className="about-fact" {...fadeUp(0.7)}>
            // still debugging why coffee tastes better at <span>2am</span> while coding
          </motion.p>

        </div>
      </section>
    </>
  );
}