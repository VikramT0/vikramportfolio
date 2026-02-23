import {
  Box,
  Palette,
  PenTool,
  Eye,
  Film,
  Clapperboard,
  Home,
  Play,
} from "lucide-react";

const skills = [
  { name: "3D Modeling", icon: Box, level: 95 },
  { name: "Product Design", icon: PenTool, level: 90 },
  { name: "Logo Design", icon: Palette, level: 85 },
  { name: "Product Visualization", icon: Eye, level: 92 },
  { name: "2D Animation", icon: Film, level: 80 },
  { name: "3D Animation", icon: Clapperboard, level: 88 },
  { name: "Interior Design", icon: Home, level: 82 },
  { name: "Product Animation", icon: Play, level: 87 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
          My <span className="neon-text">Skills</span>
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-12 opacity-0 animate-fade-in animation-delay-200" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="glass-card-hover p-6 flex flex-col items-center text-center group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-neon-sm transition-all duration-500">
                <skill.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-3">
                {skill.name}
              </h3>
              {/* Progress bar */}
              <div className="w-full h-1 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-neon-purple transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground mt-2">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
