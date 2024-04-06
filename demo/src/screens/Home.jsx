import { EnvelopeIcon } from "@heroicons/react/24/outline"
import RecycleIcon from "../assets/RecycleIcon"
import TrashIcon from "../assets/TrashIcon"
import { Link } from "react-router-dom"
import { CircleStackIcon, WalletIcon } from "@heroicons/react/24/solid"

const Home = () => {
  return (
    <>
      <div className="mx-5 mt-4 flex items-center justify-between">
        <div>
          <p className="text-sm">Selamat Pagi</p>
          <p className="text-xl font-bold">John Doe</p>
        </div>
        <Link
          to="/inbox"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary bg-opacity-10 hover:bg-primary-focus hover:bg-opacity-30"
        >
          <div className="text-primary">
            <EnvelopeIcon className="h-6 w-6" />
          </div>
        </Link>
      </div>
      <div className="mx-4 mt-4 flex">
        <div className="mr-2 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-sm">Pakembinangun, Pakem, Sleman</div>
      </div>

      <div className="relative mx-4 mt-4 min-h-44 overflow-clip rounded-3xl bg-[#138B1F] bg-opacity-25 px-5 py-3">
        <div className="absolute bottom-0 right-0 z-[3]">
          <svg
            width="222"
            height="98"
            viewBox="0 0 222 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M74 97.5001C34.6666 93.3335 -31.4 82.1001 19 70.5001C82 56.0001 178 3.00014 219 1.00014C251.8 -0.599858 236 0.333475 224 1.00014V97.5001H74Z"
              fill="#639276"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 z-[2]">
          <svg
            width="397"
            height="97"
            viewBox="0 0 397 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 79.9998C21.1667 59.4998 82.3 20.4998 157.5 28.4998C232.7 36.4998 292.833 29.1666 313.5 24.5C338 16.6667 389 0.9 397 0.5V97.5H0V79.9998Z"
              fill="#7FBE9C"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[3]">
          <svg
            width="116"
            height="85"
            viewBox="0 0 116 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-0.5 0.5C27.6667 3.5 89.4 11.9 111 21.5C132.6 31.1 69.3333 46.5 35 53C54.1667 55.6667 93.9 62.3 99.5 67.5C106.5 74 74 80 -0.5 84.5V0.5Z"
              fill="#88C696"
            />
          </svg>
        </div>

        <div className="absolute left-0 top-0">
          <img src="/bubble_gum_olive_branch1.png" alt="" />
        </div>
        <div className="absolute left-0 top-0 z-[4] h-40 w-40">
          <img src="bloom-3.png" alt="" />
        </div>
        <div className="text-end">
          <h3 className="text-4xl font-bold">Dapatkan Poin</h3>
          <p className="text-muted">dari membuang sampah</p>
        </div>
      </div>

      <h2 className="mx-4 mt-4 text-xl font-semibold">Menu Utama</h2>

      <div className="mx-4 mt-4 flex space-x-4 overflow-clip rounded-3xl bg-gradient-to-r from-primary to-[#479364] text-white *:w-full">
        <Link
          to="/topup"
          className="flex rounded-2xl px-5 py-6 hover:bg-black hover:bg-opacity-20"
        >
          <div className="mr-2 h-fit w-fit rounded-3xl bg-white bg-opacity-20">
            <div className="p-2">
              <WalletIcon className="h-6 w-6" />
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold">Rp128,887</p>
            <p className="text-sm text-base-200 opacity-70">Topup Saldo</p>
          </div>
        </Link>
        <Link
          to="/redeem"
          className="flex rounded-2xl px-5 py-6 hover:bg-black hover:bg-opacity-20"
        >
          <div className="mr-2 h-fit w-fit rounded-3xl bg-white bg-opacity-20">
            <div className="p-2">
              <CircleStackIcon className="h-6 w-6" />
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold">55 Poin</p>
            <p className="text-sm text-base-200 opacity-70">Tukar Poin</p>
          </div>
        </Link>
      </div>

      <div className="mx-4 mt-4 flex gap-4">
        <Link
          to={"/recycle"}
          className="relative w-full overflow-clip rounded-3xl border border-black border-opacity-10 "
        >
          <div className="absolute">
            <svg
              width="179"
              height="30"
              viewBox="0 0 179 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="89.5"
                cy="-60.0386"
                r="89.5"
                fill="#0B9442"
                fillOpacity="0.3"
              />
            </svg>
          </div>
          <div className="absolute right-0 top-0">
            <svg
              width="89"
              height="52"
              viewBox="0 0 89 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="89.5"
                cy="-38.0386"
                r="89.5"
                fill="#0B9442"
                fillOpacity="0.3"
              />
            </svg>
          </div>
          <div className="space-y-2 px-6 py-4 font-semibold  ">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary bg-opacity-30">
              <div>
                <RecycleIcon />
              </div>
            </div>
            <div>Daur Ulang</div>
          </div>
        </Link>

        <Link
          to={"/buang"}
          className="relative w-full overflow-clip rounded-3xl border border-black border-opacity-10"
        >
          <div className="absolute">
            <svg
              width="179"
              height="30"
              viewBox="0 0 179 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="89.5"
                cy="-60.0386"
                r="89.5"
                fill="#944D0B"
                fillOpacity="0.3"
              />
            </svg>
          </div>
          <div className="absolute right-0 top-0">
            <svg
              width="89"
              height="52"
              viewBox="0 0 89 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="89.5"
                cy="-38.0386"
                r="89.5"
                fill="#944D0B"
                fillOpacity="0.3"
              />
            </svg>
          </div>
          <div className="relative space-y-2 px-6 py-4 font-semibold">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-600 bg-opacity-30">
              <div>
                <TrashIcon />
              </div>
            </div>
            <div>Buang Sampah</div>
          </div>
        </Link>
      </div>

      <h2 className="mx-4 mt-4 text-xl font-semibold">
        Panduan Sorting Sampah
      </h2>
      <div className="bolder-black mx-4 mt-4 space-y-4 rounded-3xl border border-opacity-30 px-6 py-6">
        <Link to={"/guide"} className="flex items-center">
          <div className="mr-2 overflow-clip rounded-full flex justify-center items-center bg-blue-300">
            <div className="h-8 w-8 text-center text-2xl">🍼</div>
          </div>
          <span className="w-full">Plastik</span>
          <div>
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
          </div>
        </Link>
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 overflow-clip rounded-full bg-blue-300">
            <div>svg logo</div>
          </div>
          <span className="w-full">Plastik</span>
          <div>
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
          </div>
        </div>
      </div>

      <h2 className="mx-4 mt-4 text-xl font-semibold">Berita</h2>
      <div className="mx-4 mt-4 flex space-x-6 overflow-x-scroll pb-4">
        <div className="max-w-64">
          <div className="h-40 w-64 rounded-3xl bg-gray-400">
            {/* img thumbnail */}
          </div>
          <div className="mt-2">
            <p className="line-clamp-2 text-[18px] font-medium">
              Teknologi yang ramah lingkungan
            </p>
            <p className="text-base-content text-opacity-50">29 Feb 2024</p>
          </div>
        </div>
        <div>
          <div className="h-40 w-64 rounded-3xl bg-gray-400">
            {/* img thumbnail */}
          </div>
          <div className="mt-2">
            <p className="line-clamp-2 text-[18px] font-medium">
              Teknologi yang ramah lingkungan
            </p>
            <p className="text-base-content text-opacity-50">29 Feb 2024</p>
          </div>
        </div>
      </div>

      <div className="h-28"></div>
    </>
  )
}

export default Home
