
import { MenuItem, Review } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Jerk chicken spring rolls',
    description: 'Crispy spring rolls filled with marinated jerk chicken and herbs.',
    price: 4.95,
    category: 'Starters'
  },
  {
    id: 's2',
    name: 'Trini doubles',
    description: 'Soft fried bread (barra) filled with curried chickpeas.',
    price: 4.95,
    category: 'Starters',
    isVegetarian: true
  },
  {
    id: 's3',
    name: 'Saltfish croquettes',
    description: 'With smoked paprika aioli & grilled octopus salad.',
    price: 7.00,
    category: 'Starters',
    isGlutenFree: true
  },
  {
    id: 's4',
    name: 'Smoked baigan & tomato choka',
    description: 'With toasted bara & smoked pepper prawns.',
    price: 6.50,
    category: 'Starters',
    isVegetarian: true
  },
  // Mains
  {
    id: 'm1',
    name: 'Tamarind glazed lamb chops',
    description: 'With papaya chutney & sweet potato chips.',
    price: 19.50,
    category: 'Mains',
    isGlutenFree: true
  },
  {
    id: 'm2',
    name: 'Jerk corn fed chicken',
    description: 'Jerk sauce, rice & peas salad.',
    price: 16.50,
    category: 'Mains',
    isGlutenFree: true
  },
  {
    id: 'm3',
    name: '15 spice boneless curry goat',
    description: 'Steamed rice & salad.',
    price: 16.50,
    category: 'Mains',
    isGlutenFree: true
  },
  {
    id: 'm4',
    name: 'Slow braised Jamaican oxtail',
    description: 'Butter beans, mac n cheese & coleslaw.',
    price: 19.00,
    category: 'Mains'
  },
  {
    id: 'm5',
    name: 'Grilled kingfish steak in brown stew',
    description: 'Cassava, bodi & hominy purée.',
    price: 16.90,
    category: 'Mains',
    isGlutenFree: true
  },
  {
    id: 'm6',
    name: 'Fried king prawns',
    description: 'With pimento sauce & curry channa, potato & roti.',
    price: 16.50,
    category: 'Mains'
  },
  {
    id: 'm7',
    name: 'Ital callaloo, okra & gungo pea rundown',
    description: 'With pumpkin talkari.',
    price: 15.50,
    category: 'Mains',
    isVegetarian: true
  },
  {
    id: 'm8',
    name: 'Sautéed Jamaican ackee',
    description: 'Black rice, jerk oyster mushroom & avocado.',
    price: 16.50,
    category: 'Mains',
    isVegetarian: true,
    isGlutenFree: true
  },
  // Sweets
  {
    id: 'sw1',
    name: 'Vegan banana bread',
    description: 'With caramelized banana glaze.',
    price: 7.00,
    category: 'Sweets',
    isVegetarian: true
  },
  {
    id: 'sw2',
    name: 'Classic rum cake',
    description: 'With rum & raisin ice cream.',
    price: 7.00,
    category: 'Sweets'
  },
  {
    id: 'sw3',
    name: 'Coffee glazed chocolate brownie',
    description: 'With Guinness ice cream.',
    price: 7.00,
    category: 'Sweets'
  },
  // Sides
  { id: 'si1', name: 'Festivals', description: '', price: 3.00, category: 'Sides', isVegetarian: true },
  { id: 'si2', name: 'Roti (dhal puri)', description: '', price: 3.00, category: 'Sides', isVegetarian: true },
  { id: 'si3', name: 'Sweet potato chips', description: 'With sweet chilli sauce.', price: 4.00, category: 'Sides' },
  { id: 'si4', name: 'Green salad', description: '', price: 4.00, category: 'Sides' },
  { id: 'si5', name: 'Rice & peas / plain rice', description: '', price: 4.00, category: 'Sides' },
  { id: 'si6', name: 'Mac & cheese', description: '', price: 4.00, category: 'Sides' },
  { id: 'si7', name: 'Ripe plantain', description: '', price: 4.00, category: 'Sides', isVegetarian: true },
  // Rum Bar
  {
    id: 'rb1',
    name: 'Rum bar dark n’ stormy',
    description: 'Gosling / lime / ginger beer / bitters',
    price: 9.50,
    category: 'Rum Bar'
  },
  {
    id: 'rb2',
    name: 'Trinidad Sour',
    description: 'Angostura bitters / lime / almond orgeat',
    price: 9.50,
    category: 'Rum Bar'
  },
  {
    id: 'rb3',
    name: 'Mauby Old Fashioned',
    description: 'Appleton 12 / mauby bitters / orange peel',
    price: 9.50,
    category: 'Rum Bar'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Dan C.',
    rating: 5,
    title: 'CONSISTENTLY DELICIOUS',
    content: 'The flavors are deep and authentic. Every visit to Spiced Roots feels like a journey to the islands. The Jerk Chicken is unparalleled in Oxford.'
  },
  {
    id: 'r2',
    author: 'Sarah M.',
    rating: 5,
    title: 'VIBRANT ATMOSPHERE',
    content: 'Fantastic service and the cocktails are dangerous! A must-visit for anyone looking for authentic Caribbean cuisine with a modern twist.'
  },
  {
    id: 'r3',
    author: 'James T.',
    rating: 5,
    title: 'HIDDEN GEM IN COWLEY',
    content: 'Best meal I have had in a long time. The curry goat was incredibly tender and the rice and peas were seasoned to perfection.'
  },
  {
    id: 'r4',
    author: 'Elena R.',
    rating: 5,
    title: 'ELITE COCKTAILS',
    content: 'The Rum Bar is easily the best in Oxford. Their Dark n’ Stormy is perfectly balanced. Great vibe and very knowledgeable bartenders.'
  },
  {
    id: 'r5',
    author: 'Marcus L.',
    rating: 5,
    title: 'AUTHENTIC FLAVORS',
    content: 'Coming from a Jamaican background, it is hard to find places that get it right. Spiced Roots gets it 100% right. Respect to the chef.'
  },
  {
    id: 'r6',
    author: 'Sophie W.',
    rating: 5,
    title: 'GREAT FOR GROUPS',
    content: 'Hosted my 30th birthday here and the staff went above and beyond. The music, the food, and the energy were exactly what we needed.'
  },
  {
    id: 'r7',
    author: 'David P.',
    rating: 5,
    title: 'LAMB CHOPS ARE A MUST',
    content: 'You haven’t lived until you’ve tried the tamarind glazed lamb chops here. Incredible depth of flavor. 10/10 would recommend.'
  },
  {
    id: 'r8',
    author: 'Chloe B.',
    rating: 4,
    title: 'VIBRANT AND SPICY',
    content: 'Beautifully presented food with a real kick. If you love heat and heart, this is the place. The festivals are a great side too!'
  },
  {
    id: 'r9',
    author: 'Robert K.',
    rating: 5,
    title: 'STUNNING INTERIOR',
    content: 'The decor is just as impressive as the food. It feels sophisticated but welcoming. Perfect for a date night in Oxford.'
  },
  {
    id: 'r10',
    author: 'Anita S.',
    rating: 5,
    title: 'SIMPLY THE BEST',
    content: 'I have been a regular for 3 years and it never misses. Consistent quality, great portions, and always friendly faces.'
  },
  {
    id: 'r11',
    author: 'Tom H.',
    rating: 5,
    title: 'A TRUE CARIBBEAN SOUL',
    content: 'You can feel the passion in the kitchen. Everything from the starters to the rum cake feels like it was made with love.'
  },
  {
    id: 'r12',
    author: 'Liam G.',
    rating: 5,
    title: 'BEST BRUNCH SPOT',
    content: 'Their weekend vibes are unmatched. Great music and the ackee and saltfish is the best way to start a Saturday.'
  }
];
