import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import useStore from "../hooks/useStore";
import useFollowCam from "./useFollowCam";

export function Frank({ ...props }) {
	const group = useRef();
	const setCurrentAnim = useStore((s) => s.setCurrentAnim);
	//HipsRef attached to skeletons Hips
	const hipsRef = useRef();
	const { nodes, materials, animations } = useGLTF("/Frank.glb");
	const { actions, names, mixer } = useAnimations(animations, group);
	const { count, setCount } = useStore();
	useEffect(() => {
		if (count > 0) {
			mixer.stopAllAction();

			actions[names[count]].timeScale = 0.7;
			actions[names[count]].play();
			setCurrentAnim(names[count]);
		}
		console.log(count);
	}, [count]);
	useFollowCam(hipsRef);
	return (
		<group ref={group} {...props} dispose={null}>
			<group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
				<primitive ref={hipsRef} object={nodes.mixamorig1Hips} />
				<skinnedMesh
					frustumCulled={false}
					geometry={nodes.Skin.geometry}
					material={materials.Ch36_Body}
					skeleton={nodes.Skin.skeleton}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("/Frank.glb");
