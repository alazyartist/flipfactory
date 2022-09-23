import React, { useState } from "react";
const RoadmapActivations = () => {
	const items = [
		{
			percent: 0,
			perkName: "Initial Mint",
			perk: "FlipFactory Roadmap, Train Charachters",
		},
		{
			percent: 20,
			perkName: "Emote Machine 1.0",
			perk: "Claim Emote`, `get .bvh file(pure motion)",
		},
		{
			percent: 40,
			perkName: "Staking",
			perk: "Merch Drop - Flip Factory and Scrolls of Ambu",
		},
		{
			percent: 60,
			perkName: "Flip Factory",
			perk: "BattleSimulator on SOA.xyz",
		},
		{
			percent: 80,
			perkName: "Battle Simulator",
			perk: "RoadMap 2.0 - Otherside Develeopment Begins",
		},
		{
			percent: 100,
			perkName: "Roadmap 2.0 -SOA- Unlocked",
			perk: "RoadMap 2.0 - Otherside Develeopment Begins",
		},
	];
	return (
		<div className='p-2 flex flex-col place-content-center place-items-center'>
			<ul className=' flex flex-col w-[80vw]'>
				<h1 className='text-5xl sm:text-6xl text-center font-lucky text-zinc-300 font-semibold'>
					Roadmap Activations
				</h1>
				{items.map((item) => (
					<ListItem
						isLast
						percent={item.percent}
						perkName={item.perkName}
						perk={item.perk}
					/>
				))}
			</ul>
		</div>
	);
};

const ListItem = ({ blurred, percent, perk, isLast, perkName }) => {
	const [open, setOpen] = useState(false);

	return (
		<div
			onClick={() => setOpen(!open)}
			className={`h-20 ${blurred ? `blur-xl` : `blur-none`}`}>
			<li className='flex flex-col gap-2 z-10 rounded-xl place-items-center bg-zinc-800 font-inter text-zinc-300 p-2'>
				<div className='flex gap-2 w-full place-items-center'>
					<div className='text-2xl z-20 px-3 bg-inherit text-center w-20 text-zinc-500'>
						{percent}%
					</div>
					<div>{perkName}</div>
				</div>
				{open && (
					<div className='left-16 w-fit bg-zinc-800 bg-opacity-30 rounded-lg p-1 text-zinc-300'>
						{!Array.isArray(perk) && perk}
						<div className=' p-1 flex flex-col'>
							{Array.isArray(perk) && perk.map((p) => <div>{p}</div>)}
						</div>
					</div>
				)}
			</li>
		</div>
	);
};

export default RoadmapActivations;
