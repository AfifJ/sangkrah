import { useContext, useEffect, useRef, useState } from "react"
import Map, { GeolocateControl, Marker, NavigationControl } from "react-map-gl"
import { UserCircleIcon } from "@heroicons/react/24/solid"
import "mapbox-gl/dist/mapbox-gl.css"
import axios from "axios"
import { MapContext } from "../context/MapContext"
import BottomMapWidget from "../components/BottomMapWidget"
import UserLocationWidget from "../components/UserLocationWidget"

const Pickup = () => {
  const GeolocateRef = useRef(null)
  const [userLocation, setUserLocation] = useState(null)
  const [locationInput, setLocationInput] = useState("")
  const mapRef = useRef()
  const [address, setAddress] = useState("")
  const user = {}
  const viewport = useContext(MapContext)

  const [showWidget, setShowWidget] = useState(false)
  const [selectedCenter, setSelectedCenter] = useState(null)

  const [markers, setMarkers] = useState([
    {
      latitude: -7.6477016 + 0.01,
      longitude: 110.4280727 + 0.01,
      name: "Recycle Center 1",
      location: "New York, NY",
    },
    {
      latitude: -7.6477016 - 0.01,
      longitude: 110.4280727 - 0.01,
      name: "Recycle Center 2000",
      location: "New York, NY",
    },
  ])

  const handleMarkerClick = (marker) => {
    setSelectedCenter(marker)
    setShowWidget(true)
  }

  const handleDisposeChoice = (choice) => {
    // handle user's choice
  }

  const handleDeliveryMethod = (method) => {
    // handle user's choice
  }

  const handleConfirmation = () => {
    // redirect to recycle link
  }

  const toggleWidget = () => {
    setShowWidget(!showWidget)
  }

  const handleGeolocate = async (position) => {
    const { latitude, longitude } = position.coords
    setUserLocation({ latitude, longitude, zoom: 8 })
    setLocationInput(`${latitude}, ${longitude}`)
    localStorage.setItem("userLocation", JSON.stringify(userLocation))
    localStorage.setItem("userAddress", address)

    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${import.meta.env.VITE_MAPBOX_KEY ?? process.env.VITE_MAPBOX_KEY}`
    )
    setAddress(response.data.features[0].place_name)
  }
  /* 
  const handleLocationInputChange = (event) => {
    setLocationInput(event.target.value)
    const [latitude, longitude] = event.target.value.split(",").map(Number)
    if (latitude && longitude) {
      mapRef.current.getMap().flyTo({ center: [longitude, latitude] })
    }
  } */

  useEffect(() => {
    const storedUserAddress = localStorage.getItem("userAddress")
    const storedUserLocation = localStorage.getItem("userLocation")
    setUserLocation(JSON.parse(storedUserLocation))
    setAddress(storedUserAddress)
  }, [])

  return (
    <div className="relative h-screen w-full border">
      <UserLocationWidget address={address} user={user} />
      <Map
        reuseMaps={true}
        onLoad={() => GeolocateRef.current?.trigger()}
        mapboxAccessToken={
          import.meta.env.VITE_MAPBOX_KEY ?? process.env.VITE_MAPBOX_KEY
        }
        style={{
          width: "100%",
          height: "calc(100% - 5rem)",
          position: "absolute",
          top: "0",
          zIndex: 0,
        }}
        attributionControl={false}
        initialViewState={viewport}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        id="pickupMap"
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            latitude={marker.latitude}
            longitude={marker.longitude}
            anchor="bottom"
            onClick={() => handleMarkerClick(marker)}
            style={{
              cursor: "pointer",
            }}
          ></Marker>
        ))}
        {userLocation && (
          <Marker
            latitude={userLocation.latitude}
            longitude={userLocation.longitude}
            anchor="bottom"
          >
            <UserCircleIcon className="w-8 h-8 text-primary" />
          </Marker>
        )}
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          onGeolocate={handleGeolocate}
          showUserLocation={false}
          // showUserHeading={true}
          style={{
            padding: "1rem",
            borderRadius: "1.5rem",
          }}
          showAccuracyCircle={true}
          ref={GeolocateRef}
          position="bottom-right"
        />
        {!showWidget && (
          <>
            <NavigationControl showCompass={true} position="bottom-right" />
          </>
        )}
      </Map>

      {showWidget && selectedCenter && (
        <BottomMapWidget
          handleDisposeChoice={handleDisposeChoice}
          handleDeliveryMethod={handleDeliveryMethod}
          handleConfirmation={handleConfirmation}
          center={selectedCenter}
          toggleWidget={toggleWidget}
        />
      )}
    </div>
  )
}

export default Pickup
