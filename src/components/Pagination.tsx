import Link from "next/link";

type Props = {
	totalCount: number;
};

export const Pagination: React.FC<Props> = ({ totalCount }) => {
	const perPage = Math.ceil(totalCount / 10);

	const range = (start: number, end: number) =>
		[...Array(end - start + 1)].map((_, i) => {
			return {
				key: crypto.randomUUID(),
				number: start + i,
			};
		});

	return (
		<ul className="flex items-center gap-5 justify-center mt-10">
			{range(1, perPage).map((page) => (
				<li key={page.key} className="text-center">
					<Link href="/posts">{page.number}</Link>
				</li>
			))}
		</ul>
	);
};
