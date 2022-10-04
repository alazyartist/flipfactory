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
				As Long as you're holding your employeeId card you will be rewarded with
				new emotes and other pieces you can use to make even more complex
				motions.
			</h2>
			<img src={"./claim@0.5x.png"} className='w-full' />
			<h2 className='font-inter p-2 text-center text-xl'>
				After you have your emotes you can either go straight to using them or
				combine them to make something more rare and impressive.
			</h2>
			<img src={"./make@0.5x.png"} className='w-full' />
			<h2 className='font-inter p-2 text-center text-xl'>
				Then you can go flex on your friends with the craziest motions you've
				ever seen. Or go sell them on the secondary market and make some more!
			</h2>
			<img src={"./mote@0.5x.png"} className='w-full' />
		</div>
	);
};

export default MintMakeMote;
