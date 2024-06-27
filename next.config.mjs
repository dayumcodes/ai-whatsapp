/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: "gregarious-canary-125.convex.cloud" },
			{ hostname: "oaidalleapiprodscus.blob.core.windows.net" },
			
		],
	},
};

export default nextConfig;