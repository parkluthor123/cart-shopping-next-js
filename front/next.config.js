/** @type {import('next').NextConfig} */

const withImages = require('next-images')
module.exports = withImages({
  esModule: true
})

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
