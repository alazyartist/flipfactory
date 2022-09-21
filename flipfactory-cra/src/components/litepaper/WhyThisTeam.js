import React from "react";

const WhyThisTeam = () => {
	return (
		<>
			<div className='font-bold text-xl'>Already in Development</div>

			<div className='text-xs font-light'>
				Our team has been building the foundations for something like this for
				well over a year now. Our lead developer is obsessed with the movement
				arts and what the human body is capable of; specifically, the acrobatic
				art of Tricking. Because of this, he set out to create the Trickedex, a
				fully interactive 3d library of movements and the associated theory that
				is utilized by Trickers. In order to accomplish this, a library of
				motion capture footage for each of these movements is being compiled
				into the Trickedex.
				<br />
				An application like this has huge implications for onboarding new
				members into these movement communities by giving them a standard place
				to reference information from. Thousands of hours have already gone into
				this project and it is just the beginning of where it hopes to go.
				<br />
				In order to capture these movements in their highest quality we did not
				skimp out on equipment; we found out what the pros use and got the same.
				The XSens MVN Link by Movella is an industry-standard piece of motion
				capture equipment used by the likes of HBO, Amazon, Netflix, Disney,
				Marvel, and more found here →
				<a
					target={"_blank"}
					className='inline w-fit text-fuchsia-300'
					href='https://www.xsens.com/productions?hsCtaTracking=09fb52b8-320c-4327-ac21-f455923b0ad7%7C64452ffd-b533-4038-96b8-34dd5f11f224'>
					<img
						className='w-40'
						src='https://www.xsens.com/hubfs/Logo/Xsens_Logo_Orange_White.svg'
					/>
				</a>
				<br />
				We capture all movements at 240 fps of resolution for the highest
				fidelity on all our motion capture.
				<br />
				GLTF(Model and Motion) & BVH(Mocap only) offered to Union Members(NFT
				holders)
			</div>
		</>
	);
};

export default WhyThisTeam;
