import React from "react";
import { Canvas } from "@react-three/fiber";
import EmoteScene from "./EmoteScene";
const EmoteDisplay = () => {
	return (
		<div className='flex flex-col p-4 place-content-center place-self-center w-[80vw] h-[80vw] place-items-center'>
			<div>EmoteDisplay</div>
			<Canvas className='rounded-xl  bg-zinc-800 p-4'>
				<EmoteScene />
			</Canvas>
		</div>
	);
};

export default EmoteDisplay;
