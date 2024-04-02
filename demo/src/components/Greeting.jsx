const Greeting = ({ profile }) => {
	return (
		<>
			<div className="flex justify-between mx-6">
				<div className="flex gap-3">
					<div>
						<img src={profile.avatar} alt="" srcSet="" />
					</div>
					<div className="my-auto">
						<div className="text-xs text-muted">Selamat Pagi!</div>
						<div className="font-bold text-lg leading-4">
							{profile.username}
						</div>
					</div>
				</div>
				<div className="flex">
					<div className="m-auto relative">
						<img src="./bell.svg" className="h-6 w-6" alt="" />
						<img
							className="absolute right-[4px] top-[2px] w-2 h-2"
							src="./bell-dot.svg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Greeting;
