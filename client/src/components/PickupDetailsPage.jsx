import { useState } from "react"

const PickupDetailsPage = ({ onAddressChange, onScheduleSelect, title }) => {
  const [address, setAddress] = useState("")
  const [pickupSchedule, setPickupSchedule] = useState("") // Add this line
  const pickupSchedules = ["Pagi", "Siang", "Sore"]

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
    onAddressChange(e.target.value)
  }

  const handleScheduleSelect = (schedule) => {
    setPickupSchedule(schedule) // And change this line
    onScheduleSelect(schedule)
  }

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <div className="mb-4">
        <label htmlFor="address" className="mb-2 block font-semibold">
          Alamat Penjemputan
        </label>
        <input
          type="text"
          id="address"
          className="w-full rounded border border-gray-400 p-2"
          value={address}
          onChange={handleAddressChange}
        />
      </div>
      <div>
        <label htmlFor="schedule" className="mb-2 block font-semibold">
          Jadwal Penjemputan
        </label>
        <div className="flex">
          {pickupSchedules.map((schedule) => (
            <button
              key={schedule}
              className={`mr-2 rounded border border-gray-400 p-2 ${
                pickupSchedule === schedule
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
              onClick={() => handleScheduleSelect(schedule)}
            >
              {schedule}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PickupDetailsPage
