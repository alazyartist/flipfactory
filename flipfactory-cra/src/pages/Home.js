import React, { lazy } from "react";
import { Link } from "react-router-dom";
import BatteriesIncluded from "../components/BatteriesIncluded";
import CommunityLinks from "../components/CommunityLinks";
// import EmoteDisplay from "../components/EmoteDisplay";
import ExampleCharachterCarousel from "../components/ExampleCharachterCarousel";
import FAQ from "../components/FAQ";
import FlipFactoryLogoComposite from "../components/FlipFactoryLogoComposite";
// import LandingVideo from "../components/LandingVideo";
import LaunchVid from "../components/LaunchVid";
import OthersideLandPlots from "../components/OthersideLandPlots";
import RoadmapActivations from "../components/RoadmapActivations";
import RoadmapGoals from "../components/RoadmapGoals";
import TrickedexEmbed from "../components/TrickedexEmbed";
import WelcomeText from "../components/WelcomeText";
import WillWorkWithMetaverses from "../components/WillWorkWithMetaverses";
import { IoIosPaper } from "react-icons/io";
import OthersideLandText from "../components/litepaper/OthersideLandText";
import CardStack from "../components/CardStack";
import { Suspense } from "react";
import { FFLogo } from "../components/FFLogo";

const LandingVideo = lazy(() => import("../components/LandingVideo"));
const AmbuScene = lazy(() => import("../components/AmbuScene"));
const EmoteDisplay = lazy(() => import("../components/EmoteDisplay"));
const Home = () => {
	return (
		<>
			{/* <h1 className='p-2 font-bold text-3xl flex place-content-center'>
				Flip Factory
			</h1> */}
			<Suspense
				fallback={
					<div className='absolute top-[50vh] text-3xl text-teal-200 font-lucky w-full p-8 flex place-items-center place-content-center'>
						{/* <FlipFactoryLogoComposite /> */}
						getting factory feed
					</div>
				}>
				<LandingVideo />
			</Suspense>
			<div className='p-4 flex flex-col gap-2'>
				<div className='relative p-2'>
					<div className='flex flex-col group rounded-xl place-content-center hover:bg-opacity-5 w-full bg-teal-400'>
						<FlipFactoryLogoComposite />
						{/* PageContent */}
						<WelcomeText />
					</div>
				</div>
				<div className='h-[40vh] w-[100vw]'></div>
				<Link
					className='flex place-content-center place-items-center w-full text-center text-3xl font-inter font-black text-zinc-300'
					to={"/litepaper"}>
					<IoIosPaper className='text-zinc-200' />
					Litepaper
				</Link>
				<div className='w-full h-fit'>
					<Suspense
						fallback={
							<div className='font-lucky text-center text-4xl text-zinc-300'>
								Locating Ambu..
							</div>
						}>
						<AmbuScene />
					</Suspense>
				</div>
				<WillWorkWithMetaverses />
				{/* via-[#eb6550]  */}
				<div className='p-2'>
					<div
						className='rounded-xl bg-gradient-to-tr to-teal-400 
					from-[#6560ff] flex flex-col'>
						{/* <TrickedexEmbed /> */}
						<RoadmapGoals />
						<RoadmapActivations />
					</div>
				</div>
				{/* <ExampleCharachterCarousel /> */}
				<CardStack />
				<OthersideLandPlots />
				<BatteriesIncluded />

				<div className='bg-zinc-800 text-5xl rounded-xl py-6 p-2 text-zinc-300 font-lucky place-items-center place-content-center flex'>
					<div>BUY OUR SHIT</div>
				</div>
				<div className='  p-2 flex flex-col'>
					{/* <TrickedexEmbed /> */}
					<Suspense
						fallback={
							<div className='font-lucky text-center text-4xl text-zinc-300'>
								Acquiring Tricks..
							</div>
						}>
						<EmoteDisplay />
					</Suspense>
					<FAQ />
				</div>
				{/* <LaunchVid /> */}
				<CommunityLinks />
			</div>
		</>
	);
};

export default Home;
