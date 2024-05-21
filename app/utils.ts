import { decodeUnicodeEscapes } from "unicode-escapes"

export function parseGithubMarkdown(html: string, url: string) {
  let content = html.match(/<article.*?>([\s\S]*)<\/article>/)?.[1]

  if (!content) {
    const richText = html.match(/"richText":"(.*?)","/)?.[1]
    if (!richText) return
    content = decodeUnicodeEscapes(richText).match(/<article.*?>([\s\S]*)<\/article>/)?.[1]
      ?.replaceAll('\\n', '\n').replaceAll('\\r', '\r').replaceAll('\\t', '\t').replaceAll('\\"', '\"')
    if (!content) return
  }

  if (!content) return

  content = replaceRelativeLinks(content, url)
  content = removeOcticonLink(content)

  return content
}

function replaceRelativeLinks(html: string, url: string) {
  // href / src
  return html.replace(/(href|src)="([^"]*)"/g, (_, name, href) => {
    if (href.startsWith('/') || href.startsWith('#')) {
      return `${name}="${new URL(href, url).href}"`
    } else {
      return _
    }
  })
}

function removeOcticonLink(html: string) {
  return html.replace(/<a .*?><svg class="octicon octicon-link".*?a>/g, '')
}
