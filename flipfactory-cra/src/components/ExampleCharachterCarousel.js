import React from "react";

const ExampleCharachterCarousel = () => {
	const exampleCharachters = [
		{ src: "./Charachters/1.png", name: "" },
		{ src: "./Charachters/2.png", name: "" },
		{ src: "./Charachters/3.png", name: "" },
		{ src: "./Charachters/4.png", name: "" },
		{ src: "./Charachters/5.png", name: "" },
		{ src: "./Charachters/6.png", name: "" },
	];
	return (
		<div className='flex w-full overflow-x-auto p-2 flex-shrink-0'>
			<div className='flex w-fit no-scrollbar snap-x snap-mandatory flex-shrink-0 overflow-x-auto gap-4 p-2'>
				{exampleCharachters.map((charachter) => (
					<img
						className='snap-start bg-gradient-to-b to-zinc-400 w-full rounded-xl'
						src={charachter.src}
					/>
				))}
			</div>
		</div>
	);
};

export default ExampleCharachterCarousel;
