import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  basePath: "/LearnSE-AI",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
