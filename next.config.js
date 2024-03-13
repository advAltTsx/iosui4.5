/** @type {import('next').NextConfig} */
const nextConfig = { async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.abhyudaya.xyz',
        permanent: true,
      },
    ]
  },}

module.exports = nextConfig
