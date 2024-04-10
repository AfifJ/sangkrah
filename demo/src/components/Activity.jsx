const Activity = ({ title, icon, date, money }) => {
	return (
		<div className="flex">
			<div className="flex justify-center items-center mr-3 ml-1 w-6 h-full ">
				<div>
					{typeof icon === "string" ? (
						<div className="w-6 h-6">
							<img src={"./" + icon + ".svg"} alt="" />
						</div>
					) : (
						icon
					)}
				</div>
			</div>
			<div className="w-full">
				<p>{title}</p>
				<p className="text-base-secondary text-sm">{date}</p>
			</div>
			<div
				className={`break-keep font-semibold ${
					money < 0 ? "text-red-700" : ""
				}`}
			>
				{money < 0 && "-"}
				Rp{Math.abs(money).toLocaleString("id-ID")}
			</div>
		</div>
	);
};

export default Activity;
