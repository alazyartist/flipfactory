import {
	ScrollControls,
	Scroll,
	Environment,
	useScroll,
} from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import AmbuScene from "../components/AmbuScene";
import { AmbuTricks } from "../components/AmbuTricks2";
import EmoteDisplay from "../components/EmoteDisplay";
import RoadmapGoals from "../components/RoadmapGoals";
extend({ Canvas });

const ScrollingCanvas = () => {
	return (
		<>
			<div className='w-full no-scrollbar snap-y snap-mandatory overflow-scroll'>
				<div className='snap-start h-full w-full bg-gradient-to-t from-teal-400 backdrop-opacity-25 flex  place-content-center place-items-center top-[9]'>
					<video className='h-full' loop autoPlay>
						<source src='./EM3Eevee.mp4' type='video/mp4' />
					</video>
				</div>
				<div className='snap-start h-full w-full z-[-1] flex bg-gradient-to-b from-teal-400 backdrop-opacity-25 place-content-center place-items-center top-[100vh]'>
					<Canvas className='no-scrollbar w-full h-full'>
						<ScrollControls
							id={"scrollControls"}
							className={"no-scrollbar"}
							pages={1}
							distance={1}
							damping={10}>
							<Scroll id={"scroll1"} className={"z-10"}>
								<Environment preset={"park"} />
								<AmbuTricks cla scrollable />
							</Scroll>
							<Scroll id={"scroll2"} className={"w-full h-full"} html>
								<div className='w-full font-lucky text-8xl text-zinc text-center text-zinc-300'>
									Flip
									<br /> Factory
								</div>
							</Scroll>
						</ScrollControls>
					</Canvas>
				</div>
				<div className='snap-start h-full w-full bg-gradient-to-t from-teal-400 backdrop-opacity-25 flex  place-content-center place-items-center top-[200vh]'>
					<RoadmapGoals />
				</div>
				<div className='snap-start h-full w-full flex place-content-center place-items-center top-[300vh] p-4'>
					<EmoteDisplay />
				</div>
			</div>
		</>
	);
};

export default ScrollingCanvas;
