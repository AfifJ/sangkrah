import {
  ArrowLeftStartOnRectangleIcon,
  InformationCircleIcon,
  LockClosedIcon,
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
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                <div className="mr-2 rounded-xl bg-gray-300 p-2">
                  <IconHome className="h-6 w-6" />
                </div>
                Voucher Saya
              </span>
              <IconRight />
            </div>
            <Link
              type="button"
              to="update-password"
              className="flex items-center justify-between"
            >
              <span className="flex items-center">
                <div className="mr-2 rounded-xl bg-gray-300 p-2">
                  <LockClosedIcon className="h-6 w-6" />
                </div>
                Ubah Kata Sandi
              </span>
              <IconRight />
            </Link>
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                <div className="mr-2 rounded-xl bg-gray-300 p-2">
                  <InformationCircleIcon className="h-6 w-6" />
                </div>
                Tentang Sangkrah
              </span>
              <IconRight />
            </div>
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

const IconEditProfil = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8"
    >
      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
      <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
    </svg>
  )
}

const IconHome = ({ ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  )
}

const IconRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  )
}
