import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bucket.procyonfiji.com",
      },
    ],
  },
};

export default nextConfig;
