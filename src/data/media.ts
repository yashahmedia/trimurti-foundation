import { services } from "./services";
export type Media = {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string | null;
  demo: boolean;
  video?: string;
};
export const photos: Media[] = services.map((s, i) => ({
  id: String(i),
  title: s.title,
  category: s.category,
  image: s.image,
  date: null,
  demo: true,
}));
export const videos: Media[] = [];
