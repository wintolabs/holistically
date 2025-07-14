import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Permissions-Policy",
            value: "payment=*, fullscreen=(self), geolocation=*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
