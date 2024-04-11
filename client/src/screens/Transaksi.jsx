import React, { useState,useEffect } from "react"
import { Link,useNavigate } from "react-router-dom"
import axios from "axios"

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

  const [transactions, setTransactions] = useState([])
  const [userbalance, setuserbalance] = useState([])
  const userId = sessionStorage.getItem("userId")

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      navigate("/login"); // Jika userId tidak tersedia, navigasi ke halaman login
    }

    const fetchUserIdFromAPI = async () => {
      try {
        const apiUrl = `http://127.0.0.1:8000/api/users/${userId}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        // console.log(data);
          setuserbalance(data.balance);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchUserIdFromAPI();
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/transactions?user_id=${userId}`
        )
        setTransactions(response.data.data.data)
      } catch (error) {
        console.error("Error fetching transactions:", error)
      }
    }
    console.log(transactions)
    if (userId) {
      fetchTransactions()
    }
  }, [userId])
  console.log(transactions);
  const filteredData = transactions.filter((transaction) => {
    if (filterOption === "") return true
    if (filterOption === "Buang")
      return transaction.title === "Buang"
    if (filterOption === "Daur Ulang") return transaction.title === "Daur Ulang"
    if (filterOption === "Voucher") return transaction.title === "Voucher"
    return true
  })

  const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === "terbaru") return new Date(b.created_at) - new Date(a.created_at)
    if (sortOrder === "terlama") return new Date(a.created_at) - new Date(b.created_at)
    return 0
  })

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <>
      <div className="flex justify-between bg-primary px-5 py-6 text-base-200 text-opacity-90">
        <h1 className="text-2xl font-bold">History Transaksi</h1>
        <p className="text-lg font-semibold">
          Saldo: Rp {userbalance.toLocaleString()}
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
            <option value="Buang">Buang Sampah</option>
            <option value="Daur Ulang">Daur Ulang</option>
            <option value="Voucher">Penukaran Voucher</option>
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
              to="detail" state={{detail: transaction}}
              key={transaction.id}
              className="rounded-2xl border border-gray-300 bg-white p-4"
            >
              <div className="flex items-center">
                <span className="mr-2 text-2xl">
                  {categoryIcons[transaction.category]}
                </span>
                <h2 className="text-lg font-semibold">{transaction.title}</h2>
                <p className="ml-auto text-gray-600">{formatDate(transaction.created_at)}</p>
              </div>
              <p className="mb-2 text-gray-600">{transaction.desc}</p>
              <p
                className={`font-semibold ${
                  transaction.total > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {transaction.total > 0 ? "+" : "-"} Rp{" "}
                {Math.abs(transaction.total).toLocaleString()}
              </p>
              <p className="text-gray-500">
                Status:{" "}
                {transaction.status === "success" ? "Berhasil" : "Done"}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Transaksi
