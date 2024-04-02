import { Link } from "react-router-dom";

const BottomNav = () => {
	return (
		<>
			<div className="h-24"></div>
			<div className="fixed bottom-0 left-0 z-50 w-full h-20 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
				<div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium px-7">
					<Link
						to="/"
						type="button"
						className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
					>
						<svg
							className="w-5 h-5 mb-1 mt-2 text-gray-500 dark:text-gray-400 group-hover:text-green-700 dark:group-hover:text-green-700"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
						</svg>
						<span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-700 dark:group-hover:text-green-700">
							Home
						</span>
					</Link>
					<Link
						to="transaksi"
						type="button"
						className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-5 h-5 mb-1 mt-2 text-gray-500 dark:text-gray-400 group-hover:text-green-700 dark:group-hover:text-green-700"
						>
							<path
								fillRule="evenodd"
								d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
								clipRule="evenodd"
							/>
							<path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
						</svg>

						<span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-700 dark:group-hover:text-green-700">
							Transaksi
						</span>
					</Link>

					<Link
						to="pickup"
						type="button"
						className="inline-flex flex-col items-center justify-center px-5  group"
					>
						<div className="bg-white p-4 rounded-full mb-1 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-lg border -mt-16">
							<svg
								className="w-12 h-12 text-gray-500 dark:text-gray-400 group-hover:text-green-700 dark:group-hover:text-green-700"
								viewBox="0 0 46 46"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M40.2501 11.5H5.75011V17.25C7.47417 17.25 8.33619 17.25 8.90214 17.7463C8.96777 17.8039 9.02957 17.8657 9.08713 17.9313C9.58345 18.4973 9.58345 19.3593 9.58345 21.0833V34.25C9.58345 37.0784 9.58345 38.4926 10.4621 39.3713C11.3408 40.25 12.755 40.25 15.5835 40.25H30.4168C33.2452 40.25 34.6594 40.25 35.5381 39.3713C36.4168 38.4926 36.4168 37.0784 36.4168 34.25V21.0833C36.4168 19.3593 36.4168 18.4973 36.9131 17.9313C36.9707 17.8657 37.0325 17.8039 37.0981 17.7463C37.664 17.25 38.5261 17.25 40.2501 17.25V11.5ZM19.2084 21.0833C19.2084 20.531 18.7607 20.0833 18.2084 20.0833C17.6562 20.0833 17.2084 20.531 17.2084 21.0833V30.6667C17.2084 31.219 17.6562 31.6667 18.2084 31.6667C18.7607 31.6667 19.2084 31.219 19.2084 30.6667V21.0833ZM28.7918 21.0833C28.7918 20.531 28.3441 20.0833 27.7918 20.0833C27.2395 20.0833 26.7918 20.531 26.7918 21.0833V30.6667C26.7918 31.219 27.2395 31.6667 27.7918 31.6667C28.3441 31.6667 28.7918 31.219 28.7918 30.6667V21.0833Z"
									fill="#0B9442"
								/>
								<path
									d="M19.2973 6.4603C19.5157 6.25652 19.9969 6.07646 20.6664 5.94804C21.3359 5.81961 22.1562 5.75 23 5.75C23.8438 5.75 24.6641 5.81961 25.3336 5.94804C26.0031 6.07646 26.4843 6.25652 26.7027 6.4603"
									stroke="#0B9442"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
						</div>

						<span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-700 dark:group-hover:text-green-700 absolute bottom-0 mb-3">
							Pickup
						</span>
					</Link>
					<Link
						to="inbox"
						type="button"
						className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-5 h-5 mb-1 mt-2 text-gray-500 dark:text-gray-400 group-hover:text-green-700 dark:group-hover:text-green-700"
						>
							<path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
							<path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
						</svg>

						<span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-700 dark:group-hover:text-green-700">
							Inbox
						</span>
					</Link>
					<Link
						to="profile"
						type="button"
						className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
					>
						<svg
							className="w-5 h-5 mb-1 mt-2 text-gray-500 dark:text-gray-400 group-hover:text-green-700 dark:group-hover:text-green-700"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
						</svg>
						<span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-700 dark:group-hover:text-green-700">
							Profile
						</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default BottomNav;
