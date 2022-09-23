import React from "react";
import { useLayoutEffect } from "react";
import { useEffect, useState } from "react";

const LandingVideo = () => {
	const [vsrc, setvsrc] = useState("./EM-wide.mp4");
	useLayoutEffect(() => {
		if (window.innerWidth > 960) {
			setvsrc("./EM-wide.mp4");
			console.log("wide");
		} else if (window.innerWidth < 960) {
			setvsrc("./EM-vertical.mp4");
			console.log("vert");
		}
	}, [vsrc]);
	return (
		<div className='absolute z-[-5] left-0 top-0 overflow-hidden w-full h-[100vh]'>
			<video
				id='video'
				className='scale-[1.75] h-full  w-full'
				loop
				muted
				controls={false}
				autoPlay>
				<source src={vsrc} type='video/mp4' />
			</video>
		</div>
	);
};

export default LandingVideo;
