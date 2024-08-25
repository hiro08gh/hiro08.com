import { getPostDetail } from "@/libs/microcms";
import { cookies, draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request, res: Response) {
	const cookieStore = cookies();
	const { searchParams } = new URL(request.url);
	const contentId = searchParams.get("contentId");
	const draftKey = searchParams.get("draftKey");

	if (!contentId || !draftKey) {
		return new Response("Invalid api preview", { status: 401 });
	}

	const post = await getPostDetail({ contentId, draftKey });
	if (!post) {
		return new Response("Invalid slug", { status: 401 });
	}

	draftMode().enable();

	cookieStore.set({
		name: "draftKey",
		value: draftKey,
		...{ path: "/", httpOnly: true, secure: true },
	});

	redirect(`/posts/${post.id}`);
}
