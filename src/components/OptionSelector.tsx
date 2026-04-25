import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

interface OptionSelectorProps {
  label: string;
  options: string[];
  selectedOptions: string[];
  onToggle: (option: string) => void;
  multiSelect?: boolean;
}

export const OptionSelector: React.FC<OptionSelectorProps> = ({
  label,
  options,
  selectedOptions,
  onToggle,
}) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: theme.textPrimary }]}>{label}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => {
          const isSelected = selectedOptions.includes(option);
          return (
            <TouchableOpacity
              key={option}
              onPress={() => onToggle(option)}
              style={[
                styles.option,
                {
                  backgroundColor: isSelected ? theme.primary : theme.surface,
                  borderColor: isSelected ? theme.primary : theme.border,
                },
              ]}
            >
              <Text style={[
                styles.optionText,
                { color: isSelected ? '#FFF' : theme.textSecondary }
              ]}>
                {option}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  option: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 18,
    borderWidth: 1,
  },
  optionText: {
    fontSize: 13,
    fontWeight: '500',
  },
});