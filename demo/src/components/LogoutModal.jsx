import { XMarkIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

const LogoutModal = ({ logoutButtonHandle }) => {
	return (
		<div className="bg-gray-800 flex bg-opacity-60 fixed bottom-0 top-0 left-0 right-0 z-50">
			<div
				onClick={logoutButtonHandle}
				className="relative w-full flex justify-center h-full"
			>
				<div className="absolute max-w-xl bottom-0 w-full bg-white pb-8 pt-6 px-6 rounded-t-2xl">
					<button onClick={logoutButtonHandle}>
						<XMarkIcon className="w-8 h-8" />
					</button>
					<ExclamationTriangleIcon className="w-32 h-32 mx-auto text-orange-800 mt-6" />
					<p className="text-xl font-semibold text-center px-10">
						Anda yakin ingin mengeluarkan akun dari perangkat ini?
					</p>
					<p className="text-gray-500 px-14 text-center mt-6">
						Data login anda tidak akan disimpan di perangkat ini.
					</p>
					<div className="flex gap-x-5 mt-8">
						<button className="bg-stone-700 hover:bg-stone-500 text-white w-full py-3 rounded-xl">
							Yakin
						</button>
						<button
							onClick={logoutButtonHandle}
							className="text-stone-700 border-2 hover:bg-stone-300 border-stone-700 w-full py-3 rounded-xl"
						>
							Batal
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogoutModal;
