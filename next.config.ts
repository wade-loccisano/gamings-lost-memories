import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.rss.com',
        port: '',
        pathname: '',
        search: '',
      },
    ], 
  },


  // output: 'export',
  // basePath: "/gamings-lost-memories",
};

export default nextConfig;

