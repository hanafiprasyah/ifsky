import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

export function sanitizeHtml(html) {
  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    ALLOWED_ATTR: ["href", "title", "target", "rel", "style"],
    ALLOWED_TAGS: [
      "b",
      "i",
      "strong",
      "em",
      "u",
      "p",
      "br",
      "ul",
      "ol",
      "li",
      "a",
      "span",
    ],
  });
}
