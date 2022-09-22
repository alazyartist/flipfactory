import React from "react";

const LandingVideo = () => {
	return (
		<div className='absolute z-[-5] top-0 w-[100vw] h-[100vh]'>
			<video
				className='scale-[1.75] h-full overflow-hidden w-full'
				loop
				muted
				controls={false}
				autoPlay>
				<source src='./EM-vertical.mp4' type='video/mp4' />
			</video>
		</div>
	);
};

export default LandingVideo;
