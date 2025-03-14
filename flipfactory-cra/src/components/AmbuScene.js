import { Environment, PerspectiveCamera, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { AmbuTricks } from "./AmbuTricks2";
import { Hills } from "./forScroll/Landscape";

const AmbuScene = () => {
	return (
		<div className='w-full rounded-2xl p-2 overflow-hidden h-[30vh]'>
			<Canvas className=' h-full rounded-2xl w-full'>
				<PerspectiveCamera makeDefault position={[0, 0.3, 18]}>
					<Environment preset='park' />
					<spotLight intensity={0.6} position={[0, 2, 10]} />
					<ambientLight intensity={0.4} />
					<Hills />
					<AmbuTricks />

					<Sky
						distance={450000}
						sunPosition={[0, 1, 0]}
						inclination={0}
						azimuth={0.25}
					/>
				</PerspectiveCamera>
			</Canvas>
		</div>
	);
};

export default AmbuScene;
