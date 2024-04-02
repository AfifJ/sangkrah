import { Link } from "react-router-dom";
import {
	BuangSampahIcon,
	DaurUlangIcon,
	IsiSaldoIcon,
	TukarPoinIcon,
} from "../assets/MenuIcon";

const QuickMenu = () => {
	const quickLink = [
		{
			title: "Daur Ulang",
			image: <DaurUlangIcon />,
			href: "daur-ulang",
		},
		{
			title: "Buang Sampah",
			image: <BuangSampahIcon />,
			href: "buang-sampah",
		},
		{
			title: "Isi Saldo",
			image: <IsiSaldoIcon />,
			href: "isi-saldo",
		},
		{
			title: "Tukar Poin",
			image: <TukarPoinIcon />,
			href: "tukar",
		},
	];

	return (
		<div className="mx-6 flex justify-between *:text-center *:w-16 *:text-sm">
			{quickLink.map((e) => (
				<ButtonLayout e={e} />
			))}
		</div>
	);
};

const ButtonLayout = ({ e }) => (
	<Link className="block" to={e.href}>
		<div className="bg-white w-16 h-16 rounded-2xl flex justify-center items-center ">
			{typeof e.image === "string" ? (
				<img src={e.image} className="h-8 w-8" alt={e.title + " logo"} />
			) : (
				e.image // Render the custom element directly
			)}
		</div>
		<p className="mt-2 leading-4">{e.title}</p>
	</Link>
);

export default QuickMenu;
