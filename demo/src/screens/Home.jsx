import RecycleIcon from "../assets/RecycleIcon";
import TrashIcon from "../assets/TrashIcon";

const Home = () => {
	return (
		<>
			<div className="mt-4 mx-5 flex justify-between items-center">
				<div>
					<p className="text-sm">Selamat Pagi</p>
					<p className="font-bold text-xl">John Doe</p>
				</div>
				<div className="flex bg-primary bg-opacity-10 w-10 h-10 justify-center items-center rounded-full">
					<div className="text-primary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className="flex mx-4 mt-4">
				<div className="text-primary mr-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-6 h-6"
					>
						<path
							fillRule="evenodd"
							d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="text-sm">Pakembinangun, Pakem, Sleman</div>
			</div>

			<div className="relative mt-4 mx-4 overflow-clip bg-[#138B1F] bg-opacity-25 rounded-3xl min-h-44 px-5 py-3">
				<div className="absolute bottom-0 z-[3] right-0">
					<svg
						width="222"
						height="98"
						viewBox="0 0 222 98"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M74 97.5001C34.6666 93.3335 -31.4 82.1001 19 70.5001C82 56.0001 178 3.00014 219 1.00014C251.8 -0.599858 236 0.333475 224 1.00014V97.5001H74Z"
							fill="#639276"
						/>
					</svg>
				</div>
				<div className="absolute bottom-0 z-[2] right-0">
					<svg
						width="397"
						height="97"
						viewBox="0 0 397 97"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 79.9998C21.1667 59.4998 82.3 20.4998 157.5 28.4998C232.7 36.4998 292.833 29.1666 313.5 24.5C338 16.6667 389 0.9 397 0.5V97.5H0V79.9998Z"
							fill="#7FBE9C"
						/>
					</svg>
				</div>
				<div className="absolute bottom-0 z-[3] left-0">
					<svg
						width="116"
						height="85"
						viewBox="0 0 116 85"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M-0.5 0.5C27.6667 3.5 89.4 11.9 111 21.5C132.6 31.1 69.3333 46.5 35 53C54.1667 55.6667 93.9 62.3 99.5 67.5C106.5 74 74 80 -0.5 84.5V0.5Z"
							fill="#88C696"
						/>
					</svg>
				</div>

				<div className="absolute top-0 left-0">
					<img src="/bubble_gum_olive_branch1.png" alt="" />
				</div>
				<div className="absolute z-[4] top-0 w-40 h-40 left-0">
					<img src="bloom-3.png" alt="" />
				</div>
				<div className="text-end">
					<h3 className="text-4xl font-bold">Dapatkan Poin</h3>
					<p className="text-muted">dari membuang sampah</p>
				</div>
			</div>

			<h2 className="mt-4 mx-4 text-xl font-semibold">Menu Utama</h2>

			<div className="mt-4 mx-4 flex *:w-full bg-gradient-to-r from-primary to-[#479364] rounded-3xl overflow-clip text-white py-5 px-6">
				<div className="flex">
					<div className="bg-white rounded-3xl bg-opacity-20 h-fit w-fit mr-2">
						<div className="p-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-6 h-6"
							>
								<path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
							</svg>
						</div>
					</div>
					<div>
						<p className="text-xl font-semibold">Rp128,887</p>
						<p className="text-sm text-base-200 opacity-70">Topup Saldo</p>
					</div>
				</div>
				<div className="flex">
					<div className="bg-white rounded-3xl bg-opacity-20 h-fit w-fit mr-2">
						<div className="p-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-6 h-6"
							>
								<path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
								<path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
								<path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
								<path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
							</svg>
						</div>
					</div>
					<div>
						<p className="text-xl font-semibold">55 Poin</p>
						<p className="text-sm text-base-200 opacity-70">Tukar Poin</p>
					</div>
				</div>
			</div>

			<div className="mt-4 mx-4 gap-4 flex">
				<div className="relative w-full overflow-clip rounded-3xl border border-black border-opacity-10 ">
					<div className="absolute">
						<svg
							width="179"
							height="30"
							viewBox="0 0 179 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="89.5"
								cy="-60.0386"
								r="89.5"
								fill="#0B9442"
								fillOpacity="0.3"
							/>
						</svg>
					</div>
					<div className="absolute right-0 top-0">
						<svg
							width="89"
							height="52"
							viewBox="0 0 89 52"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="89.5"
								cy="-38.0386"
								r="89.5"
								fill="#0B9442"
								fill-opacity="0.3"
							/>
						</svg>
					</div>
					<div className="space-y-2 py-4 px-6 font-semibold  ">
						<div className="bg-primary bg-opacity-30 h-10 w-10 flex items-center justify-center rounded-full">
							<div>
								<RecycleIcon />
							</div>
						</div>
						<div>Daur Ulang</div>
					</div>
				</div>

				<div className="relative w-full overflow-clip rounded-3xl border border-black border-opacity-10">
					<div className="absolute">
						<svg
							width="179"
							height="30"
							viewBox="0 0 179 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="89.5"
								cy="-60.0386"
								r="89.5"
								fill="#944D0B"
								fillOpacity="0.3"
							/>
						</svg>
					</div>
					<div className="absolute right-0 top-0">
						<svg
							width="89"
							height="52"
							viewBox="0 0 89 52"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="89.5"
								cy="-38.0386"
								r="89.5"
								fill="#944D0B"
								fill-opacity="0.3"
							/>
						</svg>
					</div>
					<div className="space-y-2 py-4 px-6 font-semibold relative">
						<div className="bg-stone-600 bg-opacity-30 h-10 w-10 flex items-center justify-center rounded-full">
							<div>
								<TrashIcon />
							</div>
						</div>
						<div>Buang Sampah</div>
					</div>
				</div>
			</div>

			<h2 className="text-xl font-semibold mt-4 mx-4">
				Panduan Sorting Sampah
			</h2>
			<div className="border bolder-black border-opacity-30 rounded-3xl mx-4 mt-4 px-6 py-6 space-y-4">
				<div className="flex items-center">
					<div className="bg-blue-300 w-8 h-8 mr-2 rounded-full overflow-clip">
						<div>svg logo</div>
					</div>
					<span className="w-full">Plastik</span>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m8.25 4.5 7.5 7.5-7.5 7.5"
							/>
						</svg>
					</div>
				</div>
				<div className="flex items-center">
					<div className="bg-blue-300 w-8 h-8 mr-2 rounded-full overflow-clip">
						<div>svg logo</div>
					</div>
					<span className="w-full">Plastik</span>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m8.25 4.5 7.5 7.5-7.5 7.5"
							/>
						</svg>
					</div>
				</div>
			</div>

			<h2 className="text-xl font-semibold mt-4 mx-4">Berita</h2>
			<div className="mt-4 mx-4  flex space-x-6 overflow-y-scroll">
				<div className="max-w-64">
					<div className="bg-gray-400 h-40 w-64 rounded-3xl">
						{/* img thumbnail */}
					</div>
					<div className="mt-2">
						<p className="text-[18px] line-clamp-2 font-medium">
							Teknologi yang ramah lingkungan
						</p>
						<p className="text-base-content text-opacity-50">29 Feb 2024</p>
					</div>
				</div>
				<div>
					<div className="bg-gray-400 h-40 w-64 rounded-3xl">
						{/* img thumbnail */}
					</div>
					<div className="mt-2">
						<p className="text-[18px] line-clamp-2 font-medium">
							Teknologi yang ramah lingkungan
						</p>
						<p className="text-base-content text-opacity-50">29 Feb 2024</p>
					</div>
				</div>
			</div>

			<div className="h-28"></div>
		</>
	);
};

export default Home;
