/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Hills(props) {
	const { nodes, materials } = useGLTF("/Landscape.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				scale={1.8}
				geometry={nodes.Cube.geometry}
				material={materials.Material}
				position={[3.01, -0.291, -9.11]}>
				<meshPhysicalMaterial color={0x708136} roughness={0.9} />
			</mesh>
		</group>
	);
}

useGLTF.preload("/Landscape.glb");
