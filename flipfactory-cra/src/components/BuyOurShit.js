import React from "react";

const BuyOurShit = () => {
	return (
		<div className='bg-zinc-800 text-5xl rounded-xl py-6 p-2 text-zinc-300 font-lucky place-items-center place-content-center flex'>
			<a
				className='flex flex-col'
				target={"_blank"}
				href='https://market.decentraland.org/collections/0x99fa59d0349390e17a5b7d066e1cf797bef4c065'>
				BUY OUR SHIT
				<div className='text-xs text-zinc-500 text-center'>
					currently available on decentraland
				</div>
			</a>
		</div>
	);
};

export default BuyOurShit;
