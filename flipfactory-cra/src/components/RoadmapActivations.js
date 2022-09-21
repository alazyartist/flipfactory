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
					perkName={"Emote Machine 1.0"}
					perk={[`Claim Emote`, `get .bvh file(pure motion)`]}
				/>
				<ListItem
					percent={"40"}
					perkName={"Staking"}
					perk='Merch Drop - Flip Factory and Scrolls of Ambu'
				/>
				<ListItem
					percent={"60"}
					perkName={"Flip Factory"}
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
					perkName={"Roadmap 2.0 -SOA- Unlocked"}
					perk='RoadMap 2.0 - Otherside Develeopment Begins'
				/>
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
			<li className='flex gap-2 z-10 rounded-xl place-items-center bg-zinc-800 font-inter text-zinc-300 p-2'>
				<div className='text-2xl z-20 px-3 bg-inherit text-center w-20 text-zinc-500'>
					{percent}%
				</div>
				<div>{perkName}</div>
				{open && (
					<div className='left-16 w-fit bg-zinc-800 bg-opacity-30 rounded-lg p-1 text-zinc-300'>
						{!Array.isArray(perk) && perk}
						<div className=' p-1 flex flex-col'>
							{Array.isArray(perk) && perk.map((p) => <div>{p}</div>)}
						</div>
					</div>
				)}
			</li>
			{!isLast && (
				<div
					className={` ${
						blurred ? `blur-xl` : `blur-none`
					} p-2 ml-[2rem] z-[-2] top-10 absolute mt-[-2rem] bg-zinc-800 w-5 h-[5.5rem]`}>
					<div className='z-[-1] m-[0.5] rounded-xl h-[5.5rem] w-1 bg-zinc-300'></div>
				</div>
			)}
		</div>
	);
};

export default RoadmapActivations;
