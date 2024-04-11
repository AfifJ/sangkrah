import { useState,useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import BackNavbar from "../components/BackNavbar"
import { InformationCircleIcon } from "@heroicons/react/24/outline"
import Accordion from "../components/Accordion"
import Success from "../components/Success"

const TopupDetail = () => {
  const { topupMethod, logo } = useLocation().state
  const [topupAmount, setTopupAmount] = useState(null)
  const [success, setSuccess] = useState(false)
  const [profileData, setProfileData] = useState([])
  const navigate = useNavigate()
  const adminFee = 1500
  const minimumTopup = 10000

  console.log(topupMethod)

  const handleTopupChange = (event) => {
    setTopupAmount(Number(event.target.value))
  }

  useEffect(() => {
    fetchProfileFromAPI()
  }, [])

  const fetchProfileFromAPI = async () => {
    try {
      const userId = sessionStorage.getItem("userId")
      //console.log(userId);
      const apiUrl = `http://127.0.0.1:8000/api/users/${userId}`
      const response = await fetch(apiUrl)
      const data = await response.json()
      //console.log(data);

      setProfileData(data) // Mengambil data dari respons JSON yang diberikan oleh Laravel
    } catch (error) {
      console.error("Error fetching profile data:", error)
    }
  }
  console.log(profileData)
  const total = topupAmount + adminFee
  const isTopupValid = topupAmount >= minimumTopup

  const handlePay = async(method,nominal) => {
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      navigate("/login");
      return;
    }

    try {
      const apiUrl = `http://127.0.0.1:8000/api/topup`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          method: method,
          nominal: nominal,
          user_id: userId,
        }),
      });
      const data = await response.json();
      setSuccess(true)
    } catch (error) {
      console.error("Error redeeming reward:", error);
    }
  }

  return (
    <>
      <BackNavbar link="/topup">Topup Saldo Sangkrah</BackNavbar>
      <div className="mx-5 my-4">
        <div className="flex h-40 w-full justify-center">
          <img
            src="/orange-hand-holding-trash-bag-for-recycling.png"
            alt="orange-hand-holding-trash-bag-for-recycling"
          />
        </div>
        <h2 className="mt-2 font-semibold">Konfirmasi Topup</h2>

        <div className="mt-4">
          <div className={`flex items-center rounded-xl bg-white px-4 py-4 `}>
            <div className="mr-3 flex h-6 w-10 items-center justify-center">
              {typeof logo === "string" ? (
                <img src={logo} alt={`${logo} icon`} />
              ) : (
                logo
              )}
            </div>
            <p className="capitalize">{topupMethod}</p>
          </div>

          <div className="mt-4 space-y-2 text-center">
            <p className="text-xl">ID Akun Anda</p>
            <p className="mx-auto w-fit rounded-xl border border-success bg-primary bg-opacity-10 px-4 py-2 text-2xl font-semibold ">
              12334500{profileData.id}
            </p>
            <p className="">
              Nama akun: <span className="font-semibold">{profileData.username}</span>
            </p>
            <p className="text-base-secondary">
              Minimal pengisian saldo adalah Rp 10.000
            </p>
          </div>

          <div>
            <p className="my-4">Nominal Topup</p>
            <div className="mt-2 flex w-full items-center justify-between overflow-clip rounded-t-xl border border-gray-300 bg-white">
              <label
                className="line-clamp-1 w-full pl-5 text-gray-500"
                htmlFor="nominal"
              >
                Nominal topup
              </label>
              <div className="flex w-fit items-center font-semibold focus:border-none">
                <p>Rp</p>
                <input
                  id="nominal"
                  type="number"
                  className="px-4 py-4 text-right focus:outline-none"
                  value={topupAmount}
                  onChange={handleTopupChange}
                />
              </div>
            </div>

            <div className=" flex w-full justify-between rounded-b-xl border border-gray-300 bg-white px-4 py-4">
              <p className="text-gray-500">Biaya admin</p>
              <p className="font-semibold">
                Rp {adminFee.toLocaleString("id-ID")}
              </p>
            </div>
            {!isTopupValid && (
              <p className="mt-1 flex items-center text-sm text-gray-500">
                <InformationCircleIcon className="mr-1 h-4 w-4 text-gray-500" />
                Minimal topup adalah {minimumTopup.toLocaleString("id-ID")}
              </p>
            )}
          </div>
          <Accordion
            classes="last-of-type:mb-0 mt-4"
            title={"Petunjuk Pembayaran"}
            answer={
              <>
                <p>
                  Berikut langkah-langkah untuk melakukan top up saldo di
                  minimarket:
                </p>
                <ol className="list-decimal pl-5">
                  <li>Siapkan nomor ID akun Anda.</li>
                  <li>
                    Datangi kasir minimarket terdekat (Indomaret, Alfamart,
                    dll).
                  </li>
                  <li>
                    Beritahu petugas kasir bahwa Anda ingin melakukan top up di
                    aplikasi Sangkrah.
                  </li>
                  <li>
                    Sebutkan nomor ID akun Anda dan nominal yang ingin Anda top
                    up (minimal Rp10.000).
                  </li>
                  <li>
                    Petugas akan memverifikasi nomor ID dan jumlah top up
                    melalui sistem admin Sangkrah.
                  </li>
                  <li>
                    Jika verifikasi berhasil, petugas akan meminta pembayaran
                    sesuai nominal top up.
                  </li>
                  <li>Lakukan pembayaran ke petugas menggunakan tunai.</li>
                  <li>
                    Petugas akan memberikan kode verifikasi setelah pembayaran
                    Anda diterima.
                  </li>
                  <li>
                    Masuk ke aplikasi Sangkrah dan masukkan kode verifikasi
                    untuk melakukan konfirmasi.
                  </li>
                  <li>
                    Saldo Anda akan bertambah sesuai nominal top up setelah
                    konfirmasi berhasil.
                  </li>
                  <li>
                    Nikmati layanan pengiriman barang dengan saldo yang lebih
                    besar!
                  </li>
                </ol>
              </>
            }
          />
        </div>
      </div>
      {success && (
        <Success setSuccess={setSuccess}>
          Anda telah melakukan topup sebesar Rp
          {topupAmount.toLocaleString("id-ID")} dengan biaya total Rp
          {total.toLocaleString("id-ID")}
        </Success>
      )}

      <div className="h-20"></div>
      <div className="bg-page fixed bottom-0 left-0 right-0 z-0 mx-auto flex max-w-xl px-5 py-4 *:w-full">
        <div>
          <p className="text-sm text-base-secondary">Total</p>
          <p className="font-bold">Rp {total.toLocaleString("id-ID")}</p>
        </div>
        <button
          onClick={() => handlePay(topupMethod, total)}
          className={`flex items-center justify-center rounded-2xl bg-primary text-white ${
            !isTopupValid && "opacity-50"
          }`}
        >
          Bayar
        </button>
      </div>
    </>
  )
}

export default TopupDetail
