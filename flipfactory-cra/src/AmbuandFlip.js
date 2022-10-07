import React, { lazy, Suspense, useEffect, useState } from "react";
const AmbuandFlip = () => {
	const [count, setCount] = useState(0);
	const [ambu, setAmbu] = useState(false);
	const AmbuScene = lazy(() => import("./components/AmbuScene"));
	const [displayText, setDisplayText] = useState("");
	const dialogue = [
		[
			"Flip",
			" Welcome to the Flip Factory, Philip N. Simian is the name and movement is the game! I’ll walk you through what we do around here and introduce you to my little red friend here.",
		],
		[
			"Flip",
			"Here at the Flip Factory we use cutting edge technology to capture and share some of the most complex movements humans are capable of. We want to bring that to you go show off anywhere at all!",
		],

		["Ambu", "(Subject)+predicate X explicit (verb)exclamation)"],

		[
			"Flip",
			"Oh calm down! I wasn’t going to take all the credit here, you don’t have to be rude!",
		],

		[
			"Flip",
			"But my little friend Ambu is right, it’s not just my factory that makes this possible. In fact, without my friend, whatever he is, and his magic that remains a mystery to me… Well, without him I know none of this would be possible.",
		],

		["Ambu", "(Subject)+predicate X pleasantries (verb)exclamation)"],

		[
			"Flip",
			"You are welcome! And I agree, we hit it off as soon as you crashed into my life from the Otherside of wherever it is you’re from… If only you could stop with those farts.",
		],
		["Ambu", ".:fart:."],

		[
			"Flip",
			"You’ll have to forgive my friend for his manners.  As you can tell, he’s not exactly a local. ",
		],

		[
			"Flip",
			"Now before we go further into the factory and learn about everything involved, I want to say thanks for stopping by! But before you go my friend wants to show you something.",
		],

		["Ambu", "#%$#"],
	];
	useEffect(() => {
		if (count === 0) {
			setAmbu(false);
		}
		if (count === dialogue.length - 1) {
			setAmbu(true);
		}
		setDisplayText("");
	}, [count]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDisplayText(dialogue[count][1].slice(0, displayText.length + 1));
		}, 50);
		return () => clearTimeout(timeout);
	}, [displayText]);
	return (
		<div className='flex flex-col pb-6 gap-2 place-content-center place-items-center'>
			<div className=' w-full p-2 lg:max-w-[800px]  gap-2'>
				<div
					className={`p-3 pb-8 min-h-[10rem] h-fit  relative rounded-xl ${
						dialogue[count][0] === "Flip"
							? "bg-[#6f5d70] text-zinc-300"
							: "bg-[#a8edf2] text-zinc-800"
					}`}>
					<div className='flex gap-2'>
						{dialogue[count][0] === "Flip" && (
							<img
								width={"200px"}
								height={"200px"}
								className='w-1/2 rounded-xl'
								src={"./flip.png"}
							/>
						)}
						{dialogue[count][0] === "Ambu" && (
							<img
								width={"200px"}
								height={"200px"}
								className='w-1/2 rounded-xl'
								src={"./ambu.png"}
							/>
						)}
						<div className='blinking-cursor relative speech  lg:text-3xl  bg-zinc-800 bg-opacity-20 p-4 lg:p-14 md:p-8 rounded-[20%] w-full'>
							{displayText}
						</div>
					</div>
					{ambu && (
						<Suspense
							fallback={
								<div className='font-lucky text-zinc-300'>
									Loacating Ambu...
								</div>
							}>
							<AmbuScene />
						</Suspense>
					)}
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
						className={`absolute bottom-2 right-2 ${
							dialogue[count][0] === "Flip" ? "text-zinc-200" : "text-zinc-800"
						} font-black`}>
						{count !== dialogue.length - 1 ? "next" : "start"}
					</span>
				</div>
			</div>
		</div>
	);
};

export default AmbuandFlip;
