import React, { createContext, useContext, useState } from 'react';

// Membuat context
const MapContext = createContext();

// Membuat provider
export const MapProvider = ({ children }) => {
  const [contextMap, setContextMap] = useState(null);

  return (
    <MapContext.Provider value={{ contextMap, setContextMap }}>
      {children}
    </MapContext.Provider>
  );
};

// Membuat custom hook untuk menggunakan context
export const useContextMap = () => {
  const context = useContext(MapContext);

  if (!context) {
    throw new Error('useMap must be used within a MapProvider');
  }

  return context;
};