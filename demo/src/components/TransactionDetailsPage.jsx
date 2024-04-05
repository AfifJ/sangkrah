const TransactionDetailsPage = ({
  recyclingCenter,
  deliveryMethod,
  wasteType,
  wasteWeight = 0,
  onConfirm,
  preConfirm,
  title,
  type = "recycle",
}) => {
  const validWasteWeight = Number.isNaN(wasteWeight) ? 0 : wasteWeight
  const totalPrice = validWasteWeight * 2000 // Asumsi harga Rp 2.000 per kg

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <div className="rounded-md bg-white p-4 shadow-md">
        <p>
          {type === "recycle" ? "Tempat Daur Ulang" : "Tempat Pembuangan"}:{" "}
          {recyclingCenter.name}
        </p>
        <p>
          Metode Pengiriman: {deliveryMethod === "antar" ? "Antar" : "Jemput"}
        </p>
        <p>Jenis Sampah: {wasteType.name}</p>
        <p>Berat Sampah: {validWasteWeight} kg</p>
        <p>Total Harga: Rp {totalPrice.toFixed(2)}</p>
      </div>
      <button
        className="mt-4 rounded bg-green-500 p-2 text-white hover:bg-green-600"
        disabled={!preConfirm || validWasteWeight <= 0}
        onClick={onConfirm}
      >
        Konfirmasi
      </button>
    </div>
  )
}

export default TransactionDetailsPage
