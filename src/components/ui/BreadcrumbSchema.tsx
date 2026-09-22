"use client";
import { usePathname } from "next/navigation";
import { site } from "@/config/site";
export default function BreadcrumbSchema({ title }: { title: string }) {
  const pathname = usePathname();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            {
              "@type": "ListItem",
              position: 2,
              name: title,
              item: site.url + pathname,
            },
          ],
        }).replace(/</g, "\u003c"),
      }}
    />
  );
}
