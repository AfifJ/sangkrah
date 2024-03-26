import Balance from "../components/Balance";
import FAQ from "../components/FAQ";
import Greeting from "../components/Greeting";
import LastActivities from "../components/LastActivities";
import News from "../components/News";
import QuickMenu from "../components/QuickMenu";

const Home = () => {
	const profile = {
		id: "1",
		username: "Omar Faruukh",
		avatar: "./avatar.png",
		notification: 4,
	};

	return (
		<>
			<div className="*:my-8 last:my-0">
				<Greeting profile={profile} />
				<Balance />
				<QuickMenu />
				<LastActivities />
				{/* <News /> */}
				<FAQ />
				<div className="h-24"></div>
			</div>
		</>
	);
};

export default Home;
