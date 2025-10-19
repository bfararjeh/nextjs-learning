"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MasonryGallery from "../components/MasonryGallery";
import ReturnSubs from "../components/ReturnSubs";
import { galleryImages } from "../lib/gallery";

export default function Home() {

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

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  return (
    <div>
      <main>
        <div className="max-w-[96rem] mx-auto">
          <section id="about">
            <Image
              src="/home/showcase_1.png"
              alt="showcase"
              width={4000}
              height={1}
              className="image border-2 border-gray-200 mb-10 w-5xl"
            />

              <h1>Your Favourite Player's Favourite Player</h1>
              <p className="mt-10">Analytical, pragmatic, and zealous, my name is Fararjeh, and I'm a competitor, content creator, and coach for Street Fighter 6.<br/><br/>Slowly carving my name in the stone of the UK greats, I'm on my way, getting better and better each year I compete all the while creating and publishing free intermediate to advanced level educational content. For those looking for something more personal, I also offer coaching; I can puzzle out your weaknesses before giving you a clear road to improving whether it be over a session or over a month with me as your personal trainer.</p>

          </section>



          <section id="achievements">
            <h2 className="text-center 2xl:text-left">Achievements</h2>
            <div className="flex flex-col 2xl:flex-row">
              <div className="relative w-[85%] 2xl:w-1/2 rounded-xl aspect-square mx-auto">
                <Image
                  src="/home/fighting-games.png"
                  alt="Fararjeh at Red Bull Gaming Sphere"
                  fill
                  className="object-cover image"
                />
              </div>

              <div className="bg-site-bg-dim self-center w-[70%] rounded-b-2xl 2xl:rounded-bl-none 2xl:rounded-r-2xl">
                <p className="p-6">Aside from catching the tail end of the 2024 season with Kings of the World, the 2025 season was my first official season as a competitor. I managed to travel to a handful of CPT and non-CPT events abroad and domestically, with consistent results.<br/><br/>I was also able to compete in the 2025 UK/Ireland World Warrior series; achieving a final standing of 26th within my region.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              <a 
              href="https://www.start.gg/tournament/kings-of-the-world/event/street-fighter-6-capcom-pro-tour-2024/entrant/18531700"
              target="_blank"
              rel="noopener noreferrer">
                <div className="relative group aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/results/KOTW24.png"
                    alt="CPT 2024"
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover "
                  />

                  <div className="absolute inset-0 text-white p-5 flex justify-center items-end bg-black/20 hover-element">
                    <p>14/12/2024</p>
                  </div>

                  <div className="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover-element">
                    <div className="flex flex-col gap-3">
                      <p className="font-bold text-3xl">33rd</p>
                      <p >Kings of the World</p>
                      <p className="font-bold text-xl text-white">Tier 1</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/75 hover-replace">
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-3xl">33rd</p>
                      <p >Kings of the World<br/>14/12/2024</p>
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
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 text-white p-5 flex justify-center items-end bg-black/20 hover-element">
                    <p>17/5/2025</p>
                  </div>

                  <div className="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover-element">
                    <div className="flex flex-col gap-3">
                      <p className="font-bold text-3xl">25th</p>
                      <p className="">Brussels Challenge Major Edition</p>
                      <p className="font-bold text-xl text-white">Tier 1</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/75 hover-replace">
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-3xl">25th</p>
                      <p >Brussels Challenge Major Edition<br/>17/5/2025</p>
                      <p className="font-bold text-xl text-white">Tier 1</p>
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
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 text-white p-5 flex justify-center items-end bg-black/10 hover-element">
                    <p>11/09/2025</p>
                  </div>

                  <div className="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover-element">
                    <div className="flex flex-col gap-3">
                      <p className="font-bold text-3xl">97th</p>
                      <p className="">Ultimate Fighting Arena</p>
                      <p className="font-bold text-xl text-white">Tier 1</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/75 hover-replace">
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-3xl">97th</p>
                      <p >Ultimate Fighting Arena<br/>11/09/2025</p>
                      <p className="font-bold text-xl text-white">Tier 1</p>
                    </div>
                  </div>

                </div>
              </a>
              <a 
              href="https://www.start.gg/tournament/evo-france-2025/event/street-fighter-6-ps5/entrant/21189173"
              target="_blank"
              rel="noopener noreferrer"> 
                <div className="relative group aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/results/EVO25.png"
                    alt="CPT 2024"
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 text-white p-5 flex justify-center items-end bg-black/10 hover-element">
                    <p>10/10/2025</p>
                  </div>

                  <div className="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover-element">
                    <div className="flex flex-col gap-3">
                      <p className="font-bold text-3xl">33rd</p>
                      <p className="">Evo Nice</p>
                      <p className="font-bold text-xl text-white">Tier 1</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/75 hover-replace">
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-3xl">33rd</p>
                      <p >Evo Nice<br/>10/10/2025</p>
                      <p className="font-bold text-xl text-white">Tier 1</p>
                    </div>
                  </div>

                </div>
              </a>
            </div>
          </section>



          <section id="coaching">
            <h2 className="text-center 2xl:text-right">Get Coaching</h2>
            <div className="flex flex-col 2xl:flex-row">
              <div className="bg-site-bg-dim self-center w-[70%] rounded-b-2xl 2xl:rounded-br-none 2xl:rounded-l-2xl 2xl:order-1 order-2">
                <p className="p-6">Having been teaching for years with a professional background in teaching, my coaching is all about puzzling your biggest weaknesses, and then outlining a path for you to improve on them.<br/><br/> Whether you don't know your biggest weakness or think you do, my coaching is make you a stronger player, and you can take a look at some of my reviews here.</p>
              </div>

              <div className="relative w-[85%] 2xl:w-1/2 rounded-xl aspect-square mx-auto 2xl:order-2 order-1">
                <Image
                  src="/home/status.png"
                  alt="Fararjeh's Metafy Status"
                  fill
                  className="object-cover image"
                />
              </div>
            </div>

            <div className="py-0 sm:py-2 md:py-5"></div>

            <div className="flex items-center w-full justify-center gap-2 sm:gap-5 md:gap-10">
              <button
                onClick={handlePrev}
                className="bg-site-bg-dim hover:bg-neutral-950 rounded-full p-1 sm:p-2 md:p-3 transition w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              >
                <ChevronLeft className="w-full h-full" />
              </button>

              <div className="relative w-full h-[300px] sm:h-[325px] md:h-[350px] overflow-hidden flex items-center justify-center">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={index}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className=" w-full bg-site-bg-dim rounded-xl p-4 sm:p-6 md:p-10"
                  >
                      <p className="italic">{reviews[index].text}<br/><br/></p>
                      <p className="font-bold">{reviews[index].name}</p>
                      <p>{reviews[index].date}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                onClick={handleNext}
                className="bg-site-bg-dim hover:bg-neutral-950 rounded-full p-1 sm:p-2 md:p-3 transition w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              >
                <ChevronRight className="w-full h-full" />
              </button>
            </div>
            <div className="flex justify-center items-center mt-5 gap-3">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-1 sm:w-5 md:w-7 rounded-full transform origin-center ${
                    i === index
                      ? "bg-fararjeh scale-150"
                      : "bg-neutral-200 hover:bg-neutral-600"
                  }`}
                />
              ))}
            </div>
          </section>


          <section id="content">
            <h2 className="text-center 2xl:text-left">Content Creation</h2>
            <div className="flex flex-col 2xl:flex-row">
            <div className="relative w-[85%] 2xl:w-1/2 rounded-xl aspect-square mx-auto">
                <Image
                  src="/home/youtube.png"
                  alt="Fararjeh's YouTube'"
                  fill
                  className="object-cover image"
                />
              </div>

              <div className="bg-site-bg-dim self-center w-[70%] rounded-b-2xl 2xl:rounded-bl-none 2xl:rounded-r-2xl">
                <p className="p-6">With around <ReturnSubs/> subscribers, what's a fighting game player without some content? From videos on advanced neutral mechanics to in-depth defensive options, it's all on YouTube for free.<br/><br/>If you need proof of quality then look no further, my video on neutral is the first result when you search up "SF6 Neutral" on YouTube, and it was even featured on the front page of EventHubs which you can read below.</p>
              </div>
            </div>

            <div className="py-5 sm:py-8 md:py-10"></div>

            <iframe
              src="https://www.eventhubs.com/news/2024/jul/31/how-demand-respect-sf6-gameplay/"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              className="mx-auto w-[85%] lg:w-full h-[400px] sm:h-[600px] md:h-[800px] border rounded-4xl"
              title="How to demand respect with your play in Street Fighter 6"
              loading="lazy"
            ></iframe>

          </section>




          <section id="gallery" 
          className="pb-0"
          >
            <h2 className="text-center 2xl:text-right">Gallery</h2>
            <MasonryGallery images={galleryImages} />
          </section>

          <section id="return">
            <div className="flex justify-center">
              <button
                onClick={scrollToTop}
                className=" bg-site-bg-dim text-white font-centgoth font-bold px-6 py-2 rounded-xl hover:bg-neutral-800 transition border-white border-1"
              >
                Back to Top
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}