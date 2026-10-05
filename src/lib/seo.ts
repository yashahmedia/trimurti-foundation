import type { Metadata } from "next";
import { site } from "@/config/site";
const descriptions: Record<string, string> = {
  "/about-us": "Discover Trimurthi Foundation’s purpose, mission, values and proposed areas of community support.",
  "/media": "Explore Trimurthi Foundation’s photo and video galleries, with clearly identified illustrative content.",
  "/media/photos": "Browse photographs by education, healthcare, elder support, community and heritage.",
  "/media/videos": "Watch approved community stories and videos from Trimurthi Foundation.",
  "/events": "Find upcoming and past Trimurthi Foundation events, dates, locations and participation details.",
  "/volunteer": "Apply to volunteer with Trimurthi Foundation and share your skills, interests and availability.",
  "/privacy-policy": "Read how volunteer applications, public memberships and donor information are handled.",
  "/terms-and-conditions": "Read the terms for using Trimurthi Foundation’s website, public records and membership services.",
};
export function seo(
  title: string,
  path: string,
  description = descriptions[path] || site.description,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      images: ["/herobanner.png"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/herobanner.png"],
    },
  };
}
