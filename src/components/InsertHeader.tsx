"use client";

import Image from "next/image";
import Link from "next/link";

export default function InsertHeader() {
  return (
    <header className="px-6">
      <div className="mb-[30px] flex items-center lg:w-full gap-4">
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

      </div>
    </header>
  );
}