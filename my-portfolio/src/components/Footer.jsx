// Footer.jsx
import { motion } from "framer-motion";

const CSS = `
.footer {
  width: 100%;
  background: #0a0a1a;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  text-align: center;
}

.copyright {
  color: rgba(210, 210, 255, 0.5);
  font-size: 13px;
  font-family: 'DM Sans', sans-serif;
}

.copyright a {
  color: rgba(210, 210, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.copyright a:hover {
  color: #f59e0b;
}
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{CSS}</style>
      <footer className="footer">
        <div className="copyright">
          © {currentYear} <a href="#">Asif Mia</a>. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}