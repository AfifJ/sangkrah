import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const BackNavbar = ({ children = "Title", link = "/" }) => {
	return (
		<div className="h-16 border border-b-gray-400 flex items-center">
			<div className=" relative flex items-center justify-center w-full">
				<Link
					to={link}
					type="button"
					className="absolute left-4 px-2 py-2 rounded-2xl hover:bg-gray-200"
				>
					<ChevronLeftIcon className="w-8 h-8" width={3} />
				</Link>
				<span className=" text-xl font-semibold">{children}</span>
			</div>
		</div>
	);
};

export default BackNavbar;
