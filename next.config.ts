/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    reactCompiler: true,
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  images: {unoptimized: true},
};

export default nextConfig;
