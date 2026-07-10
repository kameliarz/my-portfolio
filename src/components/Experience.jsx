import React, { useState, useEffect, useRef } from 'react';
import experiences from '../data/experience';

export default function Experience() {
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTopFromCenter = rect.top - windowHeight / 2;
      const totalHeight = rect.height;

      if (rect.top > windowHeight / 2) {
        setLineHeight(0);
      } else {
        const scrolledPercentage = Math.min(
          100,
          Math.max(0, (-elementTopFromCenter / totalHeight) * 100)
        );
        setLineHeight(scrolledPercentage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-24 px-6 md:px-10 ">
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-16 text-brownish tracking-tight transition-all duration-300 hover:text-cherry-red cursor-default">
        Experience
      </h2>
      
      <div 
        ref={containerRef} 
        className="max-w-3xl mx-auto relative space-y-12"
      >
        
        <div className="absolute left-2 top-0 bottom-0 w-0.75 bg-cherry-red/10 rounded-full" />
        <div 
          className="absolute left-2 top-0 w-0.75 bg-cherry-red rounded-full transition-all duration-150 ease-out"
          style={{ height: `${lineHeight}%` }}
        />

        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-start">
            
            <div className="w-4.75 h-4 flex items-center justify-center shrink-0 relative z-10">
              <span className="bg-cherry-red w-4 h-4 rounded-full shadow-sm block" />
            </div>
            
            <div className="flex-1 pl-8">
              <div className="shape-leaf bg-white p-6 md:p-8 border border-slate-200/60 shadow-lg shadow-slate-100/50 relative 
                transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-cherry-red/30 group"
              >
                <span className="absolute top-6 right-6 text-xs font-semibold bg-cherry-red/8 text-cherry-red px-4 py-1.5 rounded-full">
                  {exp.period}
                </span>
                
                <h3 className="text-xl font-serif font-bold text-[#333333] pr-24">
                  {exp.position}
                </h3>
                <p className="text-sm font-semibold text-cherry-red mt-1 mb-4">
                  {exp.organization}
                </p>
                
                <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
                
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="text-xs bg-cherry-red/10 text-cherry-red border border-cherry-red/20 px-4 py-1 rounded-full font-medium transition-colors duration-300 group-hover:bg-cherry-red group-hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}