const path = '/good-sign-offs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: path,
  trailingSlash: true,
  
  async redirects() {
    return [
      {
        source: '/',
        destination: path,
        basePath: false,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
