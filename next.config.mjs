/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
      return [
          {
              source: "/",
              destination: "/page/AntDDemo",
              permanent: true,
          },
      ];
  },
  reactStrictMode: true,
  transpilePackages: ["antd", "@ant-design"],
};

export default nextConfig;
``;

