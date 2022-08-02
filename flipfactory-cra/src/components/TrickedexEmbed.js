import React from "react";

const TrickedexEmbed = () => {
	return (
		<div className='min-w-[400px] min-h-[500px] w-full rounded-xl overflow-hidden h-[60vh] flex place-content-center place-items-center'>
			<iframe
				className='w-[80%] h-[80%]'
				src='https://trickedex.app/sandbox'></iframe>
		</div>
	);
};

export default TrickedexEmbed;
