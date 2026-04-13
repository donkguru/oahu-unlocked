import type { NextConfig } from "next";

// Sources used across the site
const SELF = "'self'";
const UNSAFE_INLINE = "'unsafe-inline'";
const UNSAFE_EVAL = "'unsafe-eval'";

// Third-party domains
const GA = "https://*.google-analytics.com https://*.googletagmanager.com";
const ADSENSE = "https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://*.googlesyndication.com https://*.google.com https://*.gstatic.com";
const MAPS = "https://maps.googleapis.com https://maps.gstatic.com https://*.googleapis.com";
const VIATOR = "https://api.viator.com";
const BOOKING = "https://www.booking.com";
const IMAGES = "https://images.unsplash.com";

const csp = [
  `default-src ${SELF}`,
  `script-src ${SELF} ${UNSAFE_INLINE} ${UNSAFE_EVAL} ${GA} ${ADSENSE}`,
  `style-src ${SELF} ${UNSAFE_INLINE} https://fonts.googleapis.com`,
  `font-src ${SELF} https://fonts.gstatic.com`,
  `img-src ${SELF} data: blob: ${IMAGES} ${GA} ${ADSENSE} ${MAPS} https://*.booking.com`,
  `connect-src ${SELF} ${GA} ${VIATOR} ${BOOKING} ${MAPS}`,
  `frame-src ${ADSENSE} https://www.google.com`,
  `child-src blob:`,
  `worker-src blob:`,
].join('; ')

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: csp,
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
