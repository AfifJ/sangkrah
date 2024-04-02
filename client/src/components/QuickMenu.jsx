import { Link } from "react-router-dom";

const QuickMenu = () => {
	const quickLink = [
		{
			title: "Daur Ulang",
			image: "./icon-recycle.svg",
			href: "daur-ulang",
		},
		{
			title: "Buang Sampah",
			image: "./icon-trashcan.svg",
			href: "buang-sampah",
		},
		{
			title: "Isi Saldo",
			image: "./icon-topup.svg",
			href: "isi-saldo",
		},
		{
			title: "Tukar Poin",
			image: "./icon-gift.svg",
			href: "tukar",
		},
	];

	return (
		<div className="mx-6 flex justify-between *:text-center *:font-semibold *:w-16 *:text-sm">
			{quickLink.map((e) => (
				<ButtonLayout e={e} />
			))}
		</div>
		// QuickMenu
	);
};

const ButtonLayout = ({ e }) => (
	<Link className="block" to={e.href}>
		<div className="bg-white w-16 h-16 rounded-2xl flex justify-center items-center ">
			<img src={e.image} className="h-8 w-8" alt={e.title + " logo"} />
		</div>
		<p className="mt-1 leading-4">{e.title}</p>
	</Link>
);

export default QuickMenu;
