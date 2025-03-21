import { useFrame, useThree } from "@react-three/fiber";
import React from "react";
import { Vector3 } from "three";
//useFollow for CC_Skeletons
// export default function useFollowCam(hipsRef) {
// 	useFrame(({ camera, invalidate, get }) => {
// 		get();
// 		let { x, y, z } = hipsRef.current.position;
// 		let quat = hipsRef.current.quaternion;
// 		let posArr = [x, y, z];
// 		posArr = posArr.map((p) => p * 0.01);
// 		let vec = new Vector3(posArr[0], 0.5, posArr[2]);
// 		if (isFollowCam && hipsRef.current && camera) {
// 			camera.quaternion.slerp(quat, 0.01);
// 			camera.lookAt(vec, 0.01);
// 			camera.updateProjectionMatrix();
// 		}
// 	});
// 	return;
// }

//Frank uses different Skeleton
export default function useFollowCam(hipsRef) {
	useFrame(({ camera }) => {
		let { x, y, z } = hipsRef.current.position;
		let quat = hipsRef.current.quaternion;
		let posArr = [x, y, z];
		posArr = posArr.map((p) => p * 0.01);
		let vec = new Vector3(posArr[0], 0.5, posArr[1]);
		if (hipsRef.current && camera) {
			camera.quaternion.set(quat, 0.1);
			camera.lookAt(vec, 1);
			camera.updateProjectionMatrix();
		}
	});
	return;
}
