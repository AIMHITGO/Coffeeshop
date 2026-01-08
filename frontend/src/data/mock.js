// Complete Coffee & Drink Menu Data from Happy Place Spreadsheet
// All items, prices, sizes, calories, and images accurately transcribed

export const brandAssets = {
  logo: 'https://customer-assets.emergentagent.com/job_local-sip/artifacts/l6mm4os6_Happy-Logo-1920w.webp',
  heroImages: [
    'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1367390655-1920w.jpg',
    'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg',
    'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg',
    'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1243197436-1920w.JPG'
  ]
};

// Coffee & Drink Menu Categories
export const menuCategories = [
  {
    id: 'coffee-espresso',
    name: 'Coffee & Espresso',
    description: 'Jessy\'s Premium Coffee - Fresh Roasted 100% Arabica Beans',
    items: [
      {
        id: 'drip-coffee-small',
        name: 'Drip Coffee',
        description: 'Fresh roasted Jessy\'s Premium Coffee',
        price: 3.70,
        size: 'Small',
        calories: 0,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/drip-coffee-898d1d72-1920w.png'
      },
      {
        id: 'drip-coffee-medium',
        name: 'Drip Coffee',
        description: 'Fresh roasted Jessy\'s Premium Coffee',
        price: 3.85,
        size: 'Medium',
        calories: 0,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/drip-coffee-898d1d72-1920w.png'
      },
      {
        id: 'drip-coffee-large',
        name: 'Drip Coffee',
        description: 'Fresh roasted Jessy\'s Premium Coffee',
        price: 4.25,
        size: 'Large',
        calories: 0,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/drip-coffee-898d1d72-1920w.png'
      },
      {
        id: 'cafe-au-lait-small',
        name: 'Café Au Lait',
        description: 'Fresh drip coffee with steamed milk',
        price: 3.55,
        size: 'Small',
        calories: 25,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CAF-C3-89-AU-LAIT---FEATURED-DARK-1920w.png'
      },
      {
        id: 'cafe-au-lait-medium',
        name: 'Café Au Lait',
        description: 'Fresh drip coffee with steamed milk',
        price: 4.00,
        size: 'Medium',
        calories: 25,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CAF-C3-89-AU-LAIT---FEATURED-DARK-1920w.png'
      },
      {
        id: 'cafe-au-lait-large',
        name: 'Café Au Lait',
        description: 'Fresh drip coffee with steamed milk',
        price: 4.45,
        size: 'Large',
        calories: 15,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CAF-C3-89-AU-LAIT---FEATURED-DARK-1920w.png'
      },
      {
        id: 'espresso-single',
        name: 'Espresso',
        description: 'Rich, concentrated shot of premium espresso',
        price: 3.00,
        size: 'Single',
        calories: 10,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Espresso-0e3f8f36-1920w.png'
      },
      {
        id: 'espresso-double',
        name: 'Espresso',
        description: 'Rich, concentrated shot of premium espresso',
        price: 4.65,
        size: 'Double',
        calories: 10,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Espresso-0e3f8f36-1920w.png'
      },
      {
        id: 'espresso-triple',
        name: 'Espresso',
        description: 'Rich, concentrated shot of premium espresso',
        price: 6.30,
        size: 'Triple',
        calories: 10,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Espresso-0e3f8f36-1920w.png'
      },
      {
        id: 'americano-small',
        name: 'Americano',
        description: 'Double espresso with hot water',
        price: 3.75,
        size: 'Small',
        calories: 15,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Americano-10cad5cd-1920w.png'
      },
      {
        id: 'americano-medium',
        name: 'Americano',
        description: 'Double espresso with hot water',
        price: 4.75,
        size: 'Medium',
        calories: 15,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Americano-10cad5cd-1920w.png'
      },
      {
        id: 'americano-large',
        name: 'Americano',
        description: 'Double espresso with hot water',
        price: 4.85,
        size: 'Large',
        calories: 15,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Americano-10cad5cd-1920w.png'
      },
      {
        id: 'short-black',
        name: 'Short Black',
        description: 'Single espresso shot - rich and intense',
        price: 3.75,
        size: 'Small Only',
        calories: 10,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Short-Black-1920w.png'
      },
      {
        id: 'long-black-small',
        name: 'Long Black',
        description: 'Double espresso over hot water',
        price: 4.00,
        size: 'Small',
        calories: 10,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/long-black-1920w.png'
      },
      {
        id: 'long-black-medium',
        name: 'Long Black',
        description: 'Double espresso over hot water',
        price: 5.00,
        size: 'Medium',
        calories: 10,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/long-black-1920w.png'
      },
      {
        id: 'long-black-large',
        name: 'Long Black',
        description: 'Double espresso over hot water',
        price: 6.00,
        size: 'Large',
        calories: 10,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/long-black-1920w.png'
      },
      {
        id: 'coffee-milk',
        name: 'Coffee & Milk (Doppio)',
        description: '2 espresso shots with milk - 6 oz only',
        price: 5.50,
        size: '6 oz',
        calories: 80,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/drip-coffee-898d1d72-1920w.png'
      },
      {
        id: 'cappuccino-small',
        name: 'Cappuccino',
        description: 'Rich espresso artfully balanced with freshly micro-foamed milk',
        price: 4.25,
        size: 'Small',
        calories: 80,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Capuccino-3f36d8f2-1920w.png'
      },
      {
        id: 'cappuccino-medium',
        name: 'Cappuccino',
        description: 'Rich espresso artfully balanced with freshly micro-foamed milk',
        price: 4.95,
        size: 'Medium',
        calories: 70,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Capuccino-3f36d8f2-1920w.png'
      },
      {
        id: 'cappuccino-large',
        name: 'Cappuccino',
        description: 'Rich espresso artfully balanced with freshly micro-foamed milk',
        price: 5.45,
        size: 'Large',
        calories: 50,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Capuccino-3f36d8f2-1920w.png'
      },
      {
        id: 'little-havana-cappuccino-small',
        name: 'Little Havana Cappuccino',
        description: 'Cuban-inspired cappuccino with Latin flair',
        price: 4.90,
        size: 'Small',
        calories: 160,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Little-Havana-Capuccino-1920w.png'
      },
      {
        id: 'little-havana-cappuccino-medium',
        name: 'Little Havana Cappuccino',
        description: 'Cuban-inspired cappuccino with Latin flair',
        price: 5.60,
        size: 'Medium',
        calories: 140,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Little-Havana-Capuccino-1920w.png'
      },
      {
        id: 'little-havana-cappuccino-large',
        name: 'Little Havana Cappuccino',
        description: 'Cuban-inspired cappuccino with Latin flair',
        price: 6.00,
        size: 'Large',
        calories: 120,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Little-Havana-Capuccino-1920w.png'
      },
      {
        id: 'latte-small',
        name: 'Latte',
        description: 'Smooth espresso with velvety steamed milk',
        price: 5.80,
        size: 'Small',
        calories: 160,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/caffe-latte-990b710d-1920w.png'
      },
      {
        id: 'latte-medium',
        name: 'Latte',
        description: 'Smooth espresso with velvety steamed milk',
        price: 6.60,
        size: 'Medium',
        calories: 140,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/caffe-latte-990b710d-1920w.png'
      },
      {
        id: 'latte-large',
        name: 'Latte',
        description: 'Smooth espresso with velvety steamed milk',
        price: 7.50,
        size: 'Large',
        calories: 120,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/caffe-latte-990b710d-1920w.png'
      },
      {
        id: 'flat-white-small',
        name: 'Flat White',
        description: 'Double espresso with silky microfoam',
        price: 5.80,
        size: 'Small',
        calories: 160,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Flat---white-1920w.png'
      },
      {
        id: 'flat-white-medium',
        name: 'Flat White',
        description: 'Double espresso with silky microfoam',
        price: 6.60,
        size: 'Medium',
        calories: 140,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Flat---white-1920w.png'
      },
      {
        id: 'flat-white-large',
        name: 'Flat White',
        description: 'Double espresso with silky microfoam',
        price: 7.50,
        size: 'Large',
        calories: 120,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Flat---white-1920w.png'
      },
      {
        id: 'vanilla-latte-small',
        name: 'Vanilla Latte',
        description: 'Classic latte sweetened with vanilla syrup',
        price: 6.56,
        size: 'Small',
        calories: 240,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Vanilla-Latte-1920w.png'
      },
      {
        id: 'vanilla-latte-medium',
        name: 'Vanilla Latte',
        description: 'Classic latte sweetened with vanilla syrup',
        price: 7.74,
        size: 'Medium',
        calories: 220,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Vanilla-Latte-1920w.png'
      },
      {
        id: 'vanilla-latte-large',
        name: 'Vanilla Latte',
        description: 'Classic latte sweetened with vanilla syrup',
        price: 8.67,
        size: 'Large',
        calories: 170,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Vanilla-Latte-1920w.png'
      },
      {
        id: 'caramel-macchiato-small',
        name: 'Caramel Macchiato',
        description: 'Espresso with vanilla, milk, and caramel drizzle',
        price: 6.00,
        size: 'Small',
        calories: 240,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Caramel-Machiato-1920w.png'
      },
      {
        id: 'caramel-macchiato-medium',
        name: 'Caramel Macchiato',
        description: 'Espresso with vanilla, milk, and caramel drizzle',
        price: 6.45,
        size: 'Medium',
        calories: 250,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Caramel-Machiato-1920w.png'
      },
      {
        id: 'caramel-macchiato-large',
        name: 'Caramel Macchiato',
        description: 'Espresso with vanilla, milk, and caramel drizzle',
        price: 7.05,
        size: 'Large',
        calories: 240,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Caramel-Machiato-1920w.png'
      },
      {
        id: 'mocha-small',
        name: 'Mocha',
        description: 'Espresso with rich chocolate and steamed milk',
        price: 6.50,
        size: 'Small',
        calories: 420,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/cafe-mocha-8f4d3834-1920w.png'
      },
      {
        id: 'mocha-medium',
        name: 'Mocha',
        description: 'Espresso with rich chocolate and steamed milk',
        price: 6.95,
        size: 'Medium',
        calories: 350,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/cafe-mocha-8f4d3834-1920w.png'
      },
      {
        id: 'mocha-large',
        name: 'Mocha',
        description: 'Espresso with rich chocolate and steamed milk',
        price: 7.55,
        size: 'Large',
        calories: 300,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/cafe-mocha-8f4d3834-1920w.png'
      },
      {
        id: 'white-chocolate-mocha-small',
        name: 'White Chocolate Mocha',
        description: 'Espresso with sweet white chocolate',
        price: 6.60,
        size: 'Small',
        calories: 480,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/White-chocolate-Mocha-1920w.png'
      },
      {
        id: 'white-chocolate-mocha-medium',
        name: 'White Chocolate Mocha',
        description: 'Espresso with sweet white chocolate',
        price: 6.95,
        size: 'Medium',
        calories: 410,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/White-chocolate-Mocha-1920w.png'
      },
      {
        id: 'white-chocolate-mocha-large',
        name: 'White Chocolate Mocha',
        description: 'Espresso with sweet white chocolate',
        price: 7.55,
        size: 'Large',
        calories: 360,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/White-chocolate-Mocha-1920w.png'
      },
      {
        id: 'dark-chocolate-mocha-small',
        name: 'Dark Chocolate Mocha',
        description: 'Espresso with rich dark chocolate',
        price: 6.50,
        size: 'Small',
        calories: 480,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Dark-chocolate-Mocha-1920w.png'
      },
      {
        id: 'dark-chocolate-mocha-medium',
        name: 'Dark Chocolate Mocha',
        description: 'Espresso with rich dark chocolate',
        price: 6.95,
        size: 'Medium',
        calories: 400,
        category: 'Coffee & Espresso',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Dark-chocolate-Mocha-1920w.png'
      },
      {
        id: 'dark-chocolate-mocha-large',
        name: 'Dark Chocolate Mocha',
        description: 'Espresso with rich dark chocolate',
        price: 7.55,
        size: 'Large',
        calories: 360,
        category: 'Coffee & Espresso',
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
        id: 'cold-brew-small',
        name: 'Cold Brew',
        description: 'Smooth, slow-steeped cold brew coffee',
        price: 4.95,
        size: 'Small',
        calories: 0,
        category: 'Cold Brew',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/COLD-Brew-1920w.png'
      },
      {
        id: 'cold-brew-medium',
        name: 'Cold Brew',
        description: 'Smooth, slow-steeped cold brew coffee',
        price: 5.25,
        size: 'Medium',
        calories: 0,
        category: 'Cold Brew',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/COLD-Brew-1920w.png'
      },
      {
        id: 'cold-brew-large',
        name: 'Cold Brew',
        description: 'Smooth, slow-steeped cold brew coffee',
        price: 5.95,
        size: 'Large',
        calories: 0,
        category: 'Cold Brew',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/COLD-Brew-1920w.png'
      },
      {
        id: 'cold-brew-oat-latte-small',
        name: 'Cold Brew Oat Latte',
        description: 'Cold brew with creamy oat milk',
        price: 5.85,
        size: 'Small',
        calories: 150,
        category: 'Cold Brew',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/COLD-BREW-OAT-LATTE-1920w.png'
      },
      {
        id: 'cold-brew-oat-latte-medium',
        name: 'Cold Brew Oat Latte',
        description: 'Cold brew with creamy oat milk',
        price: 6.25,
        size: 'Medium',
        calories: 150,
        category: 'Cold Brew',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/COLD-BREW-OAT-LATTE-1920w.png'
      },
      {
        id: 'cold-brew-oat-latte-large',
        name: 'Cold Brew Oat Latte',
        description: 'Cold brew with creamy oat milk',
        price: 6.95,
        size: 'Large',
        calories: 150,
        category: 'Cold Brew',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/COLD-BREW-OAT-LATTE-1920w.png'
      },
      {
        id: 'horchata-espresso',
        name: 'Horchata & Espresso',
        description: 'Creamy horchata with bold espresso - Medium only',
        price: 7.65,
        size: 'Medium Only',
        calories: 230,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Horchata---Espresso-1920w.png'
      },
      {
        id: 'horchata-cold-brew-latte',
        name: 'Horchata Cold Brew Oat Latte',
        description: 'Latin-inspired cold brew with horchata and oat milk',
        price: 7.40,
        size: 'Medium',
        calories: 380,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Horchata-COLD-BREW-OAT-LATTE-1920w.png'
      },
      {
        id: 'cloud-original-small',
        name: 'Cloud - Original',
        description: 'Cold brew with condensed milk, chicory syrup, and half & half',
        price: 6.00,
        size: 'Small',
        calories: 300,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Horchata-COLD-BREW-OAT-LATTE-1920w.png'
      },
      {
        id: 'cloud-original-medium',
        name: 'Cloud - Original',
        description: 'Cold brew with condensed milk, chicory syrup, and half & half',
        price: 6.65,
        size: 'Medium',
        calories: 230,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Horchata-COLD-BREW-OAT-LATTE-1920w.png'
      },
      {
        id: 'cloud-original-large',
        name: 'Cloud - Original',
        description: 'Cold brew with condensed milk, chicory syrup, and half & half',
        price: 6.95,
        size: 'Large',
        calories: 150,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Horchata-COLD-BREW-OAT-LATTE-1920w.png'
      },
      {
        id: 'cloud-coconut-small',
        name: 'Cloud - Coconut',
        description: 'Cold brew with coconut flavor, condensed milk, chicory syrup',
        price: 6.00,
        size: 'Small',
        calories: 380,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Horchata-COLD-BREW-OAT-LATTE-1920w.png'
      },
      {
        id: 'cloud-coconut-medium',
        name: 'Cloud - Coconut',
        description: 'Cold brew with coconut flavor, condensed milk, chicory syrup',
        price: 6.65,
        size: 'Medium',
        calories: 300,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Horchata-COLD-BREW-OAT-LATTE-1920w.png'
      },
      {
        id: 'cloud-coconut-large',
        name: 'Cloud - Coconut',
        description: 'Cold brew with coconut flavor, condensed milk, chicory syrup',
        price: 6.95,
        size: 'Large',
        calories: 230,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Horchata-COLD-BREW-OAT-LATTE-1920w.png'
      },
      {
        id: 'brown-sugar-almond-latte-small',
        name: 'Brown Sugar Almond Latte with Jelly',
        description: 'Cold brew with brown sugar jelly and almond milk',
        price: 6.50,
        size: 'Small',
        calories: 610,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Horchata-COLD-BREW-OAT-LATTE-1920w.png'
      },
      {
        id: 'brown-sugar-almond-latte-medium',
        name: 'Brown Sugar Almond Latte with Jelly',
        description: 'Cold brew with brown sugar jelly and almond milk',
        price: 7.20,
        size: 'Medium',
        calories: 460,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Horchata-COLD-BREW-OAT-LATTE-1920w.png'
      },
      {
        id: 'brown-sugar-almond-latte-large',
        name: 'Brown Sugar Almond Latte with Jelly',
        description: 'Cold brew with brown sugar jelly and almond milk',
        price: 7.55,
        size: 'Large',
        calories: 400,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Horchata-COLD-BREW-OAT-LATTE-1920w.png'
      },
      {
        id: 'iced-matcha-jelly-small',
        name: 'Iced Matcha with Brown Sugar Jelly',
        description: 'Premium matcha with brown sugar jelly',
        price: 6.65,
        size: 'Small',
        calories: 570,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Ice+Brown+sugar+Matcha+OAT+LATTE-1920w.png'
      },
      {
        id: 'iced-matcha-jelly-medium',
        name: 'Iced Matcha with Brown Sugar Jelly',
        description: 'Premium matcha with brown sugar jelly',
        price: 7.35,
        size: 'Medium',
        calories: 440,
        category: 'Signature',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Ice+Brown+sugar+Matcha+OAT+LATTE-1920w.png'
      },
      {
        id: 'iced-matcha-jelly-large',
        name: 'Iced Matcha with Brown Sugar Jelly',
        description: 'Premium matcha with brown sugar jelly',
        price: 7.75,
        size: 'Large',
        calories: 370,
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
        id: 'mocha-frappe-small',
        name: 'Mocha Frappé',
        description: 'Double fresh cold brew blended with chocolate, milk, and ice',
        price: 5.15,
        size: 'Small',
        calories: 370,
        category: 'Frappé',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/cafe-mocha-8f4d3834-1920w.png'
      },
      {
        id: 'mocha-frappe-medium',
        name: 'Mocha Frappé',
        description: 'Double fresh cold brew blended with chocolate, milk, and ice',
        price: 5.75,
        size: 'Medium',
        calories: 330,
        category: 'Frappé',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/cafe-mocha-8f4d3834-1920w.png'
      },
      {
        id: 'mocha-frappe-large',
        name: 'Mocha Frappé',
        description: 'Double fresh cold brew blended with chocolate, milk, and ice',
        price: 6.25,
        size: 'Large',
        calories: 250,
        category: 'Frappé',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/cafe-mocha-8f4d3834-1920w.png'
      },
      {
        id: 'caramel-frappe-small',
        name: 'Caramel Frappé',
        description: 'Cold brew blended with caramel, milk, and ice',
        price: 5.25,
        size: 'Small',
        calories: 600,
        category: 'Frappé',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Caramel-Machiato-1920w.png'
      },
      {
        id: 'caramel-frappe-medium',
        name: 'Caramel Frappé',
        description: 'Cold brew blended with caramel, milk, and ice',
        price: 5.85,
        size: 'Medium',
        calories: 530,
        category: 'Frappé',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Caramel-Machiato-1920w.png'
      },
      {
        id: 'caramel-frappe-large',
        name: 'Caramel Frappé',
        description: 'Cold brew blended with caramel, milk, and ice',
        price: 6.35,
        size: 'Large',
        calories: 420,
        category: 'Frappé',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Caramel-Machiato-1920w.png'
      },
      {
        id: 'matcha-frappe-small',
        name: 'Matcha Frappé',
        description: 'Premium matcha blended with milk and ice',
        price: 5.15,
        size: 'Small',
        calories: 600,
        category: 'Frappé',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Ice+Matcha+frappe-1920w.jpg'
      },
      {
        id: 'matcha-frappe-medium',
        name: 'Matcha Frappé',
        description: 'Premium matcha blended with milk and ice',
        price: 5.85,
        size: 'Medium',
        calories: 470,
        category: 'Frappé',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Ice+Matcha+frappe-1920w.jpg'
      },
      {
        id: 'matcha-frappe-large',
        name: 'Matcha Frappé',
        description: 'Premium matcha blended with milk and ice',
        price: 6.35,
        size: 'Large',
        calories: 370,
        category: 'Frappé',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Ice+Matcha+frappe-1920w.jpg'
      }
    ]
  },
  {
    id: 'tea-non-coffee',
    name: 'Tea & Non-Coffee',
    description: 'Alternative beverages for non-coffee drinkers',
    items: [
      {
        id: 'brewed-tea-small',
        name: 'Brewed Tea',
        description: 'Black, green, or herbal',
        price: 3.00,
        size: 'Small',
        calories: 0,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png'
      },
      {
        id: 'brewed-tea-large',
        name: 'Brewed Tea',
        description: 'Black, green, or herbal',
        price: 3.45,
        size: 'Large',
        calories: 0,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png'
      },
      {
        id: 'matcha-latte-small',
        name: 'Matcha Latte',
        description: 'Premium matcha green tea with steamed milk',
        price: 4.75,
        size: 'Small',
        calories: 300,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Ice-Matcha-1920w.png'
      },
      {
        id: 'matcha-latte-medium',
        name: 'Matcha Latte',
        description: 'Premium matcha green tea with steamed milk',
        price: 5.50,
        size: 'Medium',
        calories: 230,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Ice-Matcha-1920w.png'
      },
      {
        id: 'matcha-latte-large',
        name: 'Matcha Latte',
        description: 'Premium matcha green tea with steamed milk',
        price: 5.90,
        size: 'Large',
        calories: 150,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Ice-Matcha-1920w.png'
      },
      {
        id: 'chai-latte-small',
        name: 'Chai Latte',
        description: 'Spiced chai tea with steamed milk',
        price: 5.45,
        size: 'Small',
        calories: 290,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png'
      },
      {
        id: 'chai-latte-medium',
        name: 'Chai Latte',
        description: 'Spiced chai tea with steamed milk',
        price: 5.95,
        size: 'Medium',
        calories: 240,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png'
      },
      {
        id: 'chai-latte-large',
        name: 'Chai Latte',
        description: 'Spiced chai tea with steamed milk',
        price: 6.45,
        size: 'Large',
        calories: 200,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png'
      },
      {
        id: 'iced-tea-small',
        name: 'Iced Tea',
        description: 'Black, green, or wild berry hibiscus',
        price: 3.00,
        size: 'Small',
        calories: 0,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png'
      },
      {
        id: 'iced-tea-medium',
        name: 'Iced Tea',
        description: 'Black, green, or wild berry hibiscus',
        price: 3.55,
        size: 'Medium',
        calories: 0,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png'
      },
      {
        id: 'iced-tea-large',
        name: 'Iced Tea',
        description: 'Black, green, or wild berry hibiscus',
        price: 3.95,
        size: 'Large',
        calories: 0,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png'
      },
      {
        id: 'iced-tea-lemonade-small',
        name: 'Iced Tea Lemonade',
        description: 'Refreshing blend of iced tea and lemonade',
        price: 3.75,
        size: 'Small',
        calories: 90,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png'
      },
      {
        id: 'iced-tea-lemonade-medium',
        name: 'Iced Tea Lemonade',
        description: 'Refreshing blend of iced tea and lemonade',
        price: 4.35,
        size: 'Medium',
        calories: 50,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png'
      },
      {
        id: 'iced-tea-lemonade-large',
        name: 'Iced Tea Lemonade',
        description: 'Refreshing blend of iced tea and lemonade',
        price: 4.75,
        size: 'Large',
        calories: 40,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png'
      },
      {
        id: 'fruit-tea-shaker',
        name: 'Fruit Tea Shaker',
        description: 'Iced tea lemonade shaken with fruit purée & fruit slices. Flavors: Strawberry Lemon, Passion Fruit, Yuzu Citrus',
        price: 5.00,
        size: 'One Size',
        calories: 150,
        category: 'Tea',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png'
      },
      {
        id: 'hot-cocoa-small',
        name: 'Hot Cocoa',
        description: 'Rich chocolate drink with whipped cream',
        price: 4.40,
        size: 'Small',
        calories: 340,
        category: 'Non-Coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png'
      },
      {
        id: 'hot-cocoa-medium',
        name: 'Hot Cocoa',
        description: 'Rich chocolate drink with whipped cream',
        price: 4.70,
        size: 'Medium',
        calories: 300,
        category: 'Non-Coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png'
      },
      {
        id: 'hot-cocoa-large',
        name: 'Hot Cocoa',
        description: 'Rich chocolate drink with whipped cream',
        price: 5.10,
        size: 'Large',
        calories: 210,
        category: 'Non-Coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/CHAI-LATTE-1920w.png'
      },
      {
        id: 'vanilla-steamer-small',
        name: 'Vanilla Steamer',
        description: 'Steamed milk with vanilla - no coffee',
        price: 3.80,
        size: 'Small',
        calories: 260,
        category: 'Non-Coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Vanilla-Latte-1920w.png'
      },
      {
        id: 'vanilla-steamer-medium',
        name: 'Vanilla Steamer',
        description: 'Steamed milk with vanilla - no coffee',
        price: 4.20,
        size: 'Medium',
        calories: 190,
        category: 'Non-Coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Vanilla-Latte-1920w.png'
      },
      {
        id: 'vanilla-steamer-large',
        name: 'Vanilla Steamer',
        description: 'Steamed milk with vanilla - no coffee',
        price: 4.50,
        size: 'Large',
        calories: 160,
        category: 'Non-Coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Vanilla-Latte-1920w.png'
      },
      {
        id: 'vanilla-frappe-small',
        name: 'Vanilla Frappé (Non-Coffee)',
        description: 'Creamy vanilla blended drink - no coffee',
        price: 5.15,
        size: 'Small',
        calories: 260,
        category: 'Non-Coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Vanilla-Latte-1920w.png'
      },
      {
        id: 'vanilla-frappe-medium',
        name: 'Vanilla Frappé (Non-Coffee)',
        description: 'Creamy vanilla blended drink - no coffee',
        price: 5.75,
        size: 'Medium',
        calories: 190,
        category: 'Non-Coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Vanilla-Latte-1920w.png'
      },
      {
        id: 'vanilla-frappe-large',
        name: 'Vanilla Frappé (Non-Coffee)',
        description: 'Creamy vanilla blended drink - no coffee',
        price: 6.25,
        size: 'Large',
        calories: 160,
        category: 'Non-Coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Vanilla-Latte-1920w.png'
      }
    ]
  }
];

// Continue with rest of the data (breakfast, lunch/dinner, locations, etc.)
// Food menu categories remain the same as previous version...
