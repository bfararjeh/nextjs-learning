"use client";
import { useState } from "react";


export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const buttonClasses = "flex-1 flex items-center gap-3 font-centgoth font-bold justify-center text-stroke-thin text-3xl px-4 py-2"

  return (
    <div>
      <nav className="font-centgoth flex w-full justify-center">
        <button 
          onClick={() => setCurrentSection(0)}
          className={buttonClasses}
          >Topic 1</button>
        <button 
          onClick={() => setCurrentSection(1)}
          className={buttonClasses}
          >Topic 2</button>
        <button 
          onClick={() => setCurrentSection(2)}
          className={buttonClasses}
          >Topic 3</button>
      </nav>

      <div>
        {currentSection === 0 && <p>Content 1</p>}
        {currentSection === 1 && <p>Content 2</p>}
        {currentSection === 2 && <p>Content 3</p>}
      </div>
    </div>
  );
}