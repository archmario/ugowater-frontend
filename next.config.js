/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the build writes plain files to out/, which get uploaded
  // to the hosting server. No Node server runs in production.
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
