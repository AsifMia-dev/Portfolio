// Contact.jsx
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Replace with YOUR actual keys
const SERVICE_ID = "service_vgdvypc";  // ← Paste your Service ID here
const TEMPLATE_ID = "template_30drds9"; // ← Paste your Template ID here
const PUBLIC_KEY = "iBtcu1uurkBdVvFaG"; // ← Paste your Public Key here

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: d, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
});

const CSS = `
.contact {
  width: 100%;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%);
  position: relative;
  font-family: 'DM Sans', sans-serif;
  padding: 4rem 0 5rem;
}

.contact-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px 40px;
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
}

.contact-inner::before {
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

.contact-title {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 800;
  color: #f0f0ff;
  position: relative;
  margin-bottom: 40px;
  z-index: 1;
}

.contact-title::after {
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

.contact-label {
  font-size: 11px;
  color: rgba(210, 210, 255, 0.45);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 8px;
  display: inline-block;
}

.contact-form {
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 13px;
  color: rgba(210, 210, 255, 0.65);
  letter-spacing: 0.5px;
}

.form-group input,
.form-group textarea {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 14px 18px;
  color: #f0f0ff;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  transition: all 0.25s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: rgba(168, 85, 247, 0.5);
  background: rgba(255, 255, 255, 0.06);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(210, 210, 255, 0.3);
}

.submit-btn {
  background: linear-gradient(90deg, #f59e0b, #ec4899);
  border: none;
  border-radius: 12px;
  padding: 14px 28px;
  color: white;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-top: 10px;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(236, 72, 153, 0.3);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.status-message {
  margin-top: 20px;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 14px;
  text-align: center;
}

.status-message.success {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #4ade80;
}

.status-message.error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #f87171;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-inner {
    padding: 20px 16px 40px;
  }
}
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear status when user starts typing again
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields" });
      return;
    }
    
    if (!formData.email.includes("@")) {
      setStatus({ type: "error", message: "Please enter a valid email address" });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Portfolio Owner",
        },
        PUBLIC_KEY
      );
      
      if (result.status === 200) {
        setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Failed to send message. Please try again." });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({ type: "error", message: "Something went wrong. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{CSS}</style>
      <section className="contact" id="contact">
        <div className="contact-inner">
          <span className="contact-label">● GET IN TOUCH</span>
          <motion.h2 className="contact-title" {...fadeUp(0.2)}>
            Contact Me
          </motion.h2>
          
          <motion.form 
            ref={formRef}
            className="contact-form" 
            onSubmit={handleSubmit}
            {...fadeUp(0.4)}
          >
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label>Your Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Hi, I'd like to work with you..."
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            
            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}
          </motion.form>
        </div>
      </section>
    </>
  );
}