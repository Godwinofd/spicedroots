
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | string; // Some are deals like '2 for 6' or ranges
  category: 'Starters' | 'Mains' | 'Sides' | 'Sweets' | 'Rum Bar' | 'Cocktails' | 'Lunch' | 'Deals' | 'Wine' | 'Soft Drinks';
  image?: string;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  isVegan?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  title: string;
}

export type Page = 'home' | 'menu' | 'order' | 'reservations' | 'about' | 'contact' | 'rum-bar' | 'catering' | 'events' | 'not-found';
