import React from "react";
import { Canvas } from "@react-three/fiber";
import EmoteScene from "./EmoteScene";
import useStore from "../hooks/useStore";
const EmoteDisplay = () => {
	const { count, setCount, currentAnim, noCanvas } = useStore();
	return (
		<div className='w-full flex flex-col place-conetnt-center place-items-center'>
			<div className='flex bg-gradient-to-b from-sky-300  rounded-t-xl to-zinc flex-col place-content-center place-self-center w-full h-[50vh] place-items-center'>
				<div className=' font-lucky text-4xl text-zinc-300'>{currentAnim}</div>
				{!noCanvas && (
					<Canvas className='rounded-xl'>
						<EmoteScene />
					</Canvas>
				)}
			</div>
			<div
				onClick={() => setCount(count + 1)}
				className='bg-sky-700 relative top-[-1.5rem] rounded-t-xl font-lucky text-4xl text-zinc-300 p-2'>
				CLICK ME
			</div>
		</div>
	);
};

export default EmoteDisplay;
