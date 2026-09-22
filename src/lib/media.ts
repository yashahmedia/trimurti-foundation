import "server-only";
import { photos, videos, type Media } from "@/data/media";
export async function getMedia(video = false): Promise<Media[]> {
  return video ? videos : photos;
}
