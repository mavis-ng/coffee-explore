export interface CoffeeItem {
  id: string;
  name: string;
  priceRange: number;
  priceMax: number;
  flavors: string[];
  location: string;
  description: string;
  qualityLevel: string;
  image?: string;
}

export const coffeeData: CoffeeItem[] = [
  {
    id: '1',
    name: 'Ethiopian Yirgacheffe',
    priceRange: 15,
    priceMax: 25,
    flavors: ['Floral', 'Citrus', 'Berry', 'Fruity'],
    location: 'Ethiopia',
    description: 'A bright and complex coffee with floral aromatics and wine-like acidity.',
    qualityLevel: 'Excellent',
  },
  {
    id: '2',
    name: 'Colombian Supremo',
    priceRange: 12,
    priceMax: 20,
    flavors: ['Caramel', 'Nutty', 'Chocolatey', 'Berry'],
    location: 'Colombia',
    description: 'Well-balanced with rich caramel sweetness and a smooth finish.',
    qualityLevel: 'Very Good',
  },
  {
    id: '3',
    name: 'Sumatra Mandheling',
    priceRange: 18,
    priceMax: 28,
    flavors: ['Earthy', 'Smoky', 'Spicy', 'Chocolatey'],
    location: 'Indonesia',
    description: 'Full-bodied with earthy, herbal notes and low acidity.',
    qualityLevel: 'Good',
  },
  {
    id: '4',
    name: 'Brazilian Santos',
    priceRange: 10,
    priceMax: 18,
    flavors: ['Nutty', 'Chocolatey', 'Caramel', 'Fruity'],
    location: 'Brazil',
    description: 'Mild and smooth with sweet nutty flavors and low acidity.',
    qualityLevel: 'Good',
  },
  {
    id: '5',
    name: 'Kenya AA',
    priceRange: 22,
    priceMax: 35,
    flavors: ['Citrus', 'Berry', 'Floral', 'Spicy'],
    location: 'Kenya',
    description: 'Bold and bright with complex fruit notes and wine-like acidity.',
    qualityLevel: 'Excellent',
  },
  {
    id: '6',
    name: 'Costa Rica Tarrazu',
    priceRange: 16,
    priceMax: 24,
    flavors: ['Citrus', 'Honey', 'Chocolatey', 'Nutty'],
    location: 'Costa Rica',
    description: 'Clean and bright with honey sweetness and pleasant acidity.',
    qualityLevel: 'Very Good',
  },
  {
    id: '7',
    name: 'Guatemala Antigua',
    priceRange: 14,
    priceMax: 22,
    flavors: ['Chocolatey', 'Spicy', 'Nutty', 'Floral'],
    location: 'Guatemala',
    description: 'Rich and complex with chocolate undertones and subtle spice.',
    qualityLevel: 'Very Good',
  },
  {
    id: '8',
    name: 'Vietnamese Robusta',
    priceRange: 8,
    priceMax: 15,
    flavors: ['Earthy', 'Smoky', 'Nutty'],
    location: 'Vietnam',
    description: 'Strong and bold with intense earthiness and low acidity.',
    qualityLevel: 'Average',
  },
];

export const coffeeFlavors = [
  'Fruity', 'Nutty', 'Chocolatey', 'Floral', 'Spicy', 'Earthy', 'Smoky', 'Citrus', 'Berry', 'Caramel'
];

export const coffeeLocations = [
  'Ethiopia', 'Colombia', 'Brazil', 'Indonesia', 'Vietnam', 'Costa Rica', 'Kenya', 'Guatemala'
];

export const qualityLevels = ['Excellent', 'Very Good', 'Good', 'Average', 'Below Average'];