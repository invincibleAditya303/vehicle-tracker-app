import calculateSpeedKmH from "../Utils"

const Controls = props => {
    const {routeData, currentPosition, currentIndex, isPlaying, togglePlay, resetSimulation} = props
    const onTogglePlay = () => togglePlay()
    const onResetSimulation = () => resetSimulation()
    const speed = calculateSpeedKmH(currentIndex, routeData)

    return (
        <div className="absolute top-4 right-4 z-[1000] p-4 bg-white shadow-xl items-end rounded-lg w-[30vw] max-w-xs md:max-w-sm">
            <h2 className="text-lg font-bold mb-3">Vehicle Status</h2>
            <div className="space-y-1 text-sm">
                <p>Coordinate: <span className="font-mono text-blue-600">{currentPosition.lat?.toFixed(6)}, {currentPosition.lng?.toFixed(6)}</span></p>
                <p>Timestamp:
                    <span className="font-medium text-gray-700">
                        {currentPosition.timestamp ? new Date(currentPosition.timestamp).toLocaleTimeString() : 'N/A'}
                    </span>
                </p>
                {/* Speed calculation function goes here, returning the formatted speed */}
                <p>Speed: <span className="font-medium text-gray-700">{speed} km/h</span></p>
            </div>

            <div className="mt-4 flex gap-2">
                <button
                    onClick={onTogglePlay}
                    className="flex-1 px-4 py-2 text-white font-semibold rounded-lg transition"
                    style={{ backgroundColor: isPlaying ? '#ef4444' : '#22c55e' }}
                >
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button
                    onClick={onResetSimulation}
                    className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition"
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Controls