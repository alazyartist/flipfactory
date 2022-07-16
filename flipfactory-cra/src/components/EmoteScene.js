import { Box, Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React from "react";

const EmoteScene = () => {
	console.log("EmoteScene");
	return (
		<>
			<Html className='text-center text-zinc-300' position={[0, 0, 0]}>
				<div>EmoteGoHere</div>
			</Html>

			<PerspectiveCamera position={[-2, 3, -2]}>
				<ambientLight intensity={0.3} />
				<spotLight intensity={0.8} position={[0, 0, 4]} />
			</PerspectiveCamera>
			<gridHelper args={[10, 10, "black", "gainsboro"]} position={[0, 0, 0]} />
			<OrbitControls />
		</>
	);
};

export default EmoteScene;
