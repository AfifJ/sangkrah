import Balance from "../components/Balance";
import FAQ from "../components/FAQ";
import Greeting from "../components/Greeting";
import LastActivities from "../components/LastActivities";
import News from "../components/News";
import QuickMenu from "../components/QuickMenu";
import React, { useState, useEffect } from "react";

const Home = () => {
	const [profileData, setProfileData] = useState(null);

  	useEffect(() => {
    	fetchProfileFromAPI();
  	}, []);

  	const fetchProfileFromAPI = async () => {
    	try {
    	  const response = await fetch("http://127.0.0.1:8000/api/users/1");
    	  const data = await response.json();
		  console.log(data);

    	  setProfileData(data); // Mengambil data dari respons JSON yang diberikan oleh Laravel
    	} catch (error) {
    	  console.error("Error fetching profile data:", error);
    	}
  	};

	console.log(profileData.id);
	const profile = {
		id: profileData ? profileData.id : 1, // Menggunakan nilai profileData.id jika tersedia, jika tidak, gunakan nilai default 1
		username: profileData ? profileData.fullname : "Omar Faruukh", // Menggunakan nilai profileData.username jika tersedia, jika tidak, gunakan nilai default "Omar Faruukh"
		avatar: profileData ? profileData.profile_pict : "./avatar.png", // Menggunakan nilai profileData.profile_pict jika tersedia, jika tidak, gunakan nilai default "./avatar.png"
		notification: profileData ? profileData.notification : 4, // Menggunakan nilai profileData.notification jika tersedia, jika tidak, gunakan nilai default 4
	};

	return (
		<>
    <div className="*:my-8 last:my-0">
		<Greeting profile={profile} />
      	<Balance />
      	<QuickMenu />
      	<LastActivities />
      	<News />
      	<FAQ />
    </div>
		</>
	);
};

export default Home;
