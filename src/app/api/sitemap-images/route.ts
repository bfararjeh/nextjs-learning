import { NextRequest } from "next/server";
import { galleryImages } from "@/src/lib/gallery";

export async function GET(req: NextRequest) {
  const baseUrl = "https://fararjeh-fgc.com";

  const urls = galleryImages
    .map((img) => {
      const fileName = img.split("/").pop()?.split(".")[0] || "";
      const escapeXml = (unsafe: string) =>
        unsafe.replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&apos;");
      
      const caption = escapeXml(fileName.replace(/[-_]+/g, " ").trim());

      return `
        <url>
          <loc>${baseUrl}/</loc>
          <image:image>
            <image:loc>${baseUrl}${img}</image:loc>
            <image:caption>${caption}</image:caption>
          </image:image>
        </url>`;
    })
    .join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    ${urls}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}