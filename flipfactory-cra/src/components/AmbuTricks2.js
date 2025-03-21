/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useFollowCam from "./useFollowCam";
import useStore from "../hooks/useStore";
export function AmbuTricks(props) {
	const group = useRef();
	const hipsRef = useRef();
	const [isPlaying, setIsPlaying] = useState(true);
	const { nodes, materials, animations } = useGLTF("/AmbuTricks.glb");
	const { mixer, actions, names } = useAnimations(animations, group);
	const scroll = useScroll();
	const ambuVisible = useStore((s) => s.ambuVisible);
	useEffect(() => {
		mixer.stopAllAction();
		if (ambuVisible) {
			mixer.timeScale = 0.4;
			// actions.Btwist.loop = THREE.LoopOnce;
			actions.Btwist.clampWhenFinished = true;
			actions["CorkX4>Dub"].play();
		}
	}, [ambuVisible]);

	useFollowCam(hipsRef);

	// const sccroll = () => {
	// 	setTimeout(() => {
	// 		sccroll();
	// 	}, 1000);
	// };
	// sccroll();
	useFrame((state, delta) => {
		if (props.scrollable) {
			const action = actions["Btwist"];
			// The offset is between 0 and 1, you can apply it to your models any way you like
			const offset = scroll.offset;
			// action.time = THREE.MathUtils.damp(
			// 	action.time,
			// 	action.getClip().duration * offset,
			// 	1,
			// 	delta
			// );
			// state.camera.position.set(
			// 	Math.sin(offset) * 10,
			// 	Math.atan(offset * Math.PI * 2) * 5,
			// 	Math.cos((offset * Math.PI * -2) / 3) * 10
			// );
			// state.camera.lookAt(0, 0, 0);
		}
	});
	return (
		<group
			scale={1}
			ref={group}
			{...props}
			rotation={[0, (3 * Math.PI) / 2, 0]}
			position={[0.5, -0.2, -2]}
			dispose={null}>
			<group name='Scene'>
				<group name='terreno_pincy' position={[-0.52, -0.79, 0.41]} />
				<group
					name='Reference'
					position={[0, -0.15, -0.03]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.25}>
					<primitive ref={hipsRef} object={nodes.Hips} />
					<group name='_arm_R'>
						<skinnedMesh
							frustumCulled={false}
							name='Roundcube003'
							geometry={nodes.Roundcube003.geometry}
							skeleton={nodes.Roundcube003.skeleton}>
							<meshPhysicalMaterial
								color={0xf0e6e0}
								metalness={1}
								roughness={0}
							/>
						</skinnedMesh>
						<skinnedMesh
							frustumCulled={false}
							name='Roundcube003_1'
							geometry={nodes.Roundcube003_1.geometry}
							material={materials["Metal blau"]}
							skeleton={nodes.Roundcube003_1.skeleton}>
							<meshPhysicalMaterial
								color={0x3f43a8}
								metalness={1}
								roughness={0}
							/>
						</skinnedMesh>
						<skinnedMesh
							frustumCulled={false}
							name='Roundcube003_2'
							geometry={nodes.Roundcube003_2.geometry}
							material={materials["boletes grogues"]}
							skeleton={nodes.Roundcube003_2.skeleton}
						/>
						<skinnedMesh
							frustumCulled={false}
							name='Roundcube003_3'
							geometry={nodes.Roundcube003_3.geometry}
							material={materials["Metal.claret"]}
							skeleton={nodes.Roundcube003_3.skeleton}
						/>
					</group>
					<group name='_LEG_R'>
						<skinnedMesh
							frustumCulled={false}
							name='Cylinder001'
							geometry={nodes.Cylinder001.geometry}
							skeleton={nodes.Cylinder001.skeleton}>
							<meshPhysicalMaterial
								color={0xf0e6e0}
								metalness={1}
								roughness={0}
							/>
						</skinnedMesh>
						<skinnedMesh
							frustumCulled={false}
							name='Cylinder001_1'
							geometry={nodes.Cylinder001_1.geometry}
							material={materials["Metal.claret"]}
							skeleton={nodes.Cylinder001_1.skeleton}
						/>
					</group>
					<group name='arm_L'>
						<skinnedMesh
							frustumCulled={false}
							name='Roundcube001'
							geometry={nodes.Roundcube001.geometry}
							skeleton={nodes.Roundcube001.skeleton}>
							<meshPhysicalMaterial
								color={0xf0e6e0}
								metalness={1}
								roughness={0}
							/>
						</skinnedMesh>
						<skinnedMesh
							frustumCulled={false}
							name='Roundcube001_1'
							geometry={nodes.Roundcube001_1.geometry}
							material={materials["Metal blau"]}
							skeleton={nodes.Roundcube001_1.skeleton}>
							<meshPhysicalMaterial
								color={0x3f43a8}
								metalness={1}
								roughness={0}
							/>
						</skinnedMesh>
						<skinnedMesh
							frustumCulled={false}
							name='Roundcube001_2'
							geometry={nodes.Roundcube001_2.geometry}
							material={materials["boletes grogues"]}
							skeleton={nodes.Roundcube001_2.skeleton}
						/>
						<skinnedMesh
							frustumCulled={false}
							name='Roundcube001_3'
							geometry={nodes.Roundcube001_3.geometry}
							material={materials["Metal.claret"]}
							skeleton={nodes.Roundcube001_3.skeleton}
						/>
					</group>
					<group name='Body'>
						<skinnedMesh
							frustumCulled={false}
							name='Roundcube008'
							geometry={nodes.Roundcube008.geometry}
							skeleton={nodes.Roundcube008.skeleton}>
							<meshPhysicalMaterial
								color={0xf0e6e0}
								metalness={1}
								roughness={0}
							/>
						</skinnedMesh>
						<skinnedMesh
							frustumCulled={false}
							name='Roundcube008_1'
							geometry={nodes.Roundcube008_1.geometry}
							material={materials["Metal blau"]}
							skeleton={nodes.Roundcube008_1.skeleton}>
							<meshPhysicalMaterial
								color={0x3f43a8}
								metalness={1}
								roughness={0}
							/>
						</skinnedMesh>
						<skinnedMesh
							frustumCulled={false}
							name='Roundcube008_2'
							geometry={nodes.Roundcube008_2.geometry}
							material={materials["Metal.claret"]}
							skeleton={nodes.Roundcube008_2.skeleton}
						/>
					</group>
					<skinnedMesh
						frustumCulled={false}
						name='ears'
						geometry={nodes.ears.geometry}
						skeleton={nodes.ears.skeleton}>
						<meshPhysicalMaterial color={0x72004e} />
					</skinnedMesh>
					<group name='head'>
						<skinnedMesh
							frustumCulled={false}
							name='Sphere004'
							geometry={nodes.Sphere004.geometry}
							skeleton={nodes.Sphere004.skeleton}>
							<meshPhysicalMaterial color={0x72004e} />
						</skinnedMesh>
						<skinnedMesh
							frustumCulled={false}
							name='Sphere004_1'
							geometry={nodes.Sphere004_1.geometry}
							material={materials["Material.002"]}
							skeleton={nodes.Sphere004_1.skeleton}
						/>
						<skinnedMesh
							frustumCulled={false}
							name='coin_'
							geometry={nodes.coin_.geometry}
							skeleton={nodes.coin_.skeleton}>
							<meshPhysicalMaterial
								color={0xb5a264}
								metalness={1}
								roughness={0}
								specularIntensity={1}
								reflectivity={1}
							/>
						</skinnedMesh>
						<skinnedMesh
							frustumCulled={false}
							name='coin_001'
							geometry={nodes.coin_001.geometry}
							skeleton={nodes.coin_001.skeleton}>
							<meshPhysicalMaterial
								color={0xb5a264}
								metalness={1}
								roughness={0}
								reflectivity={1}
								specularIntensity={1}
							/>
						</skinnedMesh>
					</group>
					<group name='LEG_L'>
						<skinnedMesh
							frustumCulled={false}
							name='Cylinder002'
							geometry={nodes.Cylinder002.geometry}
							material={materials["Metal scratched"]}
							skeleton={nodes.Cylinder002.skeleton}>
							<meshPhysicalMaterial
								color={0xf0e6e0}
								metalness={1}
								roughness={0}
							/>
						</skinnedMesh>
						<skinnedMesh
							frustumCulled={false}
							name='Cylinder002_1'
							geometry={nodes.Cylinder002_1.geometry}
							material={materials["Metal.claret"]}
							skeleton={nodes.Cylinder002_1.skeleton}
						/>
					</group>
				</group>
				{/* <mesh
					frustumCulled={false}
					name='StaffSPLINE'
					geometry={nodes.StaffSPLINE.geometry}
					position={[0.27, 0.23, -0.07]}
					rotation={[2.6, -0.83, 1.02]}
					scale={0.57}>
					<meshPhysicalMaterial color={0x6a5021} metalness={1} roughness={0} />
					<mesh
						frustumCulled={false}
						name='Sphere'
						geometry={nodes.Sphere.geometry}
						position={[0, 0, -0.01]}>
						<meshPhysicalMaterial
							color={0x6a5021}
							metalness={1}
							roughness={0}
						/>
					</mesh>
					<mesh
						name='Spiral'
						geometry={nodes.Spiral.geometry}
						position={[0, 0, 0.33]}
						rotation={[0, 0, Math.PI / 2]}>
						<meshPhysicalMaterial
							color={0x6a5021}
							metalness={1}
							roughness={0}
						/>
					</mesh>
				</mesh> */}
			</group>
		</group>
	);
}

useGLTF.preload("/AmbuTricks.glb");
