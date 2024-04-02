import BottomNav from "./components/BottomNav";
import Home from "./screens/Home";
import {
	createBrowserRouter,
	Outlet,
	RouterProvider,
	useLocation,
} from "react-router-dom";
import Transaksi from "./screens/Transaksi";
import Profile from "./screens/Profile";
import Inbox from "./screens/Inbox";
import Pickup from "./screens/Pickup";
import ProfileEdit from "./screens/ProfileEdit";
import ProfileNewPassword from "./screens/ProfileNewPassword";
import Redeem from "./screens/Redeem";
import Topup from "./screens/Topup";
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
          element: <Topup />
        },
				{
					path: "inbox",
					element: <Inbox />,
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
              element: <ProfileNewPassword />
            }
					],
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

const LayoutNav = () => {
	const location = useLocation();
	const isNotShowing = location.pathname.startsWith("/profile/") || location.pathname.startsWith("/topup");
	return (
		<>
			<div className="max-w-xl mx-auto">
				<Outlet />
			</div>

			{!isNotShowing && <BottomNav />}
		</>
	);
};

export default App;
