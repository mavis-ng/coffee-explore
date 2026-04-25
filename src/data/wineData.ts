export interface WineItem {
  id: string;
  name: string;
  appearance: {
    clarity: string;
    intensity: string;
    colour: string;
  };
  nose: {
    condition: string;
    intensity: string;
    characteristics: string[];
  };
  palate: {
    sweetness: string;
    acidity: string;
    tannin: string;
    alcohol: string;
    body: string;
    flavourIntensity: string;
    flavourCharacteristics: string[];
    finish: string;
  };
  qualityLevel: string;
  description: string;
}

export const wineData: WineItem[] = [
  {
    id: '1',
    name: 'Château Margaux 2018',
    appearance: { clarity: 'Clear', intensity: 'Deep', colour: 'Red' },
    nose: { condition: 'Clean', intensity: 'Pronounced', characteristics: ['Fruity', 'Oaky', 'Spicy', 'Mineral'] },
    palate: { sweetness: 'Dry', acidity: 'High', tannin: 'High', alcohol: 'High', body: 'Full', flavourIntensity: 'Pronounced', flavourCharacteristics: ['Fruity', 'Oaky', 'Spicy'], finish: 'Long' },
    qualityLevel: 'Excellent',
    description: 'A classic Bordeaux with exceptional structure, complex aromatics, and remarkable aging potential.',
  },
  {
    id: '2',
    name: 'Cloudy Bay Sauvignon Blanc 2022',
    appearance: { clarity: 'Clear', intensity: 'Medium', colour: 'White' },
    nose: { condition: 'Clean', intensity: 'Medium', characteristics: ['Fruity', 'Floral', 'Vegetal'] },
    palate: { sweetness: 'Dry', acidity: 'High', tannin: 'Low', alcohol: 'Medium', body: 'Light', flavourIntensity: 'Pronounced', flavourCharacteristics: ['Fruity', 'Floral', 'Vegetal'], finish: 'Medium' },
    qualityLevel: 'Very Good',
    description: 'Vibrant and refreshing with intense citrus and tropical fruit notes.',
  },
  {
    id: '3',
    name: 'Whispering Angel Rosé 2023',
    appearance: { clarity: 'Clear', intensity: 'Pale', colour: 'Rosé' },
    nose: { condition: 'Clean', intensity: 'Light', characteristics: ['Fruity', 'Floral'] },
    palate: { sweetness: 'Dry', acidity: 'Medium', tannin: 'Low', alcohol: 'Medium', body: 'Light', flavourIntensity: 'Medium', flavourCharacteristics: ['Fruity', 'Floral'], finish: 'Short' },
    qualityLevel: 'Good',
    description: 'Elegant and pale rosé with delicate strawberry and citrus notes.',
  },
  {
    id: '4',
    name: 'Penfolds Grange 2017',
    appearance: { clarity: 'Clear', intensity: 'Deep', colour: 'Red' },
    nose: { condition: 'Clean', intensity: 'Pronounced', characteristics: ['Fruity', 'Oaky', 'Spicy', 'Mineral'] },
    palate: { sweetness: 'Dry', acidity: 'Medium', tannin: 'High', alcohol: 'High', body: 'Full', flavourIntensity: 'Pronounced', flavourCharacteristics: ['Fruity', 'Oaky', 'Spicy'], finish: 'Long' },
    qualityLevel: 'Excellent',
    description: 'Australia\'s most iconic wine with rich, concentrated Shiraz flavors.',
  },
  {
    id: '5',
    name: 'Kim Crawford Sauvignon Blanc 2023',
    appearance: { clarity: 'Clear', intensity: 'Medium', colour: 'White' },
    nose: { condition: 'Clean', intensity: 'Medium', characteristics: ['Fruity', 'Floral', 'Vegetal'] },
    palate: { sweetness: 'Dry', acidity: 'High', tannin: 'Low', alcohol: 'Medium', body: 'Light', flavourIntensity: 'Medium', flavourCharacteristics: ['Fruity', 'Floral'], finish: 'Medium' },
    qualityLevel: 'Good',
    description: 'Crisp New Zealand Sauvignon with tropical fruit and herbaceous notes.',
  },
  {
    id: '6',
    name: 'Caymus Cabernet Sauvignon 2021',
    appearance: { clarity: 'Clear', intensity: 'Deep', colour: 'Red' },
    nose: { condition: 'Clean', intensity: 'Pronounced', characteristics: ['Fruity', 'Oaky'] },
    palate: { sweetness: 'Dry', acidity: 'Medium', tannin: 'Medium', alcohol: 'High', body: 'Full', flavourIntensity: 'Pronounced', flavourCharacteristics: ['Fruity', 'Oaky', 'Spicy'], finish: 'Long' },
    qualityLevel: 'Very Good',
    description: 'Luxuriously smooth with rich dark fruit and velvety tannins.',
  },
  {
    id: '7',
    name: 'Riesling Spätlese 2021',
    appearance: { clarity: 'Clear', intensity: 'Medium', colour: 'White' },
    nose: { condition: 'Clean', intensity: 'Medium', characteristics: ['Fruity', 'Floral', 'Mineral'] },
    palate: { sweetness: 'Off-dry', acidity: 'High', tannin: 'Low', alcohol: 'Medium', body: 'Medium', flavourIntensity: 'Medium', flavourCharacteristics: ['Fruity', 'Floral'], finish: 'Long' },
    qualityLevel: 'Very Good',
    description: 'German classic with honeyed sweetness balanced by crisp acidity.',
  },
  {
    id: '8',
    name: 'Meiomi Pinot Noir 2022',
    appearance: { clarity: 'Clear', intensity: 'Medium', colour: 'Red' },
    nose: { condition: 'Clean', intensity: 'Medium', characteristics: ['Fruity', 'Oaky'] },
    palate: { sweetness: 'Dry', acidity: 'Medium', tannin: 'Medium', alcohol: 'Medium', body: 'Medium', flavourIntensity: 'Medium', flavourCharacteristics: ['Fruity', 'Spicy'], finish: 'Medium' },
    qualityLevel: 'Good',
    description: 'California Pinot with rich berry fruit and subtle oak spice.',
  },
];

export const clarityOptions = ['Clear', 'Cloudy', 'Hazy'];
export const intensityOptions = ['Pale', 'Medium', 'Deep'];
export const colourOptions = ['Red', 'White', 'Rosé', 'Orange'];
export const conditionOptions = ['Clean', 'Unclean', 'Faulty'];
export const aromaCharacteristics = ['Fruity', 'Floral', 'Spicy', 'Earth', 'Oaky', 'Vegetal', 'Mineral'];
export const sweetnessOptions = ['Dry', 'Off-dry', 'Medium', 'Sweet'];
export const acidityOptions = ['Low', 'Medium', 'High'];
export const tanninOptions = ['Low', 'Medium', 'High'];
export const alcoholOptions = ['Low', 'Medium', 'High'];
export const bodyOptions = ['Light', 'Medium', 'Full'];
export const flavourIntensityOptions = ['Light', 'Medium', 'Pronounced'];
export const finishOptions = ['Short', 'Medium', 'Long'];