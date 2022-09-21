import React from "react";
import ComingMetaverses from "./litepaper/ComingMetaverses";
import Emotesemotesemotes from "./litepaper/Emotesemotesemotes";
import How from "./litepaper/How";
import OthersideLandText from "./litepaper/OthersideLandText";
import Rewards from "./litepaper/Rewards";
import ScrollsOfAmbu from "./litepaper/ScrollsOfAmbu";
import WhatIsFlipFactory from "./litepaper/WhatIsFlipFactory";
import WhyThisTeam from "./litepaper/WhyThisTeam";
import OthersideLandPlots from "./OthersideLandPlots";

const LitePaper = () => {
	return (
		<div className='w-full p-4 h-full no-scrollbar overflow-y-scroll font-inter text-zinc-300'>
			<div className='font-inter font-black pb-4 text-5xl'>litepaper</div>
			<ComingMetaverses />
			<Emotesemotesemotes />
			<WhyThisTeam />
			<How />
			<OthersideLandText />
			<div className='text-zinc-800'>
				<OthersideLandPlots />
			</div>
			<WhatIsFlipFactory />
			<Rewards />
			<ScrollsOfAmbu />
		</div>
	);
};

export default LitePaper;
