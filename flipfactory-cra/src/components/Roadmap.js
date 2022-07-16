import React from "react";

const Roadmap = () => {
	return (
		<div className='p-2 flex flex-col place-content-center place-items-center'>
			<ul>
				<h1 className='text-2xl font-semibold'>Roadmap Activations</h1>
				<li className='flex gap-2'>
					<div>10%</div>
					<div>Initial Mint</div>
				</li>
				<li className='flex gap-2'>
					<div>20%</div>
					<div>Access To Trickedex</div>
				</li>
				<li className='flex gap-2'>
					<div>30%</div>
					<div>Flip Factory User Page</div>
				</li>
				<li className='flex gap-2'>
					<div>40%</div>
					<div>Beta Card Game</div>
				</li>
				<li className='flex gap-2'>
					<div>50%</div>
					<div>Emote AirDrop</div>
				</li>
			</ul>
		</div>
	);
};

export default Roadmap;
