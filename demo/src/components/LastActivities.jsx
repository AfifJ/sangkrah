import {
	BuangSampahIcon,
	DaurUlangIcon,
	IsiSaldoIcon,
} from "../assets/MenuIcon";
import Activity from "./Activity";

const LastActivities = () => {
	return (
		<>
			<div className="mx-6">
				<div className="flex justify-between mb-2">
					<h2 className="font-semibold text-lg">Aktivitas Terakhir</h2>
					<div className="text-md text-base-secondary">Lainnya</div>
				</div>
				<div className="rounded-2xl *:pt-3 last:pb-3 px-3 bg-white">
					<Activity
						title="Buang Sampah"
						date="01 Mar 2024"
						type="-"
						icon={<BuangSampahIcon />}
						money={2500}
					/>
					<Activity
						title="Daur Ulang"
						date="01 Mar 2024"
						type="-"
						icon={<DaurUlangIcon />}
						money={-5000}
					/>
					<Activity
						title="Isi Saldo"
						date="01 Mar 2024"
						type="+"
						icon={<IsiSaldoIcon />}
						money={5000}
					/>
				</div>
			</div>
		</>
	);
};

export default LastActivities;
