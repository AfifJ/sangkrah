const BottomMapWidget = ({
  center,
  handleDisposeChoice,
  handleDeliveryMethod,
  handleConfirmation,
  toggleWidget,
}) => {
  const centerData = {
    name: center.name || "Recycle Center",
    description: center.description || "A place to recycle your waste.",
    address: center.address || "123 Main St, Anytown USA",
    logoUrl: center.logoUrl || "https://via.placeholder.com/48",
    operatingHours: center.operatingHours || [
      "Mon-Fri: 9AM-5PM",
      "Sat: 10AM-2PM",
    ],
    gallery: center.gallery || [
      "https://via.placeholder.com/200",
      "https://via.placeholder.com/200",
      "https://via.placeholder.com/200",
    ],
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 ">
      <div className="relative mx-auto max-w-xl rounded-t-lg bg-white p-4 shadow-lg">
        <button className="absolute right-2 top-2" onClick={toggleWidget}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="mb-4 flex items-center">
          <img
            src={centerData.logoUrl}
            alt={`${centerData.name} Logo`}
            className="mr-4 h-12 w-12 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold">{centerData.name}</h2>
            <p className="text-gray-500">{centerData.address}</p>
          </div>
        </div>
        <p className="mb-4">{centerData.description}</p>
        <div className="mb-4">
          <h3 className="mb-2 text-lg font-bold">Operating Hours</h3>
          <ul>
            {centerData.operatingHours.map((hour, index) => (
              <li key={index} className="text-gray-500">
                {hour}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="mb-2 text-lg font-bold">Gallery</h3>
          <div className="flex overflow-x-auto">
            {centerData.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index}`}
                className="mr-2 h-32 w-32 rounded-lg"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap">
          <button
            className="mb-2 mr-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={() => handleDisposeChoice("dispose")}
          >
            Dispose
          </button>
          <button
            className="mb-2 mr-2 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            onClick={() => handleDisposeChoice("recycle")}
          >
            Recycle
          </button>
          <button
            className="mb-2 mr-2 rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
            onClick={() => handleDeliveryMethod("pickup")}
          >
            Pickup
          </button>
          <button
            className="mb-2 mr-2 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            onClick={() => handleDeliveryMethod("dropoff")}
          >
            Dropoff
          </button>
          <button
            className="mb-2 rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
            onClick={handleConfirmation}
          >
            Confirm
          </button>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  )
}

export default BottomMapWidget
