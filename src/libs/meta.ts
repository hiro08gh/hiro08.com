import type { Metadata } from "next";

export const metadataConfig = ({
	title,
	description,
	image,
	url,
	type = "website",
	publishedTime,
	authors,
	tags,
}: {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
	type?: "website" | "article";
	publishedTime?: string;
	authors?: string[];
	tags?: string[];
}): Metadata => {
	const baseUrl = "https://hiro08.com";
	const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
	
	return {
		title: title ? `${title} - hiro08gh` : "hiro08gh",
		description: description ?? "hiro08gh website",
		keywords: tags?.join(", "),
		authors: authors ? authors.map(name => ({ name })) : [{ name: "hiro08gh" }],
		metadataBase: new URL(baseUrl),
		openGraph: {
			title: title ? `${title} - hiro08gh` : "hiro08gh",
			description: description ?? "hiro08gh website",
			url: fullUrl,
			siteName: "hiro08gh",
			locale: "ja_JP",
			type: type,
			images: [{
				url: image ?? "/icon.png",
				width: 1200,
				height: 630,
				alt: title ?? "hiro08gh",
			}],
			...(type === "article" && publishedTime ? {
				publishedTime,
				authors: ["hiro08gh"],
				tags,
			} : {}),
		},
		twitter: {
			title: title ? `${title} - hiro08gh` : "hiro08gh",
			description: description ?? "hiro08gh website",
			card: image ? "summary_large_image" : "summary",
			site: "@hiro08gh",
			creator: "@hiro08gh",
			images: [image ?? "/icon.png"],
		},
		alternates: {
			canonical: fullUrl,
		},
	};
};
