import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fararjeh domain name",
  description: "Learning Next.js",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>){

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="px-6">
          <div className="mb-[30px] flex items-center w-full gap-4 drop-shadow-[0_0_3px_black]">
            <Image
              src="/icons/fararjeh.png"
              alt="Site Icon"
              width={48}
              height={48}
            />
            <Link
              href="/"
              className="font-centgoth font-bold text-5xl tracking-wide text-stroke-thin"
            >
              Fararjeh
            </Link>

            <div className="flex-1"></div>
            
          </div>
        </header>

        <div className="flex-1">{children}</div>
        
        <footer className="mt-auto w-full">
          <nav className={"font-centgoth flex w-full justify-center"}>
              <a
                href="https://youtube.com/@fararjeh"
                target="_blank"
                rel="noopener noreferrer"
                className="footerButton text-stroke-thin"
              >
                <Image src="/icons/youtube.png" alt="YouTube" width={48} height={48}/>
                YouTube</a>
                
              <a
                href="https://x.com/balfararjeh"
                target="_blank"
                rel="noopener noreferrer"
                className="footerButton text-stroke-thin"
              >
                <Image src="/icons/twitter.png" alt="Twitter" width={48} height={48}/>
                Twitter</a>

              <a
                href="https://metafy.gg/@fararjeh"
                target="_blank"
                rel="noopener noreferrer"
                className="footerButton text-stroke-thin"
              >
                <Image src="/icons/metafy.png" alt="Metafy" width={48} height={48}/>
                Metafy</a>

                <a
                href="https://twitch.tv/fararjeh"
                target="_blank"
                rel="noopener noreferrer"
                className="footerButton text-stroke-thin"
              >
                <Image src="/icons/twitch.png" alt="Twitch" width={40} height={32}/>
                Twitch</a>
          </nav>
        </footer>
      </body>
    </html>
  );
}
