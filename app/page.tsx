import { MDXRemote } from "next-mdx-remote/rsc";
import { useEffect, useState } from "react";

export default async function Home(props: { searchParams: { url?: string } }) {
	const res = await fetch(props.searchParams.url!);
	const markdown = await res.text();

	return <MDXRemote source={markdown} />;
}
