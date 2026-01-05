// Mock data for Happy Place Coffee & Eats

export const menuCategories = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Start your day right with our delicious breakfast options',
    items: [
      {
        id: 'baleadas',
        name: 'Baleadas Catrachas',
        description: 'Scrambled eggs, pinto refried beans, spanish sour cream, fresh cheese on a flour tortilla',
        price: 10.00,
        category: 'Latino Breakfast',
        image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTc2NzYyNjQ2OHww&ixlib=rb-4.1.0&q=85'
      },
      {
        id: 'huevos-rancheros',
        name: 'Huevos Rancheros',
        description: '2 fried eggs served on lightly fried corn tortillas topped with salsa ranchera, avocado, beans, fresh cheese',
        price: 13.95,
        category: 'Latino Breakfast',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTc2NzYyNjQ2OHww&ixlib=rb-4.1.0&q=85'
      },
      {
        id: 'our-happy-place',
        name: 'Our Happy Place',
        description: 'Scrambled eggs, spinach, tomato, Swiss, mushroom on a butter croissant',
        price: 11.95,
        category: 'Breakfast Sandwiches',
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
      },
      {
        id: 'happy-scramble',
        name: 'Happy Scramble',
        description: 'Mushrooms, broccoli, scallions, bacon, chorizo, mexican style shredded cheese',
        price: 15.99,
        category: 'Happy Eggs',
        image: 'https://images.pexels.com/photos/302887/pexels-photo-302887.jpeg'
      },
      {
        id: 'french-toast',
        name: 'Bananas Foster French Toast',
        description: 'Fresh bananas pan-fried in syrup, topped with powdered sugar',
        price: 13.99,
        category: 'From the Griddle',
        image: 'https://images.pexels.com/photos/35237767/pexels-photo-35237767.jpeg'
      }
    ]
  },
  {
    id: 'lunch-dinner',
    name: 'Lunch & Dinner',
    description: 'American-Latin Fusion cuisine that will delight your taste buds',
    items: [
      {
        id: 'lomo-saltado',
        name: 'Lomo Saltado',
        description: 'Traditional Peruvian dish of marinated stir-fried steak, onions, tomatoes, pepper, french fries, served with rice',
        price: 23.95,
        category: 'Specialties',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTc2NzYyNjQ2OHww&ixlib=rb-4.1.0&q=85'
      },
      {
        id: 'mix-fajitas',
        name: 'Mix Fajitas',
        description: 'Classic mix grill of gulf shrimp, vegetables, carne asada, chicken with yellow rice, refried beans, tortillas',
        price: 31.99,
        category: 'Specialties',
        image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTc2NzYyNjQ2OHww&ixlib=rb-4.1.0&q=85'
      },
      {
        id: 'barrios-burger',
        name: 'Barrios Burger',
        description: 'Fresh ground beef, stuffed with yellow cheese, red onions, tomatoes, lettuce and bacon',
        price: 16.99,
        category: 'Hand Held Happiness',
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
      },
      {
        id: 'chicken-quesadilla',
        name: 'Chicken Quesadilla',
        description: 'Blended cheese, latino sour cream, guacamole',
        price: 14.00,
        category: 'Hand Held Happiness',
        image: 'https://images.pexels.com/photos/302887/pexels-photo-302887.jpeg'
      }
    ]
  },
  {
    id: 'coffee',
    name: 'Coffee & Drinks',
    description: 'Barista-crafted coffee drinks made with love',
    items: [
      {
        id: 'latte',
        name: 'Latte',
        description: 'Espresso with steamed milk and a light layer of foam',
        price: 4.50,
        category: 'Coffee',
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: 'Espresso with equal parts steamed milk and foam',
        price: 4.50,
        category: 'Coffee',
        image: 'https://images.pexels.com/photos/302887/pexels-photo-302887.jpeg'
      },
      {
        id: 'americano',
        name: 'Americano',
        description: 'Espresso with hot water',
        price: 3.50,
        category: 'Coffee',
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet endings to make you really happy',
    items: [
      {
        id: 'cheesecake',
        name: "Classic 'American' Cheesecake",
        description: 'With mixed berry coulis',
        price: 7.95,
        category: 'Desserts',
        image: 'https://images.pexels.com/photos/35237767/pexels-photo-35237767.jpeg'
      },
      {
        id: 'choco-flan',
        name: 'Choco Flan',
        description: 'Traditional Latin dessert combining chocolate cake and flan',
        price: 7.25,
        category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTc2NzYyNjQ2OHww&ixlib=rb-4.1.0&q=85'
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
    image: 'https://images.pexels.com/photos/302887/pexels-photo-302887.jpeg',
    featured: true
  },
  {
    id: '2',
    title: 'Behind the Scenes: Crafting Your Perfect Latte',
    excerpt: 'Meet our baristas and learn about the care and precision that goes into every cup we serve.',
    author: 'Maria Rodriguez',
    date: '2024-12-10',
    category: 'Behind the Scenes',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    featured: true
  },
  {
    id: '3',
    title: 'Seasonal Favorites: Winter Warmers',
    excerpt: 'Explore our cozy winter menu featuring comfort foods and warming beverages perfect for the cold season.',
    author: 'Chef Miguel',
    date: '2024-12-05',
    category: 'Menu Highlights',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTc2NzYyNjQ2OHww&ixlib=rb-4.1.0&q=85',
    featured: false
  },
  {
    id: '4',
    title: 'Community Stories: Why Happy Place is Home',
    excerpt: 'Hear from our loyal customers about what makes Happy Place Coffee & Eats special to them.',
    author: 'Happy Place Team',
    date: '2024-11-28',
    category: 'Community',
    image: 'https://images.pexels.com/photos/35237767/pexels-photo-35237767.jpeg',
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
    role: 'Regular Customer',
    content: 'Happy Place has become my second home. The coffee is incredible and the Latin fusion menu is unlike anything else in the area!',
    rating: 5,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
  },
  {
    id: '2',
    name: 'Michael Torres',
    role: 'Food Enthusiast',
    content: 'The Lomo Saltado is authentic and delicious. You can taste the love in every dish. This place is a gem!',
    rating: 5,
    image: 'https://images.pexels.com/photos/302887/pexels-photo-302887.jpeg'
  },
  {
    id: '3',
    name: 'Emily Chen',
    role: 'Coffee Lover',
    content: 'Best latte art in town! The baristas here are true craftspeople. I love supporting this local business.',
    rating: 5,
    image: 'https://images.pexels.com/photos/35237767/pexels-photo-35237767.jpeg'
  }
];
