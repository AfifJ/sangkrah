import { XMarkIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Success = ({ setSuccess, children }) => {
	return (
		<div className="absolute z-[1] inset-0 bg-gray-800 bg-opacity-30">
			<div className="absolute py-8 rounded-t-2xl bottom-0 z-10 bg-white left-0 right-0">
				<div className="flex w-full px-5 justify-end ">
					<div
						className="hover:cursor-pointer hover:bg-base-content hover:bg-opacity-10 p-2 rounded-2xl"
						onClick={() => setSuccess(false)}
					>
						<XMarkIcon className="w-6 h-6 stroke-2" />
					</div>
				</div>
				<div className="w-full flex justify-center">
					<div className="bg-primary bg-opacity-30 flex w-fit p-5 rounded-full">
						<div className="flex items-center justify-center">
							<CheckCircleIcon className="w-32 h-32 z-10 text-success" />
							<div className="absolute rounded-full z-0 w-24 h-24 bg-white"></div>
						</div>
					</div>
				</div>
				<div className="w-full text-center text-2xl font-semibold mt-8">
					Transaksi Sukses
				</div>
				<div className="mt-4 text-secondary text-center px-8">
					{children ? children : <p>Transaksi anda berhasil </p>}
				</div>
				<div className="mx-5 mt-16">
					<Link
						to={"/"}
						type="button"
						className="bg-primary block text-center text-white py-4 rounded-2xl w-full"
					>
						Kembali ke Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Success;
