import React from "react";
import { FFLogo } from "../components/FFLogo";

const FlipFactoryLogoComposite = () => {
	return (
		<div
			id='Logo Container'
			className='static group-hover:opacity-60 pt-4 place-self-center w-[70vw]'>
			<div className='absolute  fill-teal-200 top-[5vh] left-10 w-[20vw]'>
				<FFLogo />
			</div>
			<div className='pt-8'>
				{/* <FlipFactoryLogo /> */}
				<div className='text-center font-lucky font-bold text-7xl text-teal-200'>
					Flip Factory
				</div>
			</div>
		</div>
	);
};

export default FlipFactoryLogoComposite;
