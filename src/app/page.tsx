"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import Link from "next/link";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity1 = useTransform(scrollYProgress, [0.25, 0.251], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.65, 0.651], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.9, 0.901], [0, 1]);
  
  return (
    <main className="px-[30rem]">

      <section id="about">
        <Image
          src="/home/showcase_1.png"
          alt="showcase"
          width={850}
          height={850}
          quality={100}
          className="image border-2 border-gray-200 mb-10"
        />

          <h1>Your Favourite Player's Favourite Player</h1>
          <p className="mt-10">Analytical, pragmatic, and zealous, my name is Fararjeh, and I'm a competitor, content creator, and coach for Street Fighter 6.<br/><br/>Slowly carving my name in the stone of the UK greats, I'm on my way, getting better and better each year I compete all the while creating and publishing free intermediate to advanced level educational content. For those looking for something more personal, I also offer coaching; I can puzzle out your weaknesses before giving you a clear road to improving whether it be over a session or over a month with me as your personal trainer.</p>

      </section>

      <section id="achievements">
        <motion.div style={{ opacity: opacity1 }} className="transition-opacity duration-700">
        <h2 className="text-left mb-20">Achievements</h2>

          <div className="flex flex-row mb-10">
            <Image
              src="/home/fighting-games.jpg"
              alt="FGC"
              width={500}
              height={500}
              quality={100}
              className="image"
            />

            <div className="bg-site-bg-dim self-center rounded-r-xl">
              <p className="p-10">Aside from catching the tail end of the 2024 season with Kings of the World, the 2025 season was my first official season as a competitor. Traveling abroad to France and Belgium, as well as domestically within the UK, I managed to travel to a handful of CPT and non-CPT events, with relatively consistent placing among some.<br/><br/>I was also able to compete in the 2025 UK/Ireland World Warrior series; with the final qualifier concluding on 05/10/2025, I was able to achieve a final standing of 26th within my region.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            <a 
            href="https://www.start.gg/tournament/kings-of-the-world/event/street-fighter-6-capcom-pro-tour-2024/entrant/18531700"
            target="_blank"
            rel="noopener noreferrer">
              <div className="relative group aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/results/KOTW24.png"
                  alt="CPT 2024"
                  fill
                  quality={100}
                  className="object-cover"
                />

                <div className="absolute inset-0 text-white p-5 flex justify-center items-end bg-black/30">
                  <p className="text-center">14/12/2024</p>
                </div>

                <div className="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col p-8 gap-10">
                    <p className="font-bold text-3xl">33rd</p>
                    <p className="">Kings of the World</p>
                    <p className="font-bold text-xl text-white">Tier 1</p>
                  </div>
                </div>

              </div>
            </a>

            <a 
            href="https://www.start.gg/tournament/brussels-challenge-major-edition-2025/event/street-fighter-6-pc-ewc-qualifiers/entrant/19831986"
            target="_blank"
            rel="noopener noreferrer"> 
              <div className="relative group aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/results/BSC25.png"
                  alt="CPT 2024"
                  fill
                  quality={100}
                  className="object-cover"
                />

                <div className="absolute inset-0 text-white p-5 flex justify-center items-end bg-black/20">
                  <p className="text-center">17/5/2025</p>
                </div>

                <div className="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col p-5 gap-10">
                    <p className="font-bold text-3xl">25th</p>
                    <p className="">Brussels Challenge Major Edition</p>
                    <p className="font-bold text-xl text-white">Tier 1</p>
                  </div>
                </div>

              </div>
            </a>

            <a 
            href="https://fightlab.challonge.com/iaa_33_sf6"
            target="_blank"
            rel="noopener noreferrer"> 
              <div className="relative group aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/results/Meltdown25.png"
                  alt="CPT 2024"
                  fill
                  quality={100}
                  className="object-cover"
                />

                <div className="absolute inset-0 text-white p-5 flex justify-center items-end bg-black/30">
                  <p className="text-center">26/08/2025</p>
                </div>

                <div className="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col p-8 gap-10">
                    <p className="font-bold text-3xl">1st</p>
                    <p className="">I Am Arcade #33</p>
                    <p className="font-bold text-xl text-white">Tier 3</p>
                  </div>
                </div>

              </div>
            </a>

            <a 
            href="https://www.start.gg/tournament/ultimate-fighting-arena-2025-3/attendee/19095718"
            target="_blank"
            rel="noopener noreferrer"> 
              <div className="relative group aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/results/UFA25.png"
                  alt="CPT 2024"
                  fill
                  quality={100}
                  className="object-cover"
                />

                <div className="absolute inset-0 text-white p-5 flex justify-center items-end bg-black/20">
                  <p className="text-center">11/10/2025</p>
                </div>

                <div className="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col p-8 gap-10">
                    <p className="font-bold text-3xl">97th</p>
                    <p className="">Ultimate Fighting Arena</p>
                    <p className="font-bold text-xl text-white">Tier 1</p>
                  </div>
                </div>

              </div>
            </a>

          </div>
        </motion.div>
      </section>

      <section id="coaching">
        <motion.div style={{ opacity: opacity2 }} className="transition-opacity duration-700">
          <h2 className="text-right mb-20">Get Coaching</h2>

          <div className="flex flex-row">
            <div className="bg-site-bg-dim self-center rounded-l-xl">
              <p className="py-10 px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu auctor neque, eu rhoncus massa. Donec malesuada orci a ex blandit pretium. Proin a porttitor neque, non posuere massa. Nullam id varius leo. Vivamus dapibus, nibh eget facilisis iaculis, nibh odio viverra nunc, et mattis nibh neque sed dolor. Aliquam ante tellus, rhoncus pellentesque justo sed, bibendum placerat metus. Nam velit mi, posuere nec sem eu, interdum sodales turpis. Curabitur a massa non magna tempor auctor. Nunc enim erat, luctus ac est ut, blandit ultrices sem. Aenean placerat vel turpis sollicitudin fringilla. Aenean vel odio id elit suscipit ultrices non ac arcu. </p>
            </div>

            <Image
              src="/home/status.png"
              alt="Metafy"
              width={500}
              height={500}
              quality={100}
              className="image"
            />

          </div>
        </motion.div>
      </section>

      <section id="content">
        <motion.div style={{ opacity: opacity3 }} className="transition-opacity duration-700">
          <h2 className="text-left mb-20">Content Creation</h2>

          <div className="flex flex-row">
            <Image
              src="/home/sub-count-test.png"
              alt="Sub Counter"
              width={500}
              height={500}
              quality={100}
              className="image"
            />

            <div className="bg-site-bg-dim self-center rounded-l-xl">
              <p className="py-10 px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu auctor neque, eu rhoncus massa. Donec malesuada orci a ex blandit pretium. Proin a porttitor neque, non posuere massa. Nullam id varius leo. Vivamus dapibus, nibh eget facilisis iaculis, nibh odio viverra nunc, et mattis nibh neque sed dolor. Aliquam ante tellus, rhoncus pellentesque justo sed, bibendum placerat metus. Nam velit mi, posuere nec sem eu, interdum sodales turpis. Curabitur a massa non magna tempor auctor. Nunc enim erat, luctus ac est ut, blandit ultrices sem. Aenean placerat vel turpis sollicitudin fringilla. Aenean vel odio id elit suscipit ultrices non ac arcu. </p>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}