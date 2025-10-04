"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity1 = useTransform(scrollYProgress, [0.3, 0.301], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.55, 0.551], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.8, 0.801], [0, 1]);
  
  return (
    <main className="px-100">

      <section id="about">
        <Image
          src="/home/showcase_1.png"
          alt="showcase"
          width={850}
          height={850}
          quality={100}
          className="image border-2 border-gray-200 mb-10"
        />


          <h1>Lorem Ipsum Dolor Sit Amet</h1>
          <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu auctor neque, eu rhoncus massa. Donec malesuada orci a ex blandit pretium. Proin a porttitor neque, non posuere massa. Nullam id varius leo. Vivamus dapibus, nibh eget facilisis iaculis, nibh odio viverra nunc, et mattis nibh neque sed dolor. Aliquam ante tellus, rhoncus pellentesque justo sed, bibendum placerat metus. Nam velit mi, posuere nec sem eu, interdum sodales turpis. Curabitur a massa non magna tempor auctor. Nunc enim erat, luctus ac est ut, blandit ultrices sem. Aenean placerat vel turpis sollicitudin fringilla. Aenean vel odio id elit suscipit ultrices non ac arcu. </p>

      </section>

      <section id="test">
        <motion.div style={{ opacity: opacity1 }} className="transition-opacity duration-700">
          <div className="flex flex-row">
            <Image
              src="/home/fighting-games.jpg"
              alt="FGC"
              width={500}
              height={500}
              quality={100}
              className="image"
            />

            <div className="bg-[#141414] self-center rounded-r-xl">
              <h2 className="mt-10">Lorem Ipsum</h2>
              <p className="py-10 px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu auctor neque, eu rhoncus massa. Donec malesuada orci a ex blandit pretium. Proin a porttitor neque, non posuere massa. Nullam id varius leo. Vivamus dapibus, nibh eget facilisis iaculis, nibh odio viverra nunc, et mattis nibh neque sed dolor. Aliquam ante tellus, rhoncus pellentesque justo sed, bibendum placerat metus. Nam velit mi, posuere nec sem eu, interdum sodales turpis. Curabitur a massa non magna tempor auctor. Nunc enim erat, luctus ac est ut, blandit ultrices sem. Aenean placerat vel turpis sollicitudin fringilla. Aenean vel odio id elit suscipit ultrices non ac arcu. </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="test">
        <motion.div style={{ opacity: opacity2 }} className="transition-opacity duration-700">
          <div className="flex flex-row">
            <div className="bg-[#141414] self-center rounded-l-xl">
              <h2 className="mt-10">Lorem Ipsum</h2>
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

      <section id="test">
        <motion.div style={{ opacity: opacity3 }} className="transition-opacity duration-700">
          <div className="flex flex-row">
            <Image
              src="/home/sub-count-test.png"
              alt="Sub Counter"
              width={500}
              height={500}
              quality={100}
              className="image"
            />

            <div className="bg-[#141414] self-center rounded-l-xl">
              <h2 className="mt-10">Lorem Ipsum</h2>
              <p className="py-10 px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu auctor neque, eu rhoncus massa. Donec malesuada orci a ex blandit pretium. Proin a porttitor neque, non posuere massa. Nullam id varius leo. Vivamus dapibus, nibh eget facilisis iaculis, nibh odio viverra nunc, et mattis nibh neque sed dolor. Aliquam ante tellus, rhoncus pellentesque justo sed, bibendum placerat metus. Nam velit mi, posuere nec sem eu, interdum sodales turpis. Curabitur a massa non magna tempor auctor. Nunc enim erat, luctus ac est ut, blandit ultrices sem. Aenean placerat vel turpis sollicitudin fringilla. Aenean vel odio id elit suscipit ultrices non ac arcu. </p>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}