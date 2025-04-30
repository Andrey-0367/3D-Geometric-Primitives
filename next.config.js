/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/3D-Geometric-Primitives',
  output: 'export', 
  distDir: 'out', 
  images: {
    unoptimized: true, 
  },
  trailingSlash: true, 
}

module.exports = nextConfig