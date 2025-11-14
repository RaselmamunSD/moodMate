import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // Next.js  nodemon 
  reactStrictMode: false,
  // Allow cross-origin requests for development
  allowedDevOrigins: ['preview-chat-5c8f010c-f06b-40b4-9549-43f0d717bda4.space.z.ai'],
  webpack: (config, { dev }) => {
    if (dev) {
      // webpack 
      config.watchOptions = {
        ignored: ['**/*'], // 
      };
    }
    return config;
  },
  eslint: {
    // ESLint
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
