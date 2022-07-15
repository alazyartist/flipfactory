import React from "react";
import { FaDiscord, FaTwitter, FaTelegramPlane } from "react-icons/fa";

const CommunityLinks = () => {
	return (
		<div className='flex place-items-center place-content-center gap-4'>
			<div className='flex gap-2 place-content-center place-items-center'>
				<FaDiscord />
				Discord
			</div>
			<div className='flex gap-2 place-content-center place-items-center'>
				<FaTelegramPlane />
				Telegram
			</div>
			<div className='flex gap-2 place-content-center place-items-center'>
				<FaTwitter />
				Twitter
			</div>
		</div>
	);
};

export default CommunityLinks;
