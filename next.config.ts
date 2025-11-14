import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/3DBusinessCard",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
