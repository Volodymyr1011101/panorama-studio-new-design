import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        domains: ['firebasestorage.googleapis.com']
    },
    typescript: {
        ignoreBuildErrors: true
    }
};

export default withNextIntl(nextConfig);