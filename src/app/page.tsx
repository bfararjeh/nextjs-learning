"use client";
import { useState } from "react";
import Image from "next/image";


export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const buttonClasses = "flex-1 flex flex-col items-center gap-3 font-centgoth font-bold justify-center text-stroke-thin text-3xl px-4 py-2 transition-opacity hover:opacity-75"
  const imageClasses = "h-50 w-auto object-contain"

  return (
    <div>
      <nav className="font-centgoth flex w-full justify-center mt-20">
        <button 
          onClick={() => setCurrentSection(0)}
          className={buttonClasses}
          >
            Alumni
            <Image src="/icons/uop.png" alt="UOP" width={512} height={512} className={imageClasses}/>
          </button>
        <button 
          onClick={() => setCurrentSection(1)}
          className={buttonClasses}
          >
            Street Fighter
            <Image src="/icons/sf6.png" alt="SF6" width={512} height={512} className={imageClasses}/>
            </button>
        <button 
          onClick={() => setCurrentSection(2)}
          className={buttonClasses}
          >
            Brand
            <Image src="/icons/fararjeh.png" alt="Brand" width={512} height={512} className={imageClasses}/>
          </button>
      </nav>

      <div>
        {currentSection === 0 && <p>Content 1</p>}
        {currentSection === 1 && <p>Content 2</p>}
        {currentSection === 2 && <p>Content 3</p>}
      </div>
    </div>
  );
}