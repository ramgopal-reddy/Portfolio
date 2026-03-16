import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { projectsData } from "../../data/projectsData";
import { useTheme } from "../../hooks/useTheme";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const theme = useTheme();

  return (
    <>
      <section id="projects" className={`py-20 px-4 sm:px-6 transition-all duration-300 ${theme.isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'}`}> {/* bg-gray-800/50 - dark background with transparency */}
        <div className="max-w-6xl mx-auto" style={{ transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}` }}>
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${theme.colors.gradient}`}>
              Featured Projects
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r" style={{ background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})` }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onDetailsClick={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
