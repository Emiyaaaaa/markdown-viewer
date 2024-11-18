import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { decodeUnicodeEscapes } from "unicode-escapes";
import { unified } from "unified";

export function parseMarkdown(markdownText: string) {
	const file = unified()
		.use(remarkParse) // Convert into markdown AST
		.use(remarkRehype) // Transform to HTML AST
		.use(rehypeSanitize) // Sanitize HTML input
		.use(rehypeStringify) // Convert AST into serialized HTML
		.processSync(markdownText);

	return String(file);
}

export function parseGithubMarkdown(html: string, url: string) {
	let content = html.match(/<article.*?>([\s\S]*)<\/article>/)?.[1];

	if (!content) {
		const richText = html.match(/"richText":"(.*?)","/)?.[1];
		if (!richText) return;
		content = decodeUnicodeEscapes(richText)
			.match(/<article.*?>([\s\S]*)<\/article>/)?.[1]
			?.replaceAll("\\n", "\n")
			.replaceAll("\\r", "\r")
			.replaceAll("\\t", "\t")
			.replaceAll('\\"', '"');
		if (!content) return;
	}

	if (!content) return;

	content = replaceRelativeLinks(content, url);
	content = removeOcticonLink(content);

	return content;
}

function replaceRelativeLinks(html: string, url: string) {
	// href / src
	return html.replace(/(href|src)="([^"]*)"/g, (_, name, href) => {
		if (href.startsWith("/") || href.startsWith("#")) {
			return `${name}="${new URL(href, url).href}"`;
		}
		return _;
	});
}

function removeOcticonLink(html: string) {
	return html.replace(/<a .*?><svg class="octicon octicon-link".*?a>/g, "");
}
