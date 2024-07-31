/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "c.wallhere.com",
            },
        ],
    },
};

export default nextConfig;
