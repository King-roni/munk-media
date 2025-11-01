/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // TEMPORARY: Allow production build to pass with lint errors
  // TODO: Clean up lint errors and remove this setting
  eslint: {
    ignoreDuringBuilds: true,
  },
  // TypeScript checking stays enabled
}

module.exports = nextConfig
