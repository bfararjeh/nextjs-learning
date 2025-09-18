import Image from "next/image";

const buttonClasses = "flex items-center gap-2 font-centgoth font-bold justify-center text-stroke-thin text-3xl px-4 py-2 bg-fararjeh text-white shadow-md rounded-xl transition"

export default function Home() {
  return (
    <div>
      <div className={"m-8 font-centgoth flex items-center justify-center gap-8"}>
          <a
            href="https://youtube.com/@fararjeh"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClasses} hover:bg-fararjeh-dim hover:text-gray-200`}
          >
            <Image src="/icons/youtube.png" alt="YouTube" width={48} height={48}/>
            YouTube</a>
            
          <a
            href="https://x.com/balfararjeh"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClasses} hover:bg-fararjeh-dim hover:text-gray-200`}
          >
            <Image src="/icons/twitter.png" alt="Twitter" width={48} height={48}/>
            Twitter</a>

          <a
            href="https://metafy.gg/@fararjeh"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClasses} hover:bg-fararjeh-dim hover:text-gray-200`}
          >
            <Image src="/icons/metafy.png" alt="Metafy" width={48} height={48}/>
            Metafy</a>

            <a
            href="https://twitch.tv/fararjeh"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClasses} hover:bg-fararjeh-dim hover:text-gray-200`}
          >
            <Image src="/icons/twitch.png" alt="Twitch" width={40} height={32}/>
            Twitch</a>
      </div>
    </div>
  );
}
