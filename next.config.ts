import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  redirects:async ()=>{
    return[{
      source:'/other',
      destination:'/',
      permanent:false,
    },
  ]
  },
};

export default nextConfig;
