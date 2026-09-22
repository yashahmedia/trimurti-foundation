import { demoEvents, events } from "./events";
import { services } from "./services";

export type FoundationUpdate = {
  id: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  date: string;
  href: string;
};

const eventUpdates: FoundationUpdate[] = [...events, ...demoEvents].map((event) => ({
  id: event.slug,
  title: event.title,
  category: event.demo ? "Community event" : "Foundation event",
  summary: event.description,
  image: event.image,
  date: new Date(event.date).toISOString(),
  href: `/events/${event.slug}`,
}));

const programUpdates: FoundationUpdate[] = services.slice(0, 3).map((service) => ({
  id: `program-${service.title}`,
  title: service.title,
  category: "Program update",
  summary: service.description,
  image: service.image,
  date: "Available now",
  href: "/services",
}));

export const latestUpdates = [...eventUpdates, ...programUpdates].slice(0, 5);
