import React from "react";

const RoadmapGoals = () => {
	const goals = [
		"Launch 6942.0 Trickers",
		"Launch Emote Machine 1.0",
		"WHATS IN THE BOX?",
		"Hold my emote",
		"Bits and Pieces: Decoupled Emotes",
		"Emote Burn to Build",
		"Emote Machine 2.0: New Emotes",
	];

	return (
		<div className='flex flex-col gap-1 p-2 font-inter w-[90%] text-zinc-300 place-self-center place-items-center'>
			<div className='font-lucky text-7xl'>ROADMAP</div>
			{goals.map((goal) => (
				<div className='rounded-xl bg-zinc-800 p-4 drop-shadow-xl w-full'>
					{goal}
				</div>
			))}
		</div>
	);
};

export default RoadmapGoals;

// "Learn Something",
// "Go to the gym",
// "Show Off",
// "Flip to Earn",
// "Prepare for Battle",
// "Drop Pro Shop",
// "Fit Check",
// "Battle Simulation",
// "Discover Location",
// "Go Meta",
// "Find Ambu",
