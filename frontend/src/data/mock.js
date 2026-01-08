// Complete Coffee & Drink Menu Data - Version 2
// Updated based on "Coffee Menu Data v1.xlsx" and "Updates to the Coffee Menu.docx"

export const brandAssets = {
  logo: 'https://customer-assets.emergentagent.com/job_local-sip/artifacts/l6mm4os6_Happy-Logo-1920w.webp',
  heroImages: [
    'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1367390655-1920w.jpg',
    'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg',
    'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg',
    'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1243197436-1920w.JPG'
  ]
};

// Customization options for Coffee & Espresso drinks
export const coffeeCustomizations = {
  milk: [
    { id: 'oat-milk', name: 'Oat Milk', price: 0.80, calories: '10-20 per oz' },
    { id: 'almond-milk', name: 'Almond Milk', price: 0.80, calories: '10-20 per oz' },
    { id: 'soy-milk', name: 'Soy Milk', price: 0.80, calories: '10-20 per oz' },
    { id: '2-percent', name: '2% Milk', price: 0, calories: 0 },
    { id: 'whole-milk', name: 'Whole Milk', price: 0, calories: 0 },
    { id: 'nonfat-milk', name: 'Nonfat Milk', price: 0, calories: 0 },
    { id: 'half-half', name: 'Half & Half', price: 0.65, calories: 0 },
    { id: 'heavy-cream', name: 'Heavy Cream', price: 0.80, calories: 0 }
  ],
  addOns: [
    { id: 'whipped-cream', name: 'Whipped Cream', price: 0.50, calories: 100 },
    { id: 'honey-boba', name: 'Honey Boba', price: 0.75, calories: 40 },
    { id: 'brown-sugar-jelly', name: 'Brown Sugar Jelly', price: 0.75, calories: 40 }
  ],
  syrups: [
    { id: 'vanilla', name: 'Vanilla Syrup', price: 0.60, calories: '0-30 per pump' },
    { id: 'sf-vanilla', name: 'Sugar-Free Vanilla', price: 0.60, calories: 0 },
    { id: 'caramel', name: 'Caramel Syrup', price: 0.60, calories: '0-30 per pump' },
    { id: 'hazelnut', name: 'French Hazelnut', price: 0.60, calories: '0-30 per pump' },
    { id: 'coconut', name: 'Coconut Syrup', price: 0.60, calories: '0-30 per pump' },
    { id: 'honey', name: 'Honey Syrup', price: 0.60, calories: '0-30 per pump' },
    { id: 'brown-sugar', name: 'Brown Sugar Syrup', price: 0.60, calories: '0-30 per pump' },
    { id: 'chicory', name: 'Chicory Syrup', price: 0.60, calories: '0-30 per pump' },
    { id: 'simple', name: 'Simple Syrup', price: 0.60, calories: '0-30 per pump' }
  ],
  sauces: [
    { id: 'chocolate', name: 'Chocolate Sauce', price: 0.80, calories: '15-60' },
    { id: 'white-chocolate', name: 'White Chocolate Sauce', price: 0.80, calories: '15-60' },
    { id: 'caramel-sauce', name: 'Caramel Sauce', price: 0.80, calories: '15-60' }
  ],
  shots: [
    { id: 'espresso-shot', name: 'Extra Espresso Shot', price: 1.00, calories: 10 },
    { id: 'decaf-shot', name: 'Decaf Shot', price: 1.00, calories: 10 }
  ],
  toppings: [
    { id: 'caramel-drizzle', name: 'Caramel Drizzle', price: 0.80, calories: 0 },
    { id: 'cinnamon', name: 'Cinnamon', price: 0, calories: 0 }
  ]
};

// Fruit Tea Shaker flavors (free add-on for Iced Tea and Iced Tea Lemonade)
export const fruitTeaShakerFlavors = [
  { id: 'strawberry-lemon', name: 'Strawberry Lemon', price: 0 },
  { id: 'passion-fruit', name: 'Passion Fruit', price: 0 },
  { id: 'yuzu-citrus', name: 'Yuzu Citrus', price: 0 }
];

// Menu Categories - Restructured per requirements
export const menuCategories = [
  {
    id: 'coffee-espresso',
    name: 'Coffee & Espresso',
    description: 'Jessy\'s Premium Coffee - Fresh Roasted 100% Arabica Beans',
    hasCustomization: true,
    items: [
      {
        id: 'drip-coffee',
        name: 'Drip Coffee',
        description: 'Fresh roasted Jessy\'s Premium Coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/drip-coffee-898d1d72-1920w.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 3.70, calories: 0 },
          { size: 'Medium', price: 3.85, calories: 0 },
          { size: 'Large', price: 4.25, calories: 0 }
        ]
      },
      {
        id: 'cafe-au-lait',
        name: 'Café Au Lait',
        description: 'Fresh drip coffee with steamed milk',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CAF-C3-89-AU-LAIT---FEATURED-DARK-1920w.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 3.55, calories: 0 },
          { size: 'Medium', price: 4.00, calories: 0 },
          { size: 'Large', price: 4.45, calories: 0 }
        ]
      },
      {
        id: 'espresso',
        name: 'Espresso',
        description: 'Rich, concentrated shot of premium espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Espresso-0e3f8f36-1920w.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Single', price: 3.00, calories: 0 },
          { size: 'Double', price: 4.65, calories: 0 },
          { size: 'Triple', price: 6.30, calories: 0 }
        ]
      },
      {
        id: 'americano',
        name: 'Americano',
        description: 'Double espresso with hot water',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Americano-10cad5cd-1920w.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 3.75, calories: 0 },
          { size: 'Medium', price: 4.75, calories: 0 },
          { size: 'Large', price: 4.85, calories: 0 }
        ]
      },
      {
        id: 'short-black',
        name: 'Short Black',
        description: 'Single espresso shot - rich and intense',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Short-Black-1920w.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small Only', price: 3.75, calories: 0 }
        ]
      },
      {
        id: 'long-black',
        name: 'Long Black',
        description: 'Double espresso over hot water',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/long-black-1920w.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 4.00, calories: 0 },
          { size: 'Medium', price: 5.00, calories: 0 },
          { size: 'Large', price: 6.00, calories: 0 }
        ]
      },
      {
        id: 'coffee-milk',
        name: 'Coffee & Milk (Doppio)',
        description: '2 espresso shots with milk',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/drip-coffee-898d1d72-1920w.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: '6 oz', price: 5.50, calories: 0 }
        ]
      },
      {
        id: 'latte',
        name: 'Latte',
        description: 'Smooth espresso with velvety steamed milk',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/caffe-latte-990b710d-1920w.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 5.80, calories: 0 },
          { size: 'Medium', price: 6.60, calories: 0 },
          { size: 'Large', price: 7.50, calories: 0 }
        ]
      },
      {
        id: 'flat-white',
        name: 'Flat White',
        description: 'Double espresso with silky microfoam',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Flat---white-1920w.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 5.80, calories: 0 },
          { size: 'Medium', price: 6.60, calories: 0 },
          { size: 'Large', price: 7.50, calories: 0 }
        ]
      },
      {
        id: 'vanilla-latte',
        name: 'Vanilla Latte',
        description: 'Classic latte sweetened with vanilla syrup',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Vanilla-Latte-1920w.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 6.56, calories: 0 },
          { size: 'Medium', price: 7.74, calories: 0 },
          { size: 'Large', price: 8.67, calories: 0 }
        ]
      },
      {
        id: 'caramel-macchiato',
        name: 'Caramel Macchiato',
        description: 'Espresso with vanilla, milk, and caramel drizzle',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Caramel-Machiato-1920w.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 6.00, calories: 0 },
          { size: 'Medium', price: 6.45, calories: 0 },
          { size: 'Large', price: 7.05, calories: 0 }
        ]
      },
      {
        id: 'mocha',
        name: 'Mocha',
        description: 'Espresso with rich chocolate and steamed milk',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/cafe-mocha-8f4d3834-1920w.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 6.50, calories: 0 },
          { size: 'Medium', price: 6.95, calories: 0 },
          { size: 'Large', price: 7.55, calories: 0 }
        ]
      },
      {
        id: 'white-chocolate-mocha',
        name: 'White Chocolate Mocha',
        description: 'Espresso with sweet white chocolate',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/White-chocolate-Mocha-1920w.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 6.60, calories: 0 },
          { size: 'Medium', price: 6.95, calories: 0 },
          { size: 'Large', price: 7.55, calories: 0 }
        ]
      },
      {
        id: 'dark-chocolate-mocha',
        name: 'Dark Chocolate Mocha',
        description: 'Espresso with rich dark chocolate',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Dark-chocolate-Mocha-1920w.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 6.50, calories: 0 },
          { size: 'Medium', price: 6.95, calories: 0 },
          { size: 'Large', price: 7.55, calories: 0 }
        ]
      }
    ]
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Rich espresso artfully balanced with freshly micro-foamed milk',
    hasCustomization: true,
    isCustomizable: true,
    items: [
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: 'The essence of handcrafting - our rich espresso artfully balanced with freshly micro-foamed milk',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Capuccino-3f36d8f2-1920w.png',
        category: 'Cappuccino',
        sizes: [
          { size: 'Small', price: 4.25, calories: 0 },
          { size: 'Medium', price: 4.95, calories: 0 },
          { size: 'Large', price: 5.45, calories: 0 }
        ],
        customOptions: {
          milk: ['2% Milk', 'Whole Milk', 'Nonfat Milk', 'Oat Milk (+$0.82)', 'Almond Milk (+$0.82)', 'Half & Half (+$0.65)', 'Heavy Cream (+$0.08)'],
          foam: ['Regular', 'Dry', 'Wet'],
          milkTemp: ['Warm', 'Regular', 'Extra Hot'],
          shots: ['Add shots (max 10)'],
          pull: ['Long pull', 'Regular pull', 'Short pull'],
          decaf: ['Decaf', 'None']
        }
      },
      {
        id: 'little-havana-cappuccino',
        name: 'Little Havana Cappuccino',
        description: 'Cuban-inspired cappuccino with Latin flair',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Little-Havana-Capuccino-1920w.png',
        category: 'Cappuccino',
        sizes: [
          { size: 'Small', price: 4.90, calories: 0 },
          { size: 'Medium', price: 5.60, calories: 0 },
          { size: 'Large', price: 6.00, calories: 0 }
        ]
      }
    ]
  },
  {
    id: 'custom-drip',
    name: 'Custom Drip',
    description: 'A signature rotation of Happy Place Jessy\'s Premium Coffee Dark Roast',
    hasCustomization: true,
    isCustomizable: true,
    items: [
      {
        id: 'premium-dark-roast',
        name: 'Premium Dark Roast',
        description: 'A signature rotation brewed every 30 minutes for the most flavorful cup',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/drip-coffee-898d1d72-1920w.png',
        category: 'Custom Drip',
        sizes: [
          { size: 'Small', price: 3.00, calories: 0 },
          { size: 'Medium', price: 3.45, calories: 0 },
          { size: 'Large', price: 3.85, calories: 0 }
        ],
        customOptions: {
          roast: ['Featured Dark Roast', 'House Espresso Blend'],
          roomForMilk: ['Room for Milk', 'No Room'],
          addMilk: ['Splash of Half & Half', 'Splash of Whole Milk', 'Splash of 2% Milk', 'Splash of Nonfat Milk', 'Splash of Almond Milk', 'Splash of Oat Milk', 'Splash of Heavy Cream', 'None'],
          sweeteners: ['Raw Sugar (+20 cal)', 'None'],
          decaf: ['Decaf', 'None']
        }
      }
    ]
  },
  {
    id: 'cold-brew-signature',
    name: 'Cold Brew & Signature Beverages',
    description: 'Innovative cold coffee creations',
    hasCustomization: false,
    items: [
      {
        id: 'cold-brew',
        name: 'Cold Brew',
        description: 'Smooth, slow-steeped cold brew coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/COLD-Brew-1920w.png',
        category: 'Cold Brew',
        sizes: [
          { size: 'Small', price: 4.95, calories: 0 },
          { size: 'Medium', price: 5.25, calories: 0 },
          { size: 'Large', price: 5.95, calories: 0 }
        ]
      },
      {
        id: 'cold-brew-oat-latte',
        name: 'Cold Brew Oat Latte',
        description: 'Cold brew with creamy oat milk',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/COLD-BREW-OAT-LATTE-1920w.png',
        category: 'Cold Brew',
        sizes: [
          { size: 'Small', price: 5.85, calories: 0 },
          { size: 'Medium', price: 6.25, calories: 0 },
          { size: 'Large', price: 6.95, calories: 0 }
        ]
      },
      {
        id: 'horchata-espresso',
        name: 'Horchata & Espresso',
        description: 'Creamy horchata with bold espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Horchata---Espresso-1920w.png',
        category: 'Signature',
        sizes: [
          { size: 'Medium Only', price: 7.65, calories: 0 }
        ]
      },
      {
        id: 'horchata-cold-brew-latte',
        name: 'Horchata Cold Brew Oat Latte',
        description: 'Latin-inspired cold brew with horchata and oat milk',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Horchata-COLD-BREW-OAT-LATTE-1920w.png',
        category: 'Signature',
        sizes: [
          { size: 'Medium', price: 7.40, calories: 0 }
        ]
      },
      {
        id: 'cloud-original',
        name: 'Cloud - Original',
        description: 'Cold brew with condensed milk, chicory syrup, and half & half',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Horchata-COLD-BREW-OAT-LATTE-1920w.png',
        category: 'Signature',
        sizes: [
          { size: 'Small', price: 6.00, calories: 0 },
          { size: 'Medium', price: 6.65, calories: 0 },
          { size: 'Large', price: 6.95, calories: 0 }
        ]
      },
      {
        id: 'cloud-coconut',
        name: 'Cloud - Coconut',
        description: 'Cold brew with coconut flavor, condensed milk, chicory syrup',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Horchata-COLD-BREW-OAT-LATTE-1920w.png',
        category: 'Signature',
        sizes: [
          { size: 'Small', price: 6.00, calories: 0 },
          { size: 'Medium', price: 6.65, calories: 0 },
          { size: 'Large', price: 6.95, calories: 0 }
        ]
      },
      {
        id: 'brown-sugar-almond-latte',
        name: 'Brown Sugar Almond Latte with Jelly',
        description: 'Cold brew with brown sugar jelly and almond milk',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Horchata-COLD-BREW-OAT-LATTE-1920w.png',
        category: 'Signature',
        sizes: [
          { size: 'Small', price: 6.50, calories: 0 },
          { size: 'Medium', price: 7.20, calories: 0 },
          { size: 'Large', price: 7.55, calories: 0 }
        ]
      },
      {
        id: 'iced-matcha-jelly',
        name: 'Iced Matcha with Brown Sugar Jelly',
        description: 'Premium matcha with brown sugar jelly',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Ice+Brown+sugar+Matcha+OAT+LATTE-1920w.png',
        category: 'Signature',
        sizes: [
          { size: 'Small', price: 6.65, calories: 0 },
          { size: 'Medium', price: 7.35, calories: 0 },
          { size: 'Large', price: 7.75, calories: 0 }
        ]
      }
    ]
  },
  {
    id: 'frappe',
    name: 'Frappés',
    description: 'Blended cold brew drinks topped with whipped cream',
    hasCustomization: false,
    items: [
      {
        id: 'mocha-frappe',
        name: 'Mocha Frappé',
        description: 'Double fresh cold brew blended with chocolate, milk, and ice',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/cafe-mocha-8f4d3834-1920w.png',
        category: 'Frappé',
        sizes: [
          { size: 'Small', price: 5.15, calories: 0 },
          { size: 'Medium', price: 5.75, calories: 0 },
          { size: 'Large', price: 6.25, calories: 0 }
        ]
      },
      {
        id: 'caramel-frappe',
        name: 'Caramel Frappé',
        description: 'Cold brew blended with caramel, milk, and ice',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Caramel-Machiato-1920w.png',
        category: 'Frappé',
        sizes: [
          { size: 'Small', price: 5.25, calories: 0 },
          { size: 'Medium', price: 5.85, calories: 0 },
          { size: 'Large', price: 6.35, calories: 0 }
        ]
      },
      {
        id: 'matcha-frappe',
        name: 'Matcha Frappé',
        description: 'Premium matcha blended with milk and ice',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Ice+Matcha+frappe-1920w.jpg',
        category: 'Frappé',
        sizes: [
          { size: 'Small', price: 5.15, calories: 0 },
          { size: 'Medium', price: 5.85, calories: 0 },
          { size: 'Large', price: 6.35, calories: 0 }
        ]
      }
    ]
  },
  {
    id: 'tea-options',
    name: 'Tea Options',
    description: 'Premium tea beverages',
    hasCustomization: false,
    items: [
      {
        id: 'brewed-tea',
        name: 'Brewed Tea',
        description: 'Black, green, or herbal',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Ice+Matcha+frappe-1920w.jpg',
        category: 'Tea',
        sizes: [
          { size: 'Small', price: 3.00, calories: 0 },
          { size: 'Large', price: 3.45, calories: 0 }
        ]
      },
      {
        id: 'matcha-latte',
        name: 'Matcha Latte',
        description: 'Premium matcha green tea with steamed milk',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Ice-Matcha-1920w.png',
        category: 'Tea',
        sizes: [
          { size: 'Small', price: 4.75, calories: 0 },
          { size: 'Medium', price: 5.50, calories: 0 },
          { size: 'Large', price: 5.90, calories: 0 }
        ]
      },
      {
        id: 'chai-latte',
        name: 'Chai Latte',
        description: 'Spiced chai tea with steamed milk',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png',
        category: 'Tea',
        sizes: [
          { size: 'Small', price: 5.45, calories: 0 },
          { size: 'Medium', price: 5.95, calories: 0 },
          { size: 'Large', price: 6.45, calories: 0 }
        ]
      },
      {
        id: 'iced-tea',
        name: 'Iced Tea',
        description: 'Black, green, or wild berry hibiscus',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png',
        category: 'Tea',
        hasFruitTeaShaker: true,
        sizes: [
          { size: 'Small', price: 3.00, calories: 0 },
          { size: 'Medium', price: 3.55, calories: 0 },
          { size: 'Large', price: 3.95, calories: 0 }
        ]
      },
      {
        id: 'iced-tea-lemonade',
        name: 'Iced Tea Lemonade',
        description: 'Refreshing blend of iced tea and lemonade',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png',
        category: 'Tea',
        hasFruitTeaShaker: true,
        sizes: [
          { size: 'Small', price: 3.75, calories: 0 },
          { size: 'Medium', price: 4.35, calories: 0 },
          { size: 'Large', price: 4.75, calories: 0 }
        ]
      }
    ]
  },
  {
    id: 'non-coffee',
    name: 'Non-Coffee',
    description: 'Delicious beverages without coffee',
    hasCustomization: false,
    items: [
      {
        id: 'hot-cocoa',
        name: 'Hot Cocoa',
        description: 'Rich chocolate drink with whipped cream',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png',
        category: 'Non-Coffee',
        sizes: [
          { size: 'Small', price: 4.40, calories: 0 },
          { size: 'Medium', price: 4.70, calories: 0 },
          { size: 'Large', price: 5.10, calories: 0 }
        ]
      },
      {
        id: 'vanilla-steamer',
        name: 'Vanilla Steamer',
        description: 'Steamed milk with vanilla - no coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Vanilla-Latte-1920w.png',
        category: 'Non-Coffee',
        sizes: [
          { size: 'Small', price: 3.80, calories: 0 },
          { size: 'Medium', price: 4.20, calories: 0 },
          { size: 'Large', price: 4.50, calories: 0 }
        ]
      },
      {
        id: 'vanilla-frappe-non-coffee',
        name: 'Vanilla Frappé',
        description: 'Creamy vanilla blended drink - no coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Vanilla-Latte-1920w.png',
        category: 'Non-Coffee',
        sizes: [
          { size: 'Small', price: 5.15, calories: 0 },
          { size: 'Medium', price: 5.75, calories: 0 },
          { size: 'Large', price: 6.25, calories: 0 }
        ]
      }
    ]
  }
];

// Best Sellers - References to items with their default selected size
export const bestSellers = [
  { categoryId: 'coffee-espresso', itemId: 'latte' },
  { categoryId: 'cold-brew-signature', itemId: 'cold-brew' },
  { categoryId: 'cappuccino', itemId: 'cappuccino' },
  { categoryId: 'cold-brew-signature', itemId: 'horchata-espresso' },
  { categoryId: 'coffee-espresso', itemId: 'drip-coffee' },
  { categoryId: 'coffee-espresso', itemId: 'caramel-macchiato' }
];

// Nutritional disclaimer
export const nutritionalDisclaimer = `Milk-based beverage calories are calculated using 2% milk, except where noted. Additional nutritional information is available upon request. 2,000 calories a day is used for general nutrition advice, but calorie needs vary. Sugar-free, light, or decaf options may be available. We cannot guarantee that our products are free of allergens (including dairy, egg, soy, tree nuts, wheat, and others) as we use shared equipment to store, prepare, and serve them.`;

// Testimonials data
export const testimonials = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    role: 'Regular Customer',
    content: 'Best coffee in Woodbridge! The Little Havana Cappuccino is absolutely divine. The family atmosphere makes every visit feel like coming home.',
    rating: 5
  },
  {
    id: 2,
    name: 'James Thompson',
    role: 'Local Business Owner',
    content: 'I host all my morning meetings here. The coffee is consistently excellent, and the staff remembers my order. True community gem!',
    rating: 5
  },
  {
    id: 3,
    name: 'Sofia Martinez',
    role: 'Coffee Enthusiast',
    content: 'Finally found a place that does authentic Latin coffee drinks right! The Horchata Cold Brew is my new obsession. Highly recommend!',
    rating: 5
  }
];

// Blog posts data
export const blogPosts = [
  {
    id: 1,
    title: 'The Art of the Perfect Espresso Shot',
    excerpt: 'Discover the secrets behind our barista-crafted espresso and what makes it special.',
    content: 'At Happy Place, every espresso shot is pulled with precision and care...',
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Espresso-0e3f8f36-1920w.png',
    category: 'Coffee Culture',
    author: 'Happy Place Team',
    date: 'December 15, 2025',
    featured: true
  },
  {
    id: 2,
    title: 'Our Latin-American Coffee Heritage',
    excerpt: 'Learn about the family traditions that inspire our unique menu offerings.',
    content: 'Coffee has always been at the heart of Latin-American culture...',
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Little-Havana-Capuccino-1920w.png',
    category: 'Our Story',
    author: 'Happy Place Family',
    date: 'December 10, 2025',
    featured: true
  },
  {
    id: 3,
    title: 'Cold Brew vs Iced Coffee: Know the Difference',
    excerpt: 'Understanding what makes our slow-steeped cold brew uniquely smooth.',
    content: 'Many coffee lovers confuse cold brew with iced coffee, but they are quite different...',
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/COLD-Brew-1920w.png',
    category: 'Coffee 101',
    author: 'Happy Place Team',
    date: 'December 5, 2025',
    featured: false
  }
];

// Location data
export const locationData = {
  name: 'Happy Place Coffee & Eats',
  address: '13840 Smoketown Road',
  city: 'Woodbridge',
  state: 'VA',
  zip: '22192',
  phone: '(571) 552-4070',
  email: 'hello@happyplacecoffeeandeats.com',
  hours: {
    weekday: '8:00 AM - 8:00 PM',
    saturday: '8:00 AM - 8:00 PM',
    sunday: '8:00 AM - 5:00 PM'
  },
  coordinates: {
    lat: 38.6584,
    lng: -77.3064
  }
};

// About page content
export const aboutContent = {
  story: `Happy Place Coffee & Eats started as a dream - a dream to create a space where everyone feels welcome, 
  where the coffee is always fresh, and where Latin-American flavors meet American comfort food. 
  We're a family-owned business that believes in quality ingredients, authentic recipes, and treating every guest like family.`,
  mission: `Our mission is to be your happy place - a welcoming neighborhood café where you can enjoy 
  exceptional coffee, delicious food, and genuine hospitality. We source the finest ingredients 
  and craft every drink and dish with love and attention to detail.`,
  values: [
    {
      title: 'Family First',
      description: 'We treat our team and customers like family, creating a warm and welcoming environment for everyone.'
    },
    {
      title: 'Quality Always',
      description: 'From our Jessy\'s Premium Coffee beans to our fresh ingredients, we never compromise on quality.'
    },
    {
      title: 'Community Focused',
      description: 'We\'re proud to be a part of the Woodbridge community and give back whenever we can.'
    }
  ]
};

// Coffee story for About page
export const coffeeStory = aboutContent.story;

// Locations data (array format for compatibility)
export const locations = [locationData];

// Loyalty tiers for Rewards page
export const loyaltyTiers = [
  {
    name: 'Coffee Lover',
    points: 0,
    benefits: ['Earn 1 point per $1 spent', 'Birthday drink on us', 'Member-only promotions'],
    color: 'amber'
  },
  {
    name: 'Coffee Enthusiast', 
    points: 100,
    benefits: ['Earn 1.25 points per $1 spent', 'Free drink every 125 points', 'Early access to new menu items'],
    color: 'orange'
  },
  {
    name: 'Coffee Connoisseur',
    points: 500,
    benefits: ['Earn 1.5 points per $1 spent', 'Free drink every 100 points', 'Exclusive tasting events'],
    color: 'red'
  }
];
