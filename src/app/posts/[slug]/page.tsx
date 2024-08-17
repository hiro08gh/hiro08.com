import { ClearButton } from "@/app/_components/ClearButton";
import { PostContent } from "@/app/_components/PostContent";
import { REVALIDATE_TIME } from "@/libs/constants";
import { getPostDetail } from "@/libs/microcms";
import type { Metadata } from "next";
import { cookies, draftMode } from "next/headers";

export const revalidate = REVALIDATE_TIME;

type Props = {
	params: { slug: string };
};

export async function generateMetadata({
	params: { slug },
}: Props): Promise<Metadata> {
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
	const { isEnabled } = draftMode();
	const cookieStore = cookies();
	const draftKey = cookieStore.get("draftKey")?.value;

	const post = await getPostDetail(slug, isEnabled && draftKey ? draftKey : "");

	return (
		<div className="mx-4 max-sm:py-4">
			{isEnabled && <ClearButton />}
			<PostContent post={post} />
		</div>
	);
}
