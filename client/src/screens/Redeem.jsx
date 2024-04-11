import React, { useState, useEffect } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { CircleStackIcon } from "@heroicons/react/24/solid"
import { Link,useNavigate } from "react-router-dom"

const Redeem = () => {
  const [filter, setFilter] = useState("semua");
  const [allItems, setAllItems] = useState([]);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [userpoint, setuserpoint] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  }

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
          setuserpoint(data.point);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchUserIdFromAPI();

    const fetchRewardFromAPI = async () => {
      try {
        const apiUrl = `http://127.0.0.1:8000/api/rewards`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        // console.log(data);

        if (data.success && data.data && Array.isArray(data.data.data)) {
          const formattedData = data.data.data.map((item) => ({
            id: item.id,
            category: item.category,
            title: item.title,
            stock: item.stock,
            desc: item.desc,
            price: item.price,
          }));
    
          setAllItems(formattedData);
        } else {
          console.error("Invalid data format:", data);
        }

      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchRewardFromAPI();
  }, []);

  useEffect(() => {
    let filteredItems = allItems;

    if (filter !== "semua") {
      filteredItems = filteredItems.filter((item) => item.category === filter);
    }

    if (searchTerm) {
      filteredItems = filteredItems.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setItems(filteredItems);
  }, [filter, searchTerm, allItems]); // Tambahkan allItems sebagai dependency

  const handleRedeem = async (rewardId) => {
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      navigate("/login");
      return;
    }

    try {
      const apiUrl = `http://127.0.0.1:8000/api/userrewards/`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID: userId,
          rewardID: rewardId,
        }),
      });
      const data = await response.json();
      console.log(data); // Handle response from API
    } catch (error) {
      console.error("Error redeeming reward:", error);
    }
  };

  //console.log(items);
  //console.log(userpoint);

  return (
    <>
      <div className="px-5 pb-2 pt-6">
        <div className="flex w-full rounded-2xl border border-base-content border-opacity-40 bg-white px-4 py-2">
          <input
            type="text"
            className="w-full bg-white focus:outline-none"
            placeholder="Cari hadiah"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <MagnifyingGlassIcon className="h-6 w-6 text-base-content text-opacity-40" />
        </div>
      </div>

      <div className="flex items-center px-5">
        <div className="mr-2 h-fit w-fit rounded-3xl bg-primary bg-opacity-20 p-1">
          <CircleStackIcon className="h-6 w-6 text-primary" />
        </div>
        Poin hadiah
        <div className="ml-auto font-bold">{userpoint} Poin</div>
      </div>

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
                to="detail" state={{detail: item}}
                //onClick={() => handleDetail(item)}
                key={item.title}
                className="rounded-2xl border border-base-content border-opacity-40 bg-white"
              >
                <div className="h-40 rounded-t-2xl bg-base-200"></div>
                <div className="p-4">
                  <div className="text-lg font-bold">{item.title}</div>
                  <div className="text-sm text-base-content text-opacity-60">
                    Sisa : {item.stock} Item
                  </div>
                  <button onClick={() => handleRedeem(item.id)} className="mt-4 w-full rounded-2xl bg-primary py-3 text-white">
                    Tukar
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
