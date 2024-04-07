import { Link, useLocation } from "react-router-dom"
import {
  DocumentTextIcon as DocOutline,
  EnvelopeIcon as EnvelopeOutline,
  HomeIcon as HomeOutline,
  GiftIcon as GiftOutline,
  UserCircleIcon as UserOutline,
} from "@heroicons/react/24/outline"
import {
  UserCircleIcon as UserSolid,
  DocumentTextIcon as DocSolid,
  GiftIcon as GiftSolid,
  HomeIcon as HomeSolid,
  TrashIcon,
} from "@heroicons/react/24/solid"

const BottomNav = () => {
  const location = useLocation()
  const isHomeActive =
    location.pathname === "/" || location.pathname.startsWith("/guide")
  const isTransaksiActive = location.pathname.startsWith("/transaksi")
  const isPickupActive = location.pathname === "/pickup"
  const isRedeemActive = location.pathname.startsWith("/redeem")
  const isProfileActive = location.pathname === "/profile"

  return (
    <>
      <div className="fixed bottom-0 left-0 z-30 h-20 w-full border-t border-gray-200 bg-white">
        <div className="mx-auto grid h-full max-w-lg grid-cols-5 px-7 font-medium">
          <Link
            to="/"
            type="button"
            className={`group inline-flex items-center justify-center   px-5 `}
          >
            <div
              className={`inline-flex w-14 flex-col items-center justify-center rounded-xl p-2 text-gray-500 hover:bg-gray-100 hover:text-green-700 ${
                isHomeActive ? "text-green-700" : "text-gray-500"
              }`}
            >
              {isHomeActive ? (
                <HomeSolid className="h-6 w-6" />
              ) : (
                <HomeOutline className="h-6 w-6" />
              )}
              Home
            </div>
          </Link>
          <Link
            to="transaksi"
            type="button"
            className={`group inline-flex flex-col items-center justify-center  px-5`}
          >
            <div
              className={`inline-flex w-14 flex-col items-center justify-center rounded-xl p-2 text-gray-500 hover:bg-gray-100 hover:text-green-700 ${
                isTransaksiActive ? "text-green-700" : "text-gray-500"
              }`}
            >
              {isTransaksiActive ? (
                <DocSolid className="h-6 w-6" />
              ) : (
                <DocOutline className="h-6 w-6" />
              )}
              Transaksi
            </div>
          </Link>

          <Link
            to="pickup"
            type="button"
            className={`group inline-flex items-center justify-center   px-5 `}
          >
            <div
              className={`inline-flex w-14 flex-col items-center justify-center rounded-xl p-2 text-gray-500 hover:bg-gray-100 hover:text-green-700 ${
                isPickupActive ? "text-green-700" : "text-gray-500"
              }`}
            >
              <TrashIcon className="h-6 w-6" />
              Pickup
            </div>
          </Link>

          <Link
            to="redeem"
            type="button"
            className={`group inline-flex items-center justify-center   px-5 `}
          >
            <div
              className={`inline-flex w-14 flex-col items-center justify-center rounded-xl p-2 text-gray-500 hover:bg-gray-100 hover:text-green-700 ${
                isRedeemActive ? "text-green-700" : "text-gray-500"
              }`}
            >
              {isRedeemActive ? (
                <GiftSolid className="h-6 w-6" />
              ) : (
                <GiftOutline className="h-6 w-6" />
              )}
              Tukar
            </div>
          </Link>
          <Link
            to="profile"
            type="button"
            className={`group inline-flex items-center justify-center   px-5 `}
          >
            <div
              className={`inline-flex w-14 flex-col items-center justify-center rounded-xl p-2 text-gray-500 hover:bg-gray-100 hover:text-green-700 ${
                isProfileActive ? "text-green-700" : "text-gray-500"
              }`}
            >
              {isProfileActive ? (
                <UserSolid className="h-6 w-6" />
              ) : (
                <UserOutline className="h-6 w-6" />
              )}
              Profile
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BottomNav
