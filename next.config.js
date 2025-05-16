/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "randomuser.me",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
