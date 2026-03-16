import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Add old Squarespace URLs here before launch to preserve Google rankings
      // Example: { source: "/old-page", destination: "/new-page", permanent: true },
    ];
  },
};

export default nextConfig;
