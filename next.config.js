/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    images: {
        domains: ["154.49.136.99:4000", "154.49.136.99", "154.49.136.99:1344", "flagcdn.com"],
    },
    // images: {
    //     remotePatterns: [
    //         // {
    //         //     protocol: 'http',
    //         //     hostname: '154.49.136.99',
    //         //     pathname: 'uploads/**',
    //         // },
    //         {
    //             protocol: 'http',
    //             hostname: '154.49.136.99',
    //             port: '1344',
    //             pathname: '/uploads/**',
    //         }
    //     ],
    // },
};

module.exports = nextConfig;
