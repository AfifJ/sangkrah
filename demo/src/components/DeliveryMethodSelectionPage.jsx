const DeliveryMethodSelectionPage = ({ onSelect,title }) => {
  const handleSelect = (method) => {
    onSelect(method)
  }

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <button
        className="mr-2 rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
        onClick={() => handleSelect("antar")}
      >
        Antar
      </button>
      <button
        className="rounded bg-green-500 p-2 text-white hover:bg-green-600"
        onClick={() => handleSelect("jemput")}
      >
        Jemput
      </button>
    </div>
  )
}

export default DeliveryMethodSelectionPage
