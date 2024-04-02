import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Pickup = () => {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(null);
	const [lat, setLat] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");
	const [zoom, setZoom] = useState(14);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		mapboxgl.accessToken =
			import.meta.env.VITE_MAPBOX_KEY ?? process.env.VITE_MAPBOX_KEY;
		// Check if geolocation is supported
		if (!navigator.geolocation) {
			setIsError(true);
			setIsLoading(false);
			setErrorMessage("Geolocation tidak didukung di browser ini");
			return;
		}

		const geolocate = new mapboxgl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true,
			},
			showUserHeading: true,
			trackUserLocation: true,
		});

		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { longitude, latitude } = position.coords;
				setLng(longitude);
				setLat(latitude);

				map.current = new mapboxgl.Map({
					container: mapContainer.current,
					style: "mapbox://styles/mapbox/streets-v12",
					center: [longitude, latitude],
					zoom: zoom,
				});
				map.current.addControl(geolocate);

				map.current.on("load", () => {
					setIsLoading(false);
          geolocate.trigger();

					// Tambahkan sumber data GeoJSON
					map.current.addSource("points", {
						type: "geojson",
						data: {
							type: "FeatureCollection",
							features: [
								{
									type: "Feature",
									properties: {},
									geometry: {
										type: "Point",
										coordinates: [longitude, latitude],
									},
								},
							],
						},
					});

					// Tambahkan layer untuk menampilkan ikon lokasi pengguna
					/* map.current.addLayer({
						id: "circle",
						type: "circle",
						source: "points",
						paint: {
							"circle-color": "#008DDA",
							"circle-radius": 8,
							"circle-strokeWidth": 24,
							"circle-stroke-color": "rgba(65, 201, 226, 0.4)",
						},
					}); */
				});

				map.current.on("error", (error) => {
					setIsError(true);
					console.error("Map error:", error);
				});
			},
			(error) => {
				setIsError(true);
				setIsLoading(false);
				switch (error.code) {
					case 1:
						// Permissions denied
						setErrorMessage("Mohon berikan izin lokasi");
						break;

					case 2:
						// Position unavailable
						setErrorMessage("Lokasi tidak tersedia");
						break;

					case 3:
						// Timeout
						setErrorMessage("Pengambilan lokasi melebihi batas waktu");
						break;

					default:
						setErrorMessage("Terjadi kesalahan saat mendapatkan lokasi");
				}
				console.error("Error getting location:", error);
			}
		);
	}, [zoom]);

	return (
		<div className="w-full h-screen overflow-hidden relative">
			{isLoading && (
				<div className="absolute inset-0 flex items-center justify-center z-10">
					<LoadingSpinner />
				</div>
			)}
			{isError && (
				<div className="absolute inset-0 flex items-center justify-center z-10 text-gray-600">
					{errorMessage ?? "Terjadi kesalahan saat menampilkan map"}
				</div>
			)}
			<div ref={mapContainer} className="w-full h-full" />
		</div>
	);
};

const LoadingSpinner = () => (
	<svg
		className="animate-spin h-10 w-10 text-gray-500"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
	>
		<circle
			className="opacity-25"
			cx="12"
			cy="12"
			r="10"
			stroke="currentColor"
			strokeWidth="4"
		></circle>
		<path
			className="opacity-75"
			fill="currentColor"
			d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
		></path>
	</svg>
);

export default Pickup;
