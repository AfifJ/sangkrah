import { useState } from "react"

const RecyclingCenterSelectionPage = ({ items, onSelect, title }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSelect = (recyclingCenter) => {
    onSelect(recyclingCenter)
  }

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <input
        type="text"
        placeholder="Cari tempat daur ulang..."
        className="mb-4 w-full rounded border border-gray-400 p-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {items
          .filter((center) =>
            center.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((center) => (
            <li
              key={center.id}
              className="mb-2 cursor-pointer rounded border border-gray-300 p-2 hover:bg-gray-100"
              onClick={() => handleSelect(center)}
            >
              <p className="font-semibold">{center.name}</p>
              <p>{center.distance}</p>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default RecyclingCenterSelectionPage
