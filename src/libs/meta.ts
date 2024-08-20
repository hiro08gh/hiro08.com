export const metadataConfig = ({
	title,
	description,
	image = "/icon.png",
}: {
	title?: string;
	description?: string;
	image?: string;
}) => {
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
		},
		twitter: {
			title: title ? `${title} - hiro08gh` : "hiro08gh",
			description: description ?? "hiro08gh website",
			card: "summary",
			site: "https://hiro08.com",
			creator: "hiro08",
			images: image,
		},
	};
};
