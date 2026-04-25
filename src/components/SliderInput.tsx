import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

interface SliderInputProps {
  label: string;
  min: number;
  max: number;
  value: number;
  onValueChange: (value: number) => void;
  unit?: string;
}

export const SliderInput: React.FC<SliderInputProps> = ({
  label,
  min,
  max,
  value,
  onValueChange,
  unit = '',
}) => {
  const { theme } = useTheme();

  const handleDecrease = () => {
    if (value > min) {
      onValueChange(value - 5);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      onValueChange(value + 5);
    }
  };

  const displayValue = `${value}${unit}${unit === '$' ? '+' : ''}`;

  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={[styles.label, { color: theme.textPrimary }]}>{label}</Text>
        <Text style={[styles.value, { color: theme.primary }]}>{displayValue}</Text>
      </View>
      <View style={styles.sliderRow}>
        <TouchableOpacity
          onPress={handleDecrease}
          style={[styles.button, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <Text style={[styles.buttonText, { color: theme.textPrimary }]}>−</Text>
        </TouchableOpacity>
        <View style={[styles.track, { backgroundColor: theme.border }]}>
          <View
            style={[
              styles.fill,
              {
                backgroundColor: theme.primary,
                width: `${((value - min) / (max - min)) * 100}%`,
              },
            ]}
          />
        </View>
        <TouchableOpacity
          onPress={handleIncrease}
          style={[styles.button, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <Text style={[styles.buttonText, { color: theme.textPrimary }]}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rangeRow}>
        <Text style={[styles.rangeText, { color: theme.textSecondary }]}>{min}{unit}</Text>
        <Text style={[styles.rangeText, { color: theme.textSecondary }]}>{max}{unit}+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
  },
  sliderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
  },
  track: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 4,
  },
  rangeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  rangeText: {
    fontSize: 12,
  },
});