import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/projects';

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [animate, setAnimate] = useState(true);
  
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);
  
  const displayedProjects = projectsData.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );

  useEffect(() => {
    if (totalPages <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalPages]);

  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, [currentPage]);

  return (
    <section id="projects" className="py-24 px-6 md:px-10 bg-white overflow-hidden select-none">
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-20 text-[#333333] tracking-tight transition-all duration-300 hover:text-cherry-red cursor-default">
        Selected Projects
      </h2>
      
      <div className="relative max-w-6xl mx-auto group">
        
        <span className="hidden lg:block absolute -left-16 bottom-0 text-star text-4xl transform -rotate-12 transition-all duration-700 ease-out animate-[spin_12s_linear_infinite] group-hover:scale-125 group-hover:text-cherry-red">
          ★
        </span>

        <span className="hidden lg:block absolute -right-16 -top-10 text-star text-4xl transform rotate-12 transition-all duration-700 ease-out animate-[spin_12s_linear_infinite] group-hover:scale-125 group-hover:text-cherry-red">
          ★
        </span>

        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ease-out ${
            animate 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-10 scale-98' 
          }`}
        >
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id || index} 
              className="shape-leaf bg-white overflow-hidden border border-slate-200/60 shadow-lg shadow-slate-100/50 flex flex-col group/card
              transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-cherry-red/30 relative"
            >
              <div className="h-48 bg-slate-100 w-full flex items-center justify-center overflow-hidden relative border-b border-slate-100">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105" 
                  />
                ) : (
                  <span className="text-slate-400 font-medium group-hover/card:scale-110 group-hover/card:text-cherry-red transition-transform duration-500">
                    Image Placeholder
                  </span>
                )}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000" />
              </div>
              
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between relative">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#333333] mb-2 transition-colors duration-300 group-hover/card:text-cherry-red">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex justify-between items-end pt-2 gap-4">
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {project.tech && project.tech.map((technology, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-[10px] bg-slate-50 text-slate-600 px-2.5 py-1 rounded-full font-medium border border-slate-200/40 transition-colors duration-300 group-hover/card:border-cherry-red/20 group-hover/card:bg-cherry-red/4 group-hover/card:text-cherry-red"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                    <div className="flex items-center gap-2 shrink-0 relative z-20">
                    {project.githubLink && (
                        <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 transition-all duration-300 transform hover:scale-110 hover:border-cherry-red hover:bg-cherry-red hover:text-white"
                        title="View GitHub Repository"
                        >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.0.069-.608 1 .07 1.524 1.03 1.524 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        </a>
                    )}

                    {project.demoLink && (
                        <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 transition-all duration-300 transform hover:scale-110 hover:border-cherry-red hover:bg-cherry-red hover:text-white"
                        title="View Live Demo"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                        </a>
                    )}
                    </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-2.5 mt-16">
        {Array.from({ length: totalPages || 1 }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => setCurrentPage(pageIndex)}
            className={`transition-all duration-500 ease-out h-2.5 rounded-full cursor-pointer ${
              currentPage === pageIndex 
                ? "w-8 bg-cherry-red" 
                : "w-2.5 bg-slate-200 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide page ${pageIndex + 1}`}
          />
        ))}
      </div>
    </section>
  );
}