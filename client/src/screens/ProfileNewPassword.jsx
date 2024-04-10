import BackNavbar from "../components/BackNavbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const ProfileNewPassword = () => {

	const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "oldPassword") {
            setOldPassword(value);
        } else if (name === "newPassword") {
            setNewPassword(value);
        } else if (name === "confirmPassword") {
            setConfirmPassword(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setErrorMessage("Konfirmasi password baru tidak sesuai");
            return;
        }

        try {
            const userId = sessionStorage.getItem("userId");
            const apiUrl = `http://127.0.0.1:8000/api/passchange/${userId}`;
            const response = await fetch(apiUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    password_lama: oldPassword,
                    password_baru: newPassword,
                    konfirmasi_password_baru: confirmPassword,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                navigate("/profile")
            } else {
                setErrorMessage(data.error || "Terjadi kesalahan");
            }
        } catch (error) {
            console.error("Error updating password:", error);
            setErrorMessage("Terjadi kesalahan");
        }
    };

	return (
		<>
			<BackNavbar link="/profile">Ubah Kata Sandi</BackNavbar>

			<div className="mx-6 my-6">
			<form onSubmit={handleSubmit}>
                    <div className="block mt-6">
                        <label className="text-sm font-semibold" htmlFor="oldPassword">
                            Password Lama
                        </label>
                        <input
                            className="w-full border border-gray-300 mt-2 rounded-xl px-4 py-2"
                            id="oldPassword"
                            name="oldPassword"
                            type="password"
                            value={oldPassword}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="block mt-6">
                        <label className="text-sm font-semibold" htmlFor="newPassword">
                            Password Baru
                        </label>
                        <input
                            className="w-full border border-gray-300 mt-2 rounded-xl px-4 py-2"
                            id="newPassword"
                            name="newPassword"
                            type="text"
                            value={newPassword}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="block mt-6">
                        <label className="text-sm font-semibold" htmlFor="confirmPassword">
                            Konfirmasi Password Baru
                        </label>
                        <input
                            className="w-full border border-gray-300 mt-2 rounded-xl px-4 py-2"
                            id="confirmPassword"
                            name="confirmPassword"
                            type="text"
                            value={confirmPassword}
                            onChange={handleChange}
                        />
                    </div>

                    {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

                    <button
                        className="bg-gray-700 hover:bg-gray-900 hover:shadow-lg mt-8 rounded-xl text-white w-full text-center py-3"
                        type="submit"
                    >
                        Ganti Password
                    </button>
                </form>
			</div>
		</>
	);
};

export default ProfileNewPassword;
