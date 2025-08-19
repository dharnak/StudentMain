import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  publicRuntimeConfig: {
    API_URL: "http://localhost:5000", 
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
