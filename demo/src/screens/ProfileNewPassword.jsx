import BackNavbar from "../components/BackNavbar";
import InputBox from "../components/InputBox";

const ProfileNewPassword = () => {
	return (
		<>
			<BackNavbar link="/profile">Ubah Kata Sandi</BackNavbar>

			<div className="mx-6 my-6">
				<div className="flex items-center">
					<img className="w-24 h-2w-24" src="/avatar.png" alt="avatar" />
					<div className="bg-gray-400 bg-opacity-80 rounded-xl mx-auto font-semibold px-4 py-2">
						Ubah Foto Profil
					</div>
				</div>

				<div className="*:block mt-6">
					<label className="text-sm font-semibold" htmlFor="password-lama">
						Passwrod Lama
					</label>
					<input
						className="w-full border border-gray-300 mt-2 rounded-xl px-4 py-2"
						id="password-lama"
						type="text"
					/>
				</div>

				<div className="*:block mt-6">
					<label className="text-sm font-semibold" htmlFor="password-baru">
						Passwrod Baru
					</label>
					<input
						className="w-full border border-gray-300 mt-2 rounded-xl px-4 py-2"
						id="password-baru"
						type="text"
					/>
					<p className="text-gray-500 text-sm mt-1">
						Password minimal 6 digit dengan kombinasi huruf dan angka.
					</p>
				</div>

				<div className="*:block mt-6">
					<label
						className="text-sm font-semibold"
						htmlFor="konfirmasi-password-baru"
					>
						Konfirmasi Passwrod Baru
					</label>
					<input
						className="w-full border border-gray-300 mt-2 rounded-xl px-4 py-2"
						id="konfirmasi-password-baru"
						type="text"
					/>
				</div>

				<button className="bg-gray-700 hover:bg-gray-900 hover:shadow-lg mt-8 rounded-xl text-white w-full text-center py-3">
					Ganti Password
				</button>
			</div>
		</>
	);
};

export default ProfileNewPassword;
