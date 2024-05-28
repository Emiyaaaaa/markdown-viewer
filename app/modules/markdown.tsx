import "github-markdown-css/github-markdown.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import { parseGithubMarkdown } from "../utils";
import { Header } from "./header";

export default async function Markdown(props: { url: string }) {
  const markdown = await fetch(props.url).then(res => res.text()).then((text) => {
    if (text.trimStart().startsWith('<!DOCTYPE html>')) {
      const __html = parseGithubMarkdown(text, props.url)
      if (__html) {
        return <div dangerouslySetInnerHTML={{__html}} />;
      } else {
        return <div>Can not find markdown</div>;
      }
    } else {
      return <MDXRemote source={text} />
    }
  }).catch(err => {
    return <div>fetch error</div>;
  })

	return (
		<main className="markdown-body">
			{markdown}
		</main>
	);
}

export const revalidate = 600