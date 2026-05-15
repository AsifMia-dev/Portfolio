// AboutMe.jsx
import { motion } from "framer-motion";

const fu = (d = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: d, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
});

const CSS = `
  .about-section {
    width: 100%;
    padding: 100px 2rem 100px 6rem;
    background: #0f0e2a;
    font-family: 'DM Sans', sans-serif;
  }

  .about-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .about-header {
    margin-bottom: 48px;
  }

  .about-badge {
    display: inline-block;
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(210,210,255,0.45);
    margin-bottom: 16px;
  }

  .about-title {
    font-family: sans-serif;
    font-weight: 800;
    font-size: clamp(36px, 4.5vw, 52px);
    letter-spacing: -1.5px;
    color: #f0f0ff;
    margin-bottom: 24px;
  }

  .about-title .grad {
    background: linear-gradient(90deg, #22d3ee 0%, #a78bfa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
  }

  .about-text p {
    font-size: 15px;
    line-height: 1.7;
    color: rgba(210,210,255,0.65);
    margin-bottom: 20px;
  }

  .about-highlight {
    color: #22d3ee;
    font-weight: 500;
  }

  .about-quote {
    background: rgba(255, 255, 255, 0.03);
    border-left: 3px solid #22d3ee;
    padding: 20px 24px;
    margin: 28px 0;
    font-style: italic;
    font-size: 14px;
    color: rgba(210,210,255,0.75);
  }

  .about-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
  }

  .stat-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    padding: 20px;
    text-align: center;
  }

  .stat-number {
    font-size: 28px;
    font-weight: 800;
    background: linear-gradient(135deg, #22d3ee, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
  }

  .stat-label {
    font-size: 11px;
    font-family: 'DM Mono', monospace;
    color: rgba(210,210,255,0.45);
    letter-spacing: 0.5px;
  }

  .journey-list {
    list-style: none;
    padding: 0;
  }

  .journey-list li {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    font-size: 14px;
    color: rgba(210,210,255,0.65);
  }

  .journey-dot {
    width: 6px;
    height: 6px;
    background: #22d3ee;
    border-radius: 50%;
  }

  @media (max-width: 860px) {
    .about-section {
      padding: 60px 28px;
    }
    .about-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
`;

export default function AboutMe() {
  return (
    <>
      <style>{CSS}</style>
      <section className="about-section">
        <div className="about-container">
          <motion.div className="about-header" {...fu(0.1)}>
            <span className="about-badge">● WHO AM I</span>
            <h2 className="about-title">
              More Than<span className="grad"> Code</span>
            </h2>
          </motion.div>

          <div className="about-grid">
            {/* Left Column - Story */}
            <motion.div className="about-text" {...fu(0.2)}>
              <p>
                I'm a <span className="about-highlight">CSE graduate</span> who discovered 
                my passion for backend engineering late in college. What started as 
                curiosity about "how things work under the hood" turned into an obsession.
              </p>
              
              <p>
                I love building <span className="about-highlight">scalable systems</span>, 
                optimizing database queries, and creating APIs that are a joy to work with. 
                The backend is where logic meets creativity — and that's my sweet spot.
              </p>

              <div className="about-quote">
                "I don't just write code. I build solutions that make people's lives easier."
              </div>

              <p>
                Currently diving deeper into <span className="about-highlight">System Design</span>, 
                <span className="about-highlight"> Cloud Architecture (AWS)</span>, and 
                <span className="about-highlight"> AI Integration</span>. Always learning, 
                always building.
              </p>
            </motion.div>

            {/* Right Column - Stats & Journey */}
            <motion.div {...fu(0.3)}>
              <div className="about-stats">
                <div className="stat-card">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">PROJECTS BUILT</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">1K+</div>
                  <div className="stat-label">HOURS CODED</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">∞</div>
                  <div className="stat-label">CURIOSITY</div>
                </div>
              </div>

              <div style={{ marginTop: "32px" }}>
                <h3 style={{ fontSize: "18px", color: "#f0f0ff", marginBottom: "20px" }}>
                  My Journey →
                </h3>
                <ul className="journey-list">
                  <li><span className="journey-dot"></span> 2021: Started learning JavaScript</li>
                  <li><span className="journey-dot"></span> 2022: Built first fullstack app</li>
                  <li><span className="journey-dot"></span> 2023: Graduated CSE, focused on backend</li>
                  <li><span className="journey-dot"></span> 2024: Currently mastering system design</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}