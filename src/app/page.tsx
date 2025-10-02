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
    <div className="flex flex-row">
      
      <aside className="w-325 px-10 py-10 flex flex-col top-27 sticky h-screen justify-center items-center border-r">
        <h2 className="text-2xl font-bold mb-6">Sidebar</h2>
        <nav className="flex flex-col gap-4">
          <p>section 1</p>
          <p>section 2</p>
          <p>section 3</p>
        </nav>
      </aside>


      <div className="px-75">
        <Image
          src="/home/showcase_1.png"
          alt="showcase"
          width={900}
          height={1}
          quality={100}
          className="mt-20 rounded-4xl m-auto border-2 border-gray-200"
        />

        <div>
          <p className="header-xl mt-15">Lorem Ipsum Dolor Sit Amet</p>
          <p className="paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu auctor neque, eu rhoncus massa. Donec malesuada orci a ex blandit pretium. Proin a porttitor neque, non posuere massa. Nullam id varius leo. Vivamus dapibus, nibh eget facilisis iaculis, nibh odio viverra nunc, et mattis nibh neque sed dolor. Aliquam ante tellus, rhoncus pellentesque justo sed, bibendum placerat metus. Nam velit mi, posuere nec sem eu, interdum sodales turpis. Curabitur a massa non magna tempor auctor. Nunc enim erat, luctus ac est ut, blandit ultrices sem. Aenean placerat vel turpis sollicitudin fringilla. Aenean vel odio id elit suscipit ultrices non ac arcu. </p>
        </div>

        <div className="flex flex-col justify-between items-center px-12 py-20 gap-10">
          <motion.div style={{ opacity: opacity1 }} className="transition-opacity duration-700 flex">
            <div>
              <Image
                src="/home/fighting-games.jpg"
                alt="FGC"
                width={3000}
                height={1}
                quality={100}
                className="image"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="header">Lorem Ipsum</p>
              <p className="paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu auctor neque, eu rhoncus massa. Donec malesuada orci a ex blandit pretium. Proin a porttitor neque, non posuere massa. Nullam id varius leo. Vivamus dapibus, nibh eget facilisis iaculis, nibh odio viverra nunc, et mattis nibh neque sed dolor. Aliquam ante tellus, rhoncus pellentesque justo sed, bibendum placerat metus. Nam velit mi, posuere nec sem eu, interdum sodales turpis. Curabitur a massa non magna tempor auctor. Nunc enim erat, luctus ac est ut, blandit ultrices sem. Aenean placerat vel turpis sollicitudin fringilla. Aenean vel odio id elit suscipit ultrices non ac arcu. </p>
            </div>
          </motion.div>

          <motion.div style={{ opacity: opacity2 }} className="transition-opacity duration-700 flex">
            <div className="flex flex-col justify-center">
              <p className="header">Lorem Ipsum</p>
              <p className="paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu auctor neque, eu rhoncus massa. Donec malesuada orci a ex blandit pretium. Proin a porttitor neque, non posuere massa. Nullam id varius leo. Vivamus dapibus, nibh eget facilisis iaculis, nibh odio viverra nunc, et mattis nibh neque sed dolor. Aliquam ante tellus, rhoncus pellentesque justo sed, bibendum placerat metus. Nam velit mi, posuere nec sem eu, interdum sodales turpis. Curabitur a massa non magna tempor auctor. Nunc enim erat, luctus ac est ut, blandit ultrices sem. Aenean placerat vel turpis sollicitudin fringilla. Aenean vel odio id elit suscipit ultrices non ac arcu. </p>
            </div>

            <div>
              <Image
                src="/home/status.png"
                alt="Metafy"
                width={3000}
                height={1}
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
                width={3000}
                height={1}
                quality={100}
                className="image"
              />

              <div className="mt-1 ml-1 absolute inset-0 flex flex-col justify-center text-center text-[5.5em] text-black font-sans font-semibold">
                  <ReturnSubs />
              </div>

            </div>

            <div className="flex flex-col justify-center">
              <p className="header">Lorem Ipsum</p>
              <p className="paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu auctor neque, eu rhoncus massa. Donec malesuada orci a ex blandit pretium. Proin a porttitor neque, non posuere massa. Nullam id varius leo. Vivamus dapibus, nibh eget facilisis iaculis, nibh odio viverra nunc, et mattis nibh neque sed dolor. Aliquam ante tellus, rhoncus pellentesque justo sed, bibendum placerat metus. Nam velit mi, posuere nec sem eu, interdum sodales turpis. Curabitur a massa non magna tempor auctor. Nunc enim erat, luctus ac est ut, blandit ultrices sem. Aenean placerat vel turpis sollicitudin fringilla. Aenean vel odio id elit suscipit ultrices non ac arcu. </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}