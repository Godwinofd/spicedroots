
import { MenuItem, Review } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- DINNER MENU ---
  // Starters
  {
    id: 's1',
    name: 'Jerk Chicken Spring Rolls',
    description: 'Chopped jerk chicken, bell pepper, spring onion hand wrapped in pastry.',
    price: 6.95,
    category: 'Starters'
  },
  {
    id: 's2',
    name: 'Doubles',
    description: 'Chickpeas boiled with garlic, cumin and curry leaf on two bara topped w cucumber, tamarind and hot sauce.',
    price: 5.95,
    category: 'Starters',
    isVegan: true
  },
  {
    id: 's3',
    name: 'Saltfish Croquettes',
    description: 'Saltfish Sautéed w herbs and spices combined w quality potatoes hand rolled in panko and served w smoked paprika aioli.',
    price: 6.95,
    category: 'Starters'
  },
  {
    id: 's4',
    name: 'Grilled Octopus Salad',
    description: 'Steamed Octopus marinated in garlic, coriander, scotch bonnet and lemon juice grilled served w avocado, baby leaves, cucumber and baby tomato, topped w pineapple chow and salad dressing.',
    price: 7.95,
    category: 'Starters',
    isGlutenFree: true
  },
  {
    id: 's5',
    name: 'Smoked Baigan & Tomato Choka',
    description: 'Aubergine, tomato, scotch bonnet and garlic roasted then pounded w herbs, spices and hot oil, served w sada roti.',
    price: 6.95,
    category: 'Starters',
    isVegan: true
  },
  {
    id: 's6',
    name: 'Pepper Whole Tiger Prawns',
    description: 'Marinated in garlic, mixed paprika, scotch bonnet, spring onion, hot chilli flakes, thyme and lime juice served w smoked pepper aioli.',
    price: 6.50,
    category: 'Starters'
  },

  // Mains
  {
    id: 'm1',
    name: 'Jerk Chicken',
    description: 'Jerk chicken marinated for 48hrs, smoked over cherry wood and oak logs served w jerk sauce, rice & peas and salad.',
    price: 16.50,
    category: 'Mains',
    isGlutenFree: true
  },
  {
    id: 'm2',
    name: 'Grilled Kingfish Steak',
    description: 'Kingfish topped with coriander, garlic, scotch bonnet, cho cho, seasoning pepper and lime juice then baked and served on a bed of cassava, okra topped with cucumber salsa in a creole sauce.',
    price: 17.50,
    category: 'Mains',
    isGlutenFree: true
  },
  {
    id: 'm3',
    name: 'Boneless Curry Goat',
    description: 'Boneless goat marinated for 48hrs, cooked w goat bone stock, curry leaves and powder, coconut milk, carrots and potatoes served w white rice and salad.',
    price: 18.50,
    category: 'Mains',
    isGlutenFree: true
  },
  {
    id: 'm4',
    name: 'Slow Braised Oxtail',
    description: 'Oxtail marinated for 48hrs in green seasoning and little jerk cooked with veal bone stock, casreep, coconut milk and butter beans served w mac n cheese and coleslaw.',
    price: 19.00,
    category: 'Mains'
  },
  {
    id: 'm5',
    name: 'Meat free Grenadian rundown',
    description: 'Callaloo, okra, carrot, green banana, pumpkin, sweet potato, cho cho, edos, green pigeon peas, gungo peas and reduced w coconut milk served w pumpkin talkari.',
    price: 15.50,
    category: 'Mains',
    isVegan: true
  },
  {
    id: 'm6',
    name: 'Sautéed Ackee Without Saltfish',
    description: 'Fried mixed vegetables black rice w stewed mushroom, pumpkin talkari, plantain and avocado.',
    price: 16.50,
    category: 'Mains',
    isVegan: true,
    isGlutenFree: true
  },
  {
    id: 'm7',
    name: 'Trini-Style BBQ Lamb Back Chops',
    description: 'Lamb marinated for 48hrs in green seasoning, mint and smoked paprika topped w bbq sauce and smoked over cherry wood and oak logs served w handmade sweet potato fries, sweet chilli jam and salad.',
    price: 19.50,
    category: 'Mains',
    isGlutenFree: true
  },

  // Sweets
  {
    id: 'sw1',
    name: 'Vegan Banana Bread',
    description: 'with coconut ice cream.',
    price: 7.00,
    category: 'Sweets',
    isVegan: true
  },
  {
    id: 'sw2',
    name: 'Classic Rum Cake',
    description: 'with rum and raisin ice cream.',
    price: 7.00,
    category: 'Sweets'
  },
  {
    id: 'sw3',
    name: 'Coffee Glazed Chocolate Brownie',
    description: 'with Guinness ice cream.',
    price: 7.00,
    category: 'Sweets'
  },
  {
    id: 'sw4',
    name: 'Soursop/Cherry Sorbet',
    description: '',
    price: 3.00,
    category: 'Sweets',
    isVegan: true
  },

  // Sides (Dinner)
  { id: 'si1', name: 'Festivals', description: '', price: 4.00, category: 'Sides', isVegan: true },
  { id: 'si2', name: 'Roti (dhal puri)', description: '', price: 3.00, category: 'Sides', isVegan: true },
  { id: 'si3', name: 'Sweet Potato Chips', description: '', price: 5.00, category: 'Sides' },
  { id: 'si4', name: 'Green Salad', description: '', price: 4.00, category: 'Sides' },
  { id: 'si5', name: 'Coleslaw', description: '', price: 4.00, category: 'Sides' },
  { id: 'si6', name: 'Rice & Peas', description: '', price: 4.00, category: 'Sides' },
  { id: 'si7', name: 'White Rice', description: '', price: 4.00, category: 'Sides' },
  { id: 'si8', name: 'Mac & Cheese', description: '', price: 5.00, category: 'Sides' },
  { id: 'si9', name: 'Ripe Plantain', description: '', price: 3.00, category: 'Sides', isVegan: true },

  // --- LUNCH MENU ---
  {
    id: 'l1',
    name: '1/4 Chicken (Lunch)',
    description: 'Style: BBQ | Fried | Barbe-fried | Sweet chilli. Served with salad or fries.',
    price: 5.99,
    category: 'Lunch'
  },
  {
    id: 'l2',
    name: 'Wings (5pc)',
    description: 'Style: BBQ | Fried | Barbe-fried | Sweet chilli.',
    price: 7.99,
    category: 'Lunch'
  },
  {
    id: 'l3',
    name: 'Boneless (3pc)',
    description: 'Thighs. Style: BBQ | Fried | Barbe-fried | Sweet chilli.',
    price: 9.99,
    category: 'Lunch'
  },
  { id: 'lp1', name: 'Chicken Pattie', description: '', price: 3.50, category: 'Lunch' },
  { id: 'lp2', name: 'Beef Pattie', description: '', price: 3.50, category: 'Lunch' },
  { id: 'lp3', name: 'Lamb Pattie', description: '', price: 3.50, category: 'Lunch' },
  { id: 'lp4', name: 'Cheesy Beef Pattie', description: '', price: 3.50, category: 'Lunch' },
  { id: 'lp5', name: 'Stew Peas Pattie', description: '', price: 3.00, category: 'Lunch', isVegan: true },

  // Lunch Sides & Dips (simplified)
  { id: 'ls1', name: 'Lunch Fries', description: '', price: 3.00, category: 'Lunch' },
  { id: 'ls2', name: 'Caribbean Fries', description: '', price: 3.50, category: 'Lunch' },
  { id: 'ls3', name: 'Lentil Fritters (3pc)', description: '', price: 3.00, category: 'Lunch', isVegan: true },

  // --- DEALS & COMBOS ---
  {
    id: 'd1',
    name: 'Box Meals',
    description: 'Choose main + style + side + drink. Upgrades available.',
    price: 9.99,
    category: 'Deals'
  },
  {
    id: 'd2',
    name: 'Where de bone',
    description: '4 thighs + fries + slaw + plantain + soft drink.',
    price: 16.99,
    category: 'Deals'
  },
  {
    id: 'd3',
    name: 'Yaad Feast for 2',
    description: '2 1/4 chicken + 2 thighs + 2 fries + slaw + salad + plantain + 2 drinks.',
    price: 21.99,
    category: 'Deals'
  },
  {
    id: 'd4',
    name: 'Mac & Wing Ting',
    description: '12 wings + 3 mac bites + dip.',
    price: 15.99,
    category: 'Deals'
  },
  {
    id: 'd5',
    name: 'Whole Yard Shutdown',
    description: 'Feeds 4-6. Huge platter with chicken, wings, sides, and drinks.',
    price: 52.99,
    category: 'Deals'
  },
  {
    id: 'd6',
    name: 'Roots Lime',
    description: 'Vegan feast with chickpea curry, fritters, patties, and more.',
    price: 18.99,
    category: 'Deals',
    isVegan: true
  },

  // --- DRINKS ---
  // Cocktails (Standard)
  { id: 'c1', name: 'Mojito', description: 'Havana Club 3yo rum, fresh mint, lime, sugar.', price: 12.00, category: 'Cocktails', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=2000&auto=format&fit=crop' },
  { id: 'c2', name: 'Passionate Peach', description: 'Absolut vodka, peach liqueur, passion fruit, pineapple, lime.', price: 12.00, category: 'Cocktails', image: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=2000&auto=format&fit=crop' },
  { id: 'c3', name: 'Mai Tai', description: 'Havana Especial & 3YO rum, Triple Sec, Orgeat, lime, pineapple, bitters.', price: 12.00, category: 'Cocktails', image: 'https://images.unsplash.com/photo-1592318141203-d670c5398d5c?q=80&w=2000&auto=format&fit=crop' },
  { id: 'c4', name: 'Lychee & Raspberry Martini', description: 'Chambord, lychee liqueur, cranberry, pineapple.', price: 12.00, category: 'Cocktails', image: 'https://images.unsplash.com/photo-1605270014316-c56318991461?q=80&w=2000&auto=format&fit=crop' },
  { id: 'c5', name: 'Bahama Mama', description: 'Banana liqueur, Koko Kanu, pineapple, orange, lime, grenadine.', price: 12.00, category: 'Cocktails', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=2000&auto=format&fit=crop' },
  { id: 'c6', name: 'Jamaican Paradise', description: 'Wray & Nephew, strawberry liqueur, lime, orange, pineapple.', price: 12.00, category: 'Cocktails', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=2000&auto=format&fit=crop' },
  { id: 'c7', name: 'Piña Colada', description: 'Koko kanu rum, coconut syrup, coconut milk, pineapple.', price: 12.00, category: 'Cocktails', image: 'https://images.unsplash.com/photo-1610630573523-a218d8930514?q=80&w=2000&auto=format&fit=crop' },
  { id: 'c8', name: 'Porn Star Martini', description: 'Vodka, passoa, passion fruit, pineapple, vanilla.', price: 12.00, category: 'Cocktails', image: 'https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?q=80&w=2000&auto=format&fit=crop' },

  // Rum Bar Specials (Moved to Rum Bar Page, but kept here for logical grouping)
  { id: 'rb1', name: 'Dark N Stormy', description: 'Gosling, lime, ginger beer, bitters', price: 11.95, category: 'Rum Bar', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2000&auto=format&fit=crop' },
  { id: 'rb2', name: 'Trinidad Sour', description: 'Angostura 7, bitters, lime, roasted almond, orgeat', price: 11.95, category: 'Rum Bar', image: 'https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?q=80&w=2000&auto=format&fit=crop' },
  { id: 'rb3', name: 'Mauby Old Fashioned', description: 'Appleton 12, homemade mauby, bitters, orange peel', price: 11.95, category: 'Rum Bar', image: 'https://images.unsplash.com/photo-1510626176961-4b57d4f9f212?q=80&w=2000&auto=format&fit=crop' },
  { id: 'rb4', name: 'Classic Rum Punch', description: 'Wray & nephew, lime, sugar, spice, bitters', price: 11.95, category: 'Rum Bar', image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=2000&auto=format&fit=crop' },
  { id: 'rb5', name: 'Pimento Smoked Negroni', description: 'Appleton 12, Campari, Antica Formula, Pimento smoke', price: 11.95, category: 'Rum Bar', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=2000&auto=format&fit=crop' },
  { id: 'rb6', name: 'Passion Fruit Swizzle', description: 'El Dorado 3, passionfruit liquor, lime, lemon, bitters', price: 11.95, category: 'Rum Bar', image: 'https://images.unsplash.com/photo-1536935338218-d413d88e7a43?q=80&w=2000&auto=format&fit=crop' },
  { id: 'rb7', name: 'Lychee Daiquiri', description: 'Havana 3, lychee liquor, dry curacao, grenadine', price: 10.95, category: 'Rum Bar', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=2000&auto=format&fit=crop' },
  { id: 'rb8', name: 'Homemade Guinness Punch', description: 'Creamy island favorite with sweet spices', price: 9.00, category: 'Rum Bar', image: 'https://images.unsplash.com/photo-1627915545806-903ed7c5885f?q=80&w=2000&auto=format&fit=crop' },

  // Wine
  { id: 'w1', name: 'Pinot Noir (Red)', description: 'Aconcagua Costa, Chile', price: '9 / 35', category: 'Wine' },
  { id: 'w2', name: 'Esk Valley Sauvignon Blanc (White)', description: 'New Zealand', price: '10 / 35', category: 'Wine' },
  { id: 'w3', name: 'Whispering Angel (Rosé)', description: 'France', price: '10.5 / 42', category: 'Wine' },
  { id: 'w4', name: 'Bollinger Special Cuvee', description: 'Champagne', price: 90.00, category: 'Wine' },

  // Soft Drinks
  { id: 'sd1', name: 'Coke / Diet Coke', description: '', price: 3.00, category: 'Soft Drinks' },
  { id: 'sd2', name: 'Fruit Juices', description: 'Orange, Apple, or Pineapple', price: 4.00, category: 'Soft Drinks' },
  { id: 'sd3', name: 'Ting', description: 'Grapefruit Soda', price: 3.00, category: 'Soft Drinks' },
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

