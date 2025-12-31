/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Ensure trailing slashes for proper relative path resolution
  trailingSlash: true,

  // Skip trailing slash redirect for blog to allow Quarto's static HTML to work
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/blog/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
