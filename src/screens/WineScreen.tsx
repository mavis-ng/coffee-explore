import React, { useState, useMemo } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { FilterCard } from '../components/FilterCard';
import { OptionSelector } from '../components/OptionSelector';
import { ResultCard } from '../components/ResultCard';
import {
  wineData,
  clarityOptions,
  intensityOptions,
  colourOptions,
  conditionOptions,
  aromaCharacteristics,
  sweetnessOptions,
  acidityOptions,
  tanninOptions,
  alcoholOptions,
  bodyOptions,
  flavourIntensityOptions,
  finishOptions,
} from '../data/wineData';

export const WineScreen: React.FC = () => {
  const { theme } = useTheme();
  const [appearance, setAppearance] = useState({ clarity: '', intensity: '', colour: '' });
  const [nose, setNose] = useState({ condition: '', intensity: '', characteristics: [] as string[] });
  const [palate, setPalate] = useState({
    sweetness: '',
    acidity: '',
    tannin: '',
    alcohol: '',
    body: '',
    flavourIntensity: '',
    flavourCharacteristics: [] as string[],
    finish: '',
  });

  const toggleCharacteristic = (type: 'nose' | 'palate', value: string) => {
    if (type === 'nose') {
      setNose(prev => ({
        ...prev,
        characteristics: prev.characteristics.includes(value)
          ? prev.characteristics.filter(c => c !== value)
          : [...prev.characteristics, value],
      }));
    } else {
      setPalate(prev => ({
        ...prev,
        flavourCharacteristics: prev.flavourCharacteristics.includes(value)
          ? prev.flavourCharacteristics.filter(c => c !== value)
          : [...prev.flavourCharacteristics, value],
      }));
    }
  };

  const filteredWine = useMemo(() => {
    return wineData.filter(wine => {
      if (appearance.clarity && wine.appearance.clarity !== appearance.clarity) return false;
      if (appearance.intensity && wine.appearance.intensity !== appearance.intensity) return false;
      if (appearance.colour && wine.appearance.colour !== appearance.colour) return false;
      if (nose.condition && wine.nose.condition !== nose.condition) return false;
      if (nose.intensity && wine.nose.intensity !== nose.intensity) return false;
      if (nose.characteristics.length > 0 && !nose.characteristics.some(c => wine.nose.characteristics.includes(c))) return false;
      if (palate.sweetness && wine.palate.sweetness !== palate.sweetness) return false;
      if (palate.acidity && wine.palate.acidity !== palate.acidity) return false;
      if (palate.tannin && wine.palate.tannin !== palate.tannin) return false;
      if (palate.alcohol && wine.palate.alcohol !== palate.alcohol) return false;
      if (palate.body && wine.palate.body !== palate.body) return false;
      if (palate.flavourIntensity && wine.palate.flavourIntensity !== palate.flavourIntensity) return false;
      if (palate.flavourCharacteristics.length > 0 && !palate.flavourCharacteristics.some(c => wine.palate.flavourCharacteristics.includes(c))) return false;
      if (palate.finish && wine.palate.finish !== palate.finish) return false;
      return true;
    });
  }, [appearance, nose, palate]);

  const getWineDetails = (wine: typeof wineData[0]) => {
    return `Appearance: ${wine.appearance.clarity}, ${wine.appearance.intensity}, ${wine.appearance.colour}`;
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>Wine Selection</Text>

        <FilterCard title="👁️ Appearance">
          <OptionSelector
            label="Clarity"
            options={clarityOptions}
            selectedOptions={appearance.clarity ? [appearance.clarity] : []}
            onToggle={(v) => setAppearance(prev => ({ ...prev, clarity: prev.clarity === v ? '' : v }))}
          />
          <OptionSelector
            label="Intensity"
            options={intensityOptions}
            selectedOptions={appearance.intensity ? [appearance.intensity] : []}
            onToggle={(v) => setAppearance(prev => ({ ...prev, intensity: prev.intensity === v ? '' : v }))}
          />
          <OptionSelector
            label="Colour"
            options={colourOptions}
            selectedOptions={appearance.colour ? [appearance.colour] : []}
            onToggle={(v) => setAppearance(prev => ({ ...prev, colour: prev.colour === v ? '' : v }))}
          />
        </FilterCard>

        <FilterCard title="👃 Nose">
          <OptionSelector
            label="Condition"
            options={conditionOptions}
            selectedOptions={nose.condition ? [nose.condition] : []}
            onToggle={(v) => setNose(prev => ({ ...prev, condition: prev.condition === v ? '' : v }))}
          />
          <OptionSelector
            label="Intensity"
            options={intensityOptions}
            selectedOptions={nose.intensity ? [nose.intensity] : []}
            onToggle={(v) => setNose(prev => ({ ...prev, intensity: prev.intensity === v ? '' : v }))}
          />
          <OptionSelector
            label="Aroma Characteristics"
            options={aromaCharacteristics}
            selectedOptions={nose.characteristics}
            onToggle={(v) => toggleCharacteristic('nose', v)}
          />
        </FilterCard>

        <FilterCard title="👅 Palate">
          <OptionSelector
            label="Sweetness"
            options={sweetnessOptions}
            selectedOptions={palate.sweetness ? [palate.sweetness] : []}
            onToggle={(v) => setPalate(prev => ({ ...prev, sweetness: prev.sweetness === v ? '' : v }))}
          />
          <OptionSelector
            label="Acidity"
            options={acidityOptions}
            selectedOptions={palate.acidity ? [palate.acidity] : []}
            onToggle={(v) => setPalate(prev => ({ ...prev, acidity: prev.acidity === v ? '' : v }))}
          />
          <OptionSelector
            label="Tannin"
            options={tanninOptions}
            selectedOptions={palate.tannin ? [palate.tannin] : []}
            onToggle={(v) => setPalate(prev => ({ ...prev, tannin: prev.tannin === v ? '' : v }))}
          />
          <OptionSelector
            label="Alcohol"
            options={alcoholOptions}
            selectedOptions={palate.alcohol ? [palate.alcohol] : []}
            onToggle={(v) => setPalate(prev => ({ ...prev, alcohol: prev.alcohol === v ? '' : v }))}
          />
          <OptionSelector
            label="Body"
            options={bodyOptions}
            selectedOptions={palate.body ? [palate.body] : []}
            onToggle={(v) => setPalate(prev => ({ ...prev, body: prev.body === v ? '' : v }))}
          />
          <OptionSelector
            label="Flavour Intensity"
            options={flavourIntensityOptions}
            selectedOptions={palate.flavourIntensity ? [palate.flavourIntensity] : []}
            onToggle={(v) => setPalate(prev => ({ ...prev, flavourIntensity: prev.flavourIntensity === v ? '' : v }))}
          />
          <OptionSelector
            label="Flavour Characteristics"
            options={aromaCharacteristics}
            selectedOptions={palate.flavourCharacteristics}
            onToggle={(v) => toggleCharacteristic('palate', v)}
          />
          <OptionSelector
            label="Finish"
            options={finishOptions}
            selectedOptions={palate.finish ? [palate.finish] : []}
            onToggle={(v) => setPalate(prev => ({ ...prev, finish: prev.finish === v ? '' : v }))}
          />
        </FilterCard>

        <View style={styles.resultsContainer}>
          <Text style={[styles.resultsTitle, { color: theme.textPrimary }]}>
            Found {filteredWine.length} wine(s)
          </Text>
          {filteredWine.map(wine => (
            <ResultCard
              key={wine.id}
              name={wine.name}
              description={wine.description}
              qualityLevel={wine.qualityLevel}
              details={getWineDetails(wine)}
            />
          ))}
          {filteredWine.length === 0 && (
            <View style={[styles.emptyState, { backgroundColor: theme.surface, borderColor: theme.border }]}>
              <Text style={[styles.emptyText, { color: theme.textSecondary }]}>
                No wines match your criteria. Try adjusting the filters.
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