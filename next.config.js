/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: [
      "res.cloudinary.com",
      "https://i.ibb.co",
      "images.immediate.co.uk",
    ],
  },
  env: {
    API_URL: "https://recipe-soc-project.herokuapp.com",
  },
}
