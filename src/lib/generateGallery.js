const fs = require("fs");
const path = require("path");

// This resolves from your project root (no matter where the script is)
const GALLERY_FOLDER = path.join(process.cwd(), "public/gallery");
const OUTPUT_FILE = path.join(process.cwd(), "src/lib/gallery.ts");

// Allowed image extensions
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"];

// Read all files in the gallery folder
const files = fs.readdirSync(GALLERY_FOLDER).filter((file) =>
  ALLOWED_EXTENSIONS.includes(path.extname(file).toLowerCase())
);

// Generate TypeScript array
const tsContent = `export const galleryImages: string[] = [
${files.map((file) => `  "/gallery/${file}"`).join(",\n")}
];
`;

// Write to output file
fs.writeFileSync(OUTPUT_FILE, tsContent);

console.log(`✅ Gallery list generated with ${files.length} images!`);
console.log(`Output: ${OUTPUT_FILE}`);