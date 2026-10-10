"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SupportRequestModal, {
  type SupportRequestConfig,
} from "./SupportRequestModal";
import type { PageScrollPosition } from "@/lib/page-scroll-lock";
import serviceSupportRequests from "@/components/services/serviceSupportRequests";
import styles from "./SupportRequestModal.module.css";

type SupportCategory = SupportRequestConfig & {
  iconName: string;
};

const supportCategories = [
  {
    ...serviceSupportRequests["Education & Empowerment"],
    iconName: "school",
  },
  {
    ...serviceSupportRequests["Healthcare Support"],
    iconName: "health",
  },
  {
    ...serviceSupportRequests["Annadhan & Nutrition"],
    iconName: "food",
  },
  {
    ...serviceSupportRequests["Stand with our Soldiers"],
    iconName: "support",
  },
  {
    ...serviceSupportRequests["Environment & Welfare"],
    iconName: "environment",
  },
  {
    ...serviceSupportRequests["Culture & Heritage"],
    iconName: "culture",
  },
] satisfies SupportCategory[];

export default function SupportRequestCards() {
  const [selectedRequest, setSelectedRequest] =
    useState<SupportCategory | null>(null);
  const [scrollPosition, setScrollPosition] = useState<PageScrollPosition>({
    x: 0,
    y: 0,
  });

  return (
    <>
      <div className="support-request-cards">
        {supportCategories.map((item) => {
          const Icon = item.icon;
          return (
            <button
              className={`support-request-card philosophy-card ${styles.supportCard}`}
              key={item.title}
              type="button"
              aria-haspopup="dialog"
              aria-label={`Open support request: ${item.title}`}
              onClick={() => {
                setScrollPosition({
                  x: window.scrollX,
                  y: window.scrollY,
                });
                setSelectedRequest(item);
              }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 22vw"
                className="philosophy-card-image"
              />
              <span className="philosophy-card-overlay" aria-hidden="true" />
              <span className="philosophy-card-content">
                <span
                  className={`philosophy-icon-badge support-request-card-icon-${item.iconName}`}
                  aria-hidden="true"
                >
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
                <span className="philosophy-card-link">
                  Request support <ArrowUpRight size={14} />
                </span>
              </span>
            </button>
          );
        })}
      </div>
      {selectedRequest && (
        <SupportRequestModal
          request={selectedRequest}
          scrollPosition={scrollPosition}
          onClose={() => setSelectedRequest(null)}
        />
      )}
    </>
  );
}
