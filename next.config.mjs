/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "naszsklep-api.vercel.app",
			},
		],
	},
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
			{
				source: "/products/0",
				destination: "/products/1",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
