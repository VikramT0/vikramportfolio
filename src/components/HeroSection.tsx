import profilePhoto from "@/assets/profile-photo .jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="3D visualization background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col items-center text-center pt-24">
        {/* Profile photo */}
        <div className="relative mb-8">
          <div className="absolute -inset-1 profile-glow rounded-full opacity-7 blur-sm animate-spin-slow" />
          <img
            src={profilePhoto}
            alt="Vikram Singh"
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-background"
          />
        </div>

        {/* Headline */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-4xl opacity-0 animate-fade-in">
          Hi, I'm <span className="neon-text">Vikram Singh</span>
        </h1>
        <p className="font-heading text-lg md:text-2xl text-muted-foreground mt-4 opacity-0 animate-fade-in animation-delay-200">
          3D Artist
        </p>
        <p className="max-w-2xl text-muted-foreground/80 mt-6 text-sm md:text-base leading-relaxed opacity-0 animate-fade-in animation-delay-400">
          Passionate about transforming ideas into stunning digital creations. Specializing in 3D modeling,
          texturing, and visual design — merging creativity with technology.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mt-10 opacity-0 animate-fade-in animation-delay-600">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm hover:shadow-neon-md transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-primary/40 text-primary font-heading font-semibold text-sm hover:bg-primary/10 hover:shadow-neon-sm transition-all duration-300 hover:scale-105"
          >
            <Briefcase size={16} />
            Hire Me
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="mt-20 text-muted-foreground/40 hover:text-primary transition-colors animate-float"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
