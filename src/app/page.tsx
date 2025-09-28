"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import Link from "next/link";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.101], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.65, 0.651], [0, 1]);

  return (
    <div>

      <header className="flex flex-col">
        <div className="mb-10 flex items-center justify-center gap-6 drop-shadow-[0_0_3px_black]">
          <Image
            src="/icons/fararjeh.png"
            alt="Site Icon"
            width={128}
            height={128}
          />
          <Link
            href="/"
            className="font-centgoth font-bold text-9xl tracking-wide text-stroke"
          >
            Fararjeh
          </Link>
        </div>
      </header>

      <div>
        <p className="header mt-20">Competitor. Graduate. Content Creator.</p>
        <p className="paragraph mt-20">Known as AJ to friends, Baha Alfararjeh to colleagues, and Fararjeh within the Fighting Game Community, I am a competitor, a graduate, and a content creator.<br/><br/>
        Since graduating in the summer of 2025, I have been juggling the different facets of my life and finding a balance between competing in Street Fighter 6, growing and learning as a graduate of computer science, and producing content and mentoring others within the Fighting Game Community.<br/><br/>
        This website serves as an all-in-one capital to learning everything you need to know about me, as well as a hub for all other of my online presences.</p>
      </div>

      <div className="flex flex-col justify-between items-center px-12 py-20 gap-10">
        <motion.div style={{ opacity: opacity1 }} className="transition-opacity duration-700 flex">
          <Image
            src="/home/fighting-games.jpg"
            alt="FGC"
            width={750}
            height={750}
            quality={100}
            className="image"
          />

          <div className="flex flex-col justify-center">
            <p className="header">A Competitor.</p>
            <p className="paragraph mt-20">With the release of Street Fighter 6 on the 2nd of June 2023, I have been competing in online and offline events ranging from the international level to the local level. Travelling around the world is a blessing that this hobby allows for, and as I continue to grow and improve as a player I can only hope to travel and compete more.<br/><br/>
            Year by year I improve. From placing almost dead last at my first major event ever, to placing 25th at one of my more recent events in Belgium. I've commited to training daily, which not only requires intense focus but also discipline, discipline that cannot be attained from spur of the moment motivation, but by a drive to become one of the greats.</p>
          </div>
        </motion.div>

        <motion.div style={{ opacity: opacity2 }} className="transition-opacity duration-700 flex">
          <div className="flex flex-col justify-center">
            <p className="header">A Graduate.</p>
            <p className="paragraph mt-20">As of July 2025, I am officially a graduate of the University of Portsmouth: achieving a First Class Bachelor's Degree with Honours in Computer Science. I averaged a 4.00GPA as well as achieving a First in my final year project.<br/><br/>
            My final year project was an Machine Learning AI Agent that was trained to be played against in the fighting game "Footsies" with the purpose of combatting ladder anxiety. This project combined all of my favourite interests; Machine Learning, Fighting Games, and Psychology. Going into this project, I knew exactly nothing in regards to how to build this software, and coming out of the project, I learnt not only the fundamentals of Machine Learning in general, but also the basics to technologies such as TensorFlow, scikit-learn, and Pandas.</p>
          </div>

          <Image
            src="/home/graduation-picture.jpg"
            alt="UOP"
            width={750}
            height={750}
            quality={100}
            className="image"
          />
        </motion.div>

      </div>
    </div>
  );
}