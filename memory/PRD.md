# Happy Place Coffee & Eats - Product Requirements Document

## Original Problem Statement
Build and refine a landing page / full website for "Happy Place Coffee and Eats" — a family-owned coffee shop in Woodbridge, VA. The project includes a complete drink menu with customization, food menus (breakfast/dinner), a global shopping cart, blog/coffee culture pages, an about page, and more.

## Core Architecture
- **Frontend:** React + TailwindCSS + Shadcn/UI (frontend-only, no backend yet)
- **Data:** All data from `/app/frontend/src/data/mock.js`
- **Routing:** react-router-dom with hash-based anchor scrolling
- **State:** CartContext + localStorage for cart persistence
- **Styling:** TailwindCSS with amber/orange brand colors

## What's Been Implemented

### Pages
- **Home** — Hero section, best sellers, category cards, coffee culture stories
- **Menu (Drink)** — Side nav with category jump, drink tile grid, "Buy our Beans" button
- **Drink Detail** — Full customization UI (milk, syrups, sauces, shots, toppings), quantity selector, add to cart
- **Breakfast Menu** — Side nav, food items with customization
- **Dinner Menu** — Side nav, food items with customization
- **About** — Coffee story, values, clickable coffee bean cards → bean product pages, stats, CTA
- **Bean Detail** — Individual product page per bean with grind selector (Whole/Ground), quantity, add to cart
- **Blog** — Category-filtered articles, interactive Coffee 101 section (from PDF), Our Story section (from original site)
- **Rewards, Locations** — Placeholder/basic pages

### Global Features
- **Global Cart** — Bottom-left floating cart, minimized/regular/expanded states, customization display, "Modify One" for grouped items
- **Back to Top** button
- **Responsive** — Mobile/tablet/desktop layouts

## Completed Work (Latest Session — Feb 6, 2026)
- Removed icon from Drink Menu side nav header
- Renamed side nav headers: "Drink Categories" → "Drink Menu", "Breakfast Categories" → "Breakfast Menu", "Dinner Categories" → "Dinner Menu"
- Added "Buy our Beans" button to all three menu side navs (Drink, Breakfast, Dinner) → navigates to /about#coffee-origins
- Made coffee bean cards clickable on About page → navigate to /about/beans/:slug
- Created BeanDetail.jsx product page with grind selector, quantity, add-to-cart
- Integrated beans with existing cart system (menuType: 'beans')
- Fixed Coffee 101 blog image (replaced cropped image with correct Cold Brew image)
- Built Coffee 101 interactive section with 7 expandable topic cards, search, and fun stats
- Built Our Story section with hero image + 5 content sections from original Happy Place site
- Updated GlobalCart to handle bean items for navigation

## Key Files
- `/app/frontend/src/pages/Menu.jsx` — Drink menu with side nav
- `/app/frontend/src/pages/Breakfast.jsx` — Breakfast menu
- `/app/frontend/src/pages/Dinner.jsx` — Dinner menu
- `/app/frontend/src/pages/About.jsx` — About page with clickable bean cards
- `/app/frontend/src/pages/BeanDetail.jsx` — Bean product page (NEW)
- `/app/frontend/src/pages/Blog.jsx` — Blog with Coffee 101 + Our Story
- `/app/frontend/src/pages/DrinkDetail.jsx` — Drink customization page
- `/app/frontend/src/components/GlobalCart.jsx` — Shopping cart
- `/app/frontend/src/contexts/CartContext.jsx` — Cart state management
- `/app/frontend/src/data/mock.js` — All mock data including coffeeBeans array

## Prioritized Backlog

### P0 (Next Up)
- Backend Development — FastAPI + MongoDB, create menu/bean APIs, replace mock.js
- Verify "Modify One" cart feature (previously unverified)

### P1
- Online ordering with Stripe payment integration
- Refactor GlobalCart.jsx for reliability

### P2
- Rewards Program page (full implementation)
- Blog individual article pages
- Locations page with map integration

## Known Issues
- "Modify One" cart feature was patched but never fully verified via testing
- GlobalCart.jsx is complex and historically fragile
- All data is MOCKED — no backend exists yet
