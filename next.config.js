/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['tailwindui.com','images.unsplash.com'],
  },
  env: {
    SECURE_LOCAL_STORAGE_PREFIX: '%',
    SECURE_LOCAL_STORAGE_HASH_KEY: '6c35aebeff1d62a35881af369772237b', //azapfy - md5
  }
}
module.exports = nextConfig
