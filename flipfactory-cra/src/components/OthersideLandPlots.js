import React from "react";

const OthersideLandPlots = () => {
	return (
		<div className='p-2'>
			<div className='h-fit w-full flex flex-col md:flex-row rounded-xl bg-[#6560ff] text-zinc-300 font-inter text-3xl p-2 text-center'>
				<div className='max-w-[700px]'>
					<div>
						<span className='font-black'>Otherside Plot</span>
						<span className='font-lucky '>#108</span>
					</div>
					<img className='rounded-xl p-2  w-full' src='./Otherside108.png' />
				</div>
				<div className='max-w-[700px]'>
					<div>
						<span className='font-black'>Otherside Plot</span>
						<span className='font-lucky '>#64420</span>
					</div>
					<img className='rounded-xl p-2  w-full' src='./Otherside64420.png' />
				</div>
			</div>
		</div>
	);
};

export default OthersideLandPlots;
