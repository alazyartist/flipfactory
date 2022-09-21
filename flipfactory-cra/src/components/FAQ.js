import React from "react";
import { useState } from "react";

const FAQ = () => {
	const faqList = [
		{
			title: "What’s a Flip Factory?",
			description:
				"Home of the best Emotes in the metaverse, FF is the first and lead vendor of movement art emotes usable in any supporting metaverse and beyond. Built on the Ethereum blockchain, created for interoperability between all supporting worlds, and developing The Scrolls of Ambu game on plot #108 of The Otherside Metaverse",
		},
		{
			title: "What's a mint?",
			description:
				"Minting is how you purchase an NFT and stamp it onto the blockchain, our first mint will be the NFTrickers. Trickers are the key to bringing the Flip Factory online to start production of emotes and will be rewarded for their contributions as the factory grows.",
		},
		{
			title: "What do I get?",
			description:
				"Holders of an NFTricker will be given full access to everything produced by Flip Factory, and will be awarded with everything necessary to play the Scrolls of Ambu game during development. This includes but is not limited to: 3D character model, Battle pass, PoT/Vesting protocols, Power ups and more. Minted NFTrickers will award 1 free to claim NFT emote from the Emote Machine 1.0, and access to vesting/proof of trick protocols developed by the team. ",
		},
		{
			title: "Who is Ambu and what’s with the scrolls?",
			description:
				"Ambu is a celestial being born out of the Otherside, commonly referred to as a Koda. Although nobody really knows what a Koda is, Ambu has befriended an extremely boring ape Philip Sim Ian, and has shared countless stories about his home world as he’s been away during his travels. Mr. Ian still has more to learn about his new friend, but from what he knows so far… those Scrolls of Ambu seem extremely powerful.",
		},
		{
			title: "How does it work?",
			description:
				"Emotes are captured with the XSens MVN Link by Movella, an industry-standard piece of motion capture equipment used by top Hollywood studios. We created our NFT emotes from these motion captures performed by Tricking Martial Arts professionals, and are storing them on the ethereum blockchain as ERC-1155 tokens. Digital files interoperable with various metaverses will be GLTF format and claimable to any holder for exportation. ",
		},
		{
			title: "WTF is Interoperability",
			description:
				"Owning an Emote NFT will come with the chance to be used in any GLTF supporting metaverse/software, and in the Scrolls of Ambu game developed by Flip Factory in The Otherside metaverse. ",
		},
		{
			title: "What are my rights",
			description:
				//TODO
				"Owning a Union Member or Emote NFT offered by Flip Factory gives holders full commercial rights and freedom to create or monetize as they see fit. ",
		},
		{
			title: "When mint?",
			description: "TBA Still",
		},
		// { title: "Emote Machine 2.0: Versatility", description: },
		// { title: "Emote Machine 2.2: Create", description: },
	];
	function FAQDisplay({ faq }) {
		const [isOpen, setIsOpen] = useState(false);
		return (
			<div
				key={Math.random()}
				className='rounded-xl flex flex-col gap-2 bg-zinc-800 p-4 drop-shadow-xl w-full'>
				<div onClick={() => setIsOpen(!isOpen)} className='font-lucky text-3xl'>
					{faq.title}
				</div>
				{isOpen && <div className='p-2'>{faq.description}</div>}
			</div>
		);
	}

	return (
		<div className='flex flex-col gap-1 p-2 font-inter w-[90%] text-zinc-300 place-self-center place-items-center'>
			<div className='font-lucky text-7xl'>FAQ's</div>
			{faqList.map((faq) => (
				<FAQDisplay faq={faq} />
			))}
		</div>
	);
};

export default FAQ;
