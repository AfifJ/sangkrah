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
	const isProfileChildRoute = location.pathname.startsWith("/profile/");
	return (
		<>
			<div className="max-w-xl mx-auto">
				<Outlet />
			</div>

			{!isProfileChildRoute && <BottomNav />}
		</>
	);
};

export default App;
