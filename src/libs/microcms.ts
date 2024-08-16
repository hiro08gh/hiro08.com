import { createClient } from "microcms-js-sdk";

export type PostType = {
	title: string;
	body: string;
	description: string;
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

export const getPosts = async () => {
	return await client.getList<PostType>({
		endpoint: "posts",
	});
};
