/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kidslearn.fun',
        port: '',
        pathname: '/static/media/**',
      },
    ],
  },
}

module.exports = nextConfig
