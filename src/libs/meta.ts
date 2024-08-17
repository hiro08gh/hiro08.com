import type { Metadata } from "next";

export const metadataConfig = ({
	title,
	description,
	image,
}: {
	title?: string;
	description?: string;
	image?: string;
}): Metadata => {
	return {
		title: title ? `${title} - hiro08gh` : "hiro08gh",
		description: description ?? "hiro08gh website",
		openGraph: {
			title: title ? `${title} - hiro08gh` : "hiro08gh",
			description: description ?? "hiro08gh website",
			url: "<https://hiro08.com>",
			siteName: "hiro08gh",
			locale: "ja_JP",
			type: "website",
			images: image ?? "/icon.png",
		},
		twitter: {
			title: title ? `${title} - hiro08gh` : "hiro08gh",
			description: description ?? "hiro08gh website",
			card: image ? "summary_large_image" : "summary",
			site: "https://hiro08.com",
			creator: "hiro08",
			images: image ?? "/icon.png",
		},
	};
};
