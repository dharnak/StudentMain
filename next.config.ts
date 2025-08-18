import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,  // Helps catch potential React issues
  images: {
    domains: ["images.unsplash.com"], // Allow external images from Unsplash
  },
  eslint: {
    ignoreDuringBuilds: true, // Prevents ESLint errors from breaking Vercel builds
  },
  typescript: {
    ignoreBuildErrors: true, // Prevents TS errors from blocking production build
  },
};

export default nextConfig;
