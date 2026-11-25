export type HeadingBlock = {
  type: "heading";
  level: number;
  text: string;
  id: string;
};

export type ContentBlock =
  | HeadingBlock
  | { type: "paragraph"; lines: string[] }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "code"; language: string; text: string }
  | { type: "math"; expression: string }
  | { type: "quote"; lines: string[] }
  | { type: "rule" };

export type ContentSection = {
  heading?: HeadingBlock;
  blocks: ContentBlock[];
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-|-$/g, "");
}

function splitTableRow(line: string) {
  const cells: string[] = [];
  let cell = "";
  let escaped = false;

  for (const character of line.trim().replace(/^\|/, "").replace(/\|$/, "")) {
    if (character === "|" && !escaped) {
      cells.push(cell.trim());
      cell = "";
      continue;
    }

    if (character === "\\" && !escaped) {
      escaped = true;
      cell += character;
      continue;
    }

    escaped = false;
    cell += character;
  }

  cells.push(cell.trim());
  return cells;
}

function isTableDelimiter(line: string) {
  const cells = splitTableRow(line);
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function isListItem(line: string) {
  return /^\s*(?:[-*+]|\d+[.)])\s+/.test(line);
}

function isSpecialLine(lines: string[], index: number) {
  const line = lines[index];
  return (
    /^#{1,6}\s+/.test(line) ||
    /^```/.test(line) ||
    /^\\\[\s*$/.test(line) ||
    /^[-*_]{3,}\s*$/.test(line) ||
    /^\s*>/.test(line) ||
    isListItem(line) ||
    (index + 1 < lines.length &&
      line.includes("|") &&
      lines[index + 1].includes("|") &&
      isTableDelimiter(lines[index + 1]))
  );
}

export function parseMarkdown(markdown: string): ContentBlock[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: ContentBlock[] = [];
  const headingCounts = new Map<string, number>();

  for (let index = 0; index < lines.length; ) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (headingMatch) {
      const text = headingMatch[2].trim();
      const baseId = slugify(text) || "section";
      const count = headingCounts.get(baseId) ?? 0;
      headingCounts.set(baseId, count + 1);
      blocks.push({
        type: "heading",
        level: headingMatch[1].length,
        text,
        id: count ? `${baseId}-${count + 1}` : baseId,
      });
      index += 1;
      continue;
    }

    if (/^```/.test(line)) {
      const language = line.slice(3).trim();
      const codeLines: string[] = [];
      index += 1;
      while (index < lines.length && !/^```\s*$/.test(lines[index])) {
        codeLines.push(lines[index]);
        index += 1;
      }
      if (index < lines.length) index += 1;
      blocks.push({ type: "code", language, text: codeLines.join("\n") });
      continue;
    }

    if (/^\\\[\s*$/.test(line)) {
      const mathLines: string[] = [];
      index += 1;
      while (index < lines.length && !/^\\\]\s*$/.test(lines[index])) {
        mathLines.push(lines[index].trim());
        index += 1;
      }
      if (index < lines.length) {
        index += 1;
        blocks.push({ type: "math", expression: mathLines.join(" ") });
      } else {
        blocks.push({
          type: "paragraph",
          lines: [`\\[${mathLines.join(" ")}]`],
        });
      }
      continue;
    }

    if (/^[-*_]{3,}\s*$/.test(line)) {
      blocks.push({ type: "rule" });
      index += 1;
      continue;
    }

    if (
      index + 1 < lines.length &&
      line.includes("|") &&
      lines[index + 1].includes("|") &&
      isTableDelimiter(lines[index + 1])
    ) {
      const headers = splitTableRow(line);
      const rows: string[][] = [];
      index += 2;
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        rows.push(splitTableRow(lines[index]));
        index += 1;
      }
      blocks.push({ type: "table", headers, rows });
      continue;
    }

    if (isListItem(line)) {
      const ordered = /^\s*\d+[.)]\s+/.test(line);
      const items: string[] = [];
      while (index < lines.length && isListItem(lines[index])) {
        items.push(lines[index].replace(/^\s*(?:[-*+]|\d+[.)])\s+/, "").trim());
        index += 1;
      }
      blocks.push({ type: "list", ordered, items });
      continue;
    }

    if (/^\s*>/.test(line)) {
      const quoteLines: string[] = [];
      while (index < lines.length && /^\s*>/.test(lines[index])) {
        quoteLines.push(lines[index].replace(/^\s*>\s?/, "").trim());
        index += 1;
      }
      blocks.push({ type: "quote", lines: quoteLines });
      continue;
    }

    const paragraphLines = [line.trim()];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !isSpecialLine(lines, index)
    ) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }
    blocks.push({ type: "paragraph", lines: paragraphLines });
  }

  return blocks;
}

export function createSections(blocks: ContentBlock[]): ContentSection[] {
  const sections: ContentSection[] = [];
  let current: ContentSection = { blocks: [] };

  for (const block of blocks) {
    if (block.type === "heading" && block.level === 1) {
      if (current.heading || current.blocks.length) sections.push(current);
      current = { heading: block, blocks: [] };
    } else {
      current.blocks.push(block);
    }
  }

  if (current.heading || current.blocks.length) sections.push(current);
  return sections;
}
