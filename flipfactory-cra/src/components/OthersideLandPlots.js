import React from "react";

const OthersideLandPlots = () => {
	return (
		<div className='p-2'>
			<div className='h-fit w-full rounded-xl bg-sky-200 font-inter text-3xl p-2 text-center'>
				<div>
					<div>
						<span className='font-black'>Otherside Plot</span>
						<span className='font-lucky '>#108</span>
					</div>
					<img
						className='rounded-xl p-2 py-1 w-full'
						src='./Otherside108.png'
					/>
				</div>
				<div>
					<div>
						<span className='font-black'>Otherside Plot</span>
						<span className='font-lucky '>#64420</span>
					</div>
					<img
						className='rounded-xl p-2 px-1 w-full'
						src='./Otherside64420.png'
					/>
				</div>
			</div>
		</div>
	);
};

export default OthersideLandPlots;
