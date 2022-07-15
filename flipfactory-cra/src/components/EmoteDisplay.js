import React from "react";
import { Canvas } from "@react-three/fiber";
import EmoteScene from "./EmoteScene";
const EmoteDisplay = () => {
	return (
		<div className='flex flex-col p-4 place-content-center place-items-center'>
			<div>EmoteDisplay</div>
			<Canvas className='w-[80vw] h-80vw] bg-blue-300 p-4'>
				<EmoteScene />
			</Canvas>
		</div>
	);
};

export default EmoteDisplay;
