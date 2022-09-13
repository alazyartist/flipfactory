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
		<div className='flex w-full overflow-x-auto py-5 p-3 flex-shrink-0'>
			<div className='flex w-fit no-scrollbar snap-x snap-mandatory flex-shrink-0 overflow-x-auto gap-4'>
				{exampleCharachters.map((charachter) => (
					<img
						className='snap-start bg-gradient-to-b from-teal-500 to-zinc-300 w-full rounded-xl'
						src={charachter.src}
					/>
				))}
			</div>
		</div>
	);
};

export default ExampleCharachterCarousel;
