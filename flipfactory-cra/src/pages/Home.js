import React, { lazy, useEffect, Suspense } from "react";
import BatteriesIncluded from "../components/BatteriesIncluded";
import CommunityLinks from "../components/CommunityLinks";
import FAQ from "../components/FAQ";
import { useSpring, animated, config } from "react-spring";
import useOnScreen from "../hooks/useOnScreen";
import useStore from "../hooks/useStore";
import BuyOurShit from "../components/BuyOurShit";
import AmbuandFlip from "../AmbuandFlip";

const RoadmapActivations = lazy(() =>
	import("../components/RoadmapActivations")
);
const CardStack = lazy(() => import("../components/CardStack"));
const RoadmapGoals = lazy(() => import("../components/RoadmapGoals"));
const OthersideLandPlots = lazy(() =>
	import("../components/OthersideLandPlots")
);
// const AmbuScene = lazy(() => import("../components/AmbuScene"));
const EmoteDisplay = lazy(() => import("../components/EmoteDisplay"));

const Home = () => {
	const [roadmapRef, roadmapVisible] = useOnScreen({ rootMargin: "-15px" });
	const [landRef, landVisible] = useOnScreen({ rootMargin: "0px" });
	const setAmbuVisible = useStore((s) => s.setAmbuVisible);
	const setEmotesVisible = useStore((s) => s.setEmotesVisible);
	// useEffect(() => {
	// 	if (linksVisible === true) {
	// 		setAmbuVisible(true);
	// 	}
	// }, [linksVisible]);
	useEffect(() => {
		setEmotesVisible(landVisible);
	}, [landVisible]);

	return (
		<>
			<div className='p-4 flex flex-col gap-2'>
				{/* <animated.div style={{ ...opacityLinkAnim }}>
					<Link
						ref={linksRef}
						className={`flex place-content-center rounded-xl bg-zinc-800 p-2 place-items-center w-full text-center text-3xl font-inter font-black text-zinc-300`}
						to={"/litepaper"}>
						<IoIosPaper className='text-zinc-200' />
						Litepaper
					</Link>
				</animated.div> */}

				<div className='p-2'>
					<AmbuandFlip />
					<div
						ref={roadmapRef}
						className='rounded-xl bg-gradient-to-tr to-teal-400 
								from-[#6560ff] flex flex-col'>
						<Suspense>
							<RoadmapGoals />
							<RoadmapActivations />
						</Suspense>
					</div>
				</div>
				<Suspense>
					<CardStack />
					<OthersideLandPlots />
				</Suspense>
				<BatteriesIncluded />
				<BuyOurShit />

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
				<CommunityLinks />
			</div>
		</>
	);
};

export default Home;
