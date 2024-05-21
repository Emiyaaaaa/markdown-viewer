import Markdown from "./markdown";
import Input from "./input";

export default async function Home(props: { searchParams: { url?: string } }) {
  const url = props.searchParams.url

	return url ? <Markdown url={url} /> : <Input />;
}
