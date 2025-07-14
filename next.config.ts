import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self';",
              "script-src 'self' 'unsafe-inline' https://assets.calendly.com;",
              "style-src 'self' 'unsafe-inline' https://assets.calendly.com;",
              "frame-src https://calendly.com https://*.calendly.com;",
              "connect-src https://calendly.com https://*.calendly.com;",
              "img-src 'self' data: https://*.calendly.com;",
              "font-src 'self' https://assets.calendly.com;",
            ].join(" "),
          },
          {
            key: "Permissions-Policy",
            value: "payment=*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
