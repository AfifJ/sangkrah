import React, { createContext, useState } from "react"

export const MapContext = createContext()

export const MapProvider = ({ children }) => {
  const viewport = {
    longitude: -7.6476848,
    latitude: 110.4280485,
    zoom: 8,
  }

  return (
    <MapContext.Provider value={{ viewport }}>{children}</MapContext.Provider>
  )
}
