"use client";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity1 = useTransform(scrollYProgress, [0.20, 0.201], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.50, 0.501], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.80, 0.801], [0, 1]);

  const reviews = [
    {
      name: "Narwen",
      text: "Purchased the Month-long coaching Session. Fararjeh was amazing. He not only helped me improve on my current issues but also taught me how to improve on my own. Was 100% worth the purchase, and I will definitely be purchasing more coaching in the future. Best coach on metafy!",
      date: "16/9/2025"
    },
    {
      name: "DadDeeUwU",
      text: "Fantastic time training with coach! We played and trained more than advertised. He went into a lots of details quick yet super understandable with demonstrations. It's surprising how I overlooked something that he made so so strong (fireballs). He made a very detailed note as well, can't really progress everything all at once, so his note is super helpful to keeps tracks of what need to be working on! Great deals for new and returning students as well. Highly recommend!",
      date: "23/8/2025"
    },
    {
      name: "Steampunkio86",
      text: "Professional and likable guy, helpful advice, recommend.",
      date: "30/08/2025"
    },
    {
      name: "Isai Vazquez",
      text: "he give me one of the best advices that i ever heard in this game, ts a good perso, charismatic, and takes the correct time to explain everything what you need :)",
      date: "30/08/2025"
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left +1 for right

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 250 : -250,
      opacity: 0,
      position: "absolute" as const,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as const,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 250 : -250,
      opacity: 0,
      position: "absolute" as const,
    }),
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

          <div className="flex flex-row mb-10">
            <div className="bg-site-bg-dim self-center rounded-l-xl">
              <p className="py-10 px-10">Having been teaching for years with a professional background in teaching, my coaching is all about puzzling your biggest weaknesses, and then outlining a path for you to improve on them.<br/><br/> Whether you don't know your biggest weakness or think you do, my coaching is make you a stronger player, and you can take a look at some of my reviews here.</p>
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

          <div className="flex items-center w-full justify-center gap-10">
            <button
              onClick={handlePrev}
              className="bg-site-bg-dim hover:bg-neutral-950 rounded-full p-3 transition"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="relative w-full h-[325px] overflow-hidden flex items-center justify-center">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className=" w-full bg-site-bg-dim rounded-xl p-10"
                >
                    <p className="mb-10 italic text-xl">{reviews[index].text}</p>
                    <p className="font-bold">{reviews[index].name}</p>
                    <p>{reviews[index].date}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={handleNext}
              className="bg-site-bg-dim hover:bg-neutral-950 rounded-full p-3 transition"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          <div className="flex justify-center items-center mt-5 gap-3">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transform origin-center ${
                  i === index
                    ? "bg-fararjeh scale-150"
                    : "bg-neutral-200 hover:bg-neutral-600"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </section>
      <section id="content">
        <motion.div style={{ opacity: opacity3 }} className="transition-opacity duration-700">
          <h2 className="text-left mb-20">Content Creation</h2>

          <div className="flex flex-row mb-10">
            <Image
              src="/home/sub-count-test.png"
              alt="Sub Counter"
              width={500}
              height={500}
              quality={100}
              className="image"
            />

            <div className="bg-site-bg-dim self-center rounded-l-xl">
              <p className="py-10 px-10">What's a fighting game player without some content? From videos on advanced neutral mechanics to in-depth defensive options, it's all on YouTube for free.<br/><br/>If you need proof of quality then look no further, my video on neutral is the first result when you search up "SF6 Neutral" on YouTube, and it was even featured on the front page of EventHubs which you can read below.</p>
            </div>
          </div>

          <iframe
            src="https://www.eventhubs.com/news/2024/jul/31/how-demand-respect-sf6-gameplay/"
            className="w-full h-[800px] border rounded-xl"
            title="Embedded Page"
            loading="lazy"
          ></iframe>

        </motion.div>
      </section>
      <div className="flex justify-center p-25">
        <button
          onClick={scrollToTop}
          className=" bg-fararjeh text-white font-centgoth font-bold px-6 py-2 rounded-4xl hover:bg-fararjeh-dim transition"
        >
          Back to Top
        </button>
      </div>
    </main>
  );
}