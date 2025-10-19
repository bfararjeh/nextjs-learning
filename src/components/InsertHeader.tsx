"use client";

import Image from "next/image";
import Link from "next/link";

export default function InsertHeader() {
  return (
    <header className="px-6">
      <div className="flex items-center lg:w-full gap-4">
      <Image
        src="/icons/fararjeh.png"
        alt="Site Icon"
        width={100}
        height={100}
        className="shadow-fararjeh-dim drop-shadow-md rounded-4xl w-8 h-8 lg:w-12 lg:h-12"
      />
      <Link
        href="/"
        className="font-centgoth font-bold text-3xl lg:text-5xl tracking-wider text-stroke"
      >
        Fararjeh
      </Link>

      </div>
    </header>
  );
}