import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const url = searchParams.get("url");
	if (!url) {
		return new Response("url is required", { status: 400 });
	}
	const data = await fetch(url).then((res) => res.text());

	const json = { data };

	return new Response(JSON.stringify(json), {
		headers: {
			"Content-Type": "application/json"
		}
	});
}
