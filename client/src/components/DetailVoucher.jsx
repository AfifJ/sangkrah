import React, { useState,useEffect } from "react"
import BackNavbar from "./BackNavbar"
import { useLocation,useNavigate } from "react-router-dom";

const VoucherDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [redeemSuccess, setRedeemSuccess] = useState(false); // null untuk awal
  const [errorMessage, setErrorMessage] = useState("");
  const [userpoint, setuserpoint] = useState(null);

  console.log(state);

  const handleRedeemPoints = () => {
    setShowConfirmation(true)
  }

  const voucher = {
    thumbnail: "https://via.placeholder.com/150",
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
  }, []);
  console.log(userpoint);
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
          user_id: userId,
          reward_id: rewardId,
        }),
      });
      const data = await response.json();
      console.log(data); // Handle response from API
    } catch (error) {
      console.error("Error redeeming reward:", error);
    }
  };

  const handleConfirmation = (confirm) => {
    if (confirm) {
      if(state.detail.stock > 0 && state.detail.price < userpoint){
        setRedeemSuccess(true);
        handleRedeem(state.detail.id);
        navigate("/redeem");
      }
      else{
        setRedeemSuccess(false);
        setErrorMessage("Maaf, stok hadiah ini telah habis.");
        alert("Redeem GAGAL! Point atau Stock Tidak mencukupi!")
      }
    }
    setShowConfirmation(false)
  }
  console.log(redeemSuccess,",",errorMessage);

  return (
    <div className="">
      <BackNavbar link="/redeem">Detail Voucher</BackNavbar>
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <img
          src={voucher.thumbnail}
          alt="Thumbnail Voucher"
          className="mb-4 h-48 w-full rounded-lg object-cover"
        />
        <h2 className="mb-2 text-2xl font-bold">{state.detail.title}</h2>
        <p className="mb-4 text-gray-600">{state.detail.category}</p>
        <p className="mb-4 text-gray-600">{state.detail.desc}</p>
        <div className="mb-4 flex items-center justify-between">
          <p className="font-semibold text-gray-600">Poin yang Diperlukan:</p>
          <p className="text-green-500">{state.detail.price}</p>
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
