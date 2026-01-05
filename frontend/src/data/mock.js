// Complete Menu Data for Happy Place Coffee & Eats - DRINK FOCUSED
// All items scraped from actual website with real prices
// Menu reorganized to emphasize their specialty coffee offerings

export const brandAssets = {
  logo: 'https://customer-assets.emergentagent.com/job_local-sip/artifacts/l6mm4os6_Happy-Logo-1920w.webp',
  heroImages: [
    'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1367390655-1920w.jpg',
    'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg',
    'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg',
    'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1243197436-1920w.JPG'
  ],
  coffeeImages: {
    drip: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/drip-coffee-898d1d72-1920w.png',
    latte: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/caffe-latte-990b710d-1920w.png',
    cappuccino: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Capuccino-3f36d8f2-1920w.png',
    espresso: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Espresso-0e3f8f36-1920w.png',
    coldBrew: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/COLD-Brew-1920w.png',
    matcha: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Ice-Matcha-1920w.png'
  }
};

// JESSY'S PREMIUM COFFEE BEANS - Available for purchase
export const coffeeBeans = [
  {
    id: 'house-espresso',
    name: 'House Espresso Blend',
    description: 'Bitter sweet, chocolate, rich, dried fruit',
    price: 24.95,
    weight: '12 oz (340g)',
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/drip-coffee-898d1d72-1920w.png'
  },
  {
    id: 'colombia-supremo',
    name: 'Colombia Supremo',
    description: 'Milk chocolate, grapes, cream',
    price: 23.95,
    weight: '12 oz (340g)',
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/coffeee-1920w.png'
  },
  {
    id: 'guatemala-antigua',
    name: 'Guatemala Antigua Ciudad Entre Los Bosques',
    description: 'Clementine, white chocolate, stone fruit',
    price: 23.95,
    weight: '12 oz (340g)',
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/coffeee-1920w.png'
  },
  {
    id: 'ethiopia-yirgacheffe',
    name: 'Ethiopia Yirgacheffe',
    description: 'Floral, tea-like, citrus notes',
    price: 23.95,
    weight: '12 oz (340g)',
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/coffeee-1920w.png'
  },
  {
    id: 'brazil-premium',
    name: 'Brazil Premium',
    description: 'Dark chocolate, peanut butter, roasty - Minas Gerais',
    price: 24.95,
    weight: '12 oz (340g)',
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/coffeee-1920w.png'
  },
  {
    id: 'sumatra-mandheling',
    name: 'Sumatra Mandheling',
    description: 'Chocolate malt, spicy, robust',
    price: 23.95,
    weight: '12 oz (340g)',
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/coffeee-1920w.png'
  }
];

export const menuCategories = [
  {
    id: 'coffee-espresso',
    name: 'Coffee & Espresso',
    description: 'Jessy\'s Premium Coffee - Fresh Roasted 100% Arabica Beans',
    items: [
      {
        id: 'drip-coffee',
        name: 'Drip Coffee',
        description: 'Fresh roasted Jessy\'s Premium Coffee brewed every 30 minutes',
        price: 3.70,
        sizes: { small: 3.70, medium: 3.85, large: 4.25 },
        calories: 0,
        category: 'Coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/drip-coffee-898d1d72-1920w.png'
      },
      {
        id: 'cafe-au-lait',
        name: 'Café Au Lait',
        description: 'Fresh drip coffee with steamed milk',
        price: 3.55,
        sizes: { small: 3.55, medium: 4.00, large: 4.45 },
        calories: 50,
        category: 'Coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CAF-C3-89-AU-LAIT---FEATURED-DARK-1920w.png'
      },
      {
        id: 'espresso',
        name: 'Espresso',
        description: 'Rich, concentrated shot of premium espresso',
        price: 3.00,
        sizes: { single: 3.00, double: 4.65, triple: 6.30 },
        calories: 10,
        category: 'Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Espresso-0e3f8f36-1920w.png'
      },
      {
        id: 'americano',
        name: 'Americano',
        description: 'Double espresso with hot water',
        price: 3.75,
        sizes: { small: 3.75, medium: 4.75, large: 4.85 },
        calories: 15,
        category: 'Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Americano-10cad5cd-1920w.png'
      },
      {
        id: 'short-black',
        name: 'Short Black',
        description: 'Single espresso shot - rich and intense',
        price: 3.75,
        calories: 10,
        category: 'Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Short-Black-1920w.png'
      },
      {
        id: 'long-black',
        name: 'Long Black',
        description: 'Double espresso over hot water',
        price: 4.00,
        sizes: { small: 4.00, medium: 5.00, large: 6.00 },
        calories: 15,
        category: 'Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/long-black-1920w.png'
      },
      {
        id: 'doppio',
        name: 'Coffee & Milk (Doppio)',
        description: '2 espresso shots with milk - 6 oz only',
        price: 5.50,
        category: 'Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/drip-coffee-898d1d72-1920w.png'
      }
    ]
  },
  {
    id: 'specialty-lattes',
    name: 'Specialty Lattes & Cappuccinos',
    description: 'Handcrafted espresso drinks with steamed milk',
    items: [
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: 'Rich espresso artfully balanced with freshly micro-foamed milk',
        price: 4.25,
        sizes: { small: 4.25, medium: 4.95, large: 5.45 },
        calories: 120,
        category: 'Cappuccino',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Capuccino-3f36d8f2-1920w.png'
      },
      {
        id: 'little-havana-cappuccino',
        name: 'Little Havana Cappuccino',
        description: 'Cuban-inspired cappuccino with Latin flair',
        price: 4.90,
        sizes: { small: 4.90, medium: 5.60, large: 6.00 },
        calories: 240,
        category: 'Cappuccino',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Little-Havana-Capuccino-1920w.png'
      },
      {
        id: 'latte',
        name: 'Latte',
        description: 'Smooth espresso with velvety steamed milk',
        price: 5.80,
        sizes: { small: 5.80, medium: 6.60, large: 7.50 },
        calories: 170,
        category: 'Latte',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/caffe-latte-990b710d-1920w.png'
      },
      {
        id: 'flat-white',
        name: 'Flat White',
        description: 'Double espresso with silky microfoam',
        price: 5.80,
        sizes: { small: 5.80, medium: 6.60, large: 7.50 },
        calories: 120,
        category: 'Latte',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Flat---white-1920w.png'
      },
      {
        id: 'vanilla-latte',
        name: 'Vanilla Latte',
        description: 'Classic latte sweetened with vanilla syrup',
        price: 6.56,
        sizes: { small: 6.56, medium: 7.74, large: 8.67 },
        calories: 240,
        category: 'Latte',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Vanilla-Latte-1920w.png'
      },
      {
        id: 'caramel-macchiato',
        name: 'Caramel Macchiato',
        description: 'Espresso with vanilla, milk, and caramel drizzle',
        price: 6.00,
        sizes: { small: 6.00, medium: 6.45, large: 7.05 },
        calories: 300,
        category: 'Latte',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Caramel-Machiato-1920w.png'
      },
      {
        id: 'mocha',
        name: 'Mocha',
        description: 'Espresso with rich chocolate and steamed milk',
        price: 6.50,
        sizes: { small: 6.50, medium: 6.95, large: 7.55 },
        calories: 360,
        category: 'Mocha',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/cafe-mocha-8f4d3834-1920w.png'
      },
      {
        id: 'white-chocolate-mocha',
        name: 'White Chocolate Mocha',
        description: 'Espresso with sweet white chocolate',
        price: 6.60,
        sizes: { small: 6.60, medium: 6.95, large: 7.55 },
        calories: 360,
        category: 'Mocha',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/White-chocolate-Mocha-1920w.png'
      },
      {
        id: 'dark-chocolate-mocha',
        name: 'Dark Chocolate Mocha',
        description: 'Espresso with rich dark chocolate',
        price: 6.50,
        sizes: { small: 6.50, medium: 6.95, large: 7.55 },
        calories: 410,
        category: 'Mocha',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Dark-chocolate-Mocha-1920w.png'
      }
    ]
  },
  {
    id: 'cold-brew-signature',
    name: 'Cold Brew & Signature Beverages',
    description: 'Innovative cold coffee creations',
    items: [
      {
        id: 'cold-brew',
        name: 'Cold Brew',
        description: 'Smooth, slow-steeped cold brew coffee',
        price: 4.95,
        sizes: { small: 4.95, medium: 5.25, large: 5.95 },
        calories: 0,
        category: 'Cold Brew',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/COLD-Brew-1920w.png'
      },
      {
        id: 'cold-brew-oat-latte',
        name: 'Cold Brew Oat Latte',
        description: 'Cold brew with creamy oat milk',
        price: 5.85,
        sizes: { small: 5.85, medium: 6.25, large: 6.95 },
        calories: 150,
        category: 'Cold Brew',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/COLD-BREW-OAT-LATTE-1920w.png'
      },
      {
        id: 'horchata-espresso',
        name: 'Horchata & Espresso',
        description: 'Creamy horchata with bold espresso - Medium only',
        price: 7.65,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Horchata---Espresso-1920w.png'
      },
      {
        id: 'horchata-cold-brew-latte',
        name: 'Horchata Cold Brew Oat Latte',
        description: 'Latin-inspired cold brew with horchata and oat milk',
        price: 7.40,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Horchata-COLD-BREW-OAT-LATTE-1920w.png'
      },
      {
        id: 'cloud-original',
        name: 'Cloud - Original',
        description: 'Cold brew with condensed milk, chicory syrup, and half & half',
        price: 6.00,
        sizes: { small: 6.00, medium: 6.65, large: 6.95 },
        calories: 160,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/COLD-Brew-1920w.png'
      },
      {
        id: 'cloud-coconut',
        name: 'Cloud - Coconut',
        description: 'Cold brew with coconut flavor, condensed milk, chicory syrup',
        price: 6.00,
        sizes: { small: 6.00, medium: 6.65, large: 6.95 },
        calories: 160,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/COLD-Brew-1920w.png'
      },
      {
        id: 'brown-sugar-almond-latte',
        name: 'Brown Sugar Almond Latte with Jelly',
        description: 'Cold brew with brown sugar jelly and almond milk',
        price: 6.50,
        sizes: { small: 6.50, medium: 7.20, large: 7.55 },
        calories: 230,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/COLD-BREW-OAT-LATTE-1920w.png'
      },
      {
        id: 'iced-matcha-jelly',
        name: 'Iced Matcha with Brown Sugar Jelly',
        description: 'Premium matcha with brown sugar jelly',
        price: 6.65,
        sizes: { small: 6.65, medium: 7.35, large: 7.75 },
        calories: 230,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Ice+Brown+sugar+Matcha+OAT+LATTE-1920w.png'
      }
    ]
  },
  {
    id: 'frappe',
    name: 'Frappés',
    description: 'Blended cold brew drinks topped with whipped cream',
    items: [
      {
        id: 'mocha-frappe',
        name: 'Mocha Frappé',
        description: 'Double fresh cold brew blended with chocolate, milk, and ice',
        price: 5.15,
        sizes: { small: 5.15, medium: 5.75, large: 6.25 },
        calories: 370,
        category: 'Frappé',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/cafe-mocha-8f4d3834-1920w.png'
      },
      {
        id: 'caramel-frappe',
        name: 'Caramel Frappé',
        description: 'Cold brew blended with caramel, milk, and ice',
        price: 5.25,
        sizes: { small: 5.25, medium: 5.85, large: 6.35 },
        calories: 400,
        category: 'Frappé',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Caramel-Machiato-1920w.png'
      },
      {
        id: 'matcha-frappe',
        name: 'Matcha Frappé',
        description: 'Premium matcha blended with milk and ice',
        price: 5.15,
        sizes: { small: 5.15, medium: 5.85, large: 6.35 },
        calories: 290,
        category: 'Frappé',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Ice+Matcha+frappe-1920w.jpg'
      },
      {
        id: 'vanilla-frappe',
        name: 'Vanilla Frappé (Non-Coffee)',
        description: 'Creamy vanilla blended drink - no coffee',
        price: 5.15,
        sizes: { small: 5.15, medium: 5.75, large: 6.25 },
        calories: 370,
        category: 'Non-Coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Vanilla-Latte-1920w.png'
      }
    ]
  },
  {
    id: 'tea-non-coffee',
    name: 'Tea & Non-Coffee',
    description: 'Alternative beverages for non-coffee drinkers',
    items: [
      {
        id: 'brewed-tea',
        name: 'Brewed Tea',
        description: 'Black, green, or herbal',
        price: 3.00,
        sizes: { small: 3.00, large: 3.45 },
        calories: 0,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg'
      },
      {
        id: 'matcha-latte',
        name: 'Matcha Latte',
        description: 'Premium matcha green tea with steamed milk',
        price: 4.75,
        sizes: { small: 4.75, medium: 5.50, large: 5.90 },
        calories: 210,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Ice-Matcha-1920w.png'
      },
      {
        id: 'chai-latte',
        name: 'Chai Latte',
        description: 'Spiced chai tea with steamed milk',
        price: 5.45,
        sizes: { small: 5.45, medium: 5.95, large: 6.45 },
        calories: 200,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png'
      },
      {
        id: 'iced-tea',
        name: 'Iced Tea',
        description: 'Black, green, or wild berry hibiscus',
        price: 3.00,
        sizes: { small: 3.00, medium: 3.55, large: 3.95 },
        calories: 0,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg'
      },
      {
        id: 'iced-tea-lemonade',
        name: 'Iced Tea Lemonade',
        description: 'Refreshing blend of iced tea and lemonade',
        price: 3.75,
        sizes: { small: 3.75, medium: 4.35, large: 4.75 },
        calories: 40,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg'
      },
      {
        id: 'hot-cocoa',
        name: 'Hot Cocoa',
        description: 'Rich chocolate drink with whipped cream',
        price: 4.40,
        sizes: { small: 4.40, medium: 4.70, large: 5.10 },
        calories: 420,
        category: 'Non-Coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/cafe-mocha-8f4d3834-1920w.png'
      },
      {
        id: 'vanilla-steamer',
        name: 'Vanilla Steamer',
        description: 'Steamed milk with vanilla - no coffee',
        price: 3.80,
        sizes: { small: 3.80, medium: 4.20, large: 4.50 },
        calories: 250,
        category: 'Non-Coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Vanilla-Latte-1920w.png'
      }
    ]
  },
  {
    id: 'breakfast-sandwiches',
    name: 'Breakfast Sandwiches',
    description: 'Start your day with our hearty breakfast sandwiches',
    items: [
      {
        id: 'our-happy-place',
        name: 'Our Happy Place',
        description: 'Scrambled eggs, spinach, tomato, Swiss, mushroom on butter croissant',
        price: 11.95,
        category: 'Breakfast',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg'
      },
      {
        id: 'egg-cheese',
        name: 'Egg & Cheese',
        description: 'Classic egg and cheese sandwich',
        price: 10.99,
        category: 'Breakfast',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg'
      },
      {
        id: 'ham-egg-cheese',
        name: 'Ham, Egg & Cheese',
        description: 'Ham with egg and cheese on your choice of bread',
        price: 11.95,
        category: 'Breakfast',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1367390655-1920w.jpg'
      },
      {
        id: 'bacon-egg-cheese',
        name: 'Bacon, Egg & Cheese',
        description: 'Crispy bacon with egg and cheese',
        price: 12.49,
        category: 'Breakfast',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1367390655-1920w.jpg'
      },
      {
        id: 'sausage-egg-cheese',
        name: 'Sausage, Egg & Cheese',
        description: 'Savory sausage with egg and cheese',
        price: 12.99,
        category: 'Breakfast',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg'
      }
    ]
  },
  {
    id: 'latino-breakfast',
    name: 'Latino Breakfast',
    description: 'Authentic Latin-American breakfast specialties',
    items: [
      {
        id: 'baleadas',
        name: 'Baleadas Catrachas',
        description: 'Scrambled eggs, pinto refried beans, Spanish sour cream, fresh cheese on flour tortilla',
        price: 10.00,
        category: 'Latino Breakfast',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg'
      },
      {
        id: 'barrios-breakfast',
        name: 'Barrios Breakfast',
        description: '2 eggs with Mexican sausage, fried beans, fried plantains, sour cream, tortillas',
        price: 14.49,
        category: 'Latino Breakfast',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg'
      },
      {
        id: 'huevos-rancheros',
        name: 'Huevos Rancheros',
        description: '2 fried eggs on corn tortillas, salsa ranchera, avocado, beans, fresh cheese',
        price: 13.95,
        category: 'Latino Breakfast',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg'
      },
      {
        id: 'breakfast-quesadilla',
        name: 'Chicken Quesadilla',
        description: 'Blended cheese, Latino sour cream, guacamole',
        price: 14.00,
        category: 'Latino Breakfast',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg'
      }
    ]
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches & Burgers',
    description: 'Hand held happiness - Served with fries',
    items: [
      {
        id: 'hpc-burger',
        name: 'Juicy HPC Hamburger',
        description: 'Ground beef stuffed with cheddar, mozzarella, candied onions, bacon',
        price: 15.95,
        category: 'Burgers',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg'
      },
      {
        id: 'barrios-burger',
        name: 'Barrios Burger',
        description: 'Ground beef stuffed with yellow cheese, red onions, tomatoes, lettuce, bacon',
        price: 16.99,
        category: 'Burgers',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg'
      },
      {
        id: 'turkey-hpc',
        name: 'Turkey the HPC Way',
        description: 'Fresh roasted turkey, cranberry, creole mayonnaise',
        price: 14.99,
        category: 'Sandwiches',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg'
      },
      {
        id: 'roast-beef-panini',
        name: 'Roast Beef Panini',
        description: 'Roast beef, Swiss, roasted onions, smoked tomato, pesto mayo on sourdough',
        price: 15.49,
        category: 'Sandwiches',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg'
      },
      {
        id: 'grilled-chicken',
        name: 'Classic Grilled Chicken',
        description: 'Chicken, pepper jack, pesto mayo, roasted onions, smoked tomatoes',
        price: 14.95,
        category: 'Sandwiches',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg'
      }
    ]
  },
  {
    id: 'entrees',
    name: 'Latin-Fusion Entrées',
    description: 'Our signature dishes blending Latin and American flavors',
    items: [
      {
        id: 'lomo-saltado',
        name: 'Lomo Saltado',
        description: 'Traditional Peruvian - marinated stir-fried steak, onions, tomatoes, pepper, french fries, rice',
        price: 23.95,
        category: 'Entrées',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg'
      },
      {
        id: 'mix-fajitas',
        name: 'Mix Fajitas',
        description: 'Gulf shrimp, carne asada, chicken, vegetables, yellow rice, beans, tortillas',
        price: 31.99,
        category: 'Entrées',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg'
      },
      {
        id: 'carne-asada',
        name: 'Carne Asada a la Plancha',
        description: '8 oz steak fajita on griddle, salad, rice, beans, tortillas, salsa latina',
        price: 25.00,
        category: 'Entrées',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg'
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet endings that make you really happy',
    items: [
      {
        id: 'cheesecake',
        name: 'Classic American Cheesecake',
        description: 'With mixed berry coulis',
        price: 7.95,
        category: 'Desserts',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1243197436-1920w.JPG'
      },
      {
        id: 'choco-flan',
        name: 'Choco Flan',
        description: 'Traditional Latin dessert - chocolate cake and flan',
        price: 7.25,
        category: 'Desserts',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1243197436-1920w.JPG'
      },
      {
        id: 'mango-cake',
        name: 'Mango Cake',
        description: 'Fresh tropical mango cake',
        price: 8.00,
        category: 'Desserts',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1243197436-1920w.JPG'
      }
    ]
  }
];

export const locations = [
  {
    id: 'woodbridge',
    name: 'Woodbridge Location',
    address: '13840 Smoketown Road',
    city: 'Woodbridge',
    state: 'VA',
    zip: '22192',
    phone: '(571) 552-4070',
    fax: '(571) 552-4067',
    email: 'happyrevolutioncoffee@gmail.com',
    hours: {
      weekday: '8:00 AM - 8:00 PM',
      weekend: '8:00 AM - 5:00 PM',
      coffeeStarts: {
        weekday: '6:00 AM',
        weekend: '7:00 AM'
      },
      breakfast: '8:30 AM - 11:00 AM',
      lunch: '11:00 AM - 8:00 PM',
      brunch: '11:00 AM - 2:00 PM (Weekends)'
    },
    coordinates: {
      lat: 38.6528439,
      lng: -77.3058118
    }
  }
];

export const coffeeStory = {
  title: 'The Magic of Specialty Coffee',
  subtitle: 'A Third-Wave Coffee Revolution',
  intro: 'Specialty coffee – two words that have ignited a worldwide passion, a new culture of appreciation, and indeed, a revolution in how we experience our beloved cup of coffee.',
  sections: [
    {
      title: 'What Makes Us Special',
      content: `At Happy Place Coffee & Eats, we're proud to be part of the third-wave coffee revolution. We're committed to offering our customers specialty coffee that's been carefully sourced, expertly roasted, and lovingly brewed. We're passionate about providing an exceptional coffee experience that goes beyond the ordinary and delves into the extraordinary.

Specialty coffee cherishes the unique characteristics that each coffee-growing region brings to its beans. Every aspect - from the soil, altitude, and climate of the farm, to the careful selection of ripe coffee cherries, meticulous processing, and expert roasting - all contribute to the unique flavor profile of the final product.`
    },
    {
      title: 'Quality from Source to Cup',
      content: `Our commitment to quality begins at the very source - the coffee farms. We meticulously source our coffee beans from high-altitude farms located in some of the world's most prestigious coffee-growing regions. By partnering with farmers who share our passion for quality, Jessy's Premium Coffee ensures our beans are the very best from the outset.

The journey of quality continues in the roasting process. We leverage years of roasting expertise to roast each bean to perfection, ensuring each achieves the perfect balance of acidity, sweetness, and bitterness.`
    },
    {
      title: 'A Diverse World of Flavors',
      content: `Whether it's the rich, wine-like body of a high-quality Ethiopian coffee, the fruity, bright notes of a Guatemalan single-origin, or the bold, chocolatey flavors of an expertly roasted Colombian coffee, the world of specialty coffee offers a diverse landscape of taste experiences.

We offer 12+ single-origin coffees including Colombia Supremo, Guatemala Antigua, Ethiopia Yirgacheffe, Brazil Premium, Sumatra Mandheling, and more - each with its own unique story and flavor profile.`
    }
  ]
};

export const blogPosts = [
  {
    id: '1',
    title: 'The Third-Wave Coffee Revolution at Happy Place',
    excerpt: 'Learn about our commitment to specialty coffee and why we source only the finest beans from around the world.',
    author: 'Happy Place Team',
    date: '2024-12-15',
    category: 'Coffee Culture',
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg',
    featured: true
  },
  {
    id: '2',
    title: 'From Farm to Cup: Our Coffee Journey',
    excerpt: 'Meet our family and discover how we work directly with farmers to bring you exceptional coffee.',
    author: 'The Happy Place Family',
    date: '2024-12-10',
    category: 'Behind the Scenes',
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/coffeee-1920w.png',
    featured: true
  },
  {
    id: '3',
    title: 'Jessy\'s Premium Coffee: Made with Love',
    excerpt: 'The story behind our signature coffee blend and what makes it special.',
    author: 'Happy Place Family',
    date: '2024-12-05',
    category: 'Our Story',
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg',
    featured: false
  }
];

export const loyaltyTiers = [
  {
    id: 'bronze',
    name: 'Bronze',
    pointsRequired: 0,
    benefits: [
      'Earn 1 point per dollar spent',
      'Birthday reward',
      'Early access to new coffee beans'
    ],
    color: '#CD7F32'
  },
  {
    id: 'silver',
    name: 'Silver',
    pointsRequired: 100,
    benefits: [
      'Earn 1.25 points per dollar',
      'Free refills on drip coffee',
      'Birthday reward',
      'Exclusive coffee tastings'
    ],
    color: '#C0C0C0'
  },
  {
    id: 'gold',
    name: 'Gold',
    pointsRequired: 300,
    benefits: [
      'Earn 1.5 points per dollar',
      'Free drink every 50 points',
      'Priority mobile ordering',
      'Birthday reward + surprise',
      'Exclusive coffee bean discounts'
    ],
    color: '#FFD700'
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Coffee Enthusiast',
    content: 'The cold brew here is incredible! You can taste the quality in every sip. The family who runs this place truly cares about their coffee.',
    rating: 5,
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1367390655-1920w.jpg'
  },
  {
    id: '2',
    name: 'Michael Torres',
    role: 'Regular Customer',
    content: 'Best lattes in Virginia! The Horchata Cold Brew is my new obsession. This family-owned gem knows their coffee.',
    rating: 5,
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg'
  },
  {
    id: '3',
    name: 'Emily Chen',
    role: 'Latte Lover',
    content: 'I love that they have 12 different coffee origins to choose from. The baristas remember my order and the vibe is always welcoming!',
    rating: 5,
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg'
  }
];
