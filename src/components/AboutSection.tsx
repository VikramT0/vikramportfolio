import workspaceImg from "@/assets/workspace.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
          About <span className="neon-text">Me</span>
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-12 opacity-0 animate-fade-in animation-delay-200" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-5 opacity-0 animate-fade-in animation-delay-400">
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate 3D artist currently in my 8th semester as a B.Tech Computer Science
              student. My journey sits at the intersection of art and technology — I combine a strong
              technical foundation with an artistic eye to create compelling digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From photorealistic product renders to immersive animations, I thrive on transforming
              concepts into visually stunning realities. Every project is an opportunity to push
              creative boundaries while maintaining precision and attention to detail.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My continuous learning mindset drives me to explore new tools, techniques, and design
              philosophies — always evolving to deliver work that stands out.
            </p>
            <div className="flex gap-6 pt-4">
              {[
               

              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-heading text-2xl font-bold neon-text">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative opacity-0 animate-fade-in animation-delay-600">
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-neon-purple/20 rounded-2xl blur-xl" />
            <img
              src={workspaceImg}
              alt="3D workspace"
              className="relative rounded-2xl border border-glass-border w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
