const Inbox = () => {
	const messages = [
		{
			id: 1,
			user_id: 1,
			date: "2023-03-24",
			timestamp: 1679640000000, // 24 Maret 2023, 00:00:00
			content: "Ini adalah pesan pertama",
			category: "Penting",
			title: "Pesan Penting",
			read: false,
		},
		{
			id: 2,
			user_id: 2,
			date: "2023-03-23",
			timestamp: 1679553600000, // 23 Maret 2023, 00:00:00
			content: "Ini adalah pesan kedua",
			category: "Biasa",
			title: "Pesan Biasa",
			read: true,
		},
		{
			id: 3,
			user_id: 3,
			date: "2023-03-22",
			timestamp: 1679467200000, // 22 Maret 2023, 00:00:00
			content: "Ini adalah pesan ketiga",
			category: "Penting",
			title: "Pesan Penting",
			read: false,
		},
	];

	// Mengurutkan pesan dari terbaru ke terlama
	const sortedMessages = messages.sort((a, b) => b.timestamp - a.timestamp);

	return (
		<>
			<div className="px-6 py-4">
				<div className="flex justify-between items-center">
					<h2 className="font-bold text-2xl">Pesan Masuk</h2>
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
							d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
						/>
					</svg>
				</div>
			</div>
			<div>
				{sortedMessages.map((message) => (
					<div
						key={message.id}
						className={`py-4 ${!message.read && "bg-green-200 bg-opacity-70"}`}
					>
						<div className="px-6">
							<div className="flex items-center justify-between">
								<h3 className={`text-lg ${!message.read && "font-bold line-clamp-1"}`}>
									{message.title}
								</h3>
								<span className="text-gray-500 line-clamp-1">{message.date}</span>
							</div>
							<div className="flex items-center justify-between">
								<p className="text-muted line-clamp-1">{message.content}</p>
								{!message.read && (
									<div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Inbox;
