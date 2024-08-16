import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "./_components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "hiro08gh",
	description: "hiro08gh web site",
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
				</main>
			</body>
		</html>
	);
}
