"use client";
import "github-markdown-css/github-markdown.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useEffect, useState } from "react";
import { parseGithubMarkdown, parseMarkdown } from "../utils";

export const revalidate = 600;

export default function Markdown(props: { url: string }) {
	const [__html, setMarkdownHtml] = useState<string>();

	const fetchMarkdownData = async (url: string) => {
		let data: string | undefined;

		// client fetch
		data = await fetch(props.url)
			.then((res) => res.text())
			.catch((err) => {
				console.log("client fetch error", err);
				return undefined;
			});
		if (!data) {
			// server fetch
			data = await fetch(`/api/fetch?url=${url}`)
				.then((res) => res.text())
				.then((text) => JSON.parse(text).data)
				.catch((err) => {
					console.log("server fetch error", err);
					return undefined;
				});
		}

		return data;
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchMarkdownData(props.url).then((text) => {
			if (!text) return;

			let __html: string;

			// Github url
			if (text.trimStart().startsWith("<!DOCTYPE html>")) {
				__html =
					parseGithubMarkdown(text, props.url) ??
					"<div>Can not find markdown</div>";
			} else {
				// normal markdown
				__html = parseMarkdown(text);
			}

			setMarkdownHtml(__html);
		});
	}, [props.url]);

	if (!__html) return null;

	return (
		<main className="markdown-body">
			<div dangerouslySetInnerHTML={{ __html }} />
		</main>
	);
}
