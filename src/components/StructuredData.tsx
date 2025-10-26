import type { PostDetailType } from "@/libs/microcms";

type Props = {
	post: PostDetailType;
	url: string;
};

export const StructuredData: React.FC<Props> = ({ post, url }) => {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: post.title,
		description: post.description,
		image: post.image?.url ? [post.image.url] : ["/icon.png"],
		datePublished: post.publishedAt,
		dateModified: post.updatedAt || post.publishedAt,
		author: {
			"@type": "Person",
			name: "hiro08gh",
			url: "https://hiro08.com",
		},
		publisher: {
			"@type": "Organization",
			name: "hiro08gh",
			logo: {
				"@type": "ImageObject",
				url: "https://hiro08.com/icon.png",
			},
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": url,
		},
		keywords: post.tags?.map(tag => tag.name).join(", "),
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	);
};