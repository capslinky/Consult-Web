import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export per project requirements
  output: "export",
  trailingSlash: true,
  images: {
    // Enable static export compatibility if Next Image is introduced later
    unoptimized: true,
  },
};

export default nextConfig;
