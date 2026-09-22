"use client";
import { useState } from "react";
import type { FoundationEvent } from "@/data/events";
import EventList from "./EventList";
import { Empty } from "@/components/ui/Shared";
export default function EventBrowser({ items }: { items: FoundationEvent[] }) {
  const [tab, setTab] = useState("Upcoming"),
    [q, setQ] = useState("");
  const now = new Date();
  const filtered = items.filter(
    (e) =>
      (tab === "Upcoming" ? new Date(e.date) >= now : new Date(e.date) < now) &&
      e.title.toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <>
      <div className="toolbar">
        <label>
          <span className="field-label">Search events</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Find an event"
          />
        </label>
      </div>
      <div className="chips">
        {["Upcoming", "Past"].map((t) => (
          <button
            className={"chip " + (tab === t ? "active" : "")}
            aria-pressed={tab === t}
            key={t}
            onClick={() => setTab(t)}
          >
            {t} Events
          </button>
        ))}
      </div>
      {filtered.length ? (
        <EventList items={filtered} />
      ) : (
        <Empty title={"No " + tab.toLowerCase() + " events to show"}>
          Confirmed events will appear here with dates, locations and ways to
          participate.
        </Empty>
      )}
    </>
  );
}
