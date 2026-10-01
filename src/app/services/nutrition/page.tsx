import AnnadhanNutritionExperience from "@/components/services/AnnadhanNutritionExperience";
import { seo } from "@/lib/seo";

export const metadata = seo(
  "Annadhan & Nutrition",
  "/services/nutrition",
  "Discover Trimurti Foundation’s Annadhan and nutrition initiatives, supporting food security, nutritious meals and dignified community care.",
);

export default function Page() {
  return <AnnadhanNutritionExperience />;
}
