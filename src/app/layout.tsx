import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image"

export const metadata: Metadata = {
  title: "Fararjeh domain name",
  description: "Learning Next.js",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>)
{
  return (
    <html lang="en">
      <body>
        <header>
          <Image
            src={"/fararjeh.png"}
            alt="Site Icon"
            width={120}
            height={120}
          />
          <span className="font-centgoth font-bold text-8xl tracking-wide text-stroke">Fararjeh</span>
        </header>
        <div className={"m-8"}>{children}</div>
      </body>
    </html>
  );
}
