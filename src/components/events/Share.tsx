"use client";
import { useState } from "react";
export default function Share() {
  const [message, setMessage] = useState("");
  return (
    <>
      <button
        className="button secondary"
        onClick={async () => {
          try {
            if (navigator.share)
              await navigator.share({
                title: document.title,
                url: location.href,
              });
            else {
              await navigator.clipboard.writeText(location.href);
              setMessage("Link copied.");
            }
          } catch {
            setMessage(
              "Sharing was cancelled or unavailable. Copy the address from your browser.",
            );
          }
        }}
      >
        Share event ↗
      </button>
      <p role="status" className="small">
        {message}
      </p>
    </>
  );
}
