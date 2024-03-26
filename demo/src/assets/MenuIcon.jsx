import { PlusIcon } from "@heroicons/react/24/outline";
import { GiftIcon, TrashIcon } from "@heroicons/react/24/solid";

const IsiSaldoIcon = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="w-8 h-8 text-blue-500"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="M3 0v3H0v2h3v3h2V5h3V3H5V0zm7 3v2h9v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5v-9H3v9a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-2.28A2 2 0 0 0 22 15V9a2 2 0 0 0-1-1.72V5c0-1.1-.9-2-2-2zm3 6h7v6h-7zm3 1.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5"
			></path>
		</svg>
	);
};

const BuangSampahIcon = ({ ...rest }) => {
	return <TrashIcon className={`w-8 h-8 text-gray-500 stroke-2`} {...rest} />;
};

const TukarPoinIcon = ({ ...rest }) => {
	return <GiftIcon className={`w-8 h-8 text-purple-900 stroke-2`} {...rest} />;
};

export const DaurUlangIcon = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`w-8 h-8 text-primary`}
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="m21.82 15.42l-2.5 4.33c-.49.86-1.4 1.31-2.32 1.25h-2v2l-2.5-4.5L15 14v2h2.82l-2.22-3.85l4.33-2.5l1.8 3.12c.52.77.59 1.8.09 2.65M9.21 3.06h5c.98 0 1.83.57 2.24 1.39l1 1.74l1.73-1l-2.64 4.41l-5.15.09l1.73-1l-1.41-2.45l-2.21 3.85l-4.34-2.5l1.8-3.12c.41-.83 1.26-1.41 2.25-1.41m-4.16 16.7l-2.5-4.33c-.49-.85-.42-1.87.09-2.64l1-1.73l-1.73-1l5.14.08l2.65 4.42l-1.73-1L6.56 16H11v5H7.4a2.51 2.51 0 0 1-2.35-1.24"
			></path>
		</svg>
	);
};

export { IsiSaldoIcon, BuangSampahIcon, TukarPoinIcon };
