import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useTheme } from '../context/ThemeContext';

interface FilterCardProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export const FilterCard: React.FC<FilterCardProps> = ({ title, children, defaultExpanded = true }) => {
  const { theme } = useTheme();
  const [expanded, setExpanded] = React.useState(defaultExpanded);

  return (
    <View style={[styles.card, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
      <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        style={styles.header}
      >
        <Text style={[styles.title, { color: theme.textPrimary }]}>{title}</Text>
        <Text style={[styles.arrow, { color: theme.textSecondary }]}>
          {expanded ? '▲' : '▼'}
        </Text>
      </TouchableOpacity>
      {expanded && <View style={styles.content}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 16,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  arrow: {
    fontSize: 14,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});