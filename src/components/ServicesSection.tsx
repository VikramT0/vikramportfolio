import { Eye, Box, Palette, Clapperboard, Home, Play } from "lucide-react";

const services = [
  {
    title: "3D Product Visualization",
    description: "Photorealistic renders that bring your products to life with stunning detail and lighting.",
    icon: Eye,
  },
  {
    title: "Product Modeling",
    description: "Precise 3D models from concept to final render, ready for marketing and presentations.",
    icon: Box,
  },
  {
    title: "Logo Design & Branding",
    description: "Modern, memorable logos and brand identities that capture your vision.",
    icon: Palette,
  },
  {
    title: "3D Animation",
    description: "Dynamic animations that showcase your products with cinematic quality.",
    icon: Clapperboard,
  },
  {
    title: "Interior Visualization",
    description: "Immersive interior renders that help clients see spaces before they're built.",
    icon: Home,
  },
  {
    title: "Product Animation",
    description: "Smooth, engaging product animations for ads, websites, and social media.",
    icon: Play,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card/30">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
          My <span className="neon-text">Services</span>
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-12 opacity-0 animate-fade-in animation-delay-200" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="glass-card-hover p-8 group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:shadow-neon-sm transition-all duration-500">
                <service.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex text-xs font-heading font-semibold text-primary hover:underline underline-offset-4 transition-all"
              >
                Request Quote →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
