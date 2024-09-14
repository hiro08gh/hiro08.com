import { createClient } from "microcms-js-sdk";
import type { MicroCMSImage } from "microcms-js-sdk";

type ArrayElementType<T> = T extends (infer U)[] ? U : T;

export type TagDetailType = Awaited<ReturnType<typeof getTag>>;

export type PostDetailType = Awaited<ReturnType<typeof getPostDetail>>;

export type PostContentsType = ArrayElementType<
	Awaited<ReturnType<typeof getPosts>>["contents"]
>;

export type PostType = {
	title: string;
	body: string;
	description: string;
	isTOC: boolean;
	tags: TagDetailType[];
	image?: MicroCMSImage;
};

export type ScrapsType = {
	title: string;
	isOpen: boolean;
	comments: CommentsType[];
};

export type CommentsType = {
	fieldId: string;
	body: string;
	isOpen: boolean;
};

export type TagType = {
	name: string;
};

/*
 *  Initialize microCMS client.
 */
const client = createClient({
	serviceDomain: process.env.SERVICE_DOMAIN || "",
	apiKey: process.env.API_KEY || "",
});

/*
 * microCMS  domain logic.
 */
export const getAbout = async () => {
	return await client.getListDetail<PostType>({
		endpoint: "posts",
		contentId: "about",
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

export const getPostDetail = async ({
	contentId,
	draftKey,
}: { contentId: string; draftKey?: string }) => {
	return await client.getListDetail<PostType>({
		endpoint: "posts",
		contentId,
		queries: {
			draftKey: draftKey,
		},
	});
};

export const getTag = async (contentId: string) => {
	return await client.getListDetail<TagType>({
		endpoint: "tags",
		contentId,
	});
};

export const getScraps = async (limit: number) => {
	return await client.getList<ScrapsType>({
		endpoint: "scraps",
		queries: {
			limit,
		},
	});
};

export const getScrapsDetail = async ({ contentId }: { contentId: string }) => {
	return await client.getListDetail<ScrapsType>({
		endpoint: "scraps",
		contentId,
	});
};
