/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.pixel4k.com",
            },
            {
                protocol: "https",
                hostname: "as2.ftcdn.net",
            },
        ],
    },
};

export default nextConfig;
