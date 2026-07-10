import React from 'react';

export default function Hero() {
  const gridBackgroundStyle = {
    backgroundColor: '#FEFAFA',
    backgroundImage: `
      linear-gradient(rgba(205, 32, 38, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(205, 32, 38, 0.04) 1px, transparent 1px)
    `,
    backgroundSize: '24px 24px',
  };

  return (
    <section 
      style={gridBackgroundStyle} 
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-20 lg:px-40 pt-28 pb-20 md:pb-20 overflow-x-hidden overflow-y-visible"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        <div className="flex flex-col space-y-6 relative">
          <div className="absolute right-4 md:right-auto md:-left-8 -top-4 text-star text-2xl font-bold transform -rotate-12 transition-all duration-700 ease-out animate-[spin_12s_linear_infinite] group-hover:scale-125 group-hover:text-cherry-red">★</div>  
          <div className="inline-block animate-bounce">
            <span className="border border-cherry-red bg-soft-hover text-redish text-xs font-semibold px-4 py-2 rounded-full tracking-wide">
              <span className="inline-block w-1.5 h-1.5 bg-cherry-red rounded-full mr-2 animate-pulse"></span>
              Open to Internship Opportunities
            </span>
          </div>

          <h1 className="text-6xl md:pl-7 md:text-7xl font-serif text-[#333333] tracking-tight transition-colors duration-300 hover:text-cherry-red inline-block cursor-default">
            Kamelia Rizkiana
          </h1>

          <p className="text-slate-600 text-base md:pl-7 md:text-lg leading-relaxed max-w-xl">
            A Web Developer focused on crafting clean, responsive, and highly interactive user interfaces. 
            Dedicated to bridging the gap between design and functional code to build seamless digital experiences.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 relative">
            <a href="#projects" className="bg-cherry-red text-white px-6 py-3 shape-leaf text-sm font-semibold shadow-md shadow-[#CD2026]/20 hover:bg-rose-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              View My Projects
            </a>
            
            <a href="https://drive.google.com/file/d/1PNRD8nvRkYHB1RZxkMqFXiDY9uzvL5cB/view?usp=sharing" className="border border-cherry-red text-redish bg-soft-hover px-6 py-3 shape-leaf text-sm font-semibold hover:bg-[#CD2026]/10 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              View My CV
            </a>

            <div className="flex items-center gap-3 ml-2">
              <a href="https://github.com/kameliarz" className="w-10 h-10 border border-cherry-red rounded-full flex items-center justify-center text-cherry-red hover:bg-cherry-red hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/kamelia-rizkiana/" className="w-10 h-10 border border-cherry-red rounded-full flex items-center justify-center text-cherry-red hover:bg-cherry-red hover:text-white transition-all duration-300 transform hover:scale-110 hover:-rotate-12">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center pr-4 group cursor-pointer">
          <div className="shape-leaf absolute -left-10 top-[40%] z-30 bg-white/80 backdrop-blur-md border border-slate-300 text-slate-700 text-xs font-semibold px-4 py-2 shadow-md transition-all duration-500 group-hover:-left-12.5 group-hover:bg-cherry-red group-hover:text-white group-hover:border-cherry-red">
            Web Developer
          </div>
          <div className="shape-leaf absolute -right-5 top-[12%] z-30 bg-white/80 backdrop-blur-md border border-slate-300 text-slate-700 text-xs font-semibold px-4 py-1.5 shadow-md transition-all duration-500 group-hover:-right-7.5 group-hover:bg-cherry-red group-hover:text-white group-hover:border-cherry-red">
            Frontend Developer
          </div>

          <div className="absolute -right-6 -bottom-6 text-star text-2xl font-bold transform -rotate-12 transition-all duration-700 ease-out animate-[spin_12s_linear_infinite] group-hover:scale-125 group-hover:text-cherry-red ">★</div>

          <div className="w-60 h-80 md:w-70 md:h-97 rounded-2xl flex items-center justify-center border-2 border-gray-300 bg-white shadow-lg relative overflow-hidden transition-all duration-500 ease-out transform group-hover:rotate-3 group-hover:scale-105 group-hover:border-cherry-red group-hover:shadow-2xl group-hover:shadow-cherry-red/20">
            <img 
              src="myself.png" 
              alt="my picture" 
              className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}