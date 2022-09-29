import React, { useState } from "react";
const dialogue = [
	" Welcome to the Flip Factory, Philip N. Simian is the name and movement is the game! I’ll walk you through what we do around here and maybe even meet some key characters involved.",
	"Here at the Flip Factory we are excited to use cutting edge technology to capture and share some of the most complex movements performable with anyone who wishes to do them.  And, we don’t want people to just express themselves with movement in one world over the next; go show off anywhere at all!",

	"(Subject)+predicate X explicit (verb)exclamation)",

	"Oh calm down! I wasn’t going to take all the credit here, you don’t have to be rude!",

	"But my little friend Ambu is right, it’s not just my factory that makes this possible. In fact, without my friend, whatever he is, and his magic that remains a mystery to me… Well, without him I know none of this would be possible.",

	"(Subject)+predicate X pleasantries (verb)exclamation)",

	"You are welcome! And I agree, we hit it off as soon as you crashed into my life from the Otherside of wherever it is you’re from… If only you could stop with those farts.",
	".:fart:.",

	"You’ll have to forgive my friend for his manners.  As you can tell, he’s not exactly a local. ",

	"Now before we go further into the factory and learn about everything involved, I want to say thanks for stopping by!",

	"Don’t forget to hop in our discord and say hi so we can chat some more!",
];
const AmbuandFlip = () => {
	const [count, setCount] = useState(0);
	return (
		<div className='flex flex-col pb-6 gap-2'>
			<div className=' w-full p-2  place-content-center place-items-center flex gap-2'>
				<img
					width={"200px"}
					height={"200px"}
					className='w-1/2 rounded-xl'
					src={"./flip.png"}
				/>
				<img
					width={"200px"}
					height={"200px"}
					className='w-1/2 rounded-xl'
					src={"./ambu.png"}
				/>
			</div>
			<div className='p-3 min-h-[10rem] h-fit text-zinc-300 relative rounded-xl bg-zinc-800'>
				{dialogue[count]}{" "}
				<span className='absolute translate-x-[-50%] flex gap-1 bottom-2 left-[50%]'>
					{" "}
					{dialogue.map((d) => (
						<div
							key={Math.random()}
							className={`h-3 w-3 rounded-full ${
								dialogue.indexOf(d) === count ? "bg-teal-400" : "bg-zinc-300"
							}`}></div>
					))}
				</span>
				<span
					onClick={() => setCount((count + 1) % dialogue.length)}
					className='absolute bottom-2 right-2 text-teal-400'>
					{count !== dialogue.length - 1 ? "next" : "back to start"}
				</span>
			</div>
		</div>
	);
};

export default AmbuandFlip;
