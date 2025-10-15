/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allowed quality values for next/image
    qualities: [75, 85, 90, 100], // add any values you need
  },
};

module.exports = nextConfig;