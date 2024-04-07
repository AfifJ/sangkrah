import React, { useState } from "react"
import { Link } from "react-router-dom"

const historyData = [
  {
    id: 1,
    category: "buangsampah",
    title: "Buang Sampah Rumah Tangga",
    description: "Buang sampah rumah tangga seberat 10 kg",
    amount: 5000,
    status: "success",
    date: "2023-05-10",
  },
  {
    id: 2,
    category: "dauruang",
    title: "Daur Ulang Plastik",
    description: "Daur ulang plastik bekas seberat 5 kg",
    amount: -3000,
    status: "success",
    date: "2023-05-09",
  },
  {
    id: 3,
    category: "voucher",
    title: "Penukaran Voucher",
    description: "Penukaran voucher senilai Rp 10.000",
    amount: -10000,
    status: "failed",
    date: "2023-05-08",
  },
  // Tambahkan data lainnya sesuai kebutuhan
]

const Transaksi = () => {
  const [filterOption, setFilterOption] = useState("")
  const [sortOrder, setSortOrder] = useState("")

  const currentBalance = 100000 // Saldo saat ini (dummy)

  const categoryIcons = {
    buangsampah: "🗑️",
    dauruang: "♻️",
    voucher: "🎟️",
  }

  const filteredData = historyData.filter((transaction) => {
    if (filterOption === "") return true
    if (filterOption === "buangsampah")
      return transaction.category === "buangsampah"
    if (filterOption === "dauruang") return transaction.category === "dauruang"
    if (filterOption === "voucher") return transaction.category === "voucher"
    return true
  })

  const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === "terbaru") return new Date(b.date) - new Date(a.date)
    if (sortOrder === "terlama") return new Date(a.date) - new Date(b.date)
    return 0
  })

  return (
    <>
      <div className="flex justify-between bg-primary px-5 py-6 text-base-200 text-opacity-90">
        <h1 className="text-2xl font-bold">History Transaksi</h1>
        <p className="text-lg font-semibold">
          Saldo: Rp {currentBalance.toLocaleString()}
        </p>
      </div>
      <div className="relative h-3 w-full bg-primary">
        <div className="relative h-3 w-full rounded-t-2xl bg-page"></div>
      </div>
      <div className="container mx-auto px-4 py-2">
        <div className="mb-4">
          <label htmlFor="filter" className="mr-2 font-semibold">
            Filter:
          </label>
          <select
            id="filter"
            className="rounded-xl border border-gray-300 px-2 py-1"
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="">Semua</option>
            <option value="buangsampah">Buang Sampah</option>
            <option value="dauruang">Daur Ulang</option>
            <option value="voucher">Penukaran Voucher</option>
          </select>

          <label htmlFor="sort" className="mx-2 font-semibold">
            Urutkan:
          </label>
          <select
            id="sort"
            className="rounded-xl border border-gray-300 px-2 py-1"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Default</option>
            <option value="terbaru">Terbaru</option>
            <option value="terlama">Terlama</option>
          </select>
        </div>

        <div className="grid gap-4">
          {sortedData.map((transaction) => (
            <Link
              // to={`/transaksi/${transaction.id}`}
              to={`/transaksi/detail`}
              key={transaction.id}
              className="rounded-2xl border border-gray-300 bg-white p-4"
            >
              <div className="flex items-center">
                <span className="mr-2 text-2xl">
                  {categoryIcons[transaction.category]}
                </span>
                <h2 className="text-lg font-semibold">{transaction.title}</h2>
                <p className="text-gray-600 ml-auto">{transaction.date}</p>
              </div>
              <p className="mb-2 text-gray-600">{transaction.description}</p>
              <p
                className={`font-semibold ${
                  transaction.amount > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {transaction.amount > 0 ? "+" : "-"} Rp{" "}
                {Math.abs(transaction.amount).toLocaleString()}
              </p>
              <p className="text-gray-500">
                Status:{" "}
                {transaction.status === "success" ? "Berhasil" : "Gagal"}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Transaksi
