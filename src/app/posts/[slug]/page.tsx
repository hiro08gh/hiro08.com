import { PostContent } from "@/app/_components/PostContent";
import { REVALIDATE_TIME } from "@/libs/constants";
import { getPostDetail } from "@/libs/microcms";
import type { Metadata, ResolvingMetadata } from "next";

export const revalidate = REVALIDATE_TIME;

type Props = {
	params: { slug: string };
};

export async function generateMetadata(
	{ params: { slug } }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const post = await getPostDetail(slug);

	return {
		title: `${post.title} - hiro08gh`,
		description: post.description,
	};
}

export default async function Page({
	params: { slug },
}: {
	params: { slug: string };
}) {
	const post = await getPostDetail(slug);

	return (
		<div className="mx-4 max-sm:py-4">
			<PostContent post={post} />
		</div>
	);
}
