import React from "react";
import CommunityLinks from "../components/CommunityLinks";
import EmoteDisplay from "../components/EmoteDisplay";
import { FFLogo } from "../components/FFLogo";
import { FlipFactoryLogo } from "../components/FlipFactoryLogo";
import LaunchVid from "../components/LaunchVid";
import Roadmap from "../components/Roadmap";
import WelcomeText from "../components/WelcomeText";

const Home = () => {
	return (
		<>
			{/* <h1 className='p-2 font-bold text-3xl flex place-content-center'>
				Flip Factory
			</h1> */}
			<div id='Logo Container' className='pt-4 place-self-center w-[70vw]'>
				<div className='absolute top-5 left-5 w-[20vw]'>
					<FFLogo />
				</div>
				<div className='pt-8'>
					<FlipFactoryLogo />
				</div>
			</div>

			{/* PageContent */}
			<WelcomeText />
			{/* <LaunchVid /> */}
			<Roadmap />
			<EmoteDisplay />
			<CommunityLinks />
		</>
	);
};

export default Home;
