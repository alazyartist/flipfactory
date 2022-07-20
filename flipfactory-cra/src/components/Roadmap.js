import React, { useState } from "react";
const Roadmap = () => {
	return (
		<div className='p-2 flex flex-col place-content-center place-items-center'>
			<ul className=' flex flex-col w-[80vw]'>
				<h1 className='text-2xl font-semibold'>Roadmap Activations</h1>
				<ListItem percent={"10"} perk={["Charachter Drop", "Trixedex FREE"]} />
				<ListItem
					percent={"22.2"}
					perk={[`Claim Emote`, `get .bvh file(pure motion)`]}
				/>
				<ListItem
					percent={"42.0"}
					perk='FlipFactory Roadmap, Train Charachters'
				/>
				<ListItem
					percent={"69"}
					perk='Merch Drop - Flip Factory and Scrolls of Ambu'
				/>
				<ListItem percent={"80"} perk='BattleSimulator on SOA.xyz' />
				<ListItem
					isLast
					percent={"100"}
					perk='RoadMap 2.0 - Otherside Develeopment Begins'
				/>
			</ul>
		</div>
	);
};

const ListItem = ({ percent, perk, isLast }) => {
	const [open, setOpen] = useState(false);

	return (
		<div onClick={() => setOpen(!open)} className='h-20'>
			<li className='flex gap-2 rounded-xl place-items-center bg-zinc-800 text-zinc-300 p-2'>
				<div className='text-2xl px-3 text-zinc-500'>{percent}%</div>
				<div>Perks</div>
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
				<div className='relative z-[-2] left-[2rem] -top-10  bg-zinc-800 rounded-xl w-5 h-[5.5rem]'>
					<div className='relative z-[-1] left-[.5rem] rounded-xl h-[5.5rem] w-1 bg-zinc-300'></div>
				</div>
			)}
		</div>
	);
};

export default Roadmap;
