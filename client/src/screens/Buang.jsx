import React, { useState, useEffect, useCallback } from "react"
import Success from "../components/Success"
import BackNavbar from "../components/BackNavbar"
import RecyclingCenterSelectionPage from "../components/RecyclingCenterSelectionPage"
import DeliveryMethodSelectionPage from "../components/DeliveryMethodSelectionPage"
import PickupDetailsPage from "../components/PickupDetailsPage"
import WasteTypeSelectionPage from "../components/WasteTypeSelectionPage"
import TransactionDetailsPage from "../components/TransactionDetailsPage"
import ConfirmationModal from "../components/ConfirmationModal"

const BuangPage = () => {
  const [selectedRecyclingCenter, setSelectedRecyclingCenter] = useState(null)
  const [deliveryMethod, setDeliveryMethod] = useState("")
  const [allPartners, setAllPartners] = useState([]);
  const [postDetails, setPostDetails] = useState([]);
  const [pickupAddress, setPickupAddress] = useState("")
  const [pickupSchedule, setPickupSchedule] = useState("")
  const [selectedWasteType, setSelectedWasteType] = useState("")
  const [wasteWeight, setWasteWeight] = useState(0)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [transactionConfirmed, setTransactionConfirmed] = useState(false)

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      navigate("/login"); // Jika userId tidak tersedia, navigasi ke halaman login
    }
    const fetchRewardFromAPI = async () => {
      try {
        const apiUrl = `http://127.0.0.1:8000/api/partners?service=Recycle`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        // console.log(data);

        if (data.success && data.data && Array.isArray(data.data.data)) {
          const formattedData = data.data.data.map((partner) => ({
            id: partner.id,
            name: partner.name,
          }));
    
          setAllPartners(formattedData);
        } else {
          console.error("Invalid data format:", data);
        }

      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchRewardFromAPI();
  }, []);

  const recyclingCenters = [
    { id: 1, name: "Pembuangan Sampah A", distance: "1 km" },
    { id: 2, name: "Pembuangan Sampah B", distance: "2 km" },
    { id: 3, name: "Pembuangan Sampah C", distance: "3 km" },
  ]

  const wasteTypes = [
    { id: 1, name: "Plastik", icon: "🚮" },
    { id: 2, name: "Kertas", icon: "📄" },
    { id: 3, name: "Logam", icon: "🔩" },
  ]

  const preConfirm =
    deliveryMethod === "jemput"
      ? pickupAddress && pickupSchedule && wasteWeight && wasteTypes
      : wasteWeight && wasteTypes

  const handleRecyclingCenterSelect = (recyclingCenter) => {
    setSelectedRecyclingCenter(recyclingCenter)
  }

  const handleDeliveryMethodSelect = (method) => {
    setDeliveryMethod(method)
  }

  const handlePickupScheduleSelect = (schedule) => {
    setPickupSchedule(schedule)
  }

  const handleWasteTypeSelect = (wasteType) => {
    setSelectedWasteType(wasteType)
  }

  const handleWeightChange = (weight) => {
    setWasteWeight(weight)
  }

  const handleConfirmation = () => {
    setShowConfirmation(true)
  }

  const handleConfirmTransaction = async (transData) => {
    try {
      console.log(transData.validWasteWeight)
      const response = await fetch("http://127.0.0.1:8000/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Buang", 
          trash_type: transData.wasteTypeName, 
          trash_amount: transData.validWasteWeight,
          total: transData.totalPrice,
          delivery_method: transData.deliveryMethod,
          point_obtain: 15,
          payment_method: "Wallet",
          status: "Selesai", 
          user_id: sessionStorage.getItem("userId"),
          partner_id: transData.recyclingCenterName,
        }),
      })
    } catch (error) {
      console.error("Error registering:", error)
      // Handle error registrasi, misalnya tampilkan pesan error ke pengguna
      setError("Registration failed. Please try again later.")
    }
    setTransactionConfirmed(true)
    setShowConfirmation(false)
  }

  const handleCancelTransaction = () => {
    setShowConfirmation(false)
  }

  const handleTransactionDetails = useCallback((details) => {
    setPostDetails(details);
    //console.log(details)
    //console.log(postDetails);
  }, []);

  return (
    <>
      <BackNavbar>Recycle</BackNavbar>
      <div className="container mx-auto p-4">
        {!selectedRecyclingCenter && (
          <RecyclingCenterSelectionPage
            title="Pilih Tempat Pembuangan Sampah"
            items={allPartners}
            onSelect={handleRecyclingCenterSelect}
          />
        )}
        {selectedRecyclingCenter && !deliveryMethod && (
          <DeliveryMethodSelectionPage
            title="Pilih Metode Pengiriman"
            onSelect={handleDeliveryMethodSelect}
          />
        )}
        {deliveryMethod && (
          <>
            <div className="space-y-6">
              {deliveryMethod === "jemput" && (
                <PickupDetailsPage
                  onAddressChange={setPickupAddress}
                  onScheduleSelect={setPickupSchedule}
                />
              )}
              <WasteTypeSelectionPage
                title="Pilih Jenis Sampah"
                wasteTypes={wasteTypes}
                onSelect={handleWasteTypeSelect}
                onWeightChange={handleWeightChange}
              />
              <TransactionDetailsPage
                title="Detail Transaksi"
                type="buang"
                recyclingCenter={selectedRecyclingCenter}
                deliveryMethod={deliveryMethod}
                wasteType={selectedWasteType}
                wasteWeight={wasteWeight}
                preConfirm={preConfirm}
                onConfirm={handleConfirmation}
                onTransactionDetails={handleTransactionDetails}
              />
            </div>
          </>
        )}
        {showConfirmation && (
          <ConfirmationModal
            onConfirm={() => handleConfirmTransaction(postDetails)}
            onCancel={handleCancelTransaction}
          />
        )}
        {transactionConfirmed && <Success closeBtn={false} />}
      </div>
    </>
  )
}

export default BuangPage
