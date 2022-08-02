import React, { useState } from "react";
const RoadmapActivations = () => {
	return (
		<div className='p-2 flex flex-col place-content-center place-items-center'>
			<ul className=' flex flex-col w-[80vw]'>
				<h1 className='text-6xl text-center font-lucky text-zinc-300 font-semibold'>
					Roadmap Activations
				</h1>
				<ListItem
					percent={"0"}
					perkName={"Initial Mint"}
					perk='FlipFactory Roadmap, Train Charachters'
				/>
				<ListItem
					percent={"20"}
					perkName={"Launch Staking"}
					perk={[`Claim Emote`, `get .bvh file(pure motion)`]}
				/>
				<ListItem
					perkName={"Go to the Gym"}
					percent={"40"}
					perk='Merch Drop - Flip Factory and Scrolls of Ambu'
				/>
				<ListItem
					percent={"60"}
					perkName={"Merch Drop"}
					perk='BattleSimulator on SOA.xyz'
				/>
				<ListItem
					percent={"80"}
					perkName={"Battle Simulator"}
					perk='RoadMap 2.0 - Otherside Develeopment Begins'
				/>
				<ListItem
					isLast
					percent={"100"}
					perkName={"Roadmap 2.0 Unlocked"}
					perk='RoadMap 2.0 - Otherside Develeopment Begins'
				/>
			</ul>
		</div>
	);
};

const ListItem = ({ percent, perk, isLast, perkName }) => {
	const [open, setOpen] = useState(false);

	return (
		<div onClick={() => setOpen(!open)} className='h-20'>
			<li className='flex gap-2 rounded-xl place-items-center bg-zinc-800 font-inter text-zinc-300 p-2'>
				<div className='text-2xl px-3 text-zinc-500'>{percent}%</div>
				<div>{perkName}</div>
			</li>
			{open && (
				<div className='left-16 relative w-fit bg-zinc-800 bg-opacity-30 rounded-lg p-1 text-zinc-300'>
					{!Array.isArray(perk) && perk}
					<div className=' p-1 flex flex-col'>
						{Array.isArray(perk) && perk.map((p) => <div>{p}</div>)}
					</div>
				</div>
			)}
			{!isLast && (
				<div className=' z-[-2] left-[.5rem] -top-10  bg-zinc-800 rounded-xl w-5 h-[5.5rem]'>
					<div className='relative z-[-1] left-[.5rem] rounded-xl h-[5.5rem] w-1 bg-zinc-300'></div>
				</div>
			)}
		</div>
	);
};

export default RoadmapActivations;
