
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Starters' | 'Mains' | 'Sides' | 'Sweets' | 'Rum Bar';
  image?: string;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  title: string;
}

export type Page = 'home' | 'menu' | 'order' | 'reservations' | 'about' | 'contact';
