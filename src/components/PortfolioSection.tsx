import { useState, useEffect } from "react";
import { ExternalLink, X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

// Asset Imports
import smartRing from "@/assets/smart-ring.jpg";
import ringCase from "@/assets/ring-case.jpg";
import interioir from "@/assets/interior.jpg";
import coffee from "@/assets/coffee.jpg";
import donald from "@/assets/donald.jpg";
import room from "@/assets/room.png";
import background from "@/assets/background.mp4";
import funny from "@/assets/funny.mp4";
import earphone from "@/assets/earphone.mp4";

// 1. Define Project Interface for type safety
interface Project {
  title: string;
  category: string;
  description: string;
  image?: string;
  video?: string;
  featured: boolean;
}

const projects: Project[] = [
   {
    title: "Donut",
    category: "Product Visualization",
    description: "Stylized 3D donut with icing and sprinkles, focusing on shading, materials, and basic food rendering practice, created as my first project in Blender.",
    image: donald,
    featured: true,
  },
  {
    title: "NoBounce Smart Ring",
    category: "Product Design",
    description: "A sleek, minimal smart ring rendered with clean lighting and smooth metallic shading, showcasing precise hard-surface modeling and realistic material reflections — created as my first freelance project",
    image: smartRing,
    featured: true,
  },
  {
    title: "Smart Ring Case",
    category: "Product Design",
    description: "A clean, minimalist render of the NoBounce Smart Ring charging case, highlighting its sleek form, subtle reflections, and modern premium design..",
    image: ringCase,
    featured: true,
  },
  {
    title: "Interior Design ",
    category: "Interior Visualization",
    description: "Warm, minimalist kitchen interior visualized in 3D, focusing on clean lines, ambient lighting, and functional layout, created as a client project.",
    image: interioir,
    featured: true,
  },
  {
    title: "Coffee Aesthetic",
    category: "Isometric Environment",
    description: "Stylized 3D coffee shop scene with warm lighting, bold signage, and playful isometric composition.",
    image: coffee,
    featured: true,
  },

   {
    title: "Cozy Bedroom Isometric",
    category: "Interior Visualization",
    description: "Stylized isometric bedroom rendered in 3D, focusing on soft lighting, simple props, and a clean, minimal aesthetic, created as a client project.",
    image: room,
    featured: true,
  },
  {
    title: "Abstract Motion",
    category: "Motion Graphics",
    description: "Cinematic background loop for digital displays.",
    video: background,
    featured: true,
  },
 {
  title: "Earphone Exploded View Animation",
  category: "Product Animation",
  description: "3D breakdown animation showcasing  earphone  and assembly with clean, technical visualization.",
  video: earphone,
  featured: true,
} ,
   {
    title: "Funny Animation",
    category: "JS",
    description: "Always be happy.",
    video: funny,
    featured: true,
  },
];

const PortfolioSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const nextProject = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % projects.length);
    }
  };

  const prevProject = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length);
    }
  };

  const selectedProject = selectedIndex !== null ? projects[selectedIndex] : null;

  return (
  <section id="project" className="section-padding bg-card/30 relative min-h-screen">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            My <span className="neon-text">Projects</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card-hover overflow-hidden cursor-pointer flex flex-col"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="relative overflow-hidden aspect-video">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="text-primary w-10 h-10" />
                    <span className="text-white text-xs font-bold tracking-widest uppercase">View Full Screen</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card/50 flex-grow">
                <span className="text-xs font-heading text-primary uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="font-heading text-xl font-semibold mt-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Hint */}
        <div className="flex flex-wrap gap-3 mt-16">
          {[ "Logo Design", "2D Animation"].map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 rounded-full text-xs font-heading text-muted-foreground border border-white/10 hover:border-primary/40 hover:text-primary transition-colors cursor-default"
            >
              {cat} — More Coming
            </span>
          ))}
        </div>
      </div>

      {/* --- FULL SCREEN LIGHTBOX --- */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/98 backdrop-blur-xl p-4 animate-in fade-in zoom-in-95 duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 text-foreground/50 hover:text-primary transition-all z-[110] hover:scale-110"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={40} />
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all"
            onClick={(e) => { e.stopPropagation(); prevProject(); }}
          >
            <ChevronLeft size={32} />
          </button>

          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all"
            onClick={(e) => { e.stopPropagation(); nextProject(); }}
          >
            <ChevronRight size={32} />
          </button>

          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full bg-black/40 rounded-xl overflow-hidden shadow-2xl border border-white/5">
              {selectedProject.video ? (
                <video
                  src={selectedProject.video}
                  autoPlay loop controls
                  className="w-full max-h-[75vh] object-contain"
                />
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[75vh] object-contain"
                />
              )}
            </div>

            <div className="mt-8 text-center px-4">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
                {selectedProject.category}
              </span>
              <h3 className="text-3xl font-bold text-foreground mt-2">{selectedProject.title}</h3>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;




// import smartRing from "@/assets/smart-ring.jpg";
// import ringCase from "@/assets/ring-case.jpg";
// import interioir  from "@/assets/interior.jpg";
// import coffee  from "@/assets/coffee.jpg";
// import donald  from "@/assets/donald.jpg";
// import { ExternalLink } from "lucide-react";

// const projects = [
//   {
//     title: "NoBounce Smart Ring",
//     category: "Product Visualization",
//     description:
//       "Complete 3D modeling and photorealistic rendering of a modern smart ring with realistic materials, lighting, and product presentation.",
//     image: smartRing,
//     featured: true,
//   },
//   {
//     title: "Smart Ring Case",
//     category: "Product Design",
//     description:
//       "Charging case design with sleek form factor, neon accent lighting, and premium material finishes.",
//     image: ringCase,
//     featured: true,
//   },
//   {
//     title: "interioir design",
//     category: "Interior Design",
//     description:
//       "Holographic product showcase with cinematic camera movement and dynamic lighting effects.",
//     image: interioir,
//     featured: true,
//   },
//     {
//     title: "coffee",
//     category: "Interior Design",
//     description:
//       "Holographic product showcase with cinematic camera movement and dynamic lighting effects.",
//     image: coffee,
//     featured: true,
//   },
//     {
//     title: "donald",
//     category: "Interior Design",
//     description:
//       "Holographic product showcase with cinematic camera movement and dynamic lighting effects.",
//     image: donald,
//     featured: true,
//   },

// ];

// const PortfolioSection = () => {
//   return (
//     <section id="portfolio" className="section-padding bg-card/30">
//       <div className="container mx-auto">
//         <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
//           My <span className="neon-text">Project</span>
//         </h2>
//         <div className="w-16 h-0.5 bg-primary mb-12 opacity-0 animate-fade-in animation-delay-200" />

//         {/* Featured projects */}
//         <div className="grid md:grid-cols-2 gap-6 mb-6">
//           {projects
//             .filter((p) => p.featured)
//             .map((project) => (
//               <div key={project.title} className="group glass-card-hover overflow-hidden">
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
//                     <ExternalLink className="text-primary" size={20} />
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <span className="text-xs font-heading text-primary uppercase tracking-widest">
//                     {project.category}
//                   </span>
//                   <h3 className="font-heading text-lg font-semibold mt-2 text-foreground">
//                     {project.title}
//                   </h3>
//                   <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
//                     {project.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//         </div>

//         {/* Other project */}
//         {projects
//           .filter((p) => !p.featured)
//           .map((project) => (
//             <div key={project.title} className="group glass-card-hover overflow-hidden">
//               <div className="md:flex">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full md:w-1/3 h-48 md:h-auto object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="p-6 flex flex-col justify-center">
//                   <span className="text-xs font-heading text-primary uppercase tracking-widest">
//                     {project.category}
//                   </span>
//                   <h3 className="font-heading text-lg font-semibold mt-2 text-foreground">
//                     {project.title}
//                   </h3>
//                   <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
//                     {project.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}

//         {/* Categories hint */}
//         <div className="flex flex-wrap gap-3 mt-10">
//           {["Product Animations", "Interior Design", "Logo Design", "2D/3D Animation"].map(
//             (cat) => (
//               <span
//                 key={cat}
//                 className="px-4 py-2 rounded-full text-xs font-heading text-muted-foreground border border-glass-border hover:border-primary/40 hover:text-primary transition-colors cursor-default"
//               >
//                 {cat} — Coming Soon
//               </span>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;







// import smartRing from "@/assets/smart-ring.jpg";
// import ringCase from "@/assets/ring-case.jpg";
// import interioir from "@/assets/interior.jpg";
// import coffee from "@/assets/coffee.jpg";
// import donald from "@/assets/donald.jpg";
// // Video import logic
// import background from "@/assets/background.mp4";
// import earphone from "@/assets/earphone.mp4";
// import { ExternalLink } from "lucide-react";

// const projects = [
//   {
//     title: "NoBounce Smart Ring",
//     category: "Product Visualization",
//     description:
//       "Complete 3D modeling and photorealistic rendering of a modern smart ring with realistic materials, lighting, and product presentation.",
//     image: smartRing,
//     // Agar video dikhani ho toh niche wali line uncomment karein:
//     // video: motionVideo,
//     featured: true,
//   },
//   {
//     title: "Smart Ring Case",
//     category: "Product Design",
//     description:
//       "Charging case design with sleek form factor, neon accent lighting, and premium material finishes.",
//     image: ringCase,
//     featured: true,
//   },
//   {
//     title: "interioir design",
//     category: "Interior Design",
//     description:
//       "Holographic product showcase with cinematic camera movement and dynamic lighting effects.",
//     image: interioir,
//     featured: true,
//   },
//   {
//     title: "coffee",
//     category: "Interior Design",
//     description:
//       "Holographic product showcase with cinematic camera movement and dynamic lighting effects.",
//     image: coffee,
//     featured: true,
//   },
//   {
//     title: "donald",
//     category: "Interior Design",
//     description:
//       "Holographic product showcase with cinematic camera movement and dynamic lighting effects.",
//     image: donald,
//     featured: true,
//   },
//   {
//     title: "donald",
//     category: "Interior Design",
//     description:
//       "Holographic product showcase with cinematic camera movement and dynamic lighting effects.",
//     video: background,
//     featured: true,
//   },
//    {
//     title: "donald",
//     category: "Interior Design",
//     description:
//       "Holographic product showcase with cinematic camera movement and dynamic lighting effects.",
//     video: earphone,
//     featured: true,
//   },
// ];

// const PortfolioSection = () => {
//   return (
//     <section id="portfolio" className="section-padding bg-card/30">
//       <div className="container mx-auto">
//         <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
//           My <span className="neon-text">Project</span>
//         </h2>
//         <div className="w-16 h-0.5 bg-primary mb-12 opacity-0 animate-fade-in animation-delay-200" />

//         {/* Featured projects */}
//         <div className="grid md:grid-cols-2 gap-6 mb-6">
//           {projects
//             .filter((p) => p.featured)
//             .map((project) => (
//               <div key={project.title} className="group glass-card-hover overflow-hidden">
//                 <div className="relative overflow-hidden">
//                   {/* Video and Image Logic combined - image section is safe */}
//                   {(project as any).video ? (
//                     <video
//                       src={(project as any).video}
//                       autoPlay
//                       loop
//                       muted
//                       playsInline
//                       className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                   ) : (
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                   )}

//                   <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
//                     <ExternalLink className="text-primary" size={20} />
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <span className="text-xs font-heading text-primary uppercase tracking-widest">
//                     {project.category}
//                   </span>
//                   <h3 className="font-heading text-lg font-semibold mt-2 text-foreground">
//                     {project.title}
//                   </h3>
//                   <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
//                     {project.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//         </div>

//         {/* Other project */}
//         {projects
//           .filter((p) => !p.featured)
//           .map((project) => (
//             <div key={project.title} className="group glass-card-hover overflow-hidden">
//               <div className="md:flex">
//                 {(project as any).video ? (
//                     <video
//                       src={(project as any).video}
//                       autoPlay
//                       loop
//                       muted
//                       playsInline
//                       className="w-full md:w-1/3 h-48 md:h-auto object-cover transition-transform duration-700 group-hover:scale-105"
//                     />
//                   ) : (
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full md:w-1/3 h-48 md:h-auto object-cover transition-transform duration-700 group-hover:scale-105"
//                     />
//                 )}
//                 <div className="p-6 flex flex-col justify-center">
//                   <span className="text-xs font-heading text-primary uppercase tracking-widest">
//                     {project.category}
//                   </span>
//                   <h3 className="font-heading text-lg font-semibold mt-2 text-foreground">
//                     {project.title}
//                   </h3>
//                   <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
//                     {project.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}

//         {/* Categories hint */}
//         <div className="flex flex-wrap gap-3 mt-10">
//           {["Product Animations", "Interior Design", "Logo Design", "2D/3D Animation"].map(
//             (cat) => (
//               <span
//                 key={cat}
//                 className="px-4 py-2 rounded-full text-xs font-heading text-muted-foreground border border-glass-border hover:border-primary/40 hover:text-primary transition-colors cursor-default"
//               >
//                 {cat} — Coming Soon
//               </span>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;
