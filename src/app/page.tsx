"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const opacity1 = useTransform(scrollYProgress, [0.1, 0.101], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.45, 0.451], [0, 1]);

  return (
    <div className="relative h-[200vh]">

      <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet neque augue. Phasellus congue, augue sit amet vulputate vestibulum, nunc lacus luctus nisi, non molestie felis diam sit amet turpis. Proin non metus sagittis, vulputate velit dapibus, commodo dolor. Nunc convallis elit ac facilisis rutrum. Sed pharetra euismod tincidunt. Donec interdum consequat libero, maximus laoreet enim dictum ac. Cras commodo lacus a odio sollicitudin, id consectetur nunc faucibus. Integer ullamcorper, enim ac luctus volutpat, erat lectus elementum risus, ac rhoncus metus nisi nec odio. Nunc tempus ex congue erat placerat, eu sollicitudin diam laoreet. Integer eleifend mi ut leo lacinia facilisis.

Quisque luctus, mi non elementum aliquet, sem mauris aliquet orci, ut blandit libero enim vitae augue. Maecenas tempus, tellus eu blandit tempor, eros enim ornare dui, et hendrerit augue mauris ac nibh. In ac aliquet nisl. Mauris turpis nisi, tristique nec molestie eu, varius eget massa. Maecenas eu euismod nulla. Vestibulum varius eleifend tellus quis ornare. Suspendisse eleifend ex eu ligula sodales fermentum. Ut ex lectus, dictum vel neque non, ultrices pulvinar dolor. Duis lobortis vestibulum sodales. Integer efficitur nunc ligula, sit amet luctus odio eleifend vel. Aliquam tempor a diam et consequat.

Integer at sollicitudin urna. Etiam imperdiet feugiat cursus. Integer iaculis lacus vitae leo egestas, vel imperdiet est tincidunt. Aenean ac euismod quam. Ut scelerisque orci quis nunc malesuada, ac porta odio sodales. Nunc commodo scelerisque mauris, in blandit massa. Integer auctor lorem quis purus lobortis dictum.

Duis sit amet ornare felis, sit amet ultricies metus. Praesent vel efficitur neque, vitae commodo quam. Morbi tempor, risus quis pharetra congue, est sem tempus lorem, convallis maximus est lorem aliquam ipsum. Fusce ac suscipit nibh. Ut varius mattis purus, id fringilla arcu sagittis eu. Praesent sed vulputate justo, at semper mi. Vivamus nunc diam, rhoncus quis vehicula vel, porttitor eget neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin tempus sagittis turpis. Maecenas sit amet fermentum ante. Sed fermentum dapibus egestas. Curabitur at egestas turpis. Cras molestie laoreet sagittis. Suspendisse nec enim nulla. Donec scelerisque erat id tempor bibendum. Suspendisse libero lectus, lobortis eget est sit amet, varius pulvinar purus.

Vestibulum consequat pretium sapien et imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo consectetur elementum. Curabitur eu libero vitae quam maximus aliquam. Fusce vel efficitur mi. Aliquam finibus velit nunc, in faucibus leo luctus vel. Fusce nisl ante, auctor ac dignissim vitae, porta ac leo. Aenean nec imperdiet mi. Morbi iaculis, turpis non hendrerit fringilla, lorem odio condimentum ligula, et sagittis odio libero at urna. 
      </p>

      <div className="top-0 h-screen flex flex-col justify-between items-center px-12 py-20 gap-10">
        <motion.div style={{ opacity: opacity1 }} className="transition-opacity duration-700 flex">
          <Image
            src="/home/fighting games.jpg"
            alt="FGC"
            width={1000}
            height={1000}
            className="rounded-l shadow-xl w-250"
          />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet neque augue. Phasellus congue, augue sit amet vulputate vestibulum, nunc lacus luctus nisi, non molestie felis diam sit amet turpis. Proin non metus sagittis, vulputate velit dapibus, commodo dolor. Nunc convallis elit ac facilisis rutrum. Sed pharetra euismod tincidunt. Donec interdum consequat libero, maximus laoreet enim dictum ac. Cras commodo lacus a odio sollicitudin, id consectetur nunc faucibus. Integer ullamcorper, enim ac luctus volutpat, erat lectus elementum risus, ac rhoncus metus nisi nec odio. Nunc tempus ex congue erat placerat, eu sollicitudin diam laoreet. Integer eleifend mi ut leo lacinia facilisis. 
          </p>

        </motion.div>

        <motion.div style={{ opacity: opacity2 }} className="transition-opacity duration-700 flex">

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet neque augue. Phasellus congue, augue sit amet vulputate vestibulum, nunc lacus luctus nisi, non molestie felis diam sit amet turpis. Proin non metus sagittis, vulputate velit dapibus, commodo dolor. Nunc convallis elit ac facilisis rutrum. Sed pharetra euismod tincidunt. Donec interdum consequat libero, maximus laoreet enim dictum ac. Cras commodo lacus a odio sollicitudin, id consectetur nunc faucibus. Integer ullamcorper, enim ac luctus volutpat, erat lectus elementum risus, ac rhoncus metus nisi nec odio. Nunc tempus ex congue erat placerat, eu sollicitudin diam laoreet. Integer eleifend mi ut leo lacinia facilisis. 
          </p>

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