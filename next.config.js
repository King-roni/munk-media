/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // TEMPORARY: Allow production build to pass with lint errors
  // TODO: Clean up lint errors and remove this setting
  eslint: {
    ignoreDuringBuilds: true,
  },
  // TypeScript checking stays enabled
  async headers() {
    const csp = [
      "default-src 'self'",
      // Allow Next.js scripts & inline styles minimaly:
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://*.vercel-insights.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "connect-src 'self' https: wss:",
      "media-src 'self' blob: https:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "frame-src 'self'",
      "upgrade-insecure-requests"
    ].join('; ');

    return [
      {
        source: '/:path*',
        headers: [
          // Strict Transport Security (1 year, include subdomains, preload)
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          // Clickjacking protection
          { key: 'X-Frame-Options', value: 'DENY' },
          // MIME type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Basic referrer policy
          { key: 'Referrer-Policy', value: 'no-referrer' },
          // Lock down browser features
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
          // Content Security Policy
          { key: 'Content-Security-Policy', value: csp },
        ],
      },
    ];
  },
}

module.exports = nextConfig
