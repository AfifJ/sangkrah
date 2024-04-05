import React from "react"
import BackNavbar from "./BackNavbar"

const DetailHistory = () => {
  // Data dummy
  const transaction = {
    status: "Selesai",
    payment: "Tunai",
    description: "Penjemputan sampah dari rumah",
    total: "Rp 50.000",
    trashWeight: "10 kg",
    trashType: "Sampah organik",
    datetime: "2023-04-05 10:00:00",
    title: "Transaksi Penjemputan Sampah",
  }

  return (
    <>
      <BackNavbar link="/transaksi">Detail Transaksi</BackNavbar>
      <div className="flex justify-center">
        <div className="w-full max-w-md rounded-lg bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold">{transaction.title}</h2>
          <div className="mb-4">
            <p className="font-semibold text-gray-600">Status:</p>
            <p className="text-green-500">{transaction.status}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-gray-600">Pembayaran:</p>
            <p>{transaction.payment}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-gray-600">Deskripsi:</p>
            <p>{transaction.description}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-gray-600">Total:</p>
            <p>{transaction.total}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-gray-600">Berat Sampah:</p>
            <p>{transaction.trashWeight}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-gray-600">Jenis Sampah:</p>
            <p>{transaction.trashType}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-gray-600">Tanggal dan Waktu:</p>
            <p>{new Date(transaction.datetime).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailHistory
