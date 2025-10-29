import { useEffect, useRef, useState } from "react";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import L from "leaflet";
import Controls from "../Controls";
import AnimatedMarker from "../AnimatedMarker";

const INITIAL_CENTER = [17.361431, 78.474533] 

const VehicleMap = () => {
    const [routeData, setRouteData] = useState([{lat: 0, lng: 0}])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const intervalRef = useRef(null)

    useEffect(() => {
        const loadData = async () => {
            try {
                // Fetching from the public directory
                const response = await fetch('/dummy-route.json')
                const data = await response.json()

                // Transform data into Leaflet/React-Leaflet format: [lat, lng]
                setRouteData(data.map(p => ({
                    lat: p.latitude,
                    lng: p.longitude,
                    timestamp: p.timestamp
                })))

            } catch (error) {
                console.error("Error loading route data:", error)
            }
        }
        loadData()
    }, [])

    useEffect(() => {
        if (isPlaying && routeData.length > 0 && currentIndex < routeData.length - 1) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex(prevIndex => prevIndex + 1)
            }, 2000); // Update every 2 seconds (2000ms)
        }

        // Cleanup function to clear the interval when component unmounts or state changes
        return () => clearInterval(intervalRef.current)
    }, [isPlaying, currentIndex, routeData])

    const fullRouteCoords = routeData.map(p => [p.lat, p.lng])

    const currentPosition = routeData[currentIndex] || routeData[0]

    const togglePlay = () => setIsPlaying(!isPlaying)
    const resetSimulation = () => {
        setIsPlaying(false)
        setCurrentIndex(0)
    }

    const vehicleIcon = L.divIcon({
        className: 'text-2xl',
        html: '<span class="text-red-600">🚗</span>',
        iconSize: [24, 24]
    })

    return (
        <div className="h-screen w-full relative">
            <MapContainer
                center={INITIAL_CENTER}
                zoom={15}
                scrollWheelZoom={true}
                className="h-full w-full z-0"
            >
                <TileLayer
                    attribution='&copy; <a href="[http://osm.org/copyright](http://osm.org/copyright)">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
               { /* Draw the entire planned route path */}
                {routeData.length > 0 && (
                    <Polyline
                        pathOptions={{ color: 'gray', weight: 3, opacity: 0.5 }}
                        positions={fullRouteCoords}
                    />
                )}
                {/* Vehicle Marker and Traveled Route components will go here */}
                {/* Show the traveled route*/}

                <Polyline
                    pathOptions={{ color: 'red', weight: 5, opacity: 0.8 }}
                    positions={routeData.slice(0, currentIndex + 1).map(p => [p.lat, p.lng])}
                />

                {/* Show the current vehicle marker */}
                <AnimatedMarker
                    position={[currentPosition.lat, currentPosition.lng]}
                    icon={vehicleIcon}
                />
            </MapContainer>
            {/* UI Controls component will go here */}
            <Controls
                routeData={routeData}
                currentPosition={currentPosition}
                currentIndex={currentIndex}
                isPlaying={isPlaying}
                togglePlay={togglePlay}
                resetSimulation={resetSimulation}
            />
        </div>
    )
}

export default VehicleMap