import { Fragment, type ReactNode } from "react";

/** Gras (**…**) et italique (*…*) dans une ligne de texte. */
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\*(.+?)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) out.push(<strong key={k++}>{m[1]}</strong>);
    else out.push(<em key={k++}>{m[2]}</em>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

type Block =
  | { t: "h2"; text: string }
  | { t: "p"; text: string }
  | { t: "quote"; lines: string[] }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] };

export function parseLesson(src: string): Block[] {
  const blocks: Block[] = [];
  for (const raw of src.split("\n")) {
    const line = raw.trim();
    const prev = blocks[blocks.length - 1];
    if (!line) {
      blocks.push({ t: "p", text: "" });
      continue;
    }
    if (line.startsWith("## ")) blocks.push({ t: "h2", text: line.slice(3) });
    else if (line.startsWith("> ")) {
      if (prev?.t === "quote") prev.lines.push(line.slice(2));
      else blocks.push({ t: "quote", lines: [line.slice(2)] });
    } else if (line.startsWith("- ")) {
      if (prev?.t === "ul") prev.items.push(line.slice(2));
      else blocks.push({ t: "ul", items: [line.slice(2)] });
    } else if (/^\d+\.\s/.test(line)) {
      const item = line.replace(/^\d+\.\s/, "");
      if (prev?.t === "ol") prev.items.push(item);
      else blocks.push({ t: "ol", items: [item] });
    } else blocks.push({ t: "p", text: line });
  }
  return blocks.filter((b) => !(b.t === "p" && b.text === ""));
}

/** Rendu d'une fiche de cours écrite en Markdown simplifié (sans HTML injecté). */
export function Lesson({ source }: { source: string }) {
  return (
    <div className="prose-lesson">
      {parseLesson(source).map((b, i) => {
        switch (b.t) {
          case "h2":
            return <h2 key={i}>{inline(b.text)}</h2>;
          case "p":
            return (
              <p key={i} className="my-2">
                {inline(b.text)}
              </p>
            );
          case "quote":
            return (
              <blockquote key={i}>
                {b.lines.map((l, j) => (
                  <Fragment key={j}>
                    {j > 0 && <br />}
                    {inline(l)}
                  </Fragment>
                ))}
              </blockquote>
            );
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{inline(it)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{inline(it)}</li>
                ))}
              </ol>
            );
        }
      })}
    </div>
  );
}
