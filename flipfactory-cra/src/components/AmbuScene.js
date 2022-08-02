import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { AmbuStill } from "./AmbuStill";

const AmbuScene = () => {
	return (
		<div className='w-full h-[30vh]'>
			<Canvas className=' h-full w-full'>
				<PerspectiveCamera>
					<spotLight intensity={0.8} position={[0, 2, 2]} />
					<ambientLight intensity={0.7} />
					<AmbuStill />
				</PerspectiveCamera>
				{/* <OrbitControls /> */}
			</Canvas>
		</div>
	);
};

export default AmbuScene;
