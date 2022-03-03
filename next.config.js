/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ["https://i.ibb.co", "images.immediate.co.uk"],
  },

 /* async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5003/:path*' // Proxy to Backend
      }
    ]
  }*/
}
