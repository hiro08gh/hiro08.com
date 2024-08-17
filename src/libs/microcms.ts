import { createClient } from "microcms-js-sdk";

export type PostType = {
	title: string;
	body: string;
	description: string;
	isTOC: boolean;
};

export type AboutType = {
	name: string;
	description: string;
	links: {
		fieldId: string;
		name: string;
		value: string;
	}[];
};

const client = createClient({
	serviceDomain: process.env.SERVICE_DOMAIN || "",
	apiKey: process.env.API_KEY || "",
});

export const getAbout = async () => {
	return await client.getObject<AboutType>({
		endpoint: "about",
	});
};

export const getPosts = async (limit: number) => {
	return await client.getList<PostType>({
		endpoint: "posts",
		queries: {
			limit,
		},
	});
};

export const getPostDetail = async (contentId: string) => {
	return await client.getListDetail<PostType>({
		endpoint: "posts",
		contentId,
	});
};
