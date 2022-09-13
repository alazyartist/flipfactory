import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";

const Dreams = () => {
	const { width: w, height: h } = useThree((state) => state.viewport);
	const scrollData = useScroll();

	return (
		<div
			className={`flex flex-col place-self-center bottom-5 absolute font-inter font-black text-4xl md:text-7xl w-[100vw] text-center`}>
			<div>
				WHERE YOUR
				<br /> MOTHERFUCKING
				<br />
				<span className='text-teal-400 text-8xl font-lucky'>DREAMS</span> <br />
				COME TRUE
			</div>
		</div>
	);
};

export default Dreams;
