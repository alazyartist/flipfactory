import {
	Environment,
	OrbitControls,
	PerspectiveCamera,
	Plane,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { AmbuBtwist } from "./AmbuBtwist";
import { AmbuStill } from "./AmbuStill";
import { AmbuTricks } from "./AmbuTricks2";

const AmbuScene = () => {
	return (
		<div className='w-full h-[30vw]'>
			<Canvas className=' h-full w-full'>
				<PerspectiveCamera>
					<Environment preset='park' background blur={10} />
					<spotLight intensity={0.6} position={[0, 2, 10]} />
					<ambientLight intensity={0.4} />
					{/* <AmbuStill /> */}
					{/* <AmbuBtwist /> */}
					<AmbuTricks />
					{/* <gridHelper
						args={[20, 20, `black`, `gainsboro`]}
						position={[0, 0, 0]}
					/> */}
					<Plane
						args={[10, 10]}
						position={[0, 0, 0]}
						rotation={[-Math.PI / 2, 0, 0]}>
						<meshPhongMaterial color={0x809639} />
					</Plane>
				</PerspectiveCamera>
				<OrbitControls />
			</Canvas>
		</div>
	);
};

export default AmbuScene;