import Link from "next/link";

export const ClearButton: React.FC = () => {
	return (
		<Link
			href="/api/clear-draft"
			prefetch={false}
			className="fixed bottom-10 right-10 py-3 px-4 no-underline border-2 rounded-full cursor-pointer text-gray-950 bg-white"
		>
			下書きプレビューの解除
		</Link>
	);
};
