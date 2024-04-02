import { useState, useEffect } from "react";

const Transaksi = () => {
	const [transactions, setTransactions] = useState([
		{
			id: 1,
			date: "2023-08-01",
			amount: 100,
			description: "Transaksi 1",
			title: "Pembayaran Tagihan",
			timestamp: 1680326400000, // Timestamp untuk 2023-08-01 00:00:00
		},
		{
			id: 2,
			date: "2023-08-01",
			amount: 200,
			description: "Transaksi 2",
			title: "Pemasukan Gaji",
			timestamp: 1680330000000, // Timestamp untuk 2023-08-01 01:00:00
		},
		{
			id: 3,
			date: "2023-08-02",
			amount: 300,
			description: "Transaksi 3",
			title: "Pembelian Barang",
			timestamp: 1680412800000, // Timestamp untuk 2023-08-02 00:00:00
		},
		{
			id: 4,
			date: "2023-08-02",
			amount: 400,
			description: "Transaksi 4",
			title: "Transfer Uang",
			timestamp: 1680416400000, // Timestamp untuk 2023-08-02 01:00:00
		},
	]);

	const sortTransactions = (transactions) => {
		return transactions.sort(
			(a, b) => new Date(b.timestamp) - new Date(a.timestamp)
		);
	};

	const [isLoading, setIsLoading] = useState(false);
	const [noMoreTransactions, setNoMoreTransactions] = useState(false);

	const sortedTransactions = sortTransactions(transactions).reduce(
		(acc, transaction) => {
			const date = transaction.date;
			const group = acc.find((g) => g[0].date === date);
			if (group) {
				group.push(transaction);
			} else {
				acc.push([transaction]);
			}
			return acc;
		},
		[]
	);

	// Fungsi untuk memuat data transaksi tambahan saat di-scroll
	const loadMoreTransactions = async () => {
		setIsLoading(true);
		try {
			const newTransactions = await fetchAdditionalTransactions();
			if (Object.keys(newTransactions).length === 0) {
				setNoMoreTransactions(true);
			} else {
				setTransactions((prevTransactions) => ({
					...prevTransactions,
					...newTransactions,
				}));
			}
		} catch (error) {
			console.error("Error fetching additional transactions:", error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		// Panggil fungsi loadMoreTransactions saat komponen di-mount
		loadMoreTransactions();
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scrollHeight = document.documentElement.scrollHeight;
			const scrollTop = document.documentElement.scrollTop;
			const clientHeight = document.documentElement.clientHeight;

			if (scrollTop + clientHeight >= scrollHeight && !isLoading) {
				loadMoreTransactions();
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isLoading, loadMoreTransactions]);

	return (
		<>
			<div className="bg-[#3A844F] px-6 pt-8 pb-24 text-white flex justify-between items-center">
				<div>
					<div className="font-light">Saldo Kamu</div>
					<div className="text-3xl font-semibold">Rp128,887</div>
				</div>
				<div className="border border-white rounded-full">
					<img className="w-14 h-14 rounded-full" src="avatar.png" alt="" />
				</div>
			</div>
			<div className="px-6 pt-4 bg-gray-100 -mt-8 rounded-t-3xl">
				<div className="flex justify-between items-center mb-4">
					<h2 className="font-bold text-2xl">Transaksi Saya</h2>
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
				<div className="grid grid-cols-1 gap-4">
  {sortedTransactions.map((transactionGroup, index) => (
    <div key={index} className="mb-4">
      <div className="text-gray-500 mb-2">{transactionGroup[0].date}</div>
      {transactionGroup.map((transaction) => (
        <TransaksiHarian key={transaction.id} transaksi={transaction} />
      ))}
    </div>
  ))}
</div>
				{isLoading ? (
					<div className="text-center mt-4">Loading...</div>
				) : noMoreTransactions ? (
					<div className="text-center mt-4">Tidak ada transaksi lagi</div>
				) : null}
			</div>
		</>
	);
};

const TransaksiHarian = ({ transaksi }) => {
	return (
		<div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
			<div className="mr-4">
				{transaksi.amount < 0 ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 text-red-500"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 text-green-500"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				)}
			</div>
			<div className="flex-1">
				<div className="flex justify-between items-center mb-2">
					<div className="font-semibold">{transaksi.title}</div>
					<div
						className={`font-bold ${
							transaksi.amount < 0 ? "text-red-500" : "text-green-500"
						}`}
					>
						Rp {Math.abs(transaksi.amount)}
					</div>
				</div>
				<div className="text-gray-500">{transaksi.description}</div>
			</div>
		</div>
	);
};

export default Transaksi;
