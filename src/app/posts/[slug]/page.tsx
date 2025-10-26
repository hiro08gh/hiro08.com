import { AuthorProfile } from "@/components/AuthorProfile";
import { ClearButton } from "@/components/ClearButton";
import { PostContent } from "@/components/PostContent";
import { StructuredData } from "@/components/StructuredData";
import { metadataConfig } from "@/libs/meta";
import { getAbout, getPostDetail } from "@/libs/microcms";
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

	return metadataConfig({
		title: post.title,
		description: post.description,
		url: `/posts/${slug}`,
		type: "article",
		publishedTime: post.publishedAt,
		image: post.image?.url,
		tags: post.tags?.map(tag => tag.name),
	});
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

	const [post, about] = await Promise.all([
		getPostDetail({ contentId: slug, draftKey }),
		getAbout(),
	]);

	const fullUrl = `https://hiro08.com/posts/${slug}`;

	return (
		<>
			<StructuredData post={post} url={fullUrl} />
			<div className="mx-4 max-sm:py-4">
				{isEnabled && <ClearButton />}
				<PostContent post={post} />
				<AuthorProfile about={about} />
			</div>
		</>
	);
}
