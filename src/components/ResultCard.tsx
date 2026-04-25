import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

interface ResultCardProps {
  name: string;
  description: string;
  qualityLevel: string;
  details?: string;
}

export const ResultCard: React.FC<ResultCardProps> = ({ name, description, qualityLevel, details }) => {
  const { theme } = useTheme();

  const getQualityColor = (level: string) => {
    switch (level) {
      case 'Excellent': return '#4CAF50';
      case 'Very Good': return '#8BC34A';
      case 'Good': return '#CDDC39';
      case 'Average': return '#FF9800';
      default: return '#f44336';
    }
  };

  return (
    <View style={[styles.card, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
      <View style={styles.header}>
        <Text style={[styles.name, { color: theme.textPrimary }]}>{name}</Text>
        <View style={[styles.badge, { backgroundColor: getQualityColor(qualityLevel) }]}>
          <Text style={styles.badgeText}>{qualityLevel}</Text>
        </View>
      </View>
      <Text style={[styles.description, { color: theme.textSecondary }]}>{description}</Text>
      {details && (
        <Text style={[styles.details, { color: theme.accent }]}>{details}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    flex: 1,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  details: {
    fontSize: 13,
    marginTop: 8,
    fontStyle: 'italic',
  },
});