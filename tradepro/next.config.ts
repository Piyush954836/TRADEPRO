import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone', // Ensures correct output for Vercel
  trailingSlash: true,  // Optional: Helps with URL consistency
  distDir: '.next',     // Tell Next.js to output to "build/"
};

export default nextConfig;
