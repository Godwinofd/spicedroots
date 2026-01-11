
import { MenuItem, Review } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Jerk chicken spring rolls',
    description: 'Crispy spring rolls filled with marinated jerk chicken and herbs.',
    price: 4.95,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 's2',
    name: 'Trini doubles',
    description: 'Soft fried bread (barra) filled with curried chickpeas.',
    price: 4.95,
    category: 'Starters',
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 's3',
    name: 'Saltfish croquettes',
    description: 'With smoked paprika aioli & grilled octopus salad.',
    price: 7.00,
    category: 'Starters',
    isGlutenFree: true,
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 's4',
    name: 'Smoked baigan & tomato choka',
    description: 'With toasted bara & smoked pepper prawns.',
    price: 6.50,
    category: 'Starters',
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2070&auto=format&fit=crop'
  },
  // Mains
  {
    id: 'm1',
    name: 'Tamarind glazed lamb chops',
    description: 'With papaya chutney & sweet potato chips.',
    price: 19.50,
    category: 'Mains',
    isGlutenFree: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'm2',
    name: 'Jerk corn fed chicken',
    description: 'Jerk sauce, rice & peas salad.',
    price: 16.50,
    category: 'Mains',
    isGlutenFree: true,
    image: 'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'm3',
    name: '15 spice boneless curry goat',
    description: 'Steamed rice & salad.',
    price: 16.50,
    category: 'Mains',
    isGlutenFree: true,
    image: 'https://images.unsplash.com/photo-1548946522-4a313e8972a4?q=80&w=2126&auto=format&fit=crop'
  },
  {
    id: 'm4',
    name: 'Slow braised Jamaican oxtail',
    description: 'Butter beans, mac n cheese & coleslaw.',
    price: 19.00,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1544333334-972161b3531b?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'm5',
    name: 'Grilled kingfish steak in brown stew',
    description: 'Cassava, bodi & hominy purée.',
    price: 16.90,
    category: 'Mains',
    isGlutenFree: true,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'm6',
    name: 'Fried king prawns',
    description: 'With pimento sauce & curry channa, potato & roti.',
    price: 16.50,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1559131397-f94da358f7ca?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'm7',
    name: 'Ital callaloo, okra & gungo pea rundown',
    description: 'With pumpkin talkari.',
    price: 15.50,
    category: 'Mains',
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'm8',
    name: 'Sautéed Jamaican ackee',
    description: 'Black rice, jerk oyster mushroom & avocado.',
    price: 16.50,
    category: 'Mains',
    isVegetarian: true,
    isGlutenFree: true,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop'
  },
  // Sweets
  {
    id: 'sw1',
    name: 'Vegan banana bread',
    description: 'With caramelized banana glaze.',
    price: 7.00,
    category: 'Sweets',
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'sw2',
    name: 'Classic rum cake',
    description: 'With rum & raisin ice cream.',
    price: 7.00,
    category: 'Sweets',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2089&auto=format&fit=crop'
  },
  {
    id: 'sw3',
    name: 'Coffee glazed chocolate brownie',
    description: 'With Guinness ice cream.',
    price: 7.00,
    category: 'Sweets',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=2070&auto=format&fit=crop'
  },
  // Sides
  { id: 'si1', name: 'Festivals', description: '', price: 3.00, category: 'Sides', isVegetarian: true, image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=2070&auto=format&fit=crop' },
  { id: 'si2', name: 'Roti (dhal puri)', description: '', price: 3.00, category: 'Sides', isVegetarian: true, image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?q=80&w=2070&auto=format&fit=crop' },
  { id: 'si3', name: 'Sweet potato chips', description: 'With sweet chilli sauce.', price: 4.00, category: 'Sides', image: 'https://images.unsplash.com/photo-1534939561122-0d12d7c5ed24?q=80&w=2070&auto=format&fit=crop' },
  { id: 'si4', name: 'Green salad', description: '', price: 4.00, category: 'Sides', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop' },
  { id: 'si5', name: 'Rice & peas / plain rice', description: '', price: 4.00, category: 'Sides', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2070&auto=format&fit=crop' },
  { id: 'si6', name: 'Mac & cheese', description: '', price: 4.00, category: 'Sides', image: 'https://images.unsplash.com/photo-1543339308-43e59d6ba73a?q=80&w=2070&auto=format&fit=crop' },
  { id: 'si7', name: 'Ripe plantain', description: '', price: 4.00, category: 'Sides', isVegetarian: true, image: 'https://images.unsplash.com/photo-1623065600325-15a0c1e55048?q=80&w=2070&auto=format&fit=crop' },
  // Rum Bar
  {
    id: 'rb1',
    name: 'Rum bar dark n’ stormy',
    description: 'Gosling / lime / ginger beer / bitters',
    price: 9.50,
    category: 'Rum Bar',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'rb2',
    name: 'Trinidad Sour',
    description: 'Angostura bitters / lime / almond orgeat',
    price: 9.50,
    category: 'Rum Bar',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'rb3',
    name: 'Mauby Old Fashioned',
    description: 'Appleton 12 / mauby bitters / orange peel',
    price: 9.50,
    category: 'Rum Bar',
    image: 'https://images.unsplash.com/photo-1470333738027-52dfdc48c8df?q=80&w=2070&auto=format&fit=crop'
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

export const RUM_CATALOG = [
  {
    id: 'rum1',
    name: 'Appleton Estate 12 Year Rare Casks',
    origin: 'Jamaica',
    description: 'A masterpiece of oak aging, featuring deep bronze color and notes of toasted oak, dried fruits, and hazelnut.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop',
    notes: 'Toasted Oak, Hazelnut, Molasses'
  },
  {
    id: 'rum2',
    name: 'Mount Gay Eclipse',
    origin: 'Barbados',
    description: 'The distinctive golden amber rum with a complex aroma of floral and fruity notes, apricot, and banana.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2070&auto=format&fit=crop',
    notes: 'Apricot, Banana, Vanilla'
  },
  {
    id: 'rum3',
    name: 'El Dorado 15 Year Old Special Reserve',
    origin: 'Guyana',
    description: 'A long-simmered blend of heavy rums, some up to 15 years old. Rich, complex with a smooth finish.',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=2070&auto=format&fit=crop',
    notes: 'Coffee, Candied Orange, Almond'
  },
  {
    id: 'rum4',
    name: 'Diplomático Reserva Exclusiva',
    origin: 'Venezuela',
    description: 'A blend of copper pot still rums aged for up to 12 years. Exceptionally smooth and easy to drink.',
    image: 'https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?q=80&w=2070&auto=format&fit=crop',
    notes: 'Maple Syrup, Orange Peel, Licorice'
  },
  {
    id: 'rum5',
    name: 'Wray & Nephew White Overproof',
    origin: 'Jamaica',
    description: 'The world\'s top-selling overproof rum. A bartender staple with high intensity and legendary status.',
    image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=2070&auto=format&fit=crop',
    notes: 'Pear Drop, Banana, Grass'
  }
];
