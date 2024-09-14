import { formatDate } from "@/libs/date";
import { metadataConfig } from "@/libs/meta";
import { getScraps } from "@/libs/microcms";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import Link from "next/link";

export const REVALIDATE_TIME = 0;

export const metadata: Metadata = metadataConfig({ title: "Scraps" });

export default async function Page() {
	const scraps = await getScraps(100);
	return (
		<div className="mx-4 max-sm:py-4">
			{scraps.contents.map((scraps) => (
				<div
					key={scraps.id}
					className="border mb-4 p-4 flex justify-between items-center"
				>
					<div>
						<Link href={`/scraps/${scraps.id}`} className="no-underline">
							<h2 className="text-xl">{scraps.title}</h2>
						</Link>
						<div>{formatDate(scraps.createdAt)}</div>
					</div>
					<div>
						<p>{scraps.comments.length}</p>
					</div>
				</div>
			))}
		</div>
	);
}
