import { metadataConfig } from "@/libs/meta";
import { getScrapsDetail } from "@/libs/microcms";
import type { Metadata } from "next";

type Props = {
	params: { slug: string };
};

export async function generateMetadata({
	params: { slug },
}: Props): Promise<Metadata> {
	const scraps = await getScrapsDetail({ contentId: slug });

	return metadataConfig({ title: scraps.title });
}

export default async function Page({
	params: { slug },
}: {
	params: { slug: string };
}) {
	const scraps = await getScrapsDetail({
		contentId: slug,
	});

	return (
		<div className="mx-4 max-sm:py-4">
			<h2>{scraps.title}</h2>
			{scraps.comments.map((comment, i) => (
				<div key={comment.fieldId}>
					<div dangerouslySetInnerHTML={{ __html: comment.body }} />
				</div>
			))}
		</div>
	);
}
