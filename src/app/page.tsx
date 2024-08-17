import { Top } from "@/app/_components/Top";
import { getAbout } from "@/libs/microcms";

export default async function Page() {
	const about = await getAbout();

	return <Top about={about} />;
}
