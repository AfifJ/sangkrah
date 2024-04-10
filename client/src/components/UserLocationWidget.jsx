const UserLocationWidget = ({
  user = {},
  locationInput = null,
  handleLocationInputChange = null,
  address = "",
}) => {
  return (
    <div className="absolute left-2 right-2 top-2 z-10 rounded-2xl border border-gray-300 bg-white p-2 shadow-md">
      <div className="mb-2 flex items-center">
        <img
          src={user?.photoUrl || "https://via.placeholder.com/40"}
          alt={user?.name || "User"}
          className="mr-2 h-10 w-10 rounded-full"
        />
        <h2 className="text-lg font-semibold">{user?.name || "John Doe"}</h2>
      </div>

      <div className="mb-2 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-2 h-5 w-5 text-gray-500"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-gray-500">{address || "Memuat lokasi..."}</h2>
      </div>
      {/* 
      <input
        type="text"
        value={locationInput}
        onChange={handleLocationInputChange}
        placeholder="Cari lokasi"
        className="w-full rounded-md border border-gray-300 p-2"
      /> */}
    </div>
  )
}

export default UserLocationWidget
