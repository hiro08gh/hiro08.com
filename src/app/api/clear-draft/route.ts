import { cookies, draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET() {
	const cookieStore = cookies();
	draftMode().disable();

	cookieStore.delete({
		name: "draftKey",
	});

	redirect("/posts");
}
