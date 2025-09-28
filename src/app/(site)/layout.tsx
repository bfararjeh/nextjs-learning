import "../globals.css";
import Image from "next/image";
import Link from "next/link";

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
        
      </body>
    </html>
  );
}
