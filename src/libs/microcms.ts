import { createClient } from "microcms-js-sdk";

export type PostType = {
	title: string;
	body: string;
	description: string;
	isTOC: boolean;
	tags: Awaited<ReturnType<typeof getTag>>[];
};

export type TagType = {
	name: string;
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

export const getPosts = async (limit: number, filters?: string) => {
	return await client.getList<PostType>({
		endpoint: "posts",
		queries: {
			limit,
			filters,
		},
	});
};

export const getPostDetail = async (contentId: string, draftKey?: string) => {
	return await client.getListDetail<PostType>({
		endpoint: "posts",
		contentId,
		queries: {
			draftKey,
		},
	});
};

export const getTag = async (contentId: string) => {
	return await client.getListDetail<TagType>({
		endpoint: "tags",
		contentId,
	});
};
