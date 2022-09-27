import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
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
			<Link to={"/"} className='flex gap-2'>
				<IoIosArrowBack className='text-5xl' />
				<div className='font-inter font-black pb-4 text-5xl'>litepaper</div>
			</Link>
			<div className='font-inter text-sm'>
				Welcome to the litepaper. where we try to explain what the fuck we are
				doing here.
			</div>
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
