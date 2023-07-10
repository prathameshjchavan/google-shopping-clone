export const getFetchUrl = (route: string) => {
	const onProduction = process.env.NODE_ENV === "production";
	const hasVercelUrl = process.env.VERCEL_URL;

	console.log(
		onProduction && hasVercelUrl ? "Using Vercel URL..." : "Using Local URL..."
	);

	return `${
		onProduction && hasVercelUrl
			? `https://${process.env.VERCEL_URL}`
			: process.env.NEXT_PUBLIC_BASE_URL
	}${route}`;
};
