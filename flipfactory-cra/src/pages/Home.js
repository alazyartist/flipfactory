import React from "react";
import CommunityLinks from "../components/CommunityLinks";
import EmoteDisplay from "../components/EmoteDisplay";

const Home = () => {
	return (
		<>
			<h1 className='font-bold text-3xl flex place-content-center'>
				Flip Factory
			</h1>
			<EmoteDisplay />
			<CommunityLinks />
		</>
	);
};

export default Home;
