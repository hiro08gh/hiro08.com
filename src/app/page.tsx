import { Top } from "@/app/_components/Top";
import { getAbout } from "@/libs/microcms";

export const revalidate = process.env.CACHE_TIME
	? Number(process.env.CACHE_TIME)
	: 3600;

export default async function Page() {
	const about = await getAbout();

	return <Top about={about} />;
}
