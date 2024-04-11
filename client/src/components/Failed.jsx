import { XMarkIcon } from "@heroicons/react/24/outline"
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"

const Failed = ({ setFailed, children, closeBtn = true }) => {
  return (
    <div className="absolute inset-0 z-[1] bg-gray-800 bg-opacity-30">
      <div className="absolute bottom-0 left-0 right-0 z-10 mx-auto max-w-xl rounded-t-2xl bg-white py-8">
        <div className="flex w-full justify-end px-5 ">
          {closeBtn && (
            <div
              className="` rounded-2xl p-2 hover:cursor-pointer hover:bg-base-content hover:bg-opacity-10"
              onClick={() => setFailed(false)}
            >
              <XMarkIcon className="h-6 w-6 stroke-2" />
            </div>
          )}
        </div>
        <div className="flex w-full justify-center">
          <div className="flex w-fit rounded-full bg-primary bg-opacity-30 p-5">
            <div className="flex items-center justify-center">
              <XMarkIcon className="z-10 h-32 w-32 text-red-600" />
              <div className="absolute z-0 h-24 w-24 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full text-center text-2xl font-semibold">
          Transaksi Gagal
        </div>
        <div className="mt-4 px-8 text-center text-secondary">
          {children ? children : <p>Transaksi anda Gagal </p>}
        </div>
        <div className="mx-5 mt-16">
          <Link
            to={"/"}
            type="button"
            className="block w-full rounded-2xl bg-red-600 py-4 text-center text-white"
          >
            Kembali ke Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Failed
