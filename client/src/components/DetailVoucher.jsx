import React, { useState } from "react"
import BackNavbar from "./BackNavbar"

const VoucherDetail = () => {
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Data dummy
  const voucher = {
    thumbnail: "https://via.placeholder.com/150",
    pointsRequired: 1000,
    description: "Dapatkan diskon 50% untuk layanan penjemputan sampah kami.",
    category: "Penjemputan Sampah",
    title: "Diskon 50% Penjemputan Sampah",
  }

  const handleRedeemPoints = () => {
    setShowConfirmation(true)
  }

  const handleConfirmation = (confirm) => {
    if (confirm) {
      // Lakukan proses penukaran poin di sini
      console.log("Poin ditukarkan")
    }
    setShowConfirmation(false)
  }

  return (
    <div className="">
      <BackNavbar link="/redeem">Detail Voucher</BackNavbar>
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <img
          src={voucher.thumbnail}
          alt="Thumbnail Voucher"
          className="mb-4 h-48 w-full rounded-lg object-cover"
        />
        <h2 className="mb-2 text-2xl font-bold">{voucher.title}</h2>
        <p className="mb-4 text-gray-600">{voucher.category}</p>
        <p className="mb-4 text-gray-600">{voucher.description}</p>
        <div className="mb-4 flex items-center justify-between">
          <p className="font-semibold text-gray-600">Poin yang Diperlukan:</p>
          <p className="text-green-500">{voucher.pointsRequired}</p>
        </div>
        <button
          className="rounded-md bg-green-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-green-600"
          onClick={handleRedeemPoints}
        >
          Tukarkan Poin
        </button>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-bold">
              Konfirmasi Penukaran Poin
            </h3>
            <p className="mb-4 text-gray-600">
              Apakah Anda yakin ingin menukarkan poin untuk mendapatkan voucher
              ini?
            </p>
            <div className="flex justify-end">
              <button
                className="mr-2 rounded-md bg-red-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-red-600"
                onClick={() => handleConfirmation(false)}
              >
                Tidak
              </button>
              <button
                className="rounded-md bg-green-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-green-600"
                onClick={() => handleConfirmation(true)}
              >
                Yakin
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VoucherDetail
