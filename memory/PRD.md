# Happy Place Coffee & Eats - Product Requirements Document

## Original Problem Statement
Build a professional, conversion-optimized landing page for "Happy Place Coffee and Eats" business to increase online orders and provide information to new and existing customers.

## Target Audience
- New and existing customers of Happy Place Coffee & Eats
- Local Woodbridge, VA community members
- Coffee enthusiasts and food lovers

## Core Requirements

### Branding
- Use company's actual logo and user-provided images
- Latin-American and New-American cuisine theme
- Family-owned, welcoming atmosphere

### Key Features
1. **Menu System** (Implemented)
   - Coffee/Drinks page with full customization
   - Breakfast menu page
   - Dinner menu page
   - Cross-navigation between menus

2. **Cart Functionality** (Implemented)
   - Global floating cart persistent across pages
   - Item customization with dynamic pricing
   - Edit/remove items capability
   - Special instructions field for all items

3. **Pages** (Partially Implemented)
   - Home page ✅
   - Menu pages (Coffee, Breakfast, Dinner) ✅
   - About Us page ✅
   - Rewards page (placeholder) ✅
   - Blog page (placeholder) ✅
   - Locations page (placeholder) ✅

4. **Online Ordering** (Future)
   - Stripe payment integration
   - Order confirmation flow

---

## What's Been Implemented

### January 25, 2025 - Image Updates Complete
- Updated all 15 remaining drink images with user-provided GitHub URLs
- Added Premium Dark Roast and Iced Tea images
- All drink menu items now display custom professional images

### Previous Session Work
- Menu UI/UX overhaul (compact cards, sticky price total)
- Special instructions field with smart character counter
- Cart customization display bug fixes (food, drink booleans, drink arrays)
- ScrollToTop component for reliable navigation
- Three interconnected menu pages (Coffee, Breakfast, Dinner)
- Global cart with Context API and localStorage persistence

---

## Current Architecture

### Frontend Only (React + TailwindCSS)
```
/app/frontend/src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── GlobalCart.jsx      # Cart with customization display
│   ├── FoodMenuItem.jsx    # Food item cards
│   └── ScrollToTop.jsx     # Navigation scroll fix
├── contexts/
│   └── CartContext.jsx     # Global cart state
├── data/
│   └── mock.js             # ALL MENU DATA (100% mocked)
├── pages/
│   ├── Home.jsx
│   ├── Menu.jsx            # Coffee/Drinks menu
│   ├── Breakfast.jsx
│   ├── Dinner.jsx
│   ├── About.jsx
│   ├── Rewards.jsx
│   ├── Blog.jsx
│   └── Locations.jsx
└── App.js
```

### Backend (NOT YET IMPLEMENTED)
- No backend exists
- No database connection
- All data hardcoded in mock.js

---

## Prioritized Backlog

### P0 - Critical
- [ ] Build FastAPI backend with MongoDB
- [ ] Create APIs for menu data (CRUD)
- [ ] Replace mock.js calls with API calls in frontend

### P1 - High Priority
- [ ] Stripe payment integration for online ordering
- [ ] Order submission and confirmation flow
- [ ] User accounts (optional)

### P2 - Medium Priority
- [ ] Implement Rewards Program functionality
- [ ] Blog page with CMS-like backend
- [ ] Locations page with Google Maps integration

### P3 - Low Priority / Future
- [ ] Admin dashboard for menu management
- [ ] Order history and tracking
- [ ] Email notifications for orders

---

## Technical Notes

### Known Considerations
- Cart customization display has been a recurring bug source - test thoroughly after any cart changes
- Image URLs now use GitHub raw content URLs (raw.githubusercontent.com)
- Hero images and blog images still use old lirp.cdn-website.com URLs (not menu items)

### Data Model (for future backend)
- Menu Categories with nested Items
- Items have sizes array with price/calories
- Customization options: milk, addOns, syrups, sauces, shots, toppings
- Cart items include full customization state and special instructions

---

## Location Info
- Address: 13840 Smoketown Road, Woodbridge, VA 22192
- Phone: (571) 552-4070
- Hours: Mon-Sat 8AM-8PM, Sun 8AM-5PM
