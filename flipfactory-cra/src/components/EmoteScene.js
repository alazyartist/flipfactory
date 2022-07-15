import { Box, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React from "react";

const EmoteScene = () => {
	console.log("EmoteScene");
	return (
		<>
			<PerspectiveCamera makeDefault position={[-2, 3, -2]}>
				<ambientLight intensity={0.3} />
				<Box args={[10, 10, 10, 10]} position={[0, 0, 0]}>
					<meshBasicMaterial color='hotpink' />
				</Box>
			</PerspectiveCamera>
			<gridHelper args={[10, 10, "black", "gainsboro"]} position={[0, 0, 0]} />
			<OrbitControls />
		</>
	);
};

export default EmoteScene;
