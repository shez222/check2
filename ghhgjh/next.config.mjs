/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['outpost.chat'],
    },
    async rewrites() {
        return [
            //Within the app itself
        ];
    },
    async redirects() {
        return [
            {
                source: '/spend',
                destination: 'https://tally.so/r/wA89Ql',
                permanent: true,
            },
            {
                source: "/apply",
                destination: "https://tally.so/r/wbOgO6",
                permanent: true,
            },
            {
                source: "/pre-screen",
                destination: "https://tally.so/r/3N0gM0",
                permanent: true,
            },
            {
                source: "/refer",
                destination: "https://tally.so/r/nrE4ao",
                permanent: true,
            }
        ];
    },
};

export default nextConfig;