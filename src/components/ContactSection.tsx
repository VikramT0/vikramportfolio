import { useState } from "react";
import { Mail, Linkedin, Instagram, Globe, Send } from "lucide-react";

const socials = [
  { label: "Email", icon: Mail, href: "mailto:viklodhi02@gmail.com", value: "viklodhi02@gmail.com" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/vikram-singh-lodhi-97b88826a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", value: "vikram Singh Lodhi" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/vikram_blender_?igsh=MTFwZDB2N29rcXJ1cw==", value: "@vikram_blender_" },
  { label: "Sketchfab", icon: Globe, href: "https://sketchfab.com/vikkybl", value: "vikram" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Thank you! Your message has been sent.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
          Get In <span className="neon-text">Touch</span>
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-12 opacity-0 animate-fade-in animation-delay-200" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Social cards */}
          <div className="space-y-4">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Have a project in mind or want to collaborate? Reach out and let's create something amazing together.
            </p>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="glass-card-hover p-4 flex items-center gap-4 group block"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <s.icon className="text-primary" size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                  <div className="text-sm text-foreground">{s.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-5 py-3 rounded-lg bg-secondary/50 border border-glass-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:shadow-neon-sm transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-5 py-3 rounded-lg bg-secondary/50 border border-glass-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:shadow-neon-sm transition-all"
              />
            </div>
            <div>
              <textarea
                placeholder="Describe your project..."
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-3 rounded-lg bg-secondary/50 border border-glass-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:shadow-neon-sm transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm hover:shadow-neon-md transition-all duration-300 hover:scale-105"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
