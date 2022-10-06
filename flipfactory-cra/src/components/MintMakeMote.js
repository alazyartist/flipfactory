import React from "react";

const MintMakeMote = () => {
	return (
		<div className='flex flex-col bg-zinc-200 rounded-xl'>
			<h1 className='font-lucky text-center text-3xl'>How Does It Work?</h1>
			<h2 className='font-inter p-2 text-center text-xl'>
				It start's with Mint where you will receive your employeeId card. Hold
				on to this, its what gets you your rewards!
			</h2>
			<img src={"./mint@0.5x.png"} className='w-full' />
			<h2 className='font-inter p-2 text-center text-xl'>
				As long as your EID is punched in the clock (staked) you will be
				rewarded with new emotes and pieces to combine together and make new
				more complex emotes
			</h2>
			<img src={"./claim@0.5x.png"} className='w-full' />
			<h2 className='font-inter p-2 text-center text-xl'>
				After you have your emotes you can either go straight to using them or
				combine them to make something more rare and impressive.
			</h2>
			<img src={"./make@0.5x.png"} className='w-full' />
			<h2 className='font-inter p-2 text-center text-xl'>
				Then you can go flex on your friends in the metaverse with the craziest
				movements you’ve ever seen! Play in the verse freely, save your moves to
				compete in battle and keep earning, or sell on the open market and make
				some more!
			</h2>
			<img src={"./mote@0.5x.png"} className='w-full' />
		</div>
	);
};

export default MintMakeMote;
