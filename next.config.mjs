/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,

  // ❌ remove distDir unless really needed
  // distDir: '.next',

  typescript: {
    ignoreBuildErrors: true, 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
