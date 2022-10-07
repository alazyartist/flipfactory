import React from "react";

const WelcomeText = ({ loaded }) => {
	return (
		<div className='p-2 font-inter text-center group-hover:text-teal-400 group-hover:text-opacity-40 text-teal-900 pb-8 sm:pb-20'>
			<p>
				<span className='font-lucky text-3xl'>mint.make.mote.</span>
			</p>
			<div className='text-md sm:text-xl font-inter font-bold'>
				Movements for the Metaverse.
			</div>
		</div>
	);
};

export default WelcomeText;
