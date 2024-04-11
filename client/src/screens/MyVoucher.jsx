import React, { useState, useEffect } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { CircleStackIcon } from "@heroicons/react/24/solid"
import { Link,useNavigate } from "react-router-dom"
import BackNavbar from "../components/BackNavbar"

const Redeem = () => {
  const [filter, setFilter] = useState("semua")
  const [items, setItems] = useState([])
  const [allItems, setAllItems] = useState([]);
  const [myvoucher, setmyvoucher] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
  }

  useEffect(() => {
    // data fetching
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/userrewards", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setmyvoucher(data.data);
      } catch (error) {
        console.error("Error fetching user rewards:", error);
      }
    };

    fetchData();
    const allItems = [
      {
        category: "semua",
        title: "Diskon 20% di KFC",
        date: "Hingga 31 Desember 2021",
      },
      {
        category: "semua",
        title: "Diskon 30% di McDonalds",
        date: "Hingga 30 November 2021",
      },
      {
        category: "belanja",
        title: "Diskon 50% di Zara",
        date: "Hingga 31 Oktober 2021",
      },
    ]

    let filteredItems = allItems

    if (filter !== "semua") {
      filteredItems = filteredItems.filter((item) => item.category === filter)
    }

    if (searchTerm) {
      filteredItems = filteredItems.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setItems(filteredItems)
  }, [filter, searchTerm])

  return (
    <>
      <BackNavbar link="/profile">Voucher Saya</BackNavbar>
      <div className="flex space-x-4 px-5 pt-6">
        <button
          onClick={() => handleFilterChange("semua")}
          className={`px-3 py-1 ${filter === "semua" ? "rounded-2xl border border-base-content border-opacity-40 bg-base-200" : ""}  `}
        >
          Semua
        </button>
        <button
          onClick={() => handleFilterChange("belanja")}
          className={`px-3 py-1 ${filter === "belanja" ? "rounded-2xl border border-base-content border-opacity-40 bg-base-200" : ""}  `}
        >
          Belanja
        </button>
        <button
          className={`px-3 py-1 ${filter === "makanan & minuman" ? "rounded-2xl border border-base-content border-opacity-40 bg-base-200" : ""}  `}
          onClick={() => handleFilterChange("makanan & minuman")}
        >
          Makanan & Minuman
        </button>
      </div>

      <div>
        <div className="grid grid-cols-1 gap-4 px-5 pt-6 md:grid-cols-2">
          {items.length > 0 ? (
            items.map((item) => (
              <Link
                to={"detail"}
                key={item.title}
                className="rounded-2xl border border-base-content border-opacity-40 bg-white"
              >
                <div className="h-40 rounded-t-2xl bg-base-200"></div>
                <div className="p-4">
                  <div className="text-lg font-bold">{item.title}</div>
                  <div className="text-sm text-base-content text-opacity-60">
                    {item.date}
                  </div>
                  <button className="mt-4 w-full rounded-2xl bg-primary py-3 text-white">
                    Gunakan
                  </button>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center text-lg font-semibold">
              Maaf, item yang Anda cari tidak tersedia.
            </div>
          )}
        </div>
      </div>

      <div className="h-32"></div>
    </>
  )
}

export default Redeem
