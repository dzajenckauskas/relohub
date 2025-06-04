/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '154.49.136.99',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'flagcdn.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'api.relohub.co.uk',
                port: '1355',
                pathname: '/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'api.relohub.co.uk',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;
