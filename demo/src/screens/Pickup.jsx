import { useEffect, useState } from "react"
import Map, { GeolocateControl } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const Pickup = () => {
  const [viewport, setViewport] = useState({
    longitude: 118.015776, // Adjusted for Indonesia's longitude; originally -2.600029 which seems to be a typo.
    latitude: -2.600029, // Adjusted for Indonesia's latitude.
    zoom: 5,
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setViewport({
          ...viewport,
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        })
      },
      (error) => console.error(error),
      {
        enableHighAccuracy: true,
      }
    )
  }, []) // Empty dependency array means this effect runs once on mount.

  return (
    <div className="h-screen w-full">
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_KEY}
        initialViewState={viewport}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <GeolocateControl />
      </Map>
    </div>
  )
}

export default Pickup
