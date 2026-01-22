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
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Drip%20Coffee.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 3.55, calories: 0 },
          { size: 'Medium', price: 3.75, calories: 0 },
          { size: 'Large', price: 4.00, calories: 0 }
        ]
      },
      {
        id: 'cafe-au-lait',
        name: 'Café Au Lait',
        description: 'Fresh drip coffee with steamed milk',
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Caf%C3%A9%20au%20Lait.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 3.55, calories: 50 },
          { size: 'Medium', price: 4.00, calories: 70 },
          { size: 'Large', price: 4.45, calories: 80 }
        ]
      },
      {
        id: 'espresso',
        name: 'Espresso',
        description: 'Rich, concentrated shot of premium espresso',
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Espresso.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Single', price: 3.00, calories: 10 },
          { size: 'Double', price: 4.65, calories: 15 },
          { size: 'Triple', price: 6.30, calories: 25 }
        ]
      },
      {
        id: 'americano',
        name: 'Americano',
        description: 'Double espresso with hot water',
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Americano.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 3.75, calories: 15 },
          { size: 'Medium', price: 4.75, calories: 25 },
          { size: 'Large', price: 4.85, calories: 25 }
        ]
      },
      {
        id: 'short-black',
        name: 'Short Black',
        description: 'Single espresso shot - rich and intense',
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Short%20Black.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small Only', price: 3.00, calories: 10 }
        ]
      },
      {
        id: 'long-black',
        name: 'Long Black',
        description: 'Double espresso over hot water',
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Long%20Black.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 3.70, calories: 15 },
          { size: 'Medium', price: 4.00, calories: 25 },
          { size: 'Large', price: 4.25, calories: 25 }
        ]
      },
      {
        id: 'coffee-milk',
        name: 'Coffee & Milk (Doppio)',
        description: '2 espresso shots with milk',
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Coffee%20%26%20Milk.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: '6 oz', price: 5.50, calories: 0 }
        ]
      },
      {
        id: 'latte',
        name: 'Latte',
        description: 'Smooth espresso with velvety steamed milk',
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Latte.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 5.00, calories: 170 },
          { size: 'Medium', price: 4.25, calories: 220 },
          { size: 'Large', price: 5.50, calories: 240 }
        ]
      },
      {
        id: 'flat-white',
        name: 'Flat White',
        description: 'Double espresso with silky microfoam',
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Flat%20White.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 6.00, calories: 120 },
          { size: 'Medium', price: 5.60, calories: 140 },
          { size: 'Large', price: 4.90, calories: 160 }
        ]
      },
      {
        id: 'vanilla-latte',
        name: 'Vanilla Latte',
        description: 'Classic latte sweetened with vanilla syrup',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Vanilla-Latte-1920w.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 5.85, calories: 240 },
          { size: 'Medium', price: 6.25, calories: 320 },
          { size: 'Large', price: 6.65, calories: 370 }
        ]
      },
      {
        id: 'caramel-macchiato',
        name: 'Caramel Macchiato',
        description: 'Espresso with vanilla, milk, and caramel drizzle',
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Caramel%20Macchiato.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 4.25, calories: 300 },
          { size: 'Medium', price: 4.95, calories: 350 },
          { size: 'Large', price: 5.45, calories: 420 }
        ]
      },
      {
        id: 'mocha',
        name: 'Mocha',
        description: 'Espresso with rich chocolate and steamed milk',
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Mocha.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 6.50, calories: 360 },
          { size: 'Medium', price: 6.95, calories: 410 },
          { size: 'Large', price: 7.55, calories: 480 }
        ]
      },
      {
        id: 'white-chocolate-mocha',
        name: 'White Chocolate Mocha',
        description: 'Espresso with sweet white chocolate',
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Mocha.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 5.15, calories: 360 },
          { size: 'Medium', price: 5.75, calories: 400 },
          { size: 'Large', price: 6.25, calories: 480 }
        ]
      },
      {
        id: 'dark-chocolate-mocha',
        name: 'Dark Chocolate Mocha',
        description: 'Espresso with rich dark chocolate',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Dark-chocolate-Mocha-1920w.png',
        category: 'Coffee & Espresso',
        sizes: [
          { size: 'Small', price: 6.00, calories: 410 },
          { size: 'Medium', price: 6.45, calories: 470 },
          { size: 'Large', price: 7.05, calories: 570 }
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
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Cappuccino.png',
        category: 'Cappuccino',
        sizes: [
          { size: 'Small', price: 4.65, calories: 120 },
          { size: 'Medium', price: 5.10, calories: 140 },
          { size: 'Large', price: 5.50, calories: 160 }
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
          { size: 'Small', price: 4.90, calories: 140 },
          { size: 'Medium', price: 5.60, calories: 190 },
          { size: 'Large', price: 6.00, calories: 260 }
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
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Cold%20Brew.png',
        category: 'Cold Brew',
        sizes: [
          { size: 'Small', price: 3.75, calories: 0 },
          { size: 'Medium', price: 3.95, calories: 0 },
          { size: 'Large', price: 4.45, calories: 0 }
        ]
      },
      {
        id: 'cold-brew-oat-latte',
        name: 'Cold Brew Oat Latte',
        description: 'Cold brew with creamy oat milk',
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Cold%20Brew%20Oat%20Latte.png',
        category: 'Cold Brew',
        sizes: [
          { size: 'Small', price: 5.25, calories: 150 },
          { size: 'Medium', price: 4.75, calories: 230 },
          { size: 'Large', price: 5.50, calories: 300 }
        ]
      },
      {
        id: 'horchata-espresso',
        name: 'Horchata & Espresso',
        description: 'Creamy horchata with bold espresso',
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Horchata%20%26%20Espresso.png',
        category: 'Signature',
        sizes: [
          { size: 'Medium Only', price: 7.65, calories: 0 }
        ]
      },
      {
        id: 'horchata-cold-brew-latte',
        name: 'Horchata Cold Brew Oat Latte',
        description: 'Latin-inspired cold brew with horchata and oat milk',
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Horchata%20Cold%20Brew%20Oat%20Latte.png',
        category: 'Signature',
        sizes: [
          { size: 'Medium', price: 7.40, calories: 150 }
        ]
      },
      {
        id: 'cloud-original',
        name: 'Cloud - Original',
        description: 'Cold brew with condensed milk, chicory syrup, and half & half',
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Cloud.png',
        category: 'Signature',
        sizes: [
          { size: 'Small', price: 3.75, calories: 160 },
          { size: 'Medium', price: 3.55, calories: 190 },
          { size: 'Large', price: 4.25, calories: 260 }
        ]
      },
      {
        id: 'cloud-coconut',
        name: 'Cloud - Coconut',
        description: 'Cold brew with coconut flavor, condensed milk, chicory syrup',
        image: 'https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Cloud.png',
        category: 'Signature',
        sizes: [
          { size: 'Small', price: 4.95, calories: 160 },
          { size: 'Medium', price: 4.70, calories: 190 },
          { size: 'Large', price: 5.00, calories: 260 }
        ]
      },
      {
        id: 'brown-sugar-almond-latte',
        name: 'Brown Sugar Almond Latte with Jelly',
        description: 'Cold brew with brown sugar jelly and almond milk',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80',
        category: 'Signature',
        sizes: [
          { size: 'Small', price: 6.50, calories: 230 },
          { size: 'Medium', price: 7.20, calories: 300 },
          { size: 'Large', price: 7.55, calories: 370 }
        ]
      },
      {
        id: 'iced-matcha-jelly',
        name: 'Iced Matcha with Brown Sugar Jelly',
        description: 'Premium matcha with brown sugar jelly',
        image: 'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=800&q=80',
        category: 'Signature',
        sizes: [
          { size: 'Small', price: 6.65, calories: 230 },
          { size: 'Medium', price: 6.95, calories: 300 },
          { size: 'Large', price: 6.95, calories: 380 }
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
          { size: 'Small', price: 3.75, calories: 370 },
          { size: 'Medium', price: 4.35, calories: 440 },
          { size: 'Large', price: 5.10, calories: 570 }
        ]
      },
      {
        id: 'caramel-frappe',
        name: 'Caramel Frappé',
        description: 'Cold brew blended with caramel, milk, and ice',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Caramel-Machiato-1920w.png',
        category: 'Frappé',
        sizes: [
          { size: 'Small', price: 3.75, calories: 400 },
          { size: 'Medium', price: 4.25, calories: 460 },
          { size: 'Large', price: 4.65, calories: 610 }
        ]
      },
      {
        id: 'matcha-frappe',
        name: 'Matcha Frappé',
        description: 'Premium matcha blended with milk and ice',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Ice+Matcha+frappe-1920w.jpg',
        category: 'Frappé',
        sizes: [
          { size: 'Small', price: 3.75, calories: 290 },
          { size: 'Medium', price: 4.25, calories: 360 },
          { size: 'Large', price: 4.65, calories: 470 }
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
          { size: 'Large', price: 3.45, calories: 5 }
        ]
      },
      {
        id: 'matcha-latte',
        name: 'Matcha Latte',
        description: 'Premium matcha green tea with steamed milk',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Ice-Matcha-1920w.png',
        category: 'Tea',
        sizes: [
          { size: 'Small', price: 5.95, calories: 210 },
          { size: 'Medium', price: 5.50, calories: 300 },
          { size: 'Large', price: 6.25, calories: 340 }
        ]
      },
      {
        id: 'chai-latte',
        name: 'Chai Latte',
        description: 'Spiced chai tea with steamed milk',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png',
        category: 'Tea',
        sizes: [
          { size: 'Small', price: 3.75, calories: 200 },
          { size: 'Medium', price: 4.35, calories: 240 },
          { size: 'Large', price: 4.75, calories: 290 }
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
          { size: 'Small', price: 3.75, calories: 0 },
          { size: 'Medium', price: 4.15, calories: 0 },
          { size: 'Large', price: 4.50, calories: 0 }
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
          { size: 'Small', price: 3.75, calories: 40 },
          { size: 'Medium', price: 4.25, calories: 50 },
          { size: 'Large', price: 4.50, calories: 90 }
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
          { size: 'Small', price: 3.00, calories: 420 },
          { size: 'Medium', price: 3.55, calories: 530 },
          { size: 'Large', price: 3.45, calories: 600 }
        ]
      },
      {
        id: 'vanilla-steamer',
        name: 'Vanilla Steamer',
        description: 'Steamed milk with vanilla - no coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Vanilla-Latte-1920w.png',
        category: 'Non-Coffee',
        sizes: [
          { size: 'Small', price: 3.00, calories: 250 },
          { size: 'Medium', price: 3.55, calories: 330 },
          { size: 'Large', price: 3.45, calories: 370 }
        ]
      },
      {
        id: 'vanilla-frappe-non-coffee',
        name: 'Vanilla Frappé',
        description: 'Creamy vanilla blended drink - no coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Vanilla-Latte-1920w.png',
        category: 'Non-Coffee',
        sizes: [
          { size: 'Small', price: 3.00, calories: 370 },
          { size: 'Medium', price: 3.55, calories: 470 },
          { size: 'Large', price: 3.45, calories: 600 }
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

// Coffee story for About page - structured for About.jsx
export const coffeeStory = {
  intro: `Happy Place Coffee & Eats started as a dream - a dream to create a space where everyone feels welcome, where the coffee is always fresh, and where Latin-American flavors meet American comfort food.`,
  subtitle: 'Our Story',
  sections: [
    {
      title: 'Family-Owned & Operated',
      content: `We're a family-owned business that believes in quality ingredients, authentic recipes, and treating every guest like family. Every cup we serve is crafted with love and attention to detail.`
    },
    {
      title: 'Jessy\'s Premium Coffee',
      content: `Our signature Jessy's Premium Coffee is fresh roasted 100% Arabica beans, sourced from the world's finest coffee-growing regions. We offer 12+ single-origin coffees including Colombian Supremo, Ethiopian Yirgacheffe, and Guatemala Antigua.`
    },
    {
      title: 'Our Mission',
      content: `Our mission is to be your happy place - a welcoming neighborhood café where you can enjoy exceptional coffee, delicious food, and genuine hospitality. We source the finest ingredients and craft every drink and dish with passion.`
    }
  ]
};

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

// Coffee Menu Hero Image
export const coffeeHeroImage = 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/coffeee-1920w.png';


// =======================
// BREAKFAST MENU DATA
// =======================

export const breakfastHeroImage = 'https://customer-assets.emergentagent.com/job_happyeats/artifacts/59ah1pxf_hero_breakfast_2400x800.jpg';

export const breakfastCustomizations = {
  proteins: {
    baleadas: [
      { id: 'avocado', name: 'Avocado', price: 1.50 },
      { id: 'chicken', name: 'Chicken', price: 3.00 },
      { id: 'beef', name: 'Beef', price: 4.00 },
      { id: 'mexican-chorizo', name: 'Mexican Chorizo', price: 3.49 }
    ]
  },
  bread: [
    { id: 'white', name: 'White Bread', price: 0 },
    { id: 'whole-grain', name: 'Whole-Grain', price: 0 },
    { id: 'plain-bagel', name: 'Plain Bagel', price: 0 },
    { id: 'everything-bagel', name: 'Everything Bagel', price: 0 },
    { id: 'croissant', name: 'Croissant', price: 0 }
  ],
  extras: {
    sandwich: [
      { id: 'extra-eggs', name: 'Extra Eggs', price: 2.99 },
      { id: 'extra-sausage', name: 'Extra Sausage', price: 3.99 }
    ]
  },
  cheese: [
    { id: 'yellow', name: 'Yellow', price: 0 },
    { id: 'white', name: 'White', price: 0 },
    { id: 'provolone', name: 'Provolone', price: 0 },
    { id: 'swiss', name: 'Swiss', price: 0 },
    { id: 'pepper-jack', name: 'Pepper Jack', price: 0 }
  ],
  buildYourOwn: {
    veggies: [
      { id: 'spinach', name: 'Spinach', price: 0 },
      { id: 'scallions', name: 'Scallions', price: 0 },
      { id: 'red-peppers', name: 'Red Peppers', price: 0 },
      { id: 'green-peppers', name: 'Green Peppers', price: 0 },
      { id: 'mushrooms', name: 'Mushrooms', price: 0 },
      { id: 'tomatoes', name: 'Tomatoes', price: 0 },
      { id: 'broccoli', name: 'Broccoli', price: 0 },
      { id: 'jalapenos', name: 'Jalapeños', price: 0 },
      { id: 'kalamata-olives', name: 'Kalamata Olives', price: 0 },
      { id: 'potatoes', name: 'Potatoes', price: 0 },
      { id: 'capers', name: 'Capers', price: 0 }
    ],
    cheese: [
      { id: 'american', name: 'American', price: 0 },
      { id: 'cheddar', name: 'Cheddar', price: 0 },
      { id: 'swiss', name: 'Swiss', price: 0 },
      { id: 'pepper-jack', name: 'Pepper Jack', price: 0 },
      { id: 'feta', name: 'Feta', price: 0 },
      { id: 'cream-cheese', name: 'Cream Cheese', price: 0 }
    ],
    meats: [
      { id: 'bacon', name: 'Bacon', price: 0 },
      { id: 'canadian-bacon', name: 'Canadian Bacon', price: 0 },
      { id: 'sausage', name: 'Sausage', price: 0 },
      { id: 'turkey-sausage', name: 'Turkey Sausage', price: 0 },
      { id: 'chicken', name: 'Chicken', price: 0 },
      { id: 'chorizo', name: 'Chorizo', price: 0 }
    ],
    premiumMeats: [
      { id: 'steak', name: 'Steak', price: 3.99 },
      { id: 'lox', name: 'Lox', price: 3.99 }
    ]
  }
};

export const breakfastCategories = [
  {
    id: 'breakfast-sandwiches',
    name: 'Happy Breakfast Sandwiches',
    items: [
      { id: 'our-happy-place', name: 'OUR HAPPY PLACE', description: 'Scrambled eggs, spinach, tomato, Swiss, mushroom on a butter croissant', price: 11.95, hasCustomization: false },
      { id: 'egg-cheese', name: 'EGG & CHEESE', description: 'Egg and cheese on your choice of bread', price: 10.99, hasCustomization: true, customizationTypes: ['bread', 'cheese', 'extras'] },
      { id: 'ham-egg-cheese', name: 'HAM, EGG & CHEESE', description: 'Ham, egg, and cheese on your choice of bread', price: 11.95, hasCustomization: true, customizationTypes: ['bread', 'cheese', 'extras'] },
      { id: 'bacon-egg-cheese', name: 'BACON, EGG & CHEESE', description: 'Bacon, egg, and cheese on your choice of bread', price: 12.49, hasCustomization: true, customizationTypes: ['bread', 'cheese', 'extras'] },
      { id: 'sausage-egg-cheese', name: 'SAUSAGE, EGG & CHEESE', description: 'Sausage, egg, and cheese on your choice of bread', price: 12.99, hasCustomization: true, customizationTypes: ['bread', 'cheese', 'extras'] }
    ]
  },
  {
    id: 'latino-breakfast',
    name: 'Latino Breakfast',
    items: [
      { id: 'baleadas', name: 'BALEADAS CATRACHAS (regular)', description: 'Scrambled eggs, pinto refried beans, spanish sour cream, fresh cheese on a flour tortilla', price: 10.00, hasCustomization: true, customizationTypes: ['baleadas-proteins'] },
      { id: 'barrios', name: 'BARRIOS BREAKFAST', description: '2 eggs scrambled or sunny side up, served with mexican sausage, fried beans, fried plantains, sour cream, corn or flour tortilla', price: 14.49, hasCustomization: false },
      { id: 'huevos-rancheros', name: 'HUEVOS RANCHEROS', description: '2 fried eggs served on lightly fried corn tortillas topped with salsa ranchera. Served with avocado, pinto refried beans, spanish fresh cheese, spanish sour cream', price: 13.95, hasCustomization: false },
      { id: 'chicken-quesadilla', name: 'CHICKEN QUESADILLA', description: 'Blended cheese, latino sour cream, guacamole', price: 14.00, hasCustomization: false }
    ]
  },
  {
    id: 'happy-eggs',
    name: 'Happy Eggs',
    items: [
      { id: 'eggs-platter', name: '2 HAPPY EGGS PLATTER', description: 'Eggs your way served with choice of bacon or sausage. Served with fries and choice of bread', price: 12.49, hasCustomization: false },
      { id: 'happy-scramble', name: 'HAPPY SCRAMBLE', description: 'Mushrooms, broccoli, scallions, bacon, mexico chorizo, mexican style shredded cheese', price: 15.99, hasCustomization: false },
      { id: 'south-border-scramble', name: 'SOUTH OF THE BORDER SCRAMBLE', description: 'Mexican chorizo, tomatoes, onions, green peppers, potatoes, salsa, sour cream, & pepper jack cheese', price: 14.99, hasCustomization: false },
      { id: 'florentine-omelet', name: 'FLORENTINE OMELET', description: 'Scallions, spinach, bacon, & Parmesan cheese', price: 13.95, hasCustomization: false },
      { id: 'veggie-omelet', name: 'VEGGIE OMELET', description: 'Mushrooms, spinach, tomatoes, green peppers, red peppers, onions, & broccoli', price: 14.99, hasCustomization: false },
      { id: 'build-your-own', name: 'BUILD YOUR OWN SCRAMBLE, OMELET, OR BURRITO', description: 'Choose your veggies, cheese, and meats to create your perfect dish', price: 13.99, hasCustomization: true, customizationTypes: ['build-your-own'] }
    ]
  },
  {
    id: 'happily-original',
    name: 'Happily Original',
    items: [
      { id: 'happily-original', name: 'HAPPILY ORIGINAL', description: 'Oatmeal with brown sugar, peanut butter or raisins. Add blueberries, pecan, honey or banana', price: 2.50, hasCustomization: false },
      { id: 'granola-bowl', name: 'SUNRISE GRANOLA BOWL', description: 'Non-fat vanilla Greek yogurt with fresh, seasonal fruit and granola', price: 11.99, hasCustomization: false },
      { id: 'fruit-bowl', name: 'FRUIT BOWL', description: 'Mixed Fruit with plain yogurt', price: 10.95, hasCustomization: false }
    ]
  },
  {
    id: 'from-griddle',
    name: 'From the Griddle',
    items: [
      { id: 'pancakes-short', name: 'PANCAKES (short)', description: '2 pancakes', price: 10.00, hasCustomization: false },
      { id: 'pancakes-full', name: 'PANCAKES (full)', description: '3 pancakes', price: 13.95, hasCustomization: false },
      { id: 'french-toast', name: 'TRADITIONAL FRENCH TOAST', description: 'Topped with powdered sugar and served with syrup and butter', price: 12.49, hasCustomization: false },
      { id: 'bananas-foster', name: 'BANANAS FOSTER FRENCH TOAST', description: 'Fresh bananas pan-fried in syrup. Topped with powdered sugar', price: 13.99, hasCustomization: false },
      { id: 'waffles-one', name: 'WAFFLES (one)', description: '1 waffle. Strawberry, blueberry, syrup and butter', price: 12.00, hasCustomization: false },
      { id: 'waffles-two', name: 'WAFFLES (two)', description: '2 waffles. Strawberry, blueberry, syrup and butter', price: 20.00, hasCustomization: false }
    ]
  },
  {
    id: 'hp-special',
    name: 'HP Special',
    items: [
      { id: 'joelles-special', name: "Joelle's Special", description: 'All atop toasted English muffin and served with potatoes Hollandaise. Add fried green tomatoes and served with our secret Sweet Potato Hash', price: 14.49, hasCustomization: false },
      { id: 'classic-benedict', name: 'The Classic Benedict', description: 'All atop toasted English muffin and served with potatoes Hollandaise. Pork ham', price: 15.99, hasCustomization: false }
    ]
  },
  {
    id: 'super-sides',
    name: 'Super Sides',
    items: [
      { id: 'toast', name: 'TOAST', description: 'Two slices, choose white, wheat, sourdough, or rye bread. Comes buttered with your choice of jam', price: 3.09, hasCustomization: false },
      { id: 'bacon-strips', name: 'BACON STRIPS', description: '(3) strips - specify your level of crispiness when ordering', price: 3.99, hasCustomization: false },
      { id: 'bagel-cream-cheese', name: 'BAGEL AND CREAM CHEESE', description: 'Plain, salt, cheese, or everything bagel with plain cream cheese', price: 4.13, hasCustomization: false },
      { id: 'eggs', name: 'EGGS', description: '(2) eggs - scrambled, poached, over easy, or sunny side up', price: 3.49, hasCustomization: false },
      { id: 'pork-sausage', name: 'PORK SAUSAGE', description: '', price: 3.20, hasCustomization: false },
      { id: 'pancake', name: 'PANCAKE', description: 'One 8 inch pancake served with butter & syrup', price: 4.99, hasCustomization: false },
      { id: 'seasonal-fruit', name: 'SEASONAL FRUIT', description: '', price: 4.49, hasCustomization: false },
      { id: 'yogurt', name: 'YOGURT', description: '', price: 3.49, hasCustomization: false },
      { id: 'granola-fruit-yogurt', name: 'GRANOLA, FRUIT AND YOGURT', description: '', price: 4.99, hasCustomization: false }
    ]
  },
  {
    id: 'breakfast-drinks',
    name: 'Drinks',
    items: [
      { id: 'fountain-soda', name: 'FOUNTAIN SODA', description: 'Coca Cola products', price: 3.75, hasCustomization: false },
      { id: 'iced-tea', name: 'ICED TEA', description: 'Sweet, unsweet, green tea', price: 4.00, hasCustomization: false },
      { id: 'lemonade', name: 'LEMONADE', description: 'Classic lemon or pink', price: 3.99, hasCustomization: false }
    ]
  }
];

// =======================
// DINNER MENU DATA
// =======================

export const dinnerHeroImage = 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1920';

export const dinnerCustomizations = {
  saladProtein: [
    { id: 'salmon', name: 'Salmon', price: 5.00 },
    { id: 'beef', name: 'Beef', price: 4.00 },
    { id: 'chicken', name: 'Chicken', price: 3.00 }
  ],
  saladDressing: [
    { id: 'ranch', name: 'Ranch', price: 0 },
    { id: 'chipotle', name: 'Chipotle', price: 0 },
    { id: 'caesar', name: 'Caesar', price: 0 },
    { id: 'balsamic', name: 'Balsamic Vinaigrette', price: 0 }
  ],
  sandwichBread: [
    { id: 'sourdough', name: 'Sourdough', price: 0 },
    { id: 'italian', name: 'Italian Bread', price: 0 }
  ],
  baleadasProteins: [
    { id: 'avocado', name: 'Avocado', price: 1.50 },
    { id: 'chicken', name: 'Chicken', price: 3.00 },
    { id: 'beef', name: 'Beef', price: 4.00 },
    { id: 'mexican-chorizo', name: 'Mexican Chorizo', price: 3.49 }
  ]
};

export const dinnerCategories = [
  {
    id: 'happy-beginnings',
    name: 'Happy Beginnings',
    items: [
      { id: 'calamari', name: 'CALAMARI', description: 'Flash fried and served with pesto mayonnaise', price: 14.99, hasCustomization: false },
      { id: 'caprese-soup', name: 'CAPRESE SOUP', description: 'Tomato, Cream with Melted Mozzarella, Shredded Cheese, Olive Oil', price: 10.99, hasCustomization: false }
    ]
  },
  {
    id: 'hand-held-happiness',
    name: 'Hand Held Happiness',
    description: 'All sandwiches are served with sourdough or italian bread, and fries, lettuce, tomatoes, onions and pickles',
    items: [
      { id: 'hpc-hamburger', name: 'JUICY HPC HAMBURGER', description: 'Fresh Ground Beef Stuffed with Cheddar Cheese, Mozzarella, Candied Onions and Bacon', price: 15.95, hasCustomization: true, customizationTypes: ['sandwich-bread'] },
      { id: 'turkey-hpc', name: 'TURKEY THE HPC WAY', description: 'Slices Of Fresh Roasted Turkey, Cranberry, and Creole Mayonnaise', price: 14.99, hasCustomization: true, customizationTypes: ['sandwich-bread'] },
      { id: 'roast-beef-panini', name: 'ROAST BEEF PANINI', description: 'Roast beef, Swiss cheese, house-roasted onions, Smoked Tomato, and Pesto Mayonnaise on sourdough bread', price: 15.49, hasCustomization: true, customizationTypes: ['sandwich-bread'] },
      { id: 'casino-royale', name: 'HAPPY CASINO ROYALE', description: 'Smoked Ham, Provolone, and Fried Egg grilled on Sourdough', price: 14.49, hasCustomization: true, customizationTypes: ['sandwich-bread'] },
      { id: 'grilled-chicken', name: '"CLASSIC" GRILLED CHICKEN', description: 'Fresh Chicken, Pepper Jack, Pesto Mayonnaise, house roasted onions and smoked tomatoes on italian/sourdough bread', price: 14.95, hasCustomization: true, customizationTypes: ['sandwich-bread'] },
      { id: 'happy-veggie', name: 'HAPPY VEGGIE', description: 'Mushrooms, zucchini and spinach with pesto mayonnaise and Fresh Mozzarella on a sourdough bread', price: 12.95, hasCustomization: true, customizationTypes: ['sandwich-bread'] },
      { id: 'barrios-burger', name: 'BARRIOS BURGER', description: 'Fresh ground beef, stuffed with yellow cheese, red onions, tomatoes, lettuce and bacon', price: 16.99, hasCustomization: true, customizationTypes: ['sandwich-bread'] }
    ]
  },
  {
    id: 'greens',
    name: 'Greens',
    items: [
      { id: 'chipotle', name: 'CHIPOTLE', description: 'Roasted Corn, Tomatoes, Black Beans, Avocado, Blended Cheese, Crispy Tortilla Strips, and Grilled Chicken Breast with Chipotle dressing', price: 16.55, hasCustomization: true, customizationTypes: ['salad-protein', 'salad-dressing'] },
      { id: 'cobb', name: 'COBB', description: 'Romaine Lettuce, Tomatoes, Bacon, Grilled Chicken, Hard Boiled Egg, Avocado, Honey Mustard Dressing', price: 15.55, hasCustomization: true, customizationTypes: ['salad-protein', 'salad-dressing'] },
      { id: 'chicken-caesar', name: 'GRILLED CHICKEN CAESAR', description: 'Romaine Lettuce, Grilled Chicken, Parmesan Cheese, Caesar Dressing, and Roasted Garlic Croutons', price: 14.49, hasCustomization: true, customizationTypes: ['salad-protein', 'salad-dressing'] }
    ]
  },
  {
    id: 'happily-more',
    name: 'Happily More',
    items: [
      { id: 'lomo-saltado', name: 'LOMO SALTADO', description: 'Traditional Peruvian dish, of marinated stir-fried steak, onions, tomatoes, pepper, and french fries, served with rice', price: 23.95, hasCustomization: false },
      { id: 'wynes-special', name: 'WYNE\'S "ALWAYS SPECIAL"', description: 'Our take on the famous chicken pot pie, served with a side of tarragon roasted carrots', price: 15.95, hasCustomization: false },
      { id: 'mix-fajitas', name: 'MIX FAJITAS', description: 'Classic mix grill of gulf shrimp, vegetables, carne asada, chicken green salad served with yellow rice, refried beans, two corn or flour tortillas on salsa latina', price: 31.99, hasCustomization: false },
      { id: 'chicken-grill', name: 'CHICKEN GRILL', description: 'Grilled Chicken Breast and Vegetables served with Tortillas, Yellow Rice, and Salsa Latina and Refried Beans', price: 20.00, hasCustomization: false },
      { id: 'chicken-fajitas', name: 'CHICKEN FAJITAS', description: 'Chicken breast strips, vegetables, green salad, yellow rice, refried beans, two corn or flour tortillas on home made salsa latina', price: 23.00, hasCustomization: false },
      { id: 'steak-fajitas', name: 'STEAK FAJITAS', description: 'Steak Fajitas, vegetables, green salad, yellow rice, refried beans, two corn or flour tortillas on home made salsa latina', price: 25.00, hasCustomization: false },
      { id: 'carne-asada', name: 'CARNE ASADA A LA PLANCHA', description: '8 oz. steak fajita on the griddle, green salad, yellow rice, refried beans, two corn or flour tortillas on a home made salsa latina', price: 25.00, hasCustomization: false }
    ]
  },
  {
    id: 'pupusas-tacos',
    name: 'Pupusas & Tacos',
    items: [
      { id: 'pupusas', name: 'PUPUSAS', description: '', price: 4.00, hasCustomization: false },
      { id: 'pupusas-revueltas', name: 'PUPUSAS REVUELTAS', description: 'Chicken and cheese', price: 4.00, hasCustomization: false },
      { id: 'pupusas-frijol', name: 'PUPUSAS DE FRIJOL CON QUESO', description: 'Beans and cheese', price: 3.50, hasCustomization: false },
      { id: 'pupusas-queso', name: 'PUPUSAS DE QUESO', description: 'Cheese', price: 3.50, hasCustomization: false },
      { id: 'loroco', name: 'LOROCO', description: '', price: 3.75, hasCustomization: false },
      { id: 'baleadas-dinner', name: 'BALEADAS CATRACHAS (regular)', description: 'Scrambled eggs, pinto refried beans, spanish sour cream, fresh cheese on a flour tortilla', price: 10.00, hasCustomization: true, customizationTypes: ['baleadas-proteins'] },
      { id: 'chicken-tacos', name: 'CHICKEN TACOS', description: '', price: 13.00, hasCustomization: false },
      { id: 'beef-tacos', name: 'BEEF TACOS', description: '', price: 16.00, hasCustomization: false },
      { id: 'chorizo', name: 'CHORIZO', description: '', price: 14.00, hasCustomization: false }
    ]
  },
  {
    id: 'dinner-sides',
    name: 'Sides',
    items: [
      { id: 'fries', name: 'FRIES', description: '', price: 4.50, hasCustomization: false },
      { id: 'fried-plantain', name: 'FRIED PLANTAIN', description: '', price: 5.99, hasCustomization: false },
      { id: 'corn-tortillas', name: '2 CORN TORTILLAS', description: '', price: 2.25, hasCustomization: false },
      { id: 'onion-rings', name: 'ONION RINGS', description: '', price: 8.00, hasCustomization: false },
      { id: 'bacon-avocado-toast', name: 'BACON AVOCADO TOAST', description: '', price: 9.99, hasCustomization: false },
      { id: 'avocado-toast', name: 'AVOCADO TOAST', description: '', price: 8.25, hasCustomization: false }
    ]
  },
  {
    id: 'desserts',
    name: 'Now You\'re Really Happy Desserts',
    items: [
      { id: 'cheesecake', name: 'CLASSIC \'AMERICAN\' CHEESECAKE', description: 'With mixed berry coulis', price: 7.95, hasCustomization: false },
      { id: 'torta-chocolate', name: 'TORTA DE CHOCOLATE', description: '', price: 8.00, hasCustomization: false },
      { id: 'mango-cake', name: 'MANGO CAKE', description: '', price: 8.00, hasCustomization: false },
      { id: 'choco-flan', name: 'CHOCO FLAN', description: '', price: 7.25, hasCustomization: false }
    ]
  }
];
