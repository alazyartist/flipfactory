import React from "react";

const Roadmap = () => {
	return (
		<div className='p-2 flex flex-col place-content-center place-items-center'>
			<ul className=' flex flex-col'>
				<h1 className='text-2xl font-semibold'>Roadmap Activations</h1>
				<ListItem percent={"10"} perk='Model Release' />
				<ListItem percent={"20"} perk='Emote Shop' />
				<ListItem percent={"30"} perk='Secondary Market' />
				<ListItem percent={"40"} perk='Beta Card Game' />
			</ul>
		</div>
	);
};

const ListItem = ({ percent, perk }) => {
	return (
		<div className='h-20'>
			<li className='flex gap-2 rounded-xl bg-zinc-800 text-zinc-300 p-2'>
				<div>{percent}%</div>
				<div>{perk}</div>
			</li>
			<div className='relative z-[-1] left-[8rem] -top-10  bg-zinc-800 rounded-xl w-5 h-[5.5rem]' />
		</div>
	);
};

export default Roadmap;
