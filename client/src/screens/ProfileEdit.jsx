import BackNavbar from "../components/BackNavbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const ProfileEdit = () => {
	const navigate = useNavigate();
    const [profileData, setProfileData] = useState(null);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
    });

    useEffect(() => {
        fetchProfileFromAPI();
    }, []);

    const fetchProfileFromAPI = async () => {
        try {
            const userId = sessionStorage.getItem("userId");
            const apiUrl = `http://127.0.0.1:8000/api/users/${userId}`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            setProfileData(data); // Mengambil data dari respons JSON yang diberikan oleh Laravel
            setFormData({
                username: data.username,
                email: data.email,
            });
        } catch (error) {
            console.error("Error fetching profile data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const updateProfile = async () => {
        try {
            const userId = sessionStorage.getItem("userId");
            const apiUrl = `http://127.0.0.1:8000/api/users/${userId}`;
            const response = await fetch(apiUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log("Profile updated:", data);
			navigate("/profile");
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

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
                {/* Profile Form */}
                <div className="*:block mt-6">
                    <label className="text-sm font-semibold" htmlFor="username">
                        Nama
                    </label>
                    <input
                        className="w-full border border-gray-300 mt-2 rounded-xl px-4 py-2"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        type="text"
                    />
                </div>

                <div className="*:block mt-6">
                    <label className="text-sm font-semibold" htmlFor="email">
                        E-mail
                    </label>
                    <input
                        className="w-full border border-gray-300 mt-2 rounded-xl px-4 py-2"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        type="email"
                    />
                </div>

                {/* Save Button */}
                <button
                    className="bg-gray-700 hover:bg-gray-900 hover:shadow-lg mt-8 rounded-xl text-white w-full text-center py-3"
                    onClick={updateProfile}
                >
                    Simpan Profil
                </button>
            </div>
        </>
    );
};

export default ProfileEdit;
