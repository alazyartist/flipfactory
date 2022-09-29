import React, { lazy, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import BatteriesIncluded from "../components/BatteriesIncluded";
import CommunityLinks from "../components/CommunityLinks";
import FAQ from "../components/FAQ";
import FlipFactoryLogoComposite from "../components/FlipFactoryLogoComposite";
import LandingVideo from "../components/LandingVideo";
import WelcomeText from "../components/WelcomeText";
import WillWorkWithMetaverses from "../components/WillWorkWithMetaverses";
import { IoIosPaper } from "react-icons/io";
import { useSpring, animated, config } from "react-spring";
import useOnScreen from "../hooks/useOnScreen";
import useStore from "../hooks/useStore";
import BuyOurShit from "../components/BuyOurShit";
import AmbuandFlip from "../AmbuandFlip";
// import RoadmapGoals from "../components/RoadmapGoals";
// import EmoteDisplay from "../components/EmoteDisplay";
// import OthersideLandPlots from "../components/OthersideLandPlots";
// import RoadmapActivations from "../components/RoadmapActivations";
// import OthersideLandText from "../components/litepaper/OthersideLandText";
// import CardStack from "../components/CardStack";

const RoadmapActivations = lazy(() =>
	import("../components/RoadmapActivations")
);
const CardStack = lazy(() => import("../components/CardStack"));
const RoadmapGoals = lazy(() => import("../components/RoadmapGoals"));
const OthersideLandPlots = lazy(() =>
	import("../components/OthersideLandPlots")
);
const AmbuScene = lazy(() => import("../components/AmbuScene"));
const EmoteDisplay = lazy(() => import("../components/EmoteDisplay"));

const Home = () => {
	const [bannerRef, bannerVisible] = useOnScreen({ rootMargin: "-200px" });
	const [linksRef, linksVisible] = useOnScreen({ rootMargin: "0px" });
	const [roadmapRef, roadmapVisible] = useOnScreen({ rootMargin: "15px" });
	const [landRef, landVisible] = useOnScreen({ rootMargin: "0px" });
	const setAmbuVisible = useStore((s) => s.setAmbuVisible);
	const setEmotesVisible = useStore((s) => s.setEmotesVisible);
	// useEffect(() => {
	// 	console.log("banner", bannerVisible);
	// 	console.log("land", landVisible);
	// 	console.log("links", linksVisible);
	// 	console.log("roadmap", roadmapVisible);
	// }, [bannerVisible, landVisible, linksVisible, roadmapVisible]);

	useEffect(() => {
		if (linksVisible === true) {
			setAmbuVisible(true);
		}
	}, [linksVisible]);
	useEffect(() => {
		setEmotesVisible(landVisible);
	}, [landVisible]);

	const heightAnim = useSpring({
		to: { height: bannerVisible ? "100vh" : "30vh" },
		config: { ...config.stiff },
	});
	const opacityBannerAnim = useSpring({
		to: { opacity: bannerVisible ? "1" : "0" },
		config: { ...config.stiff },
	});
	const opacityLinkAnim = useSpring({
		to: { opacity: roadmapVisible ? "1" : "0" },
		config: { ...config.stiff },
	});

	return (
		<>
			<div className='p-4 flex flex-col gap-2'>
				<animated.div
					id='welcomeBanner'
					style={{ ...heightAnim, ...opacityBannerAnim }}
					className={`relative p-2 `}>
					<div ref={bannerRef} className='popout hover:shadow-none group'>
						<div className=' tealpopin group-hover:shadow-none flex flex-col rounded-xl place-content-center group-hover:bg-opacity-5 w-full bg-teal-400'>
							<FlipFactoryLogoComposite />
							<WelcomeText />
						</div>
					</div>
				</animated.div>
				<div className='h-[42.3vh] w-full'>
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
						ref={linksRef}
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
					<AmbuandFlip />
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
					<OthersideLandPlots />
				</Suspense>
				<BatteriesIncluded />
				<BuyOurShit />
				{/* <TrickedexEmbed /> */}

				<div ref={landRef} className='  p-2 flex flex-col'>
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
