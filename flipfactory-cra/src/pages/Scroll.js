import {
	ScrollControls,
	Scroll,
	Environment,
	useScroll,
	Html,
	View,
	PerspectiveCamera,
	OrbitControls,
	Sky,
} from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import React, {
	Suspense,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import AmbuScene from "../components/AmbuScene";
import { AmbuTricks } from "../components/AmbuTricks2";
import EmoteDisplay from "../components/EmoteDisplay";
import Dreams from "../components/forScroll/Dreams";
import RoadmapGoals from "../components/RoadmapGoals";
import RoadmapActivations from "../components/RoadmapActivations";
import EmoteScene from "../components/EmoteScene";
import { Hills } from "../components/forScroll/Landscape";
import WhatIsFF from "../components/forScroll/WhatIsFF";
extend({ Canvas });
const ScrollingCanvas = () => {
	const emoteView = useRef();
	const ambuView = useRef();

	// const AmbuMoved = () => {
	// 	// const { width: w, height: h } = useThree((state) => state.viewport);
	// 	return (
	// 		<>
	// 			<AmbuTricks position={[0, h / 2, 0]} scrollable />
	// 		</>
	// 	);
	// };
	useEffect(() => {
		console.log(ambuView);
	}, [ambuView]);
	return (
		<>
			{/* <div className='w-full no-scrollbar snap-y snap-mandatory overflow-scroll'>
				<div className='snap-start h-screen w-fit bg-gradient-to-t from-teal-400 backdrop-opacity-25 flex  place-content-center place-items-center top-[0]'>
				</div>
				<video className='h-full' loop autoPlay>
					<source src='./EM-vertical.mp4' with type='video/mp4' />
				</video>
				<div className='snap-start h-full w-full z-[-1] flex bg-gradient-to-b from-teal-400 backdrop-opacity-25 place-content-center place-items-center top-[100vh]'> */}
			<Canvas className='no-scrollbar w-full h-full'>
				<ScrollControls
					id={"scrollControls"}
					className={"no-scrollbar"}
					pages={4}
					distance={1}
					damping={1000}>
					<Scroll id={"html-elements"} className={"w-full h-full"} html>
						<div className='w-100vw h-100vh'>
							<video className='h-full w-full' loop autoPlay>
								<source src='./EM-vertical.mp4' type='video/mp4' />
							</video>
							<div className='w-[100vw] font-lucky text-8xl text-zinc text-center text-zinc-300'>
								Flip
								<br /> Factory
							</div>
							<div
								ref={ambuView}
								className='flex place-items-center place-self-center w-[100vw] h-[50vh]'
							/>
						</div>
						<div className='relative flex place-content-center place-items-center h-[5vh] top-[30vh]'>
							<Dreams />
						</div>
						<div className='relative flex place-content-center place-items-center bg-teal-300 h-[40vh] top-[40vh]'>
							<WhatIsFF />
						</div>
						<div className='relative flex place-content-center bg-slate-500 h-[100vh] top-[40vh]'>
							<RoadmapGoals />
						</div>
						<div className='relative flex place-content-center h-[100vh] top-[40vh]'>
							<RoadmapActivations />
						</div>
						{/* <div className='relative flex place-content-center h-[100vh] top-[40vh]'>
							<div ref={emoteView} className=' w-[80vw] h-[50vh]' />
						</div> */}
					</Scroll>
					<Scroll id={"3d-elements"} className={"w-[100vw] z-10"}>
						{/* {ambuView && (
							<View track={ambuView}>
								<Environment preset={"park"} />
								<PerspectiveCamera makeDefault position={[0, 0, 0]}>
									<Sky
										distance={450000}
										sunPosition={[0, 1, 0]}
										inclination={0}
										azimuth={0.25}
									/>
									<AmbuTricks scrollable />
									<Hills />
								</PerspectiveCamera>
							</View>
						)} */}
						{/* <View className={`rounded-3xl`} track={emoteView}>
							<EmoteScene emoteView={emoteView} />
						</View> */}
					</Scroll>
				</ScrollControls>
			</Canvas>
			{/* <div className=' flex place-content-center place-items-center top-[300vh] p-4'>
				<EmoteDisplay />
			</div> */}
		</>
	);
};

export default ScrollingCanvas;
