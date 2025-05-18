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
    optimizeCss: {
      inlineThreshold: 0,
    },
    optimizePackageImports: ['@mui/icons-material', '@mui/material', '@emotion/styled', '@emotion/react'],
  },
  // Production optimizations
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  // Add output configuration
  output: 'export',
  // Add build configuration
  distDir: '.next',
  // Add page extensions
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Add webpack configuration
  webpack: (config, { isServer }) => {
    // Add any webpack customizations here
    return config;
  },
  // Add trailing slashes to all routes
  trailingSlash: true,
  // Disable image optimization during export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
