/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export", // Required for static export
  images: {
    unoptimized: true, // Required when using next/image with static export
    domains: [
      "images.unsplash.com",
      "randomuser.me",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
