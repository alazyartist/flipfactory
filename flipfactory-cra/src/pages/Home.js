import React from "react";
import CommunityLinks from "../components/CommunityLinks";
import EmoteDisplay from "../components/EmoteDisplay";
import { FlipFactoryLogo } from "../components/FlipFactoryLogo";
import LaunchVid from "../components/LaunchVid";
import Roadmap from "../components/Roadmap";

const Home = () => {
	return (
		<>
			{/* <h1 className='p-2 font-bold text-3xl flex place-content-center'>
				Flip Factory
			</h1> */}
			<div className='pt-4 place-self-center w-[70vw]'>
				<FlipFactoryLogo />
			</div>
			<LaunchVid />
			<Roadmap />
			<EmoteDisplay />
			<CommunityLinks />
		</>
	);
};

export default Home;
