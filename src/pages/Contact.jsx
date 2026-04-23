import { useState } from "react";
import { Send } from "lucide-react";
import Reveal from "../components/ui/Reveal";
import MagneticButton from "../components/ui/MagneticButton";

const ContactPage = ({ theme }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mailto with pre-filled fields
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.open(
      `mailto:manpreet210028@gmail.com?subject=${subject}&body=${body}`,
    );
    setStatus("sent");
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          {/* HEADING */}
          <h2
            className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${theme.accent}`}
          >
            Contact
          </h2>
          <h3
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${theme.text}`}
          >
            Let's <span className={`${theme.accent} italic`}>Connect</span>
          </h3>
          <p className={`text-lg mb-12 ${theme.textMuted}`}>
            Open to discussing new opportunities, creative collaborations, or
            complex technical challenges.
          </p>
        </Reveal>

        {/* FORM CARD */}
        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className={`p-8 md:p-10 rounded-3xl border ${theme.cardBorder} ${theme.cardBg} space-y-8`}
          >
            {/* NAME */}
            <div>
              <label
                htmlFor="contact-name"
                className={`text-xs font-bold uppercase tracking-[0.15em] mb-2 block ${theme.textMuted}`}
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={`w-full px-4 py-3 rounded-xl border ${theme.cardBorder} bg-transparent ${theme.text} placeholder:${theme.textMuted} focus:outline-none focus:border-orange-500/50 transition-colors`}
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="contact-email"
                className={`text-xs font-bold uppercase tracking-[0.15em] mb-2 block ${theme.textMuted}`}
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className={`w-full px-4 py-3 rounded-xl border ${theme.cardBorder} bg-transparent ${theme.text} placeholder:${theme.textMuted} focus:outline-none focus:border-orange-500/50 transition-colors`}
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="contact-message"
                className={`text-xs font-bold uppercase tracking-[0.15em] mb-2 block ${theme.textMuted}`}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className={`w-full px-4 py-3 rounded-xl border ${theme.cardBorder} bg-transparent ${theme.text} placeholder:${theme.textMuted} focus:outline-none focus:border-orange-500/50 transition-colors resize-none`}
              />
            </div>

            {/* SUBMIT */}
            <MagneticButton
              type="submit"
              className={`px-8 py-3 rounded-full ${theme.btnSecondary} font-bold transition-all flex items-center gap-2 text-sm border`}
            >
              <Send size={16} />
              {status === "sent" ? "Message Opened!" : "Send Message"}
            </MagneticButton>
          </form>
        </Reveal>
      </div>
    </div>
  );
};

export default ContactPage;
