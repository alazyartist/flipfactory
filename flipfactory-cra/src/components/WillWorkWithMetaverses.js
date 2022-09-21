import React from "react";

const WillWorkWithMetaverses = () => {
	return (
		<div className='text-zinc-300 font-lucky font-black text-center text-5xl flex flex-col gap-2 p-3'>
			Buy Once. <br /> Use Anywhere
			<div className='flex bg-zinc-900 gap-2'>
				<a
					target={"_blank"}
					className='w-1/3 place-self-center'
					href='https://otherside.xyz'>
					<img src='https://www.nftculture.com/wp-content/uploads/2022/04/2022-04-26-15_46_18-Otherside-%E2%80%94-Coming-4_30.png' />
				</a>
				<a
					target={"_blank"}
					className='w-1/3 place-self-center'
					href='https://sandbox.game'>
					<img src='https://www.sandbox.game/img/01_Top_Bar/TheSandboxLogo.svg' />
				</a>

				<a
					target={"_blank"}
					className='w-1/3 place-self-center'
					href='https://decentraland.org'>
					<img src='./Decentraland-logo.png' />
				</a>
			</div>
			and more!!
		</div>
	);
};

export default WillWorkWithMetaverses;
