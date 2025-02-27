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
            "api.deliver1.co.uk"
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.deliver1.co.uk',
                port: '1344',
                pathname: '/uploads/**',
            }
        ],
    },
};

module.exports = nextConfig;
