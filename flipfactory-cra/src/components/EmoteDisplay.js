import React from "react";
import { Canvas } from "@react-three/fiber";
import EmoteScene from "./EmoteScene";
import useStore from "../hooks/useStore";
const EmoteDisplay = () => {
	const { count, setCount, currentAnim, noCanvas } = useStore();
	return (
		<div className='flex flex-col place-content-center place-self-center w-full h-[50vh] place-items-center'>
			<div className='font-lucky text-4xl text-zinc-300'>{currentAnim}</div>
			{!noCanvas && (
				<Canvas className='rounded-xl'>
					<EmoteScene />
				</Canvas>
			)}
			<div
				onClick={() => setCount(count + 1)}
				className='bg-zinc-800 relative top-[-1.5rem] rounded-t-xl font-lucky text-4xl text-zinc-300 p-2'>
				CLICK ME
			</div>
		</div>
	);
};

export default EmoteDisplay;
