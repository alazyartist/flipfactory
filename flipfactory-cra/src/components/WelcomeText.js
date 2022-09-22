import React from "react";

const WelcomeText = () => {
	return (
		<div className='p-4 font-inter text-center group-hover:text-teal-400 group-hover:text-opacity-40 text-teal-900 pb-20'>
			<p>
				<span className='font-lucky text-3xl'>mint.make.mote.</span>
			</p>
			<div className='text-xl font-inter font-bold'>
				Your one stop shop for <br /> emotes across any metaverse.
			</div>
		</div>
	);
};

export default WelcomeText;
