import { useEffect } from "react"

const TransactionDetailsPage = ({
  recyclingCenter,
  deliveryMethod,
  wasteType,
  wasteWeight = 0,
  onConfirm,
  preConfirm,
  title,
  type = "recycle",
  onTransactionDetails,
}) => {
  const validWasteWeight = Number.isNaN(wasteWeight) ? 0 : wasteWeight
  const totalPrice = validWasteWeight * 1500 // Asumsi harga Rp 2.000 per kg

  useEffect(() => {
    if (onTransactionDetails) {
      const transactionDetails = {
        recyclingCenterName: recyclingCenter ? recyclingCenter.id : "",
        deliveryMethod,
        wasteTypeName: wasteType ? wasteType.name : "",
        validWasteWeight,
        totalPrice: totalPrice.toFixed(2),
      };
      //console.log(transactionDetails)
      onTransactionDetails(transactionDetails);
    }
  }, [onTransactionDetails, recyclingCenter, deliveryMethod, wasteType, validWasteWeight, totalPrice]);

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
