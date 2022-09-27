import React, { lazy, useEffect } from "react";
import { Link } from "react-router-dom";
import BatteriesIncluded from "../components/BatteriesIncluded";
import CommunityLinks from "../components/CommunityLinks";
// import EmoteDisplay from "../components/EmoteDisplay";
import ExampleCharachterCarousel from "../components/ExampleCharachterCarousel";
import FAQ from "../components/FAQ";
import FlipFactoryLogoComposite from "../components/FlipFactoryLogoComposite";
import LandingVideo from "../components/LandingVideo";
import OthersideLandPlots from "../components/OthersideLandPlots";
// import RoadmapActivations from "../components/RoadmapActivations";
// import RoadmapGoals from "../components/RoadmapGoals";
import TrickedexEmbed from "../components/TrickedexEmbed";
import WelcomeText from "../components/WelcomeText";
import WillWorkWithMetaverses from "../components/WillWorkWithMetaverses";
import { IoIosPaper } from "react-icons/io";
import OthersideLandText from "../components/litepaper/OthersideLandText";
// import CardStack from "../components/CardStack";
import { Suspense } from "react";
import { FFLogo } from "../components/FFLogo";
import useOnScreen from "../hooks/useOnScreen";
import { useSpring, animated, config } from "react-spring";
const RoadmapActivations = lazy(() =>
	import("../components/RoadmapActivations")
);
const CardStack = lazy(() => import("../components/CardStack"));
const RoadmapGoals = lazy(() => import("../components/RoadmapGoals"));
const AmbuScene = lazy(() => import("../components/AmbuScene"));
const EmoteDisplay = lazy(() => import("../components/EmoteDisplay"));
const Home = () => {
	const [bannerRef, bannerVisible] = useOnScreen({ rootMargin: "-200px" });
	const [linksRef, linksVisible] = useOnScreen({ rootMargin: "-50%" });
	const [roadmapRef, roadmapVisible] = useOnScreen({ rootMargin: "15px" });

	useEffect(() => {
		console.log(linksVisible);
	}, [bannerVisible]);

	const heightAnim = useSpring({
		from: { height: "100vh" },
		to: { height: bannerVisible ? "100vh" : "30vh" },
		config: { ...config.stiff },
	});
	const opacityBannerAnim = useSpring({
		to: { opacity: bannerVisible ? "1" : "0" },
		config: { ...config.stiff },
	});
	const opacityLinkAnim = useSpring({
		from: { opacity: "0" },
		to: { opacity: roadmapVisible ? "1" : "0" },
		config: { ...config.stiff },
	});

	return (
		<>
			{/* <h1 className='p-2 font-bold text-3xl flex place-content-center'>
				Flip Factory
			</h1> */}
			<div className='p-4 flex flex-col gap-2'>
				<animated.div
					style={{ ...heightAnim, ...opacityBannerAnim }}
					className={`relative p-2 `}>
					<div ref={bannerRef} className='popout hover:shadow-none group'>
						<div className=' tealpopin group-hover:shadow-none flex flex-col rounded-xl place-content-center group-hover:bg-opacity-5 w-full bg-teal-400'>
							<FlipFactoryLogoComposite />
							{/* PageContent */}
							<WelcomeText />
						</div>
					</div>
				</animated.div>
				<div ref={linksRef} className='h-[42.3vh] w-full'>
					<WillWorkWithMetaverses />
					<Suspense
						fallback={
							<div className='text-2xl sm:text-3xl text-teal-200 font-lucky w-full p-8 text-center flex place-items-center place-content-center'>
								{/* <FlipFactoryLogoComposite /> */}
								getting factory feed
							</div>
						}>
						<LandingVideo />
					</Suspense>
				</div>
				<animated.div style={{ ...opacityLinkAnim }}>
					<Link
						className={`flex place-content-center rounded-xl bg-zinc-800 p-2 place-items-center w-full text-center text-3xl font-inter font-black text-zinc-300`}
						to={"/litepaper"}>
						<IoIosPaper className='text-zinc-200' />
						Litepaper
					</Link>
				</animated.div>
				<>
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
				</>
				<div className='p-2'>
					<div
						ref={roadmapRef}
						className='rounded-xl bg-gradient-to-tr to-teal-400 
								from-[#6560ff] flex flex-col'>
						{/* <TrickedexEmbed /> */}
						<Suspense>
							<RoadmapGoals />
							<RoadmapActivations />
						</Suspense>
					</div>
				</div>
				{/* <ExampleCharachterCarousel /> */}
				<Suspense>
					<CardStack />
				</Suspense>
				<OthersideLandPlots />
				<BatteriesIncluded />
				<div className='bg-zinc-800 text-5xl rounded-xl py-6 p-2 text-zinc-300 font-lucky place-items-center place-content-center flex'>
					<a
						className='flex flex-col'
						target={"_blank"}
						href='https://market.decentraland.org/collections/0x99fa59d0349390e17a5b7d066e1cf797bef4c065'>
						BUY OUR SHIT
						<div className='text-xs text-zinc-500 text-center'>
							currently available on decentraland
						</div>
					</a>
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
