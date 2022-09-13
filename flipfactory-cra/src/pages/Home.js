import React from "react";
import AmbuScene from "../components/AmbuScene";
import CommunityLinks from "../components/CommunityLinks";
import EmoteDisplay from "../components/EmoteDisplay";
import ExampleCharachterCarousel from "../components/ExampleCharachterCarousel";
import { FFLogo } from "../components/FFLogo";
import { FlipFactoryLogo } from "../components/FlipFactoryLogo";
import LaunchVid from "../components/LaunchVid";
import OthersideLandPlots from "../components/OthersideLandPlots";
import RoadmapActivations from "../components/RoadmapActivations";
import RoadmapGoals from "../components/RoadmapGoals";
import TrickedexEmbed from "../components/TrickedexEmbed";
import WelcomeText from "../components/WelcomeText";

const Home = () => {
	return (
		<>
			{/* <h1 className='p-2 font-bold text-3xl flex place-content-center'>
				Flip Factory
			</h1> */}
			<div className='w-[100vw] overflow-hidden'>
				<video className='h-full w-full' loop muted autoPlay>
					<source src='./EM-vertical.mp4' type='video/mp4' />
				</video>
			</div>
			<div id='Logo Container' className='pt-4 place-self-center w-[70vw]'>
				<div className='absolute top-5 left-5 w-[20vw]'>
					<FFLogo />
				</div>
				<div className='pt-8'>
					{/* <FlipFactoryLogo /> */}
					<div className='text-center font-lucky font-bold text-7xl text-zinc-50'>
						Flip Factory
					</div>
				</div>
			</div>

			{/* PageContent */}
			<WelcomeText />
			<div className='w-full h-fit'>
				<AmbuScene />
			</div>
			{/* via-[#eb6550]  */}
			<div
				className=' bg-gradient-to-tr from-[#f67c37] 
			to-[#ff1770] p-2 flex flex-col'>
				{/* <TrickedexEmbed /> */}
				<RoadmapGoals />
				<RoadmapActivations />
			</div>
			<ExampleCharachterCarousel />
			<OthersideLandPlots />

			<div className='bg-zinc-800 text-5xl py-6 p-2 text-zinc-300 font-lucky place-items-center place-content-center flex'>
				<div>BUY OUR SHIT</div>
			</div>
			<div className=' bg-gradient-to-b from-[#f67c37] p-2 flex flex-col'>
				{/* <TrickedexEmbed /> */}
				<EmoteDisplay />
			</div>
			{/* <LaunchVid /> */}
			<CommunityLinks />
		</>
	);
};

export default Home;
