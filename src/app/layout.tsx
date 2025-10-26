import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { metadataConfig } from "@/libs/meta";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";
import "highlight.js/styles/github.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = metadataConfig({});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={inter.className}>
				<NextTopLoader color="#0017c1" height={1} showSpinner={false} />
				<ScrollToTop />
				<main className="mx-auto flex max-w-[780px] flex-col">
					<Header />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
