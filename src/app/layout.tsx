import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fararjeh domain name",
  description: "Learning Next.js",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>){
  const buttonClasses = "flex-1 flex items-center gap-3 font-centgoth font-bold justify-center text-stroke-thin text-3xl px-4 py-2 bg-fararjeh text-white transition hover:bg-gradient-to-b hover:from-fararjeh hover:to-fararjeh-dim hover:text-gray-300"
  
  return (
    <html lang="en">
      <body>
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

        <div>{children}</div>
        
        <footer>
          <nav className={"font-centgoth flex w-full justify-center"}>
              <a
                href="https://youtube.com/@fararjeh"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses}
              >
                <Image src="/icons/youtube.png" alt="YouTube" width={48} height={48}/>
                YouTube</a>
                
              <a
                href="https://x.com/balfararjeh"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses}
              >
                <Image src="/icons/twitter.png" alt="Twitter" width={48} height={48}/>
                Twitter</a>

              <a
                href="https://metafy.gg/@fararjeh"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses}
              >
                <Image src="/icons/metafy.png" alt="Metafy" width={48} height={48}/>
                Metafy</a>

                <a
                href="https://twitch.tv/fararjeh"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses}
              >
                <Image src="/icons/twitch.png" alt="Twitch" width={40} height={32}/>
                Twitch</a>
          </nav>
        </footer>
      </body>
    </html>
  );
}
