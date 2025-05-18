/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "randomuser.me",
      "upload.wikimedia.org",
      "img.freepik.com",
      "cdn.pixabay.com",
      "images.pexels.com"
    ],
  },
  // Enable Turbopack optimizations
  experimental: {
    turbo: {
      rules: {
        // Configure Turbopack rules
        '*.{js,jsx,ts,tsx}': ['swc'],
      },
    },
    // Enable other performance optimizations
    optimizeCss: true,
    optimizePackageImports: ['@mui/icons-material', '@mui/material', '@emotion/styled', '@emotion/react'],
  },
  // Production optimizations
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
}

module.exports = nextConfig
