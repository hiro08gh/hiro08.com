export const REVALIDATE_TIME = process.env.CACHE_TIME
	? Number(process.env.CACHE_TIME)
	: 3600;
