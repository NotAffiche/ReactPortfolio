import React from "react";

export default function Navbar() {
  return (
    <section id="navbar">
      <nav>
        <ul className="flex justify-end">
          <li className="mr-6">
            <a href="#about" className="text-gray-300 hover:text-primairy"><span className="text-sm text-primairy mr-1">0.1</span>about</a>
          </li>
          <li className="mr-6">
            <a href="#projects" className="text-gray-300 hover:text-primairy"><span className="text-sm text-primairy mr-1">0.2</span>projects</a>
          </li>
          <li className="mr-6">
            <a href="#contact" className="text-gray-300 hover:text-primairy"><span className="text-sm text-primairy mr-1">0.3</span>contact</a>
          </li>
          <li className="mr-6">
            <a href="/EN Resume.pdf" target="_blank" className="text-gray-300 hover:text-primairy"><span className="text-sm text-primairy mr-1">0.4</span>resume</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}