/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // TEMP: Figma-hosted preview asset URLs expire ~7 days after the get_design_context
    // pull that generated them. Before deploying, export final images from Figma and
    // move them into /public/images, then remove this remotePatterns entry.
    remotePatterns: [{ protocol: 'https', hostname: 'www.figma.com' }],
    qualities: [75, 90],
  },
};

module.exports = nextConfig;
