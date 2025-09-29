"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import Link from "next/link";
import ReturnSubs from "../components/ReturnSubs";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.101], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.45, 0.451], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.75, 0.751], [0, 1]);
  
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
        <p className="header mt-20">Competitor. Coach. Content Creator.</p>
        <p className="paragraph mt-20">I am Fararjeh. I am a competitor, coach, and content creator specialising in Street Fighter 6. You may know me from my YouTube channel, met me in person at an event, or signed up for some of my coaching on Metafy.<br/><br/>
        My goal is to be the best. Juggling my prescence in the community with my trainign is hard, but not impossible. If you'd like to learn more about me, feel free to scroll around the site.
        </p>
      </div>

      <div className="flex flex-col justify-between items-center px-12 py-20 gap-10">
        <motion.div style={{ opacity: opacity1 }} className="transition-opacity duration-700 flex">
          <div>
            <Image
              src="/home/fighting-games.jpg"
              alt="FGC"
              width={1250}
              height={1250}
              quality={100}
              className="image"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="header">A Competitor.</p>
            <p className="paragraph mt-20">Street Fighter 6 is my first serious fighting game, and since it's release I have been competing in online and offline events ranging from the international level to the local level. Each year I get stronger and stronger; I know I'll make it, it's just a matter of time for me.<br/><br/>
            Although this CPT season has been hectic for me with my graduation and all, I still made time to travel to events such as UFA and Brussels Challenge. You can take a look at some of my placements below.</p>
          </div>
        </motion.div>

        <motion.div style={{ opacity: opacity2 }} className="transition-opacity duration-700 flex">
          <div className="flex flex-col justify-center">
            <p className="header">A Coach.</p>
            <p className="paragraph mt-20">As of August 2025, I have been coaching players of any level on my Metafy. I have a natural talent for breaking down complex topics and solving problems that I've been mastering over the last few years in all other aspects of my life.<br/><br/>
            Proof? My video, "You Can't Play Neutral" is the first result when you search up "Street Fighter 6 Neutral" on YouTube. More proof? Click below to take a look at some of my testimonials from Metafy.</p>
          </div>

          <div>
            <Image
              src="/home/status.png"
              alt="Metafy"
              width={1250}
              height={1250}
              quality={100}
              className="image"
            />
          </div>
        </motion.div>

        <motion.div style={{ opacity: opacity3 }} className="transition-opacity duration-700 flex">

          <div className="relative">
            <Image
              src="/home/sub-count-test.png"
              alt="Sub Counter"
              width={1250}
              height={1250}
              quality={100}
              className="image"
            />

            <div className="mb-5 ml-1 absolute inset-0 flex flex-col justify-center text-center text-[7.5em] text-black font-sans font-semibold">
                <ReturnSubs />
            </div>

          </div>

          <div className="flex flex-col justify-center">
            <p className="header">A Content Creator.</p>
            <p className="paragraph mt-20">From the moment I posted my first video, an Elden Ring PvP Montage in April of 2022, I knew I loved making videos. Once Street Fighter 6 came out I decided to make a video on Neutral, a grossly misunderstood topic, and from that point the rest is history.<br/><br/>
            From educational tutorials to clip montages and everything inbetween, it's all on my YouTube. You can read more about how I started my channel here, or just go watch my biggest video: You Can't Play Neutral.</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}