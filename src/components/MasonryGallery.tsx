import Image from "next/image";

interface MasonryGalleryProps {
  images: string[];
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images }) => {
  return (
    <div className="p-4 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
      {images.map((src, idx) => {
        const fileName = src.split("/").pop()?.split(".")[0] || "";
        const readable = fileName
          .replace(/[-_]+/g, " ")
          .trim();

        const alt = `${readable.charAt(0).toUpperCase() + readable.slice(1)} by Fararjeh`;

        return (
          <div key={idx} className="mb-4 break-inside-avoid">
            <Image
              src={src}
              alt={alt}
              width={500}
              height={500}
              className="w-full h-auto rounded-lg"
              loading="lazy"
              quality={90}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MasonryGallery;