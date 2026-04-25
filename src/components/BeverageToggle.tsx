import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useBeverage } from '../context/BeverageContext';
import { useTheme } from '../context/ThemeContext';

export const BeverageToggle: React.FC = () => {
  const { beverage, setBeverage } = useBeverage();
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.surface, borderColor: theme.border }]}>
      <TouchableOpacity
        onPress={() => setBeverage('coffee')}
        style={[
          styles.tab,
          beverage === 'coffee' && { backgroundColor: theme.primary }
        ]}
      >
        <Text style={[
          styles.tabText,
          { color: beverage === 'coffee' ? '#FFF' : theme.textSecondary }
        ]}>
          ☕ Coffee
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setBeverage('wine')}
        style={[
          styles.tab,
          beverage === 'wine' && { backgroundColor: theme.secondary }
        ]}
      >
        <Text style={[
          styles.tabText,
          { color: beverage === 'wine' ? '#FFF' : theme.textSecondary }
        ]}>
          🍷 Wine
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 25,
    borderWidth: 1,
    padding: 4,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 21,
  },
  tabText: {
    fontSize: 15,
    fontWeight: '600',
  },
});