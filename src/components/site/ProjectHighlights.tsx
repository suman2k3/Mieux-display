import { img } from "@/data/site";
import { Reveal, SectionHeading } from "@/components/site/motion-primitives";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

export function ProjectHighlights() {
  // DEMO DATA — Replace with actual project information
  const projects = [
    {
      id: 1,
      title: "Command Center Upgrade",
      industry: "Government",
      solution: "Active LED Video Wall",
      location: "New Delhi",
      image: img.controlRoom || "",
    },
    {
      id: 2,
      title: "Corporate Auditorium",
      industry: "Corporate",
      solution: "Indoor LED Display",
      location: "Mumbai",
      image: img.corporate || "",
    },
    {
      id: 3,
      title: "Smart Classroom Network",
      industry: "Education",
      solution: "Interactive Flat Panels",
      location: "Bangalore",
      image: img.education || "",
    },
    {
      id: 4,
      title: "Retail Experience Zone",
      industry: "Retail",
      solution: "Commercial Displays",
      location: "Hyderabad",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#061A2F] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <SectionHeading
            dark={true}
            eyebrow="Projects"
            title="Built for Real-World Impact"
            subtitle="Explore our successful deployments across various industries."
            className="mb-0"
          />
          <Reveal delay={0.2}>
            <Link
              to="/gallery"
              className="inline-flex items-center text-[#1268FF] hover:text-[#0057FF] font-medium transition-colors"
            >
              View Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.1}>
              <div className="group relative rounded-[16px] overflow-hidden aspect-[4/5] md:aspect-auto md:h-[400px] hover:shadow-lift transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061A2F] via-[#061A2F]/50 to-transparent opacity-80" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white/90 border border-white/20 mb-3">
                      {project.industry}
                    </span>
                    <h3 className="text-xl font-display font-semibold text-white mb-1 group-hover:text-[#1268FF] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center text-sm text-white/70 mb-2">
                    <span className="font-medium text-white/90">{project.solution}</span>
                  </div>
                  <div className="flex items-center text-xs text-white/50">
                    <MapPin className="w-3 h-3 mr-1" />
                    {project.location}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
