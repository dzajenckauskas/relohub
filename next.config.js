/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    experimental: {
        optimizeFonts: true,
    },
    images: {
        domains: [
            "154.49.136.99",
            "flagcdn.com",
            "api.relohub.co.uk"
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.relohub.co.uk',
                port: '1355',
                pathname: '/uploads/**',
            }
        ],
    },
};

module.exports = nextConfig;
