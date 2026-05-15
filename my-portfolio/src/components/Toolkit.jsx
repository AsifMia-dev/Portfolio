// Toolkit.jsx - brief, minimal
export default function Toolkit() {
  const tools = ["VS Code", "Git", "Postman", "Docker", "Figma", "Vercel"];
  
  return (
    <section style={{ padding: "40px 2rem", background: "#0f0e2a" }}>
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: "11px", color: "rgba(210,210,255,0.45)" }}>
          ● TOOLKIT
        </span>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>
          {tools.map(tool => (
            <span key={tool} style={{ 
              padding: "6px 16px", 
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "100px",
              fontSize: "13px",
              color: "rgba(210,210,255,0.65)"
            }}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

