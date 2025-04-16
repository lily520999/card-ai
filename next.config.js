/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/card-ai' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/card-ai' : '',
  trailingSlash: true,
}

module.exports = nextConfig 