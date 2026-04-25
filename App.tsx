import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { BeverageProvider, useBeverage } from './src/context/BeverageContext';
import { ThemeToggle } from './src/components/ThemeToggle';
import { BeverageToggle } from './src/components/BeverageToggle';
import { CoffeeScreen } from './src/screens/CoffeeScreen';
import { WineScreen } from './src/screens/WineScreen';

const AppContent: React.FC = () => {
  const { theme } = useTheme();
  const { beverage } = useBeverage();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <BeverageToggle />
        <ThemeToggle />
      </View>
      {beverage === 'coffee' ? <CoffeeScreen /> : <WineScreen />}
    </SafeAreaView>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BeverageProvider>
        <AppContent />
      </BeverageProvider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

export default App;