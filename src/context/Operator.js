import React, { createContext, useState } from 'react';
import { OperatorData } from '../data/OperatorData';
export const OperatorContext = createContext();

const OperatorProvider = ({ children }) => {
  const [operatorData, setOperatorData] = useState(OperatorData);
  return (
    <OperatorContext.Provider value={{ operatorData, setOperatorData }}>
      {children}
    </OperatorContext.Provider>
  );
};

export default OperatorProvider;
