/** @type {import('next').NextConfig} */

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['tailwindui.com','images.unsplash.com'],
  },
  // async redirects() {
  //   return process.env.NODE_ENV==="development"?[
  //     {
  //       source: '/',
  //       destination: '/login',
  //       permanent: true,
  //     },
  //   ]:[]
  // },
}
module.exports = nextConfig
