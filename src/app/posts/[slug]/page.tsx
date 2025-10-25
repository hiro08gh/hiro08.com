import { ClearButton } from "@/components/ClearButton";
import { PostContent } from "@/components/PostContent";
import { metadataConfig } from "@/libs/meta";
import { getPostDetail } from "@/libs/microcms";
import type { Metadata } from "next";
import { cookies, draftMode } from "next/headers";

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({
	params,
}: Props): Promise<Metadata> {
	const { slug } = await params;
	const cookieStore = await cookies();
	const draftKey = cookieStore.get("draftKey")?.value;

	const post = await getPostDetail({ contentId: slug, draftKey });

	return metadataConfig({ title: post.title, description: post.description });
}

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const { isEnabled } = await draftMode();
	const cookieStore = await cookies();
	const draftKey = cookieStore.get("draftKey")?.value;

	const post = await getPostDetail({
		contentId: slug,
		draftKey,
	});

	return (
		<div className="mx-4 max-sm:py-4">
			{isEnabled && <ClearButton />}
			<PostContent post={post} />
		</div>
	);
}
