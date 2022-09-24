import React from "react";
import { useState } from "react";

const RoadmapGoals = () => {
	const goals = [
		{
			title: "New Hires",
			description:
				"Flip & Ambu open their first job fair hiring up to 6,942.0 new hires to power up a brand new emote machine, lucky for them the union of Trickers has just what they are looking for. New Hires will be rewarded indefinitely by The Flip Factory and should expect to receive full benefits of everything developed.",
		},
		{
			title: "Fix It Up",
			description:
				"A brand new machine comes online and starts producing new movements recorded by Ambu on his magical scrolls. Flip, filled with excitement, is eager to give full access of these movements to anyone who wishes to use them! But first things first, the Trickers have to be rewarded for their help in powering up the machine!",
		},
		{
			title: "WHATS IN THE BOX?",
			description:
				"The Factory seems to be producing overpowered products that must be contained by Koda infused energy, lucky enough Ambu knows just the trick. Some boxes crafted by Ambu are capable of holding more than just a single emote and may be more difficult to obtain.",
		},
		{
			title: "Hold my emote",
			description:
				"The Trickers union is fighting for your rights to be rewarded in the success of the Factory, rewards are issued over time to those enlisted in the program, enroll once it goes live to start earning! On top of that, Flip & Ambu are always eager to award those who go above and beyond in mastering movement arts IRL, this will just be the start.",
		},
		{
			title: "Bits and Pieces: Decoupled Emotes",
			description:
				"The mysteries surrounding Ambu, his magical emotes, and what they may be capable of are becoming more clear by the day. Flip, after studying the motions produced by the magic scrolls, has realized each movement produced is made up of varying parts. Eager to extrapolate these various segments comprising each movement, Flip is adding a new decoupling mechanism to the EM1.0! Both Flip & Ambu believe this will be the start to unlocking new variations of movements produced, but they still need help figuring it out.",
		},
		{
			title: "Emote Burn to Build",
			description:
				"After many toiling nights in the Factory, it seems our foreman has finally developed the perfect way to merge the base movements together to form all new expressions. Though, the law of equivalent exchange comes with a cost, a warning on the machine reads: Burn at your own risk, unusable product discarded.",
		},
		{
			title: "Emote Machine 1.1: Versatility Update",
			description:
				"Adding more common everyday movements like waving, dancing, and exclamations",
		},

		// { title: "Emote Machine 2.0: Versatility", description: },
		// { title: "Emote Machine 2.2: Create", description: },
	];
	function GoalDisplay({ goal }) {
		const [isOpen, setIsOpen] = useState(false);
		return (
			<div
				key={Math.random()}
				className='rounded-xl flex flex-col gap-2 bg-zinc-800 p-4 drop-shadow-xl w-full'>
				<div onClick={() => setIsOpen(!isOpen)} className='font-lucky text-3xl'>
					{goal.title}
				</div>
				{isOpen && <div className='p-2'>{goal.description}</div>}
			</div>
		);
	}

	return (
		<div className='flex flex-col gap-1 p-2 font-inter w-[90%] text-zinc-300 place-self-center place-items-center'>
			<div className='font-lucky text-5xl sm:text-6xl'>ROADMAP</div>
			{goals.map((goal) => (
				<GoalDisplay key={goal.title} goal={goal} />
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
