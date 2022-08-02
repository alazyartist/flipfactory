import {
	Html,
	OrbitControls,
	PerspectiveCamera,
	Plane,
} from "@react-three/drei";
import React from "react";
import { Frank } from "./Frank";
const EmoteScene = () => {
	console.log("EmoteScene");
	return (
		<>
			{/* <Html className='text-center text-zinc-300' position={[0, 0, 0]}>
				<div>EmoteGoHere</div>
			</Html> */}
			<PerspectiveCamera position={[0, 0, 0]}>
				<Frank />
				<Plane
					args={[20, 20]}
					rotation={[-Math.PI / 2, 0, 0]}
					position={[0, 0, 0]}>
					<meshPhongMaterial color={0xd4d4d4f} />
				</Plane>
				<ambientLight intensity={0.6} />
				<spotLight intensity={0.8} position={[3, 3, 4]} />
				{/* <gridHelper
					args={[20, 20, "black", "gainsboro"]}
					position={[0, 0, 0]}
				/> */}
				<OrbitControls
					maxZoom={2}
					rotateSpeed={0.1}
					maxPolarAngle={1.5}
					minPolarAngle={0.95}
				/>
			</PerspectiveCamera>
		</>
	);
};

export default EmoteScene;
