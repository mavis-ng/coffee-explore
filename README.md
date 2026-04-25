# Coffee Explore 🍷☕

A mobile app for exploring and filtering coffee and wine selections based on detailed tasting attributes.

## Features

### Coffee Selection
- Filter by **Price Range** using interactive slider
- Filter by **Flavour Profile**: Fruity, Nutty, Chocolatey, Floral, Spicy, Earthy, Smoky, Citrus, Berry, Caramel
- Filter by **Origin Location**: Ethiopia, Colombia, Brazil, Indonesia, Vietnam, Costa Rica, Kenya, Guatemala

### Wine Selection
Comprehensive tasting notes including:

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
- Flavour Characteristics: Fruity, Floral, Spicy, Earthy, Oaky, Vegetal, Mineral
- Finish: Short, Medium, Long

### Quality Conclusion
Each beverage includes a quality level rating: Excellent, Very Good, Good, Average, Below Average

### Themes
- **Day Mode**: Light cream background with coffee brown and wine red accents
- **Night Mode**: Dark coffee background with muted tones
- Toggle between Day and Night themes

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm start

# Run on iOS (Mac only)
npm run ios

# Run on Android
npm run android
```

### Platform-Specific Notes

**iOS:**
- Requires macOS for native build
- Use Expo Go app to run on physical iOS device

**Android:**
- Install Expo Go from Google Play Store
- Scan QR code from `npm start` to run on device

## Project Structure

```
coffee-explore/
├── App.tsx                 # Main app entry point
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ThemeToggle.tsx
│   │   ├── BeverageToggle.tsx
│   │   ├── FilterCard.tsx
│   │   ├── OptionSelector.tsx
│   │   ├── SliderInput.tsx
│   │   └── ResultCard.tsx
│   ├── screens/            # Main screens
│   │   ├── CoffeeScreen.tsx
│   │   └── WineScreen.tsx
│   ├── context/            # React contexts
│   │   ├── ThemeContext.tsx
│   │   └── BeverageContext.tsx
│   ├── data/               # Sample data
│   │   ├── coffeeData.ts
│   │   └── wineData.ts
│   └── theme/
│       └── colors.ts       # Theme color definitions
└── assets/                 # Images and icons
```

## GitHub Setup

To push this project to GitHub:

```bash
# Create a new repository on GitHub (via web browser)

# Add remote to your local repo
git remote add origin https://github.com/YOUR_USERNAME/coffee-explore.git

# Push to GitHub
git -u origin master
```

Or use GitHub Desktop / VS Code Git features.

## Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **AsyncStorage** for theme persistence
- **Context API** for state management

## License

MIT License