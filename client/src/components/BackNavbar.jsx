import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const BackNavbar = ({ children = "Title", link = "/" }) => {
	return (
		<div className="h-16 flex items-center">
			<div className="relative px-2 flex items-center w-full">
				<Link
					to={link}
					type="button"
					className="px-2 py-2 mr-1 rounded-2xl hover:bg-gray-200"
				>
					<ChevronLeftIcon className="w-5 h-5 stroke-2 stroke-primary" />
				</Link>
				<span className="text-base font-bold">{children}</span>
			</div>
		</div>
	);
};

export default BackNavbar;
