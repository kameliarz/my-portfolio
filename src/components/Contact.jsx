import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="contact" className="py-24 px-6 md:px-10 text-center max-w-6xl mx-auto select-none overflow-hidden">
      
      <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-16 text-[#333333] tracking-tight transition-all duration-300 hover:text-cherry-red cursor-default">
        Let's Connect!
      </h2>
      
      <div 
        className={`relative max-w-4xl mx-auto mb-12 group transition-all duration-1000 ease-out ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        
        <span className="hidden md:block absolute -left-16 bottom-12 text-star text-4xl  transform -rotate-12 transition-all duration-700 ease-out animate-[spin_12s_linear_infinite] group-hover:scale-125 group-hover:text-cherry-red">
          ★
        </span>

        <span className="hidden md:block absolute -right-16 top-16 text-star text-4xl  transform rotate-12 transition-all duration-700 ease-out animate-[spin_12s_linear_infinite] group-hover:scale-125 group-hover:text-cherry-red">
          ★
        </span>

        <div className="shape-leaf bg-white px-8 py-12 md:px-16 md:py-14 border border-slate-200/60 text-[#333333] text-base md:text-lg leading-relaxed space-y-8 cursor-default
          shadow-lg shadow-slate-100/80
          transition-all duration-500 ease-out 
          hover:-translate-y-2 hover:shadow-2xl hover:shadow-cherry-red/5 hover:border-cherry-red/30"
        >
          <p className="max-w-2xl mx-auto font-normal text-brownish">
            Got an exciting project, an internship opening, or just want to say hi?{" "}
            <span className="inline-block px-1.5 py-0.5 rounded bg-transparent transition-all duration-300 hover:bg-cherry-red/10 text-cherry-red font-medium">
              Hit the button below
            </span>{" "}
            and let's connect. I'm always ready to discuss new opportunities and ideas!
          </p>
          
          <div className="pt-2">
            <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rizkianakamelia@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="shape-leaf inline-block bg-cherry-red text-white font-semibold px-8 py-3 rounded-full 
                shadow-md shadow-cherry-red/20 transition-all duration-300 transform 
                hover:bg-rose-700 hover:scale-105 hover:shadow-lg active:scale-95"
            >
            Send Me Email
            </a>
          </div>
        </div>

      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
        <p className="text-base font-normal text-brownish">
          Visit my Github and LinkedIn
        </p>
        
        <div className="flex items-center gap-3">
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

    </section>
  );
}