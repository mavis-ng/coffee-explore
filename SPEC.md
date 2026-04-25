# Coffee Explore - Mobile App Specification

## 1. Project Overview

**Project Name**: Coffee Explore
**Bundle ID (iOS)**: com.coffeeexplore.app
**Application ID (Android)**: com.coffeeexplore.app

**Core Functionality**: A mobile app that allows users to explore and filter coffee and wine selections based on detailed attributes. Users can input their preferences through intuitive UI filters and receive quality recommendations.

**Target Platforms**: iOS and Android
**React Native Environment**: Expo

---

## 2. UI/UX Specification

### Screen Structure

1. **Home Screen** - Toggle between Coffee and Wine views
2. **Coffee Page** - Filter coffee by price, flavor, and location
3. **Wine Page** - Filter wine by tasting notes (appearance, nose, palate)
4. **Results Screen** - Display filtered results with quality conclusions

### Navigation Structure
- Bottom Toggle Switch (Coffee | Wine)
- Tab-like navigation within each section

### Visual Design

#### Color Palette

**Light Theme (Day)**
- Primary: `#8B4513` (Saddle Brown - coffee)
- Secondary: `#722F37` (Wine Red)
- Background: `#FFF8F0` (Cream)
- Surface: `#FFFFFF`
- Text Primary: `#2D1810`
- Text Secondary: `#6B5B4F`
- Accent: `#D4A574` (Coffee Latte)

**Dark Theme (Night)**
- Primary: `#D4A574` (Coffee Latte)
- Secondary: `#9B4D55` (Muted Wine)
- Background: `#1A1412` (Dark Coffee)
- Surface: `#2D2420`
- Text Primary: `#FFF8F0`
- Text Secondary: `#B8A99A`
- Accent: `#8B4513`

#### Typography
- Headings: System font (bold), 24-32px
- Body: System font (regular), 16px
- Captions: System font, 14px

#### Spacing System
- Base unit: 8px
- Small: 8px
- Medium: 16px
- Large: 24px
- XLarge: 32px

### Components

1. **ThemeToggle** - Switch between day/night theme
2. **BeverageToggle** - Switch between Coffee and Wine pages
3. **FilterCard** - Expandable card for filter categories
4. **OptionSelector** - Multi-select chips for options
5. **SliderInput** - For price range and intensity filters
6. **ResultCard** - Display filtered beverage with quality level

---

## 3. Functionality Specification

### Coffee Filters
- **Price Range**: Slider (0-100+)
- **Flavor**: Multiple selection (Fruity, Nutty, Chocolatey, Floral, Spicy, Earthy, smoky, Citrus, Berry, Caramel)
- **Location**: Multiple selection (Ethiopia, Colombia, Brazil, Indonesia, Vietnam, Costa Rica, Kenya, Guatemala)

### Wine Filters

**Appearance**
- Clarity: Clear, Cloudy, Hazy
- Intensity: Pale, Medium, Deep
- Colour: Red, White, Rosé, Orange

**Nose**
- Condition: Clean, Unclean, Faulty
- Intensity: Light, Medium, Pronounced
- Aroma Characteristics: Fruity, Floral, Spicy, Earthy, Oaky, Vegetal, Mineral

**Palate**
- Sweetness: Dry, Off-dry, Medium, Sweet
- Acidity: Low, Medium, High
- Tannin: Low, Medium, High
- Alcohol: Low, Medium, High
- Body: Light, Medium, Full
- Flavour Intensity: Light, Medium, Pronounced
- Flavour Characteristics: (matches aroma characteristics)
- Finish: Short, Medium, Long

### Quality Conclusion
- Level: Excellent, Very Good, Good, Average, Below Average

### Data Handling
- User input stored in React state
- No backend required - all filtering done client-side
- Sample data will be provided for demonstration

---

## 4. Technical Specification

### Required Packages
- expo (~latest)
- react-navigation (for future expansion)
- @react-native-async-storage/async-storage (for theme persistence)
- expo-status-bar

### State Management
- React useState/useContext for local state
- ThemeContext for day/night mode
- BeverageContext for coffee/wine toggle

### Assets Required
- App icon (half coffee bean, half wine glass)
- Section icons for coffee and wine

---

## 5. Project Structure

```
CoffeeExplore/
├── App.tsx
├── src/
│   ├── components/
│   │   ├── ThemeToggle.tsx
│   │   ├── BeverageToggle.tsx
│   │   ├── FilterCard.tsx
│   │   ├── OptionSelector.tsx
│   │   ├── SliderInput.tsx
│   │   └── ResultCard.tsx
│   ├── screens/
│   │   ├── CoffeeScreen.tsx
│   │   └── WineScreen.tsx
│   ├── context/
│   │   ├── ThemeContext.tsx
│   │   └── BeverageContext.tsx
│   ├── data/
│   │   ├── coffeeData.ts
│   │   └── wineData.ts
│   └── theme/
│       └── colors.ts
├── assets/
│   └── icon.png
├── app.json
└── package.json
```