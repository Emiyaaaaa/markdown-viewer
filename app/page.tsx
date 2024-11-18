import Input from "./modules/input";
import Markdown from "./modules/markdown";

export default async function Home(props: { searchParams: Promise<{ url?: string }> }) {
	const url = (await props.searchParams)?.url;

	return url ? <Markdown url={url} /> : <Input />;
}
