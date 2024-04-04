import { useState } from "react"
import BackNavbar from "../components/BackNavbar"

const Buang = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedWaste, setSelectedWaste] = useState("")

  const wasteTypes = ["Plastik", "Kertas", "Kaca"]
  return (
    <>
      <BackNavbar>Buang Sampah</BackNavbar>

      {/* <form action="/submit_recycling_form" className="space-y-4 px-5"> */}
      <div>
        <label
          for="waste_type"
          className="block text-sm font-medium text-gray-700"
        >
          Jenis Sampah:
        </label>
        <select
          id="waste_type"
          name="waste_type"
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
        >
          <option value="plastic">Plastik</option>
          <option value="paper">Kertas</option>
          <option value="glass">Kaca</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="waste_type"
          className="block text-sm font-medium text-gray-700"
        >
          Jenis Sampah:
        </label>
        <div className="group relative">
          <button
            id="dropdown-button"
            className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="mr-2">
              {selectedWaste || "Pilih Jenis Sampah"}
            </span>
          </button>
          {isOpen && (
            <div
              id="dropdown-menu"
              className="absolute right-0 mt-2 space-y-1 rounded-md bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5"
            >
              {wasteTypes.map((waste) => (
                <button
                  onClick={() => {
                    setSelectedWaste(waste)
                    setIsOpen(false)
                  }}
                  className="block w-full cursor-pointer rounded-md px-4 py-2 text-left text-gray-700 hover:bg-gray-100 active:bg-blue-100"
                >
                  {waste}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <label
          for="total_weight"
          className="block text-sm font-medium text-gray-700"
        >
          Berat Total (kg):
        </label>
        <input
          type="number"
          id="total_weight"
          name="total_weight"
          min="1"
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
        />
      </div>

      <div>
        <label
          for="recycling_place"
          className="block text-sm font-medium text-gray-700"
        >
          Pilih Tempat Daur Ulang:
        </label>
        <select
          id="recycling_place"
          name="recycling_place"
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
        >
          <option value="place1">Tempat 1</option>
          <option value="place2">Tempat 2</option>
        </select>
      </div>

      <div>
        <label
          for="pickup_method"
          className="block text-sm font-medium text-gray-700"
        >
          Pilih Metode Pengambilan:
        </label>
        <div className="mt-2">
          <div className="flex">
            <input
              type="radio"
              id="self_delivery"
              name="pickup_method"
              value="self_delivery"
              className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
            />
            <label
              for="self_delivery"
              className="ml-2 block text-sm text-gray-900"
            >
              Antar Sendiri
            </label>
          </div>
          <div className="flex">
            <input
              type="radio"
              id="pickup"
              name="pickup_method"
              value="pickup"
              className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
            />
            <label for="pickup" className="ml-2 block text-sm text-gray-900">
              Dijemput
            </label>
          </div>
        </div>
      </div>

      <div>
        <label
          for="pickup_date"
          className="block text-sm font-medium text-gray-700"
        >
          Jadwal Penjemputan:
        </label>
        <input
          type="date"
          id="pickup_date"
          name="pickup_date"
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
        />
      </div>

      <div>
        <label
          for="payment_method"
          className="block text-sm font-medium text-gray-700"
        >
          Pilih Metode Pembayaran:
        </label>
        <select
          id="payment_method"
          name="payment_method"
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
        >
          <option value="cash">Tunai</option>
          <option value="bank_transfer">Transfer Bank</option>
        </select>
      </div>

      <div>
        <input
          type="submit"
          value="Submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        />
      </div>
      {/* </form> */}
    </>
  )
}

export default Buang
