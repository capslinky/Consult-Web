import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export per project requirements
  output: "export",
  trailingSlash: true,
  images: {
    // Enable static export compatibility if Next Image is introduced later
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/blog", destination: "/resources/blog/", permanent: true },
      { source: "/blog/", destination: "/resources/blog/", permanent: true },
      { source: "/guides", destination: "/resources/guides/", permanent: true },
      { source: "/guides/", destination: "/resources/guides/", permanent: true },
    ];
  },
};

export default nextConfig;
