import React from "react";
import { FaDiscord, FaTwitter, FaTelegramPlane } from "react-icons/fa";

const CommunityLinks = () => {
	return (
		<div className='p-2 pb-4 flex text-zinc-300 place-items-center place-content-center gap-4'>
			<a href='https://discord.gg/Br9paKvmKc'>
				<div className='flex gap-2 place-content-center place-items-center'>
					<FaDiscord />
					Discord
				</div>
			</a>
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
