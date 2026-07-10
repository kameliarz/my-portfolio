import React, { useState, useEffect } from 'react';
import skillsData from '../data/skills';

export default function Skills() {
  const [currentPage, setCurrentPage] = useState(0);
  const [animate, setAnimate] = useState(true);
  
  const itemsPerPage = 8;
  const totalPages = Math.ceil(skillsData.length / itemsPerPage);
  
  const displayedSkills = skillsData.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 5000); 

    return () => clearInterval(interval);
  }, [totalPages]);

  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, [currentPage]);

  return (
    <section id="skills" className="py-24 px-6 md:px-10 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-brownish text-center mb-16 tracking-tight transition-all duration-300 hover:text-cherry-red cursor-default">
        My Skills
      </h2>

      <div 
        className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto min-h-65 transition-all duration-700 ease-out ${
          animate 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-10 scale-98'
        }`}
      >
        {displayedSkills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-white p-5 flex items-center gap-4 cursor-pointer select-none group h-23
              rounded-[2rem_0.5rem_2rem_0.5rem] border border-slate-100 shadow-xs
              transition-all duration-500 ease-out transform
              hover:-rotate-3 hover:scale-105 hover:bg-cherry-red/[0.07] hover:border-cherry-red hover:shadow-md"
          >
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              {skill.image ? (
                <img 
                  src={skill.image} 
                  alt={skill.name} 
                  className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110" 
                />
              ) : (
                <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center text-xs font-bold text-slate-400 group-hover:scale-110 transition-transform">
                  ★
                </div>
              )}
            </div>
            
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-[#333333] truncate transition-colors duration-300 group-hover:text-cherry-red">
                {skill.name}
              </p>
              <p className="text-xs text-slate-400 font-medium truncate">
                {skill.type}
              </p>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => setCurrentPage(pageIndex)}
              className={`transition-all duration-500 ease-out h-2.5 rounded-full cursor-pointer ${
                currentPage === pageIndex 
                  ? "w-7 bg-cherry-red" 
                  : "w-2.5 bg-slate-200 hover:bg-slate-400"
              }`}
              aria-label={`Go to page ${pageIndex + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}