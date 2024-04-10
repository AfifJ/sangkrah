import { useState, useEffect } from "react";

const News = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const apikey =
		import.meta.env.VITE_NEWSDATA_API ?? process.env.VITE_NEWSDATA_API;

	const url =
		"https://newsdata.io/api/1/news?apikey=" +
		apikey +
		"&country=id&image=1&size=4&category=health";
	// Function to fetch data
	const fetchData = async () => {
		try {
			// Make a GET request using the Fetch API
			const response = await fetch(url);

			// Check if the response is successful (status code 200-299)
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			// Parse the JSON data from the response
			const result = await response.json();

			// Update the state with the fetched data
			setData(result.results);
		} catch (error) {
			console.error("Error fetching data:", error.message);
		}
	};

	function formatTanggal(tanggalString) {
		// Buat objek Date dari string tanggal
		const tanggal = new Date(tanggalString);

		// Dapatkan tahun, bulan, dan tanggal dari objek Date
		const tahun = tanggal.getFullYear();
		const bulan = tanggal.getMonth();

		// Atur tanggal ke hari terakhir bulan
		tanggal.setDate(new Date(tahun, bulan + 1, 0).getDate());

		// Format tanggal menjadi string
		const tanggalTerformat =
			tanggal.getDate() + " " + getNamaBulan(bulan) + " " + tahun;

		return tanggalTerformat;
	}

	function getNamaBulan(bulan) {
		const namaBulan = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"Mei",
			"Jun",
			"Jul",
			"Agu",
			"Sep",
			"Okt",
			"Nov",
			"Des",
		];
		return namaBulan[bulan];
	}

	return (
		<>
			<div className="mx-6">
				<div className="flex justify-between mb-2">
					<h2 className="font-bold text-lg">Berita</h2>
					{/* <div className="text-md">Lainnya</div> */}
				</div>
				<div>
					{data ? (
						// Display the fetched data
						<div className="flex flex-nowrap gap-x-4 overflow-x-scroll">
							{data.map((e) => (
								<>
									<a
										className="min-w-64 max-w-64 block bg-white rounded-xl hover:bg-gray-200"
										href={e.link}
										target="_blank"
									>
										<div className="rounded-xl overflow-clip">
											<img
												className="w-full object-cover h-52"
												src={e.image_url}
												alt=""
											/>
										</div>
										<div className="px-6 py-4">
											<h3 className="line-clamp-3 font-bold">{e.title}</h3>
											<p className="line-clamp-2 pt-2">{e.description}</p>
											<p className="text-blue-600 pt-2">
												{formatTanggal(e.pubDate)}
											</p>
										</div>
									</a>
								</>
							))}
						</div>
					) : (
						// Display a loading message or other UI while data is being fetched
						<p>Loading...</p>
					)}
				</div>
			</div>
		</>
	);
};

export default News;
