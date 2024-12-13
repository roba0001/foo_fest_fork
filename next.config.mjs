/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
      },
      {
        protocol: "https",
        hostname: "localhost",
        port: "8080",
      },
      {
        protocol: "https",
        hostname: "localhost",
        port: "8080", // Specify the port for localhost (if applicable)
        pathname: "/logos/**",
      },
      {
        protocol: "https",
        hostname: "polarized-chrome-trouser.glitch.me",
        pathname: "/logos/**",
      },
    ],
  },
};

export default nextConfig;
