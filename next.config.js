/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '154.49.136.99',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: '154.49.136.99:1344',
                pathname: '**',
            }
        ],
    },
};

module.exports = nextConfig;
