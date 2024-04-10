import { MapProvider } from "react-map-gl"
import BottomNav from "./components/BottomNav"
import Home from "./screens/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom"
import Transaksi from "./screens/Transaksi"
import Profile from "./screens/Profile"
import Inbox from "./screens/Inbox"
import Pickup from "./screens/Pickup"
import ProfileEdit from "./screens/ProfileEdit"
import ProfileNewPassword from "./screens/ProfileNewPassword"
import Redeem from "./screens/Redeem"
import Topup from "./screens/Topup"
import TopupDetail from "./screens/TopupDetail"
import Recycle from "./screens/Recycle"
import Buang from "./screens/Buang"
import Login from "./screens/Login"
import Register from "./screens/Register"
import DetailHistory from "./components/DetailHistory"
import VoucherDetail from "./components/DetailVoucher"
import SortingGuide from "./screens/SortingGuide"
import MyVoucher from "./screens/MyVoucher"
import AboutSangkrah from "./screens/AboutSangkrah"
import InboxDetail from "./screens/InboxDetail"
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
  return (
    <MapProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<LayoutNav />}>
              <Route index element={<Home />} />
              <Route path="transaksi" element={<Transaksi />}>
                <Route path="detail" element={<DetailHistory />} />
              </Route>
              <Route path="pickup" element={<Pickup />} />
              <Route path="guide/:id" element={<SortingGuide />} />
              <Route path="redeem" element={<Redeem />}>
                <Route path="detail" element={<VoucherDetail />} />
              </Route>
              <Route path="topup" element={<Topup />}>
                <Route path="confirmation" element={<TopupDetail />} />
              </Route>
              <Route path="inbox" element={<Inbox />}>
                <Route path=":id" element={<InboxDetail />} />
              </Route>
              <Route path="recycle" element={<Recycle />} />
              <Route path="buang" element={<Buang />} />
              <Route path="profile" element={<Profile />}>
                <Route path="my-voucher" element={<MyVoucher />} />
                <Route path="edit" element={<ProfileEdit />} />
                <Route
                  path="update-password"
                  element={<ProfileNewPassword />}
                />
                <Route path="about" element={<AboutSangkrah />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </MapProvider>
  )
}

const LayoutNav = () => {
  const location = useLocation()
  const isShowing =
    location.pathname === "/" ||
    location.pathname.startsWith("/transaksi") ||
    location.pathname.startsWith("/guide") ||
    location.pathname.startsWith("/inbox") ||
    location.pathname === "/pickup" ||
    location.pathname.startsWith("/redeem") ||
    location.pathname === "/profile" ||
    location.pathname.startsWith("/profile/my-voucher")

  return (
    <>
      <div className="mx-auto max-w-xl">
        <Outlet />
      </div>

      {isShowing && <BottomNav />}
    </>
  )
}

export default App
