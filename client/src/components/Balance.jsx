const Balance = () => {
	const balance = 128887;
	return (
		<div className="mx-6 bg-gray-dark flex text-slate-50 rounded-full py-3">
			<span className="mx-auto text-lg font-semibold">
				Rp{balance.toLocaleString("id-ID")}
			</span>
		</div>
	);
};

export default Balance;
