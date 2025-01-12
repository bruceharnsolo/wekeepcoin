create Nextjs :
install Dayjs (date format) : npm install dayjs
install AntD (style) : npm install antd@5.8.6
config next config :
 ``` 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["antd", "@ant-design"],
};
export default nextConfig;
```
ล็อกเวอร์ชัน rc-util : pnpm install rc-util@5.43.0