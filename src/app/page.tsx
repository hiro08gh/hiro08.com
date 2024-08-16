import { Top } from "@/app/_components/Top";
import { REVALIDATE_TIME } from "@/libs/constants";
import { getAbout } from "@/libs/microcms";

export const revalidate = REVALIDATE_TIME;

export default async function Page() {
	const about = await getAbout();

	return <Top about={about} />;
}
