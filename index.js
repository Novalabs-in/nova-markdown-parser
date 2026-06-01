// Lightweight markdown translator
export function parseMarkdown(mdText) {
  let html = mdText
    .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
    .replace(/^## (.*?)$/gm, '<h2>$1</h2>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  return html
}
