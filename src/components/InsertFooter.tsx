"use client";

import Image from "next/image";

export default function InsertFooter() {
  return (
    <footer className="mt-auto w-full">
      <nav className="font-centgoth hidden lg:flex w-full justify-center">
        <a
          href="https://youtube.com/@fararjeh"
          target="_blank"
          rel="noopener noreferrer"
          className="footerButton text-stroke"
        >
          <Image src="/icons/youtube.png" alt="YouTube" width={48} height={48}/>
          YouTube</a>
          
        <a
          href="https://x.com/balfararjeh"
          target="_blank"
          rel="noopener noreferrer"
          className="footerButton text-stroke"
        >
          <Image src="/icons/twitter.png" alt="Twitter" width={48} height={48}/>
          Twitter</a>

        <a
          href="https://metafy.gg/@fararjeh"
          target="_blank"
          rel="noopener noreferrer"
          className="footerButton text-stroke"
        >
          <Image src="/icons/metafy.png" alt="Metafy" width={48} height={48}/>
          Metafy</a>

          <a
          href="https://twitch.tv/fararjeh"
          target="_blank"
          rel="noopener noreferrer"
          className="footerButton text-stroke"
        >
          <Image src="/icons/twitch.png" alt="Twitch" width={40} height={40}/>
          Twitch</a>
      </nav>
    </footer>
  );
}