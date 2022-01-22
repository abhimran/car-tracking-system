import React, { createContext, useState } from 'react';
import { ListOfCars } from '../data/CarData';
export const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [carData, setCarData] = useState(ListOfCars);
  return (
    <CarContext.Provider value={{ carData, setCarData }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;
