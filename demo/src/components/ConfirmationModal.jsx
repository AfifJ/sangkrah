const ConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="rounded-md bg-white p-6">
        <h2 className="mb-4 text-xl font-bold">Konfirmasi Transaksi</h2>
        <p>Apakah Anda yakin ingin melanjutkan transaksi ini?</p>
        <div className="mt-4 flex justify-end">
          <button
            className="mr-2 rounded bg-red-500 p-2 text-white hover:bg-red-600"
            onClick={onCancel}
          >
            Batal
          </button>
          <button
            className="rounded bg-green-500 p-2 text-white hover:bg-green-600"
            onClick={onConfirm}
          >
            Konfirmasi
          </button>
        </div>
      </div>
    </div>
  )
}
export default ConfirmationModal
