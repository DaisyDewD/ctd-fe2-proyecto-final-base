export interface INews {
  id: number;
  title: string;
  description: string;
  image: string;
  date: number;
  isPremium: boolean;
  source?: string;
}
