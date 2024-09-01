import Image from "next/image";
import Link from "next/link";

export const Header: React.FC = () => {
	return (
		<header>
			<div className="flex items-center justify-between mx-4 md:py-16 max-sm:py-4">
				<Link href="/">
					<Image
						aria-hidden="true"
						src="/icon.png"
						alt=""
						width={40}
						height={40}
						className="rounded-full"
					/>
					<span className="visually-hidden outline-none">ホーム</span>
				</Link>
				<nav>
					<Link href="/" className="text-gray-950 mr-4">
						ホーム
					</Link>
					<Link href="/posts" className="text-gray-950">
						記事リスト
					</Link>
				</nav>
			</div>
		</header>
	);
};
