import React, { lazy, useEffect, Suspense, useState } from "react";
import BatteriesIncluded from "../components/BatteriesIncluded";
import CommunityLinks from "../components/CommunityLinks";
import FAQ from "../components/FAQ";
import { useSpring, animated, config } from "react-spring";
import useOnScreen from "../hooks/useOnScreen";
import useStore from "../hooks/useStore";
import BuyOurShit from "../components/BuyOurShit";
import AmbuandFlip from "../AmbuandFlip";
import FlipFactoryIntrotext from "../components/FlipFactoryIntrotext";
import ExplaingEmployeeId from "../components/ExplaingEmployeeId";
import WhatsHappeningInOtherside from "../components/WhatsHappeningInOtherside";
import MintMakeMote from "../components/MintMakeMote";

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
	const [showEmoteDisplay, setShowEmoteDisplay] = useState(false);

	return (
		<>
			<div className='p-4 flex flex-col gap-2'>
				<div className='p-2'>
					<FlipFactoryIntrotext />
					<Suspense>
						<CardStack />
					</Suspense>
					<ExplaingEmployeeId />
					<AmbuandFlip />
					<MintMakeMote />
					<div
						className='mt-4 rounded-xl bg-gradient-to-tr to-teal-400 
								from-[#6560ff] flex flex-col'>
						<Suspense>
							<RoadmapGoals />
							<RoadmapActivations />
						</Suspense>
					</div>
				</div>
				<WhatsHappeningInOtherside />
				<Suspense>
					<OthersideLandPlots />
				</Suspense>
				<BatteriesIncluded />
				<BuyOurShit />

				<div className='  p-2 flex flex-col'>
					{!showEmoteDisplay && (
						<button
							onClick={() => setShowEmoteDisplay(!showEmoteDisplay)}
							className='text-zinc-300 rounded-xl bg-sky-400 h-60 w-full font-lucky text-2xl'>
							Click to Load in some examples!
						</button>
					)}
					{showEmoteDisplay && (
						<Suspense
							fallback={
								<div className='font-lucky text-center text-4xl h-60 flex place-items-center place-content-center text-zinc-300'>
									Acquiring Tricks..
								</div>
							}>
							<EmoteDisplay />
						</Suspense>
					)}
					<FAQ />
				</div>
				<CommunityLinks />
			</div>
		</>
	);
};

export default Home;
