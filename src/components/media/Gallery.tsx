"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { X, ArrowLeft, ArrowRight, Play } from "lucide-react";
import { format } from "date-fns";
import type { Media } from "@/data/media";
import { Empty } from "@/components/ui/Shared";
import { Reveal } from "@/components/ui/Reveal";
export default function Gallery({
  items,
  compact = false,
  video = false,
}: {
  items: Media[];
  compact?: boolean;
  video?: boolean;
}) {
  const [category, setCategory] = useState("All"),
    [search, setSearch] = useState(""),
    [limit, setLimit] = useState(9),
    [active, setActive] = useState<Media | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const filtered = items.filter(
    (i) =>
      (category === "All" || i.category === category) &&
      i.title.toLowerCase().includes(search.toLowerCase()),
  );
  function open(item: Media) {
    setActive(item);
    dialog.current?.showModal();
  }
  function close() {
    dialog.current?.close();
    setActive(null);
  }
  function move(step: number) {
    if (!active) return;
    const index = filtered.findIndex((i) => i.id === active.id);
    setActive(filtered[(index + step + filtered.length) % filtered.length]);
  }
  return (
    <>
      {!compact && (
        <>
          <div className="toolbar">
            <label>
              <span className="field-label">
                Search {video ? "videos" : "photographs"}
              </span>
              <input
                type="search"
                placeholder="Find a moment…"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setLimit(9);
                }}
              />
            </label>
          </div>
          <div className="chips" aria-label="Gallery categories">
            {[
              "All",
              "Education",
              "Healthcare",
              "Elder Support",
              "Events",
              "Community",
              "Heritage",
            ].map((c) => (
              <button
                key={c}
                className={"chip " + (category === c ? "active" : "")}
                aria-pressed={category === c}
                onClick={() => {
                  setCategory(c);
                  setLimit(9);
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </>
      )}
      {filtered.length ? (
        <div className="photo-grid">
          {filtered.slice(0, limit).map((item) => (
            <Reveal key={item.id} delay={(Number(item.id) || 0) * 0.06}>
              <button
                className="photo-card"
                onClick={() => open(item)}
                aria-label={"Open " + item.title}
              >
                <Image
                  src={item.image}
                  alt={item.title + (item.demo ? " — illustrative image" : "")}
                  width={600}
                  height={375}
                  sizes="(max-width:940px) 45vw, 30vw"
                />
                <div className="photo-caption">
                  <h3>
                    {video && <Play size={15} style={{ display: "inline" }} />} {" "}
                    {item.title}
                  </h3>
                  <p>
                    {item.category} ·{" "}
                    {item.date
                      ? format(new Date(item.date), "d MMM yyyy")
                      : "Date not supplied"}
                    {item.demo ? " · Illustrative" : ""}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      ) : (
        <Empty
          title={
            items.length ? "No matching moments" : "Our stories are coming soon"
          }
        >
          {items.length
            ? "Try a different search or category."
            : "Approved videos will be shared here when available."}
        </Empty>
      )}
      {filtered.length > limit && (
        <div className="pagination">
          <button onClick={() => setLimit(limit + 9)}>Load more</button>
        </div>
      )}
      <dialog
        className="lightbox"
        ref={dialog}
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") move(1);
          if (e.key === "ArrowLeft") move(-1);
        }}
      >
        {active && (
          <>
            <div className="modal-top">
              <h3>{active.title}</h3>
              <button
                className="icon-button"
                onClick={close}
                aria-label="Close gallery"
              >
                <X />
              </button>
            </div>
            {video && active.video ? (
              active.video.startsWith("/videos/") ? (
                <video
                  src={active.video}
                  controls
                  playsInline
                  preload="metadata"
                />
              ) : /^https:\/\/www\.youtube-nocookie\.com\/embed\/[A-Za-z0-9_-]+$/.test(
                  active.video,
                ) ? (
                <iframe
                  title={active.title}
                  src={active.video}
                  allowFullScreen
                  sandbox="allow-scripts allow-same-origin allow-presentation"
                />
              ) : (
                <p>Video unavailable.</p>
              )
            ) : (
              <Image
                src={active.image}
                width={1200}
                height={750}
                alt={active.title}
              />
            )}
            <p className="small">
              {active.demo
                ? "Illustrative image. Not a verified record of foundation activity."
                : active.category}
            </p>
            {!video && (
              <div className="lightbox-controls">
                <button
                  className="icon-button"
                  aria-label="Previous image"
                  onClick={() => move(-1)}
                >
                  <ArrowLeft />
                </button>
                <button
                  className="icon-button"
                  aria-label="Next image"
                  onClick={() => move(1)}
                >
                  <ArrowRight />
                </button>
              </div>
            )}
          </>
        )}
      </dialog>
    </>
  );
}
