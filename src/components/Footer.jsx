import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-cherry-red text-white py-12 px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h3 className="text-xl font-bold">Kamelia Rizkiana</h3>
          <p className="text-white/80 max-w-sm mt-1">
            Building clean, responsive, and user-friendly web solutions built with modern tech.
          </p>
        </div>
        <div className="flex gap-6 text-white/90">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}