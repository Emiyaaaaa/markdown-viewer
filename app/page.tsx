import "github-markdown-css/github-markdown.css";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Home(props: { searchParams: { url?: string } }) {
	const res = await fetch(props.searchParams.url!);
	const markdown = await res.text();

	return (
		<main className="markdown-body">
			<MDXRemote source={markdown} />
		</main>
	);
}
