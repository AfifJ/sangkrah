import { CheckCircleIcon } from "@heroicons/react/24/solid";
import BackNavbar from "../components/BackNavbar";
import { useState } from "react";
import { Link } from "react-router-dom";

const Topup = () => {
	const [selectedOption, setSelectedOption] = useState(null);
	const options = [
		{ id: "alfamaret", label: "Alfamaret", icon: "/logo/alfamart_logo.svg" },
		{ id: "lawran", label: "Lawran", icon: "/logo/lawson_logo.svg" },
		{ id: "circleM", label: "Circle M", icon: "/logo/circle-k_logo.svg" },
	];
	const selectedOptionDetails = options.find(
		(option) => option.id === selectedOption
	);

	return (
		<>
			<BackNavbar>Topup Saldo Sangkrah</BackNavbar>
			<div className="mx-5">
				<h2 className="font-semibold mt-2">Pilih metode pembayaran</h2>
				<div className="mt-4 space-y-2">
					{options.map((option) => (
						<label
							htmlFor={option.id}
							className="cursor-pointer block"
							key={option.id}
						>
							<input
								className="peer sr-only"
								type="radio"
								name="metode"
								id={option.id}
								checked={selectedOption === option.id}
								onChange={() => setSelectedOption(option.id)}
							/>
							<div
								className={`${
									selectedOption === option.id
										? "bg-success bg-opacity-5 border-success border"
										: "bg-white "
								} rounded-xl flex items-center px-4 py-4 `}
							>
								<div className="mr-3 h-6 w-10 flex justify-center items-center">
									{typeof option.icon === "string" ? (
										<img src={option.icon} alt={`${option.icon} icon`} />
									) : (
										option.icon
									)}
								</div>
								<p>{option.label}</p>
								{selectedOption === option.id && (
									<CheckCircleIcon className="ml-auto w-6 h-6 text-success" />
								)}
							</div>
						</label>
					))}
				</div>
			</div>

			<div className="absolute max-w-xl mx-auto flex bottom-0 left-0 right-0 px-5 py-4">
				<Link
					type="button"
					to={`${selectedOption === null ? "#" : "confirmation"}`} // reversed the condition
					className={`text-center text-white w-full py-4 rounded-3xl ${
						selectedOption ? "bg-primary" : "bg-primary/50 cursor-not-allowed"
					}`}
					state={{
						topupMethod: selectedOption,
            logo: selectedOptionDetails?.icon,
					}}
				>
					Konfirmasi
				</Link>
			</div>
		</>
	);
};

export default Topup;
