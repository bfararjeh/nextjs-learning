import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fararjeh FGC",
  description: "Fararjeh is a content creator, competitor, and coach for the game Street Fighter 6. Learn everything you need to know about him here!",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>){

  return (
    <html lang="en">
      <body className="min-h-screen grid grid-cols-1 md:grid-cols-[auto_1fr]">
        <aside className="fixed h-screen hidden lg:flex flex-col lg:max-w-[15%] justify-center items-center">
          <nav className="flex flex-col gap-8 mb-5 ml-20">
            <Link id="sidebar" href="/" className="text-left">About</Link>
            <Link id="sidebar" href="#achievements" className="text-left">Achievements</Link>
            <Link id="sidebar" href="#coaching" className="text-left">Coaching</Link>
            <Link id="sidebar" href="#content" className="text-left">Content</Link>
            <Link id="sidebar" href="#gallery" className="text-left">Gallery</Link>
          </nav>
        </aside>

        <div className="col-span-1">{children}</div>
        <section id="bg">
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
        </section>
      </body>
    </html>
  );
}
