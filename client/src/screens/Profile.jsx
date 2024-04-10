import {
  ArrowLeftStartOnRectangleIcon,
  InformationCircleIcon,
  LockClosedIcon,
  PencilSquareIcon,
  QueueListIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline"
import { WalletIcon, CircleStackIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"
import LogoutModal from "../components/LogoutModal"
import { useState } from "react"

const Profile = () => {
  const [logoutConfirm, setLogutConfirm] = useState(false)

  const logoutButtonHandle = () => {
    setLogutConfirm(!logoutConfirm)
  }

  return (
    <>
      <div className="px-6 py-6">
        <div className="flex items-center">
          <img className="h-16 w-16" src="./avatar.png" alt="avatar" />
          <div className="ml-4 w-full space-y-2">
            <h2 className="text-2xl font-bold">Omar Faruukh</h2>
            <div className="flex gap-x-6">
              <div className="flex items-center text-base font-semibold">
                <div className="mr-2 h-fit w-fit rounded-3xl bg-primary bg-opacity-20 text-primary">
                  <div className="p-1">
                    <WalletIcon className="h-6 w-6" />
                  </div>
                </div>
                Rp128.887
              </div>
              <div className="flex items-center text-base font-semibold">
                <div className="mr-2 h-fit w-fit rounded-3xl bg-primary bg-opacity-20 text-primary">
                  <div className="p-1">
                    <CircleStackIcon className="h-6 w-6" />
                  </div>
                </div>
                55 Poin
              </div>
            </div>
          </div>
          {/* <Link to="edit" type="button" className="flex items-center">
						<IconEditProfil />
					</Link> */}
        </div>

        <div className="my-8 flex items-center justify-center rounded-2xl border border-gray-300 bg-white py-4 text-center">
          <img className="mr-2 h-6 w-6" src="./icon-recycle.svg" alt="" />
          Bergabung Menjadi Mitra
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Pengaturan Akun</h2>
          <div className="mt-4 *:mb-3 last:mb-0">
            <Link
              to={"/profile/edit"}
              className="flex items-center justify-between"
            >
              <span className="flex items-center">
                <div className="mr-2 rounded-xl bg-gray-300 p-2">
                  <PencilSquareIcon className="h-6 w-6" />
                </div>
                Edit Profil
              </span>
              <ChevronRightIcon className="h-6 w-6" />
            </Link>
            <Link
              to={"/profile/my-voucher"}
              className="flex items-center justify-between"
            >
              <span className="flex items-center">
                <div className="mr-2 rounded-xl bg-gray-300 p-2">
                  <QueueListIcon className="h-6 w-6" />
                </div>
                Voucher Saya
              </span>
              <ChevronRightIcon className="h-6 w-6" />
            </Link>
            <Link
              type="button"
              to="/profile/update-password"
              className="flex items-center justify-between"
            >
              <span className="flex items-center">
                <div className="mr-2 rounded-xl bg-gray-300 p-2">
                  <LockClosedIcon className="h-6 w-6" />
                </div>
                Ubah Kata Sandi
              </span>
              <ChevronRightIcon className="h-6 w-6" />
            </Link>
            <Link
              to={"/profile/about"}
              className="flex items-center justify-between"
            >
              <span className="flex items-center">
                <div className="mr-2 rounded-xl bg-gray-300 p-2">
                  <InformationCircleIcon className="h-6 w-6" />
                </div>
                Tentang Sangkrah
              </span>
              <ChevronRightIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="mb-4 mt-8 text-2xl font-semibold">Keluar</h2>
          <button onClick={logoutButtonHandle} className="block w-full">
            <div className="flex items-center justify-center rounded-xl bg-red-300 py-3 font-semibold text-red-950">
              <div className="mr-2">
                <ArrowLeftStartOnRectangleIcon className="h-6 w-6 text-red-950" />
              </div>
              Keluar Akun
            </div>
          </button>
        </div>
      </div>
      <div className="h-24"></div>

      {logoutConfirm && <LogoutModal logoutButtonHandle={logoutButtonHandle} />}
    </>
  )
}

export default Profile
