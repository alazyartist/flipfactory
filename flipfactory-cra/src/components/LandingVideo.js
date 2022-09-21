import React from "react";

const LandingVideo = () => {
	return (
		<div className='w-[100vw]'>
			<video className=' h-full w-full' loop muted controls={false} autoPlay>
				<source src='./EM-vertical.mp4' type='video/mp4' />
			</video>
		</div>
	);
};

export default LandingVideo;
