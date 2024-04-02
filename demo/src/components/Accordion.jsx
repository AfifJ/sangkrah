import { useState } from "react";

const Accordion = ({ title, answer, classes }) => {
	const [accordionOpen, setAccordionOpen] = useState(false);
	return (
		<div className={"py-4 bg-white rounded-xl px-5 " + classes}>
			<button
				onClick={() => setAccordionOpen(!accordionOpen)}
				className="flex justify-between w-full items-center"
			>
				<span className="text-start">{title}</span>
				<svg
					className="fill-gray-800 shrink-0 ml-8"
					width="16"
					height="16"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						y="7"
						width="16"
						height="2"
						rx="1"
						className={`transform origin-center transition duration-200 ease-out ${
							accordionOpen && "!rotate-180"
						}`}
					/>
					<rect
						y="7"
						width="16"
						height="2"
						rx="1"
						className={`transform origin-center rotate-90 transition duration-200 ease-out ${
							accordionOpen && "!rotate-180"
						}`}
					/>
				</svg>
			</button>
			<div
				className={`grid overflow-hidden transition-all duration-300 ease-in-out text-base-secondary text-sm ${
					accordionOpen
						? "grid-rows-[1fr] opacity-100"
						: "grid-rows-[0fr] opacity-0"
				}`}
			>
				<div className="overflow-hidden">
					<div className="pt-4">{answer}</div>
				</div>
			</div>
		</div>
	);
};

export default Accordion;
