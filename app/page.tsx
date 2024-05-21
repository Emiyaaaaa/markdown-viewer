import Markdown from "./modules/markdown";
import Input from "./modules/input";

export default async function Home(props: { searchParams: { url?: string } }) {
  const url = props.searchParams.url

	return url ? <Markdown url={url} /> : <Input />;
}
