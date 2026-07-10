import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-10 max-w-6xl mx-auto select-none">
      
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-brownish text-center mb-16 tracking-tight transition-all duration-300 hover:text-cherry-red cursor-default">
        About Me
      </h2>
      
      <div className="relative max-w-4xl mx-auto group">
        
        <span className="hidden md:block absolute -left-16 bottom-12 text-star text-4xl  transform -rotate-12 transition-all duration-700 ease-out animate-[spin_12s_linear_infinite] group-hover:scale-125 group-hover:text-cherry-red">
          ★
        </span>

        <span className="hidden md:block absolute -right-16 top-16 text-star text-4xl transform -rotate-12 transition-all duration-700 ease-out animate-[spin_12s_linear_infinite] group-hover:scale-125 group-hover:text-cherry-red">
          ★
        </span>

        <div className="shape-leaf font-normal bg-white px-8 py-10 md:px-14 md:py-12 border border-slate-200/60 text-brownish text-base md:text-lg leading-relaxed space-y-6 cursor-default
          shadow-lg shadow-slate-100/80
          transition-all duration-500 ease-out
          hover:-translate-y-2 hover:shadow-2xl hover:shadow-cherry-red/5 hover:border-cherry-red/30"
        >
          <p>
            Hi there! I'm Kamelia Rizkiana, a{" "}
            <span className="text-cherry-red font-medium inline-block px-1 rounded bg-transparent transition-all duration-300 hover:bg-cherry-red/5 hover:scale-105">
              Web Developer
            </span>{" "}
            with a strong passion for Frontend Development. I love turning lines of raw code into interactive, responsive, and user-friendly web experiences. In every project I craft, I always strive to find the perfect balance between clean code efficiency and stunning visual performance.
          </p>
          <p>
            I am looking for a{" "}
            <span className="text-cherry-red font-medium inline-block px-1 rounded bg-transparent transition-all duration-300 hover:bg-cherry-red/5 hover:scale-105">
              Frontend Developer Internship
            </span>{" "}
            where I can contribute to a dynamic team, solve real-world problems, and fast-track my growth in a professional environment.
          </p>
        </div>

      </div>

    </section>
  );
}