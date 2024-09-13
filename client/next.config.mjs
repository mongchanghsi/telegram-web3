const hostnames = ["avatars.githubusercontent.com"];
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: hostnames.map((hostname) => {
      return {
        protocol: "https",
        hostname,
      };
    }),
  },
};

export default nextConfig;
