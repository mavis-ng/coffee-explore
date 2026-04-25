import React, { createContext, useContext, useState, ReactNode } from 'react';

type BeverageType = 'coffee' | 'wine';

interface BeverageContextType {
  beverage: BeverageType;
  setBeverage: (beverage: BeverageType) => void;
  toggleBeverage: () => void;
}

const BeverageContext = createContext<BeverageContextType | undefined>(undefined);

export const BeverageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [beverage, setBeverage] = useState<BeverageType>('coffee');

  const toggleBeverage = () => {
    setBeverage(prev => prev === 'coffee' ? 'wine' : 'coffee');
  };

  return (
    <BeverageContext.Provider value={{ beverage, setBeverage, toggleBeverage }}>
      {children}
    </BeverageContext.Provider>
  );
};

export const useBeverage = (): BeverageContextType => {
  const context = useContext(BeverageContext);
  if (!context) {
    throw new Error('useBeverage must be used within a BeverageProvider');
  }
  return context;
};