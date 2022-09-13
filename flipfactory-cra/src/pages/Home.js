import React from "react";
import AmbuScene from "../components/AmbuScene";
import CommunityLinks from "../components/CommunityLinks";
import EmoteDisplay from "../components/EmoteDisplay";
import ExampleCharachterCarousel from "../components/ExampleCharachterCarousel";
import FAQ from "../components/FAQ";
import FlipFactoryLogoComposite from "../components/FlipFactoryLogoComposite";
import LandingVideo from "../components/LandingVideo";
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
			<LandingVideo />
			<div className='p-4 flex flex-col gap-2'>
				<div className='p-2'>
					<div className='flex flex-col rounded-xl place-content-center w-full bg-teal-400'>
						<FlipFactoryLogoComposite />
						{/* PageContent */}
						<WelcomeText />
					</div>
				</div>
				<div className='w-full h-fit'>
					<AmbuScene />
				</div>
				{/* via-[#eb6550]  */}
				<div className='p-2'>
					<div
						className='rounded-xl bg-gradient-to-tr from-[#f67c37] 
					to-[#ff1770] flex flex-col'>
						{/* <TrickedexEmbed /> */}
						<RoadmapGoals />
						<RoadmapActivations />
					</div>
				</div>
				<ExampleCharachterCarousel />
				<OthersideLandPlots />

				<div className='bg-zinc-800 text-5xl rounded-xl py-6 p-2 text-zinc-300 font-lucky place-items-center place-content-center flex'>
					<div>BUY OUR SHIT</div>
				</div>
				<div className='  p-2 flex flex-col'>
					{/* <TrickedexEmbed /> */}
					<EmoteDisplay />
					<FAQ />
				</div>
				{/* <LaunchVid /> */}
				<CommunityLinks />
			</div>
		</>
	);
};

export default Home;
