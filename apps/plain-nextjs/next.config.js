/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });
    return config;
  },
  reactStrictMode: false,
  output: "standalone",
  swcMinify: true,
  compress: true,
  basePath: "/plain-nextjs",
};

module.exports = nextConfig;
