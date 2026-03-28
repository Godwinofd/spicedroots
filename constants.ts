
import { MenuItem, Review } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- DINNER MENU ---
  // Starters
  {
    id: 's1',
    name: 'Jerk Chicken Spring Rolls',
    description: 'Chopped jerk chicken, bell pepper, spring onion hand wrapped in pastry.',
    price: 7.95,
    category: 'Starters'
  },
  {
    id: 's2',
    name: 'Doubles',
    description: 'Chickpeas boiled with garlic, cumin and curry leaf on two bara topped w cucumber, tamarind and hot sauce.',
    price: 6.95,
    category: 'Starters',
    isVegan: true
  },
  {
    id: 's3',
    name: 'Saltfish Croquettes',
    description: 'Saltfish Sautéed w herbs and spices combined w quality potatoes hand rolled in panko and served w smoked paprika aioli',
    price: 7.95,
    category: 'Starters'
  },
  {
    id: 's4',
    name: 'Grilled Octopus Salad',
    description: 'Steamed Octopus marinated in garlic, coriander, scotch bonnet and lemon juice grilled served w avocado, baby leaves, cucumber and baby tomato, topped w pineapple chow and salad dressing',
    price: 8.95,
    category: 'Starters',
    isGlutenFree: true
  },
  {
    id: 's5',
    name: 'Smoked Baigan & Tomato Choka',
    description: 'Aubergine, tomato, scotch bonnet and garlic roasted then pounded w herbs, spices and hot oil, served w sada roti',
    price: 7.95,
    category: 'Starters',
    isVegan: true
  },
  {
    id: 's6',
    name: 'Pepper Whole Tiger Prawns',
    description: 'Marinated in garlic, mixed paprika, scotch bonnet, spring onion, hot chilli flakes, thyme and lime juice served w smoked pepper aioli.',
    price: 7.50,
    category: 'Starters'
  },

  // Mains
  {
    id: 'm1',
    name: 'Jerk Chicken',
    description: 'Jerk chicken marinated for 48hrs, smoked over cherry wood and oak logs served w jerk sauce, rice & peas and salad',
    price: 18.50,
    category: 'Mains',
    isGlutenFree: true
  },
  {
    id: 'm2',
    name: 'Grilled Kingfish Steak',
    description: 'Kingfish topped with coriander, garlic, scotch bonnet, cho cho, seasoning pepper and lime juice then baked and served on a bed of cassava, okra topped with cucumber salsa in a creole sauce',
    price: 19.50,
    category: 'Mains',
    isGlutenFree: true
  },
  {
    id: 'm3',
    name: 'Boneless Curry Goat',
    description: 'Boneless goat marinated for 48hrs, cooked w goat bone stock, curry leaves and powder, coconut milk, carrots and potatoes served w white rice and salad',
    price: 20.50,
    category: 'Mains',
    isGlutenFree: true
  },
  {
    id: 'm4',
    name: 'Slow Braised Oxtail',
    description: 'Oxtail marinated for 48hrs in green seasoning and little jerk cooked with veal bone stock, casreep, coconut milk and butter beans served w mac n cheese and coleslaw',
    price: 21.00,
    category: 'Mains'
  },
  {
    id: 'm5',
    name: 'Meat free Grenadian rundown',
    description: 'Callaloo, okra, carrot, green banana, pumpkin, sweet potato, cho cho, edos, green pigeon peas, gungo peas and reduced w coconut milk served w pumpkin talkari',
    price: 17.50,
    category: 'Mains',
    isVegan: true
  },
  {
    id: 'm6',
    name: 'Sautéed Ackee Without Saltfish',
    description: 'Fried mixed vegetables black rice w stewed mushroom, pumpkin talkari, plantain and avocado',
    price: 18.50,
    category: 'Mains',
    isVegan: true,
    isGlutenFree: true
  },
  {
    id: 'm7',
    name: 'Trini-Style BBQ Lamb Back Chops',
    description: 'Lamb marinated for 48hrs in green seasoning, mint and smoked paprika topped w bbq sauce and smoked over cherry wood and oak logs served w handmade sweet potato fries, sweet chilli jam and salad',
    price: 21.50,
    category: 'Mains',
    isGlutenFree: true
  },

  // Sweets
  {
    id: 'sw1',
    name: 'Vegan Banana Bread',
    description: 'with coconut ice cream',
    price: 8.00,
    category: 'Sweets',
    isVegan: true
  },
  {
    id: 'sw2',
    name: 'Classic Rum Cake',
    description: 'with rum and raisin ice cream',
    price: 8.00,
    category: 'Sweets'
  },
  {
    id: 'sw3',
    name: 'Coffee Glazed Chocolate Brownie',
    description: 'with Guinness ice cream',
    price: 8.00,
    category: 'Sweets'
  },
  {
    id: 'sw4',
    name: 'Soursop/Cherry Sorbet',
    description: '',
    price: 4.00,
    category: 'Sweets',
    isVegan: true
  },

  // Sides
  { id: 'si1', name: 'Festivals', description: '', price: 5.00, category: 'Sides', isVegan: true },
  { id: 'si2', name: 'Roti (dhal puri)', description: '', price: 4.00, category: 'Sides', isVegan: true },
  { id: 'si3', name: 'Sweet Potato Chips', description: '', price: 6.00, category: 'Sides' },
  { id: 'si4', name: 'Green Salad', description: '', price: 5.00, category: 'Sides' },
  { id: 'si5', name: 'Coleslaw', description: '', price: 5.00, category: 'Sides' },
  { id: 'si6', name: 'Rice & Peas', description: '', price: 5.00, category: 'Sides' },
  { id: 'si7', name: 'White Rice', description: '', price: 5.00, category: 'Sides' },
  { id: 'si8', name: 'Mac & Cheese', description: '', price: 6.00, category: 'Sides' },
  { id: 'si9', name: 'Ripe Plantain', description: '', price: 4.00, category: 'Sides', isVegan: true },

  // --- LUNCH MENU & DEALS (Kept as Legacy) ---
  {
    id: 'l1',
    name: '1/4 Chicken (Lunch)',
    description: 'Style: BBQ | Fried | Barbe-fried | Sweet chilli. Served with salad or fries.',
    price: 5.99,
    category: 'Lunch'
  },
  { id: 'lp1', name: 'Chicken Pattie', description: '', price: 3.50, category: 'Lunch' },
  {
    id: 'd1',
    name: 'Box Meals',
    description: 'Choose main + style + side + drink. Upgrades available.',
    price: 9.99,
    category: 'Deals'
  },

  // --- DRINKS ---
  // Cocktails (2-4-1 COCKTAILS excluding 7-9pm)
  { id: 'c2', name: 'PASSIONATE PEACH', description: 'Absolut vodka, peach liqueur, passion fruit purée, pineapple juice, muddled fresh lime with vanilla syrup.', price: 12.00, category: 'Cocktails', image: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=2000&auto=format&fit=crop' },
  { id: 'c3', name: 'MAI TAI', description: 'Havana Especial & 3YO rum, Triple Sec, Orgeat Syrup, fresh lime, pineapple juice and Angostura Bitter. The Quintessential Tiki Cocktail.', price: 12.00, category: 'Cocktails', image: 'https://images.unsplash.com/photo-1592318141203-d670c5398d5c?q=80&w=2000&auto=format&fit=crop' },
  { id: 'c4', name: 'LYCHEE & RASPBERRY MARTINI', description: 'Chambord, lychee liqueur, cranberry juice and pineapple juice. Floral fruity and very flirty.', price: 12.00, category: 'Cocktails', image: 'https://images.unsplash.com/photo-1605270014316-c56318991461?q=80&w=2000&auto=format&fit=crop' },
  { id: 'c5', name: 'BAHAMA MAMA', description: 'Banana liqueur, Koko Kanu shaken with pineapple juice, orange juice & lime juice. Finished with grenadine and fresh strawberry garnish.', price: 12.00, category: 'Cocktails', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=2000&auto=format&fit=crop' },
  { id: 'c7', name: 'PIÑA COLADA', description: 'Koko kanu rum, coconut syrup, coconut milk pineapple juice. Who doesn\'t like a Piña Colada?', price: 12.00, category: 'Cocktails', image: 'https://images.unsplash.com/photo-1610630573523-a218d8930514?q=80&w=2000&auto=format&fit=crop' },
  { id: 'c8', name: 'PORN STAR MARTINI', description: 'Vodka, passōa passion fruit purée, pineapple juice, vanilla syrup.', price: 12.00, category: 'Cocktails', image: 'https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?q=80&w=2000&auto=format&fit=crop' },

  // Rum Bar
  { id: 'rb0', name: 'MOJITO', description: 'Havana Club 3yo rum, fresh mint leaves, fresh limes muddled with sugar syrup. Ask bartender for additional flavours.', price: 12.00, category: 'Rum Bar', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=2000&auto=format&fit=crop' },
  { id: 'rb1', name: 'DARK N STORMY', description: 'Goslings, lime, handcrafted ginger beer, bitters', price: 11.95, category: 'Rum Bar', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2000&auto=format&fit=crop' },
  { id: 'rb2', name: 'TRINIDAD SOUR', description: 'Angostura 7, angostura bitters, Lime, roasted almond, orgeat', price: 11.95, category: 'Rum Bar', image: 'https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?q=80&w=2000&auto=format&fit=crop' },
  { id: 'rb3', name: 'MAUBY OLD FASHIONED', description: 'Appleton 12, homemade mauby, bitters, demarara, roasted orange peel', price: 11.95, category: 'Rum Bar', image: 'https://images.unsplash.com/photo-1510626176961-4b57d4f9f212?q=80&w=2000&auto=format&fit=crop' },
  { id: 'rb4', name: 'CLASSIC RUM PUNCH', description: 'Wray & nephew, lime, sugar, spice, bitters', price: 11.95, category: 'Rum Bar', image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=2000&auto=format&fit=crop' },
  { id: 'rb5', name: 'JAMAICAN PARADISE', description: 'Wray & Nephew over proof rum, strawberry liqueur, lime juice orange juice and pineapple juice for sweet flavours. Not to be missed.', price: 12.00, category: 'Rum Bar', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=2000&auto=format&fit=crop' },
  { id: 'rb6', name: 'GEORGETOWN PASSION FRUIT RUM SWIZZLE', description: 'El dorado 3, passionfruit liquor, lime, passionfruit syrup, lemon, bitters', price: 11.95, category: 'Rum Bar', image: 'https://images.unsplash.com/photo-1536935338218-d413d88e7a43?q=80&w=2000&auto=format&fit=crop' },
  { id: 'rb7', name: 'LYCHEE DAIQUIRI', description: 'Havana 3, lychee liquor, pierre fernand dry curacao, homemade grenadine', price: 10.95, category: 'Rum Bar', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=2000&auto=format&fit=crop' },
  { id: 'rb8', name: 'HOMEMADE GUINNESS PUNCH', description: '', price: 9.00, category: 'Rum Bar', image: 'https://images.unsplash.com/photo-1627915545806-903ed7c5885f?q=80&w=2000&auto=format&fit=crop' },

  // Beer
  { id: 'b1', name: 'BANKS', description: '', price: 7.00, category: 'Beer' },
  { id: 'b2', name: 'CARIB', description: '', price: 7.00, category: 'Beer' },
  { id: 'b3', name: 'RED STRIPE', description: '', price: 7.00, category: 'Beer' },
  { id: 'b4', name: 'GUINNESS FOREIGN EXTRA', description: '', price: 7.50, category: 'Beer' },

  // Wine
  { id: 'w1', name: '(PINOT) CA GOUT DE CIEL NOIR', description: '', price: '7 / 34.5', category: 'Wine' },
  { id: 'w2', name: '(MALBEC) MIKRON', description: '', price: '7.5 / 37.5', category: 'Wine' },
  { id: 'w3', name: '(BORDEAUX) CHATEAU DES DEUX RIVERS', description: '', price: 37.5, category: 'Wine' },
  { id: 'w4', name: '(COTES DU RHONE) TERRE DAVAU', description: '', price: 37.5, category: 'Wine' },
  { id: 'w5', name: 'ESK VALLEY SAUVIGNON BLANC', description: '', price: '10 / 35', category: 'Wine' },
  { id: 'w6', name: 'TERRA DE ASOREI ALBARINO (SPAIN)', description: '', price: '10.5 / 42', category: 'Wine' },
  { id: 'w7', name: 'ADOBE RESERVE GEWURZTAMINER', description: '', price: '9 / 30', category: 'Wine' },
  { id: 'w8', name: 'CHABLIS PREMIER CRU 2018 (FRANCE)', description: '', price: 59, category: 'Wine' },
  { id: 'w9', name: 'WHISPERING ANGEL COTES DE PROVENCE (FRANCE)', description: '', price: '10.5 / 42', category: 'Wine' }, // Rosé

  // Soft Drinks (Legacy)
  { id: 'sd1', name: 'Coke / Diet Coke', description: '', price: 3.00, category: 'Soft Drinks' },
  { id: 'sd4', name: 'Ginger Beer', description: '', price: 3.75, category: 'Soft Drinks' },
  { id: 'sd5', name: 'Homemade Sorrel', description: '', price: 4.50, category: 'Soft Drinks' },
  { id: 'sd6', name: 'Still/Sparkling Water', description: '', price: '3.25 / 6', category: 'Soft Drinks' }
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
    author: 'Marcus L.',
    rating: 5,
    title: 'AUTHENTIC FLAVORS',
    content: 'Coming from a Jamaican background, it is hard to find places that get it right. Spiced Roots gets it 100% right. Respect to the chef.'
  },
];

export const RUM_CATALOG = [
  {
    id: 'rum1',
    name: 'Appleton Estate 12 Year Rare Casks',
    origin: 'Jamaica',
    description: 'A masterpiece of oak aging, featuring deep bronze color and notes of toasted oak, dried fruits, and hazelnut.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2000&auto=format&fit=crop',
    notes: 'Toasted Oak, Hazelnut, Molasses'
  },
  {
    id: 'rum2',
    name: 'Mount Gay Eclipse',
    origin: 'Barbados',
    description: 'The distinctive golden amber rum with a complex aroma of floral and fruity notes, apricot, and banana.',
    image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2000&auto=format&fit=crop',
    notes: 'Apricot, Banana, Vanilla'
  },
  {
    id: 'rum3',
    name: 'El Dorado 15 Year Old Special Reserve',
    origin: 'Guyana',
    description: 'A long-simmered blend of heavy rums, some up to 15 years old. Rich, complex with a smooth finish.',
    image: 'https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?q=80&w=2000&auto=format&fit=crop',
    notes: 'Coffee, Candied Orange, Almond'
  },
  {
    id: 'rum4',
    name: 'Diplomático Reserva Exclusiva',
    origin: 'Venezuela',
    description: 'A blend of copper pot still rums aged for up to 12 years. Exceptionally smooth and easy to drink.',
    image: 'https://images.unsplash.com/photo-1550985543-f47f38aeee65?q=80&w=2000&auto=format&fit=crop',
    notes: 'Maple Syrup, Orange Peel, Licorice'
  },
  {
    id: 'rum5',
    name: 'Wray & Nephew White Overproof',
    origin: 'Jamaica',
    description: 'The world\'s top-selling overproof rum. A bartender staple with high intensity and legendary status.',
    image: 'https://images.unsplash.com/photo-1541446474673-980bb3085e68?q=80&w=2000&auto=format&fit=crop',
    notes: 'Pear Drop, Banana, Grass'
  }
];

