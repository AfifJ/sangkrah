import React, { createContext, useState } from 'react';

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [viewport, setViewport] = useState({
    longitude: 118.015776,
    latitude: -2.600029,
    zoom: 5,
  });

  const updateViewport = (newViewport) => {
    setViewport(newViewport);
  };

  return (
    <MapContext.Provider value={{ viewport, updateViewport }}>
      {children}
    </MapContext.Provider>
  );
};