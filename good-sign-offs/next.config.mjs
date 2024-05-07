/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/good-sign-offs',
        destination: '/',
      },
    ];
  },
};

export default nextConfig;
