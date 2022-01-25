import React, { createContext, useState } from 'react';
import { ListofCities } from '../data/CityData';
export const CityContext = createContext();

const CityProvider = ({ children }) => {
  const [cityData, setCityData] = useState(ListofCities);
  return (
    <CityContext.Provider value={{ cityData, setCityData }}>
      {children}
    </CityContext.Provider>
  );
};

export default CityProvider;
