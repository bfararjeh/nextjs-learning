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
          <div className="mb-[30px] flex items-center w-full gap-4">
            <Image
              src="/icons/fararjeh.png"
              alt="Site Icon"
              width={48}
              height={48}
            />
            <Link
              href="/"
              className="font-centgoth font-bold text-5xl tracking-wide text-stroke"
            >
              Fararjeh
            </Link>

            <div className="flex-1"></div>
            
          </div>
        </header>

        <main className="flex flex-row">
          <aside className="fixed w-64 max-w-72 flex flex-col top-0 h-screen justify-center items-center shrink-0">
            <nav className="flex flex-col gap-4 mb-5">
              <Link id="sidebar" href = "/content" className="text-center paragraph">Content</Link>
              <Link id="sidebar" href = "/coaching" className="text-center paragraph">Coaching</Link>
              <Link id="sidebar" href = "/competition" className="text-center paragraph">Competition</Link>
            </nav>
          </aside>

          <div className="ml-[200px]">{children}</div>
        </main>
        
        <footer className="mt-auto w-full">
          <nav className={"font-centgoth flex w-full justify-center"}>
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
                <Image src="/icons/twitch.png" alt="Twitch" width={40} height={32}/>
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
