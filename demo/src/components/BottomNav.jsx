import { Link, useLocation } from "react-router-dom";
import {
	DocumentTextIcon as DocOutline,
	EnvelopeIcon as EnvelopeOutline,
	HomeIcon as HomeOutline,
	UserCircleIcon as UserOutline,
} from "@heroicons/react/24/outline";
import {
	UserCircleIcon as UserSolid,
	DocumentTextIcon as DocSolid,
	EnvelopeIcon as EnvelopeSolid,
	HomeIcon as HomeSolid,
	TrashIcon,
} from "@heroicons/react/24/solid";

const BottomNav = () => {
	const location = useLocation();
	const isHomeActive = location.pathname === "/";
	const isTransaksiActive = location.pathname === "/transaksi";
	const isPickupActive = location.pathname === "/pickup";
	const isInboxActive = location.pathname === "/inbox";
	const isProfileActive = location.pathname === "/profile";

	return (
		<>
			<div className="fixed z-30 bottom-0 left-0 w-full h-20 bg-white border-t border-gray-200">
				<div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium px-7">
					<Link
						to="/"
						type="button"
						className={`inline-flex items-center justify-center px-5   group `}
					>
						<div
							className={`inline-flex flex-col items-center justify-center text-gray-500 hover:text-green-700 hover:bg-gray-100 p-2 rounded-xl ${
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
						className={`inline-flex flex-col items-center justify-center px-5  group`}
					>
						<div
							className={`inline-flex flex-col items-center justify-center text-gray-500 hover:text-green-700 hover:bg-gray-100 p-2 rounded-xl ${
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
						className={`inline-flex flex-col items-center justify-center px-5 group ${
							isPickupActive ? "text-green-700" : ""
						}`}
					>
						<div className="bg-green-700 p-4 rounded-full mb-1 border-gray-200 hover:bg-gray-100 hover:text-green-700 shadow-lg border text-white -mt-16">
							<TrashIcon className="w-10 h-10" />
						</div>
						<span
							className={`text-sm text-gray-500 group-hover:text-green-700 absolute bottom-0 mb-3 ${
								isPickupActive ? "text-green-700" : ""
							}`}
						>
							Pickup
						</span>
					</Link>
					<Link
						to="inbox"
						type="button"
						className={`inline-flex flex-col items-center justify-center px-5  group `}
					>
						<div
							className={`inline-flex flex-col items-center justify-center text-gray-500 hover:text-green-700 hover:bg-gray-100 p-2 rounded-xl ${
								isInboxActive ? "text-green-700" : "text-gray-500"
							}`}
						>
							{isInboxActive ? (
								<EnvelopeSolid className="h-6 w-6" />
							) : (
								<EnvelopeOutline className="h-6 w-6" />
							)}
							Inbox
						</div>
					</Link>
					<Link
						to="profile"
						type="button"
						className={`inline-flex flex-col items-center justify-center px-5  group `}
					>
						<div
							className={`inline-flex flex-col items-center justify-center text-gray-500 hover:text-green-700 hover:bg-gray-100 p-2 rounded-xl ${
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
	);
};

export default BottomNav;
