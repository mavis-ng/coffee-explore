import React, { useState, useMemo } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { FilterCard } from '../components/FilterCard';
import { OptionSelector } from '../components/OptionSelector';
import { SliderInput } from '../components/SliderInput';
import { ResultCard } from '../components/ResultCard';
import { coffeeData, coffeeFlavors, coffeeLocations } from '../data/coffeeData';

export const CoffeeScreen: React.FC = () => {
  const { theme } = useTheme();
  const [priceRange, setPriceRange] = useState(30);
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const toggleFlavor = (flavor: string) => {
    setSelectedFlavors(prev =>
      prev.includes(flavor)
        ? prev.filter(f => f !== flavor)
        : [...prev, flavor]
    );
  };

  const toggleLocation = (location: string) => {
    setSelectedLocations(prev =>
      prev.includes(location)
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
  };

  const filteredCoffee = useMemo(() => {
    return coffeeData.filter(coffee => {
      if (coffee.priceMax > priceRange) return false;
      if (selectedFlavors.length > 0 && !selectedFlavors.some(f => coffee.flavors.includes(f))) return false;
      if (selectedLocations.length > 0 && !selectedLocations.includes(coffee.location)) return false;
      return true;
    });
  }, [priceRange, selectedFlavors, selectedLocations]);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>Coffee Selection</Text>

        <FilterCard title="💰 Price Range">
          <SliderInput
            label="Maximum Price"
            min={5}
            max={50}
            value={priceRange}
            onValueChange={setPriceRange}
            unit="$"
          />
        </FilterCard>

        <FilterCard title="🌸 Flavour Profile">
          <OptionSelector
            label="Select Flavors"
            options={coffeeFlavors}
            selectedOptions={selectedFlavors}
            onToggle={toggleFlavor}
          />
        </FilterCard>

        <FilterCard title="🌍 Origin Location">
          <OptionSelector
            label="Select Origins"
            options={coffeeLocations}
            selectedOptions={selectedLocations}
            onToggle={toggleLocation}
          />
        </FilterCard>

        <View style={styles.resultsContainer}>
          <Text style={[styles.resultsTitle, { color: theme.textPrimary }]}>
            Found {filteredCoffee.length} coffee(s)
          </Text>
          {filteredCoffee.map(coffee => (
            <ResultCard
              key={coffee.id}
              name={coffee.name}
              description={coffee.description}
              qualityLevel={coffee.qualityLevel}
              details={`Location: ${coffee.location} | Flavors: ${coffee.flavors.join(', ')}`}
            />
          ))}
          {filteredCoffee.length === 0 && (
            <View style={[styles.emptyState, { backgroundColor: theme.surface, borderColor: theme.border }]}>
              <Text style={[styles.emptyText, { color: theme.textSecondary }]}>
                No coffees match your criteria. Try adjusting the filters.
              </Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  resultsContainer: {
    marginTop: 8,
  },
  resultsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  emptyState: {
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    textAlign: 'center',
  },
});