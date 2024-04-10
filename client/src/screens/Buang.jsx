import React, { useState } from "react"
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
  const [pickupAddress, setPickupAddress] = useState("")
  const [pickupSchedule, setPickupSchedule] = useState("")
  const [selectedWasteType, setSelectedWasteType] = useState("")
  const [wasteWeight, setWasteWeight] = useState(0)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [transactionConfirmed, setTransactionConfirmed] = useState(false)

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

  const handleConfirmTransaction = () => {
    setTransactionConfirmed(true)
    setShowConfirmation(false)
  }

  const handleCancelTransaction = () => {
    setShowConfirmation(false)
  }

  return (
    <>
      <BackNavbar>Recycle</BackNavbar>
      <div className="container mx-auto p-4">
        {!selectedRecyclingCenter && (
          <RecyclingCenterSelectionPage
            title="Pilih Tempat Pembuangan Sampah"
            items={recyclingCenters}
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
              />
            </div>
          </>
        )}
        {showConfirmation && (
          <ConfirmationModal
            onConfirm={handleConfirmTransaction}
            onCancel={handleCancelTransaction}
          />
        )}
        {transactionConfirmed && <Success closeBtn={false} />}
      </div>
    </>
  )
}

export default BuangPage
