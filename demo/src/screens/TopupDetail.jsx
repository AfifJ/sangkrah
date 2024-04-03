import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BackNavbar from "../components/BackNavbar";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Accordion from "../components/Accordion";
import Success from "../components/Success";

const TopupDetail = () => {
	const { topupMethod, logo } = useLocation().state;
	const [topupAmount, setTopupAmount] = useState(null);
	const [success, setSuccess] = useState(false);
	const adminFee = 1500;
	const minimumTopup = 10000;

	const handleTopupChange = (event) => {
		setTopupAmount(Number(event.target.value));
	};

	const total = topupAmount + adminFee;
	const isTopupValid = topupAmount >= minimumTopup;

	return (
		<>
			<BackNavbar link="/topup">Topup Saldo Sangkrah</BackNavbar>
			<div className="mx-5 my-4">
				<div className="h-40 flex w-full justify-center">
					<img
						src="/orange-hand-holding-trash-bag-for-recycling.png"
						alt="orange-hand-holding-trash-bag-for-recycling"
					/>
				</div>
				<h2 className="font-semibold mt-2">Konfirmasi Topup</h2>

				<div className="mt-4">
					<div className={`bg-white rounded-xl flex items-center px-4 py-4 `}>
						<div className="mr-3 h-6 w-10 flex justify-center items-center">
							{typeof logo === "string" ? (
								<img src={logo} alt={`${logo} icon`} />
							) : (
								logo
							)}
						</div>
						<p className="capitalize">{topupMethod}</p>
					</div>

					<div>
						<p className="mt-4">Nominal Topup</p>
						<div className="flex w-full mt-2 rounded-t-xl justify-between border overflow-clip bg-white items-center border-gray-300">
							<label
								className="pl-5 w-full line-clamp-1 text-gray-500"
								htmlFor="nominal"
							>
								Nominal topup
							</label>
							<div className="flex w-fit focus:border-none font-semibold items-center">
								<p>Rp</p>
								<input
									id="nominal"
									type="number"
									className="px-4 py-4 focus:outline-none text-right"
									value={topupAmount}
									onChange={handleTopupChange}
								/>
							</div>
						</div>

						<div className=" bg-white w-full px-4 py-4 rounded-b-xl flex justify-between border border-gray-300">
							<p className="text-gray-500">Biaya admin</p>
							<p className="font-semibold">
								Rp {adminFee.toLocaleString("id-ID")}
							</p>
						</div>
						{!isTopupValid && (
							<p className="text-gray-500 text-sm mt-1 flex items-center">
								<InformationCircleIcon className="w-4 h-4 text-gray-500 mr-1" />
								Minimal topup adalah {minimumTopup.toLocaleString("id-ID")}
							</p>
						)}
					</div>
					<Accordion
						classes="last-of-type:mb-0 mt-4"
						title={"Petunjuk Pembayaran"}
						answer={"Begini"}
					/>
				</div>
			</div>
			{success && (
				<Success setSuccess={setSuccess}>
					Anda telah melakukan topup sebesar Rp{" "}
					{topupAmount.toLocaleString("id-ID")} dengan biaya total Rp{" "}
					{total.toLocaleString("id-ID")}
				</Success>
			)}

			<div className="absolute z-0 bottom-0 left-0 right-0 *:w-full flex mx-5 my-4">
				<div>
					<p className="text-sm text-base-secondary">Total</p>
					<p className="font-bold">Rp {total.toLocaleString("id-ID")}</p>
				</div>
				<button
					onClick={() => setSuccess(true)}
					className={`bg-primary text-white rounded-2xl flex items-center justify-center ${
						!isTopupValid && "opacity-50"
					}`}
				>
					Bayar
				</button>
			</div>
		</>
	);
};

export default TopupDetail;
