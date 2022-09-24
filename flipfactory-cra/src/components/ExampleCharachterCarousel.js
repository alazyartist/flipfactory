import React, { useState } from "react";
import { animated, useTransition, useSpringRef } from "react-spring";
import { useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const ExampleCharachterCarousel = () => {
	const [cindex, setcindex] = useState(0);
	const [csrc, setcsrc] = useState("");
	const exampleCharachters = [
		{ src: "./Charachters/1.png", name: "" },
		{ src: "./Charachters/2.png", name: "" },
		{ src: "./Charachters/3.png", name: "" },
		{ src: "./Charachters/4.png", name: "" },
		{ src: "./Charachters/5.png", name: "" },
		{ src: "./Charachters/6.png", name: "" },
		{ src: "./Charachters/7.png", name: "" },
		{ src: "./Charachters/8.png", name: "" },
	];
	useEffect(() => {
		setcsrc(exampleCharachters[cindex].src);
	}, [cindex]);
	useEffect(() => {
		cref.start();
	}, [csrc]);
	const cref = useSpringRef();
	const cardAnim = useTransition(csrc, {
		ref: cref,
		from: { transform: "translate3d(100%,0,0)" },
		enter: { transform: "translate3d(0%,0,0)" },
		leave: { transform: "translate3d(-100%,0,0)" },
		exitBeforeEnter: true,
		config: { tension: 120, friction: 18 },
	});

	return (
		<div className='flex w-full overflow-x-auto py-5 p-3 flex-shrink-0'>
			<div className='flex w-fit no-scrollbar flex-shrink-0 overflow-x-auto gap-4'>
				<div className='flex flex-col'>
					<div className='w-full h-[60vh] flex overflow-hidden'>
						{cardAnim((style, i) => {
							return (
								<animated.img
									key={i}
									style={{ ...style }}
									className='snap-start bg-gradient-to-b from-zinc-500 to-zinc-300 w-full rounded-xl'
									src={i}
								/>
							);
						})}
					</div>

					<div
						className={` mt-5 text-zinc-300 text-xl place-items-center flex flex-row gap-2 place-content-center`}>
						<IoIosArrowBack
							onClick={() => {
								setcindex(cindex === 0 ? 7 : cindex - 1);
							}}
						/>
						{exampleCharachters.map((eC) => (
							<div
								onClick={() => setcsrc(eC.src)}
								className={`w-4 h-4 ${
									eC.src === csrc ? "bg-zinc-200" : "bg-zinc-500"
								} rounded-full`}
								key={eC.src}></div>
						))}
						<IoIosArrowForward
							onClick={() => {
								setcindex((cindex + 1) % 8);
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExampleCharachterCarousel;
