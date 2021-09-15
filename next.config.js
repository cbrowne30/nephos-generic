/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  reactStrictMode: true,
  trailingSlash: true
})