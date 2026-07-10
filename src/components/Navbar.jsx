import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-milk/70 backdrop-blur-xs text-black py-4 px-6 md:px-10 flex justify-between items-center z-50 shadow-sm border-b border-cherry-red">
      
      <div className="flex items-center gap-2">
        <img className="w-6" src="/port-icon.ico" alt="Logo" />
        <span className="text-xl font-semibold">Portfolio</span>
      </div>
      
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        <li><a href="#about" className="hover:text-cherry-red">About</a></li>
        <li><a href="#skills" className="hover:text-cherry-red">Skills</a></li>
        <li><a href="#projects" className="hover:text-cherry-red">Projects</a></li>
        <li><a href="#experience" className="hover:text-cherry-red">Experience</a></li>
        <li><a href="#contact" className="hover:text-cherry-red">Contact</a></li>
      </ul>

      <a 
        href="https://drive.google.com/file/d/1PNRD8nvRkYHB1RZxkMqFXiDY9uzvL5cB/view?usp=sharing" 
        className="hidden md:block bg-cherry-red text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-rose-700 transition transform hover:-translate-y-0.5"
      >
        View My CV
      </a>

      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="block md:hidden text-black focus:outline-none z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-milk/95 border-b border-cherry-red flex flex-col items-center gap-5 py-6 md:hidden shadow-md backdrop-blur-md animate-fade-in">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-cherry-red font-medium text-base">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-cherry-red font-medium text-base">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-cherry-red font-medium text-base">Projects</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-cherry-red font-medium text-base">Experience</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-cherry-red font-medium text-base">Contact</a>
          
          <a 
            href="https://drive.google.com/file/d/1PNRD8nvRkYHB1RZxkMqFXiDY9uzvL5cB/view?usp=sharing" 
            download 
            className="bg-cherry-red text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-800 w-4/5 text-center mt-2"
          >
            View My CV
          </a>
        </div>
      )}

    </nav>
  );
}