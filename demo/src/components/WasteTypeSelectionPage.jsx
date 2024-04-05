import { useState } from "react"

const WasteTypeSelectionPage = ({
  wasteTypes,
  onSelect,
  onWeightChange,
  title,
}) => {
  const [selectedWasteType, setSelectedWasteType] = useState(null)
  const [wasteWeight, setWasteWeight] = useState(0)

  const handleSelect = (wasteType) => {
    setSelectedWasteType(wasteType)
    onSelect(wasteType)
  }

  const handleWeightChange = (e) => {
    const weight = parseFloat(e.target.value)
    setWasteWeight(weight)
    onWeightChange(weight)
  }

  const isConfirmButtonDisabled = !selectedWasteType || wasteWeight <= 0

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <div className="mb-4">
        <select
          className="w-full rounded border border-gray-400 p-2"
          onChange={(e) =>
            handleSelect(
              wasteTypes.find((type) => type.id === parseInt(e.target.value))
            )
          }
        >
          <option value="">Pilih Jenis Sampah</option>
          {wasteTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.icon} {type.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="weight" className="mb-2 block font-semibold">
          Berat Sampah (kg)
        </label>
        <input
          type="number"
          id="weight"
          className="w-full rounded border border-gray-400 p-2"
          min="1"
          step="0.1"
          value={wasteWeight}
          onChange={handleWeightChange}
        />
        <p className="mt-2 text-sm text-gray-500">
          Berat akan dicek ulang oleh petugas.
        </p>
        {/* <button
          className="mt-4 rounded bg-green-500 p-2 text-white hover:bg-green-600"
          disabled={isConfirmButtonDisabled}
          onClick={onConfirm}
        >
          Konfirmasi
        </button> */}
      </div>
    </div>
  )
}

export default WasteTypeSelectionPage
