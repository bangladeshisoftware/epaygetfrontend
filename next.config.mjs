/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["upload.wikimedia.org"],

    remotePatterns: [
      {
        hostname: "pagedone.io",
        pathname: "**",
      },
      {
        hostname: "dummyimage.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
