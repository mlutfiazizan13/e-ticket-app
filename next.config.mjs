/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.evbstatic.com',
            port: '',
            pathname: '/s3-build/fe/build/images/**',
          },
          
        ],
      },
};

export default nextConfig;
