"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";


export default function Home() {
  const { scrollYProgress } = useScroll();

  const opacity1 = useTransform(scrollYProgress, [0.6, 0.601], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.6, 0.601], [0, 1]);

  return (
    <div className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex justify-between items-center px-12">
        <motion.div style={{ opacity: opacity1 }} className="transition-opacity duration-700">
          <Image
            src="/home/fighting games.jpg"
            alt="FGC"
            width={1000}
            height={1000}
            className="rounded-l shadow-xl w-250"
          />
        </motion.div>

        <motion.div style={{ opacity: opacity2 }} className="transition-opacity duration-700">
          <Image
            src="/home/graduation picture.jpg"
            alt="UOP"
            width={1000}
            height={1000}
            className="rounded-l shadow-xl w-250"
          />
        </motion.div>
      </div>
    </div>
  );
}