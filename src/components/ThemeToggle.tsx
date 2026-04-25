import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={[styles.container, { backgroundColor: theme.surface, borderColor: theme.border }]}
    >
      <View style={[styles.iconContainer, { backgroundColor: isDarkMode ? '#1A1412' : '#FFF8F0' }]}>
        <Text style={styles.icon}>{isDarkMode ? '🌙' : '☀️'}</Text>
      </View>
      <Text style={[styles.label, { color: theme.textPrimary }]}>
        {isDarkMode ? 'Night' : 'Day'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
  iconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  icon: {
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
});