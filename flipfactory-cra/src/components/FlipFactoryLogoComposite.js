import React from "react";
import { FFLogo } from "../components/FFLogo";

const FlipFactoryLogoComposite = () => {
	return (
		<div id='Logo Container' className='static pt-4 place-self-center w-[70vw]'>
			<div className='absolute top-[74vh] left-10 w-[20vw]'>
				<FFLogo />
			</div>
			<div className='pt-8'>
				{/* <FlipFactoryLogo /> */}
				<div className='text-center font-lucky font-bold text-7xl text-zinc-50'>
					Flip Factory
				</div>
			</div>
		</div>
	);
};

export default FlipFactoryLogoComposite;
