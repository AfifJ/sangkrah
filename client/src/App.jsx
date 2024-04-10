import { MapProvider } from "react-map-gl"
import BottomNav from "./components/BottomNav"
import Home from "./screens/Home"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
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
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <LayoutNav />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "transaksi",
              children: [
                { index: true, element: <Transaksi /> },
                { path: "detail", element: <DetailHistory /> },
              ],
            },
            {
              path: "pickup",
              element: <Pickup />,
            },
            {
              path: "/guide/:id",
              element: <SortingGuide />,
            },
            {
              path: "redeem",
              children: [
                { index: true, element: <Redeem /> },
                { path: "detail", element: <VoucherDetail /> },
              ],
            },
            {
              path: "topup",
              children: [
                { index: true, element: <Topup /> },
                { path: "confirmation", element: <TopupDetail /> },
              ],
            },
            {
              path: "inbox",
              children: [
                {
                  index: true,
                  element: <Inbox />,
                },
                {
                  path: "/inbox/:id",
                  element: <InboxDetail />,
                },
              ],
            },
            {
              path: "recycle",
              element: <Recycle />,
            },
            {
              path: "buang",
              element: <Buang />,
            },

            {
              path: "profile",
              children: [
                {
                  index: true,
                  element: <Profile />,
                },
                {
                  path: "my-voucher",
                  element: <MyVoucher />,
                },
                {
                  path: "edit",
                  element: <ProfileEdit />,
                },
                {
                  path: "update-password",
                  element: <ProfileNewPassword />,
                },
                {
                  path: "about",
                  element: <AboutSangkrah />,
                },
              ],
            },
          ],
        },
      ],
    },
  ])

  return (
    <MapProvider>
      <RouterProvider router={router} />
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
