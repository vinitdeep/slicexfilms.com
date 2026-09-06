// Set NEXT_PUBLIC_BASE_PATH="/slicexfilms.com" when building for GitHub Pages
// (the deploy workflow does this). Leave it unset for local dev / root hosting.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  // Emit /about/index.html instead of /about.html so static hosts (GitHub
  // Pages) resolve /about/ without needing rewrite rules.
  trailingSlash: true,
};

export default nextConfig;
