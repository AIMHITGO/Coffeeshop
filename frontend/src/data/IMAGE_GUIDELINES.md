# Coffee Menu Image Guidelines

## Current Working Specifications (January 2025)

These specifications produce perfectly displayed images on the Happy Place Coffee menu. Follow these exact guidelines for all future coffee menu images.

---

## Image Specifications

### Dimensions
- **Resolution:** 1536 x 1024 pixels
- **Aspect Ratio:** 1.50:1 (3:2 landscape)
- **Orientation:** Landscape (wider than tall)

### Format
- **File Type:** PNG
- **Quality:** High resolution, optimized for web
- **Background:** Solid, neutral background (works best with warm tones that complement coffee)

### File Naming Convention
- Use the exact drink name as the filename
- Replace spaces with `%20` for URLs (or use URL encoding)
- Examples:
  - `Horchata & Espresso.png`
  - `Cold Brew Oat Latte.png`
  - `Vanilla Latte.png`

---

## CSS/Display Styling (Menu.jsx)

```jsx
// Image Container
<div className="relative h-36 overflow-hidden flex-shrink-0 bg-amber-50">
  <img
    src={item.image}
    alt={item.name}
    className="w-full h-full object-contain"
  />
</div>
```

### Key CSS Properties
| Property | Value | Purpose |
|----------|-------|---------|
| `h-36` | 144px height | Fixed container height |
| `overflow-hidden` | hidden | Clips any overflow |
| `bg-amber-50` | Warm cream background | Fills empty space with coffee-themed color |
| `object-contain` | contain | Shows FULL image without cropping |
| `w-full h-full` | 100% width/height | Image fills container |

---

## Image Hosting

### Current Setup
- **Host:** GitHub Raw Content
- **Repository:** `AIMHITGO/Coffeeshop`
- **Path:** `/images/coffeemenu/`
- **URL Pattern:** 
  ```
  https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/[IMAGE_NAME].png
  ```

### Example URLs
```
https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Latte.png
https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Horchata%20%26%20Espresso.png
https://raw.githubusercontent.com/AIMHITGO/Coffeeshop/refs/heads/main/images/coffeemenu/Cold%20Brew%20Oat%20Latte.png
```

---

## Photography Guidelines

### Composition
- **Subject:** Drink should be centered or slightly off-center
- **Framing:** Full drink visible with some breathing room around edges
- **Angle:** Slight elevated angle (about 15-30 degrees from horizontal) works best
- **Space:** Leave ~10-15% margin around the drink

### Lighting
- Soft, even lighting
- Avoid harsh shadows
- Natural light or studio lighting preferred

### Background
- Clean, uncluttered
- Neutral tones (cream, beige, light wood, marble)
- Consistent across all images for cohesive menu look

### Drink Presentation
- Show characteristic features (foam art, layers, toppings)
- Glass/cup should be clean and presentable
- Any garnishes should be visible

---

## Checklist for New Images

- [ ] Resolution is 1536 x 1024 pixels
- [ ] Aspect ratio is 3:2 (1.50:1)
- [ ] Format is PNG
- [ ] Full drink is visible (not cropped)
- [ ] Background is clean and neutral
- [ ] Lighting is even and professional
- [ ] File is named correctly (exact drink name)
- [ ] Uploaded to correct GitHub folder
- [ ] URL added to mock.js with proper encoding

---

## Current Image List (All Using These Specs)

### Coffee & Espresso
- Drip Coffee
- Café Au Lait
- Espresso
- Americano
- Short Black
- Long Black
- Coffee & Milk (Doppio)
- Latte
- Flat White
- Vanilla Latte
- Caramel Macchiato
- Mocha
- White Chocolate Mocha
- Dark Chocolate Mocha

### Cappuccino
- Cappuccino
- Little Havana Cappuccino

### Custom Drip
- Premium Dark Roast

### Cold Brew & Signature
- Cold Brew
- Cold Brew Oat Latte
- Horchata & Espresso
- Horchata Cold Brew Oat Latte
- Cloud - Original
- Cloud - Coconut
- Brown Sugar Almond Latte with Jelly
- Iced Matcha with Brown Sugar Jelly

### Frappés
- Mocha Frappé
- Caramel Frappé
- Matcha Frappé

### Tea Options
- Brewed Tea
- Matcha Latte
- Chai Latte
- Iced Tea
- Iced Tea Lemonade

### Non-Coffee
- Hot Cocoa
- Vanilla Steamer
- Vanilla Frappé

---

## Troubleshooting

### Image appears cropped
- Check aspect ratio is 3:2 (1536x1024)
- Ensure `object-contain` is used, NOT `object-cover`

### Image has white bars on sides
- This is expected with `object-contain`
- `bg-amber-50` fills these areas with warm tone

### Image looks pixelated
- Ensure source image is at least 1536x1024
- Use PNG format for crisp edges

### Image not loading
- Verify GitHub URL is correct
- Check special characters are URL-encoded (%20 for spaces, %26 for &)
