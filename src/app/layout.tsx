import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import "./globals.css";
import "highlight.js/styles/github.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "hiro08gh",
	description: "hiro08gh personal web",
	openGraph: {
		title: "hiro08gh",
		description: "hiro08gh personal web",
		url: "<https://hiro08.com>",
		siteName: "hiro08gh",
		locale: "ja_JP",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={inter.className}>
				<main className="mx-auto flex max-w-[720px] flex-col">
					<Header />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
