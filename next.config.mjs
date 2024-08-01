/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "c.wallhere.com",
            },
            {
                protocol: "https",
                hostname: "as2.ftcdn.net",
            },
        ],
    },
};

export default nextConfig;
