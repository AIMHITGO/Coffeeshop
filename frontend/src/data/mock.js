// Mock data for Happy Place Coffee & Eats
// Using actual images from Happy Place website

export const brandAssets = {
  logo: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Happy-Logo-1920w.png',
  heroImages: [
    'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1367390655-1920w.jpg',
    'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg',
    'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg'
  ]
};

export const menuCategories = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Start your day with our family recipes and Latin-inspired morning favorites',
    items: [
      {
        id: 'baleadas',
        name: 'Baleadas Catrachas',
        description: 'Scrambled eggs, pinto refried beans, spanish sour cream, fresh cheese on a flour tortilla',
        price: 10.00,
        category: 'Latino Breakfast',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg'
      },
      {
        id: 'huevos-rancheros',
        name: 'Huevos Rancheros',
        description: 'Classic breakfast that never gets old - 2 fried eggs on lightly fried corn tortillas topped with salsa ranchera, avocado, beans',
        price: 13.95,
        category: 'Latino Breakfast',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1367390655-1920w.jpg'
      },
      {
        id: 'barrios-breakfast',
        name: 'Barrios Breakfast',
        description: 'Our Latino Breakfast - 2 eggs with mexican sausage, fried beans, fried plantains, sour cream, tortillas',
        price: 14.49,
        category: 'Latino Breakfast',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1367390655-1920w.jpg'
      },
      {
        id: 'our-happy-place',
        name: 'Our Happy Place',
        description: 'Scrambled eggs, spinach, tomato, Swiss, mushroom on a butter croissant',
        price: 11.95,
        category: 'Breakfast Sandwiches',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg'
      },
      {
        id: 'happy-scramble',
        name: 'Happy Scramble',
        description: 'Mushrooms, broccoli, scallions, bacon, chorizo, mexican style shredded cheese',
        price: 15.99,
        category: 'Happy Eggs',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1367390655-1920w.jpg'
      },
      {
        id: 'french-toast',
        name: 'Bananas Foster French Toast',
        description: 'Fresh bananas pan-fried in syrup, topped with powdered sugar',
        price: 13.99,
        category: 'From the Griddle',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg'
      }
    ]
  },
  {
    id: 'lunch-dinner',
    name: 'Lunch & Dinner',
    description: 'American-Latin Fusion - Our unique recipes that will keep you coming back',
    items: [
      {
        id: 'lomo-saltado',
        name: 'Lomo Saltado',
        description: 'Traditional Peruvian dish of marinated stir-fried steak, onions, tomatoes, pepper, french fries, served with rice',
        price: 23.95,
        category: 'Specialties',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg'
      },
      {
        id: 'mix-fajitas',
        name: 'Mix Fajitas',
        description: 'Classic mix grill of gulf shrimp, vegetables, carne asada, chicken with yellow rice, refried beans, tortillas',
        price: 31.99,
        category: 'Specialties',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg'
      },
      {
        id: 'barrios-burger',
        name: 'Barrios Burger',
        description: 'Fresh ground beef, stuffed with yellow cheese, red onions, tomatoes, lettuce and bacon',
        price: 16.99,
        category: 'Hand Held Happiness',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg'
      },
      {
        id: 'chicken-quesadilla',
        name: 'Chicken Quesadilla',
        description: 'Blended cheese, latino sour cream, guacamole',
        price: 14.00,
        category: 'Hand Held Happiness',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg'
      },
      {
        id: 'carne-asada',
        name: 'Carne Asada a la Plancha',
        description: '8 oz. steak fajita on the griddle with green salad, yellow rice, refried beans, tortillas, homemade salsa latina',
        price: 25.00,
        category: 'Specialties',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg'
      }
    ]
  },
  {
    id: 'coffee',
    name: 'Coffee & Drinks',
    description: 'Barista-crafted beverages brewed fresh and made just for you',
    items: [
      {
        id: 'latte',
        name: 'Latte',
        description: 'Espresso with steamed milk and a light layer of foam',
        price: 4.50,
        category: 'Coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg'
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: 'Espresso with equal parts steamed milk and foam',
        price: 4.50,
        category: 'Coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg'
      },
      {
        id: 'americano',
        name: 'Americano',
        description: 'Espresso with hot water',
        price: 3.50,
        category: 'Coffee',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg'
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Now you\'re really happy - Sweet endings that complete your meal',
    items: [
      {
        id: 'cheesecake',
        name: "Classic 'American' Cheesecake",
        description: 'With mixed berry coulis',
        price: 7.95,
        category: 'Desserts',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1243197436-1920w.JPG'
      },
      {
        id: 'choco-flan',
        name: 'Choco Flan',
        description: 'Traditional Latin dessert combining chocolate cake and flan',
        price: 7.25,
        category: 'Desserts',
        image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1243197436-1920w.JPG'
      },
      {
        id: 'mango-cake',
        name: 'Mango Cake',
        description: 'Fresh and tropical - a taste of Latin America',
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
    email: 'happyrevolutioncoffee@gmail.com',
    hours: {
      weekday: '8:00 AM - 8:00 PM',
      weekend: '8:00 AM - 5:00 PM',
      breakfast: '8:00 AM - 11:00 AM',
      lunch: '11:00 AM - 8:00 PM',
      brunch: '11:00 AM - 2:00 PM (Weekends)'
    },
    coordinates: {
      lat: 38.6528439,
      lng: -77.3058118
    }
  }
];

export const blogPosts = [
  {
    id: '1',
    title: 'The Art of Latin-American Coffee Culture',
    excerpt: 'Discover the rich traditions and flavors that make Latin-American coffee unique and how we bring these authentic tastes to Woodbridge.',
    author: 'Happy Place Team',
    date: '2024-12-15',
    category: 'Coffee Culture',
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg',
    featured: true
  },
  {
    id: '2',
    title: 'Behind the Scenes: Crafting Your Perfect Latte',
    excerpt: 'Meet our family and learn about the care and precision that goes into every cup we serve.',
    author: 'The Happy Place Family',
    date: '2024-12-10',
    category: 'Behind the Scenes',
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg',
    featured: true
  },
  {
    id: '3',
    title: 'Our Latin-Fusion Story: Food with Heart',
    excerpt: 'Learn how our family recipes and Latin-American heritage inspire every dish we create.',
    author: 'Happy Place Family',
    date: '2024-12-05',
    category: 'Our Story',
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg',
    featured: false
  },
  {
    id: '4',
    title: 'Why Woodbridge Loves Happy Place',
    excerpt: 'Hear from our loyal customers about what makes Happy Place Coffee & Eats their favorite local spot.',
    author: 'Happy Place Team',
    date: '2024-11-28',
    category: 'Community',
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1367390655-1920w.jpg',
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
      'Early access to new menu items'
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
      'Exclusive member events'
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
      'Exclusive member events'
    ],
    color: '#FFD700'
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Woodbridge Local',
    content: 'Happy Place has become my family\'s second home. The owners treat you like family, and you can taste the love in every dish and every cup!',
    rating: 5,
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1367390655-1920w.jpg'
  },
  {
    id: '2',
    name: 'Michael Torres',
    role: 'Food Enthusiast',
    content: 'The Lomo Saltado is authentic perfection. This family-owned gem brings real Latin-American flavors to Woodbridge. I drive 30 minutes just to eat here!',
    rating: 5,
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg'
  },
  {
    id: '3',
    name: 'Emily Chen',
    role: 'Coffee Lover',
    content: 'Best coffee in Virginia! The baristas remember my name and my order. It\'s this personal touch that makes Happy Place truly special.',
    rating: 5,
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg'
  }
];
