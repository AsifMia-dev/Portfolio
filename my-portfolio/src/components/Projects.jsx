// Projects.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16v16H4z M9 9h6v6H9z M15 4v6 M9 14v6 M4 9h6 M14 19h6" stroke="currentColor" fill="none"/>
  </svg>
);

const GithubProjectIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" fill="none"/>
  </svg>
);

const fu = (d = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: d, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
});

const CSS = `
  .projects-section {
    width: 100%;
    padding: 100px 2rem 120px 2rem;
    background: #0f0e2a;
    position: relative;
    font-family: 'DM Sans', sans-serif;
  }

  .projects-container {
    max-width: 1400px;
    margin: 0 auto;
  }

  /* Centered Header */
  .projects-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .projects-badge {
    display: inline-block;
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(210,210,255,0.45);
    margin-bottom: 16px;
  }

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
    margin: 0 auto;  /* Center the subtitle */
    text-align: center;
  }

  /* Centered Filter Bar */
  .filter-bar {
    display: flex;
    justify-content: center;  /* Center the buttons */
    gap: 12px;
    margin-bottom: 56px;
    flex-wrap: wrap;
  }

  .filter-chip {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 8px 24px;
    border-radius: 100px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: rgba(210,210,255,0.65);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .filter-chip.active {
    background: linear-gradient(90deg, rgba(6,182,212,0.15), rgba(99,102,241,0.15));
    border-color: rgba(6,182,212,0.4);
    color: #f0f0ff;
  }

  /* Projects Grid - stays left-aligned */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 32px;
  }

  /* Project Card styles remain the same */
  .project-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 24px;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .project-card-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .project-image {
    position: relative;
    aspect-ratio: 16/10;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(6,182,212,0.05), rgba(99,102,241,0.05));
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .project-card:hover .project-image img {
    transform: scale(1.05);
  }

  .project-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(15,14,42,0.95), rgba(99,102,241,0.85));
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card:hover .project-overlay {
    opacity: 1;
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: #fff;
    color: #0f0e2a;
    text-decoration: none;
    border-radius: 100px;
    font-size: 13px;
    font-weight: 500;
    transition: transform 0.2s ease;
  }

  .project-link:hover {
    transform: translateY(-2px);
  }

  .project-content {
    padding: 24px;
  }

  .project-title {
    font-size: 20px;
    font-weight: 700;
    color: #f0f0ff;
    margin-bottom: 10px;
  }

  .project-desc {
    font-size: 13px;
    line-height: 1.6;
    color: rgba(210,210,255,0.55);
    margin-bottom: 20px;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
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

  .project-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
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

  .project-live-link:hover {
    gap: 10px;
  }

  .project-github-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: rgba(210,210,255,0.5);
    text-decoration: none;
    font-size: 12px;
    transition: color 0.2s ease;
  }

  .project-github-link:hover {
    color: #f0f0ff;
  }

  /* Responsive */
  @media (max-width: 860px) {
    .projects-section {
      padding: 60px 20px;
    }
    .projects-grid {
      grid-template-columns: 1fr;
    }
    .filter-bar {
      gap: 8px;
    }
    .filter-chip {
      padding: 6px 18px;
      font-size: 12px;
    }
  }
`;

const projectsData = [
  {
    id: 1,
    title: "TaskFlow Pro",
    description: "Full-stack task management with real-time updates, drag-drop, and team collaboration features.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    liveLink: "#",
    githubLink: "#",
    category: "fullstack"
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "Generate stunning images from text prompts using Stable Diffusion API.",
    tech: ["Next.js", "Python", "FastAPI", "Tailwind"],
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=600",
    liveLink: "#",
    githubLink: "#",
    category: "ai"
  },
  {
    id: 3,
    title: "EcoTrack Dashboard",
    description: "Analytics dashboard for tracking carbon footprint with interactive charts.",
    tech: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    liveLink: "#",
    githubLink: "#",
    category: "frontend"
  },
  {
    id: 4,
    title: "DevOps Pipeline",
    description: "CI/CD automation tool with GitHub Actions and Docker deployment.",
    tech: ["Docker", "GitHub Actions", "AWS", "Terraform"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600",
    liveLink: "#",
    githubLink: "#",
    category: "backend"
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filters = [
    { label: "All Work", value: "all" },
    { label: "Full Stack", value: "fullstack" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "AI/ML", value: "ai" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <>
      <style>{CSS}</style>
      <section className="projects-section">
        <div className="projects-container">
          {/* Centered Header */}
          <motion.div className="projects-header" {...fu(0.1)}>
            <h2 className="projects-title">
              Featured<span className="grad"> Projects</span>
            </h2>
            <p className="projects-subtitle">
              Real solutions I've built — from concept to deployment.
              Each project reflects my approach to clean code and user experience.
            </p>
          </motion.div>

          {/* Centered Filter Buttons */}
          <motion.div className="filter-bar" {...fu(0.2)}>
            {filters.map((filter, idx) => (
              <motion.button
                key={filter.value}
                className={`filter-chip ${activeFilter === filter.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.value)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                {...fu(0.25 + idx * 0.05)}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid - stays left-aligned within centered container */}
          <div className="projects-grid">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                <div className="project-card-inner">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <motion.a
                        href={project.liveLink}
                        className="project-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLinkIcon /> Live Demo
                      </motion.a>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-pill">{tech}</span>
                      ))}
                    </div>
                    <div className="project-footer">
                      <motion.a
                        href={project.liveLink}
                        className="project-live-link"
                        whileHover={{ x: 4 }}
                      >
                        View Project →
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        className="project-github-link"
                        whileHover={{ scale: 1.05 }}
                      >
                        <GithubProjectIcon /> Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}