/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    images: {
        domains: ["154.49.136.99", "154.49.136.99:1344"],
    },
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: 'http',
    //             hostname: '154.49.136.99',
    //             pathname: '**',
    //         },
    //         {
    //             protocol: 'http',
    //             hostname: '154.49.136.99:1344',
    //             pathname: '**',
    //         }
    //     ],
    // },
};

module.exports = nextConfig;
