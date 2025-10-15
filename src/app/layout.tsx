import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FGC Fararjeh",
  description: "Fararjeh is a content creator, competitor, and coach for the game Street Fighter 6. Learn everything you need to know about him here!",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>){

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">

        <header className="px-6">
          <div className="mb-[30px] flex items-center w-full gap-4">
            <Image
              src="/icons/fararjeh.png"
              alt="Site Icon"
              width={52}
              height={52}
              className="shadow-fararjeh-dim drop-shadow-md rounded-4xl"
            />
            <Link
              href="/"
              className="font-centgoth font-bold text-5xl tracking-wider text-stroke"
            >
              Fararjeh
            </Link>

            <div className="flex-1"></div>
            
          </div>
        </header>

        <main className="flex flex-row">
          <aside className="fixed w-64 max-w-72 flex flex-col top-0 h-screen justify-center items-center shrink-0">
            <nav className="flex flex-col gap-8 mb-5 ml-20">
              <Link id="sidebar" href = "/" className="text-left">Home</Link>
              <Link id="sidebar" href = "#achievements" className="text-left">Achievements</Link>
              <Link id="sidebar" href = "#coaching" className="text-left">Coaching</Link>
              <Link id="sidebar" href = "#content" className="text-left">Content</Link>
              <Link id="sidebar" href = "#gallery" className="text-left">Gallery</Link>
            </nav>
          </aside>
          <div className="px-[30rem] ml-[72px]">{children}</div>
        </main>
        
        <footer className="mt-auto w-full">
          <nav className="font-centgoth flex w-full justify-center">
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

        <div id="backgroundL">
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i} style={{ left: `${10 * (i + 1)}%` }}></span>
          ))}
        </div>

        <div id="backgroundR">
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i} style={{ right: `${10 * (i + 1)}%` }}></span>
          ))}
        </div>

      </body>
    </html>
  );
}
