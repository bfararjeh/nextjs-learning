import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fararjeh domain name",
  description: "Learning Next.js",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>){

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">

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
