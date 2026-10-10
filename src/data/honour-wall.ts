export type HonourWallEntry = {
  name: string;
  role: string;
  message?: string;
  isSample: boolean;
};

export const honourWallEntries: HonourWallEntry[] = [
  { name: "Rajesh Kumar", role: "Supporter", isSample: true },
  { name: "Priya Menon", role: "Mentor", isSample: true },
  { name: "Anil & Family", role: "Volunteer", isSample: true },
];
