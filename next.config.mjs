/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',

  // Disable TypeScript build errors
  typescript: {
    ignoreBuildErrors: true, // set to true if you want to skip type checking during build
  },

  // Disable ESLint build errors
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
