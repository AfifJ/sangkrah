import Accordion from "./Accordion";

const FAQ = () => {
	const faq = [
		{
			q: "Apa itu Sangkrah?",
			a: `Sangkrah adalah aplikasi untuk mengelola sampah kita dengan lebih baik. Selain itu, aplikasi Sangkrah juga memiliki sistem poin.  Semakin aktif kamu mengelola sampahmu di Sangkrah, semakin banyak poin yang bisa kamu dapatkan.`,
		},
		{
			q: "Apakah Penggunaan jasa dalam Sangkrah Gratis?",
			a: "Untuk menggunakan aplikasi ini, anda perlu melakukan topup. Namun kedepannya akan banyak promo-promo dan anda akan mendapatkan poin jika melakukan segala jenis transaksi.",
		},
	];

	return (
		<div className="mx-6">
			<div className="mb-2">
				<h2 className="font-bold text-lg">FAQ</h2>
			</div>
			<div className="*:mb-4">
				{faq.map((e) => (
					<Accordion classes="last-of-type:mb-0" title={e.q} answer={e.a} />
				))}
			</div>
		</div>
	);
};

export default FAQ;
