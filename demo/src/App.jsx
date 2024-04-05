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

const App = () => {
  const router = createBrowserRouter([
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
          element: <Transaksi />,
        },
        {
          path: "pickup",
          element: <Pickup />,
        },
        {
          path: "redeem",
          element: <Redeem />,
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
          element: <Inbox />,
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
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "profile",
          children: [
            {
              index: true,
              element: <Profile />,
            },
            {
              path: "edit",
              element: <ProfileEdit />,
            },
            {
              path: "update-password",
              element: <ProfileNewPassword />,
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
    location.pathname === "/transaksi" ||
    location.pathname === "/pickup" ||
    location.pathname === "/redeem" ||
    location.pathname === "/profile"

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
