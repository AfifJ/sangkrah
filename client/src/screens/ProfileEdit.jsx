import BackNavbar from "../components/BackNavbar";

const ProfileEdit = () => {
	return (
		<>
			<BackNavbar link="/profile">Edit Profile</BackNavbar>

			<div className="mx-6 my-6">
				<div className="flex items-center">
					<img className="w-24 h-2w-24" src="/avatar.png" alt="avatar" />
					<div className="bg-gray-400 bg-opacity-80 rounded-xl mx-auto font-semibold px-4 py-2">
						Ubah Foto Profil
					</div>
				</div>

				<div className="*:block mt-6">
					<label className="text-sm font-semibold" htmlFor="nama">
						Nama
					</label>
					<input
						className="w-full border border-gray-300 mt-2 rounded-xl px-4 py-2"
						id="nama"
						value="Omar faruukh"
						type="text"
					/>
					<p className="text-gray-500 text-sm mt-1">
						Nama akan ditampilkan di Profil Anda.
					</p>
				</div>

				<div className="*:block mt-6">
					<label className="text-sm font-semibold" htmlFor="bio">
						Bio
					</label>
					<textarea
						className="w-full border border-gray-300 mt-2 rounded-xl px-4 py-2 h-20"
						id="bio"
						placeholder="Tulis bio anda"
						type="text"
					></textarea>
					{/* value="Omar faruukh" */}
					<p className="text-gray-500 text-sm mt-1"></p>
				</div>

				<div className="*:block mt-6">
					<label className="text-sm font-semibold" htmlFor="email">
						E-mail
					</label>
					<input
						className="w-full border border-gray-300 mt-2 rounded-xl px-4 py-2"
						id="email"
						type="email"
						value="omarfaruukh@email.com"
					/>
					<p className="text-gray-500 text-sm mt-1"></p>
				</div>

				<div className="*:block mt-6">
					<label className="text-sm font-semibold" htmlFor="jenis-kelamin">
						Jenis Kelamin
					</label>
					<select
						name="jenis-kelamin"
						id="jenis-kelamin"
						className="w-full border bg-white border-gray-300 mt-2 rounded-xl px-4 py-2"
					>
						<option value="laki-laki">Laki-laki</option>
						<option value="perempuan">Perempuan</option>
					</select>
					<p className="text-gray-500 text-sm mt-1"></p>
				</div>

				<button className="bg-gray-700 hover:bg-gray-900 hover:shadow-lg mt-8 rounded-xl text-white w-full text-center py-3">
					Simpan Profil
				</button>
			</div>
		</>
	);
};

export default ProfileEdit;
