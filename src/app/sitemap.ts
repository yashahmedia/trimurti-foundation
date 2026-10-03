import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { navigation } from "@/data/navigation";
import { events } from "@/data/events";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...navigation.map((n) => n.href),
    "/media/photos",
    "/media/videos",
    "/services/culture-heritage/music-art",
    "/services/culture-heritage/temple-support",
    "/services/culture-heritage/tourism-gurukul",
    "/services/culture-heritage/pooja-religious-service",
    "/privacy-policy",
    "/terms-and-conditions",
    ...events.map((e) => "/events/" + e.slug),
  ].map((p) => ({
    url: site.url + p,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : 0.7,
  }));
}
