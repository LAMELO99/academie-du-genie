import type { Video } from "@/lib/types";

function searchUrl(q: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
}

export function Videos({ videos }: { videos: Video[] }) {
  if (videos.length === 0) return null;
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {videos.map((v, i) =>
        v.kind === "embed" ? (
          <figure key={i} className="card overflow-hidden">
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                title={v.title}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <figcaption className="flex items-start justify-between gap-3 p-3 text-sm">
              <span>
                <span className="font-medium">{v.title}</span>
                <span className="muted block">{v.channel}</span>
              </span>
              <a
                className="muted shrink-0 underline underline-offset-2"
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube ↗
              </a>
            </figcaption>
          </figure>
        ) : (
          <a
            key={i}
            href={searchUrl(v.query)}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex items-center gap-4 p-4 transition hover:opacity-90"
          >
            <span aria-hidden className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-xl text-white" style={{ background: "#ff0033" }}>
              ▶
            </span>
            <span className="min-w-0">
              <span className="block font-medium">{v.title}</span>
              <span className="muted block text-sm">
                {v.channel} · rechercher sur YouTube ↗
              </span>
            </span>
          </a>
        ),
      )}
    </div>
  );
}
