import { NextApiRequest, NextApiResponse } from "next";
import { galleryImages } from "@/src/lib/gallery";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = "https://fararjeh-fgc.com";

  const urls = galleryImages
    .map((img) => {
      const fileName = img.split("/").pop()?.split(".")[0] || "";
      const caption = fileName.replace(/[-_]+/g, " ").trim();

      return `
      <url>
        <loc>${baseUrl}/#gallery</loc>
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

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}