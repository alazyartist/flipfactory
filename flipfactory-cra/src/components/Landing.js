import React, { lazy, Suspense, useEffect } from "react";
import { animated, config, useSpring } from "react-spring";
import useOnScreen from "../hooks/useOnScreen";
import FlipFactoryLogoComposite from "./FlipFactoryLogoComposite";
import LandingVideo from "./LandingVideo";
import WelcomeText from "./WelcomeText";
import WillWorkWithMetaverses from "./WillWorkWithMetaverses";
import { IoIosPaper } from "react-icons/io";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Landing = () => {
	const [linksRef, linksVisible] = useOnScreen({ rootMargin: "0px" });
	const [bannerRef, bannerVisible] = useOnScreen({ rootMargin: "-200px" });
	const heightAnim = useSpring({
		from: { height: "100vh" },
		to: { height: bannerVisible ? "100vh" : "40vh" },
		config: { ...config.stiff },
	});
	const height2Anim = useSpring({
		from: { height: "100vh" },
		to: { height: bannerVisible ? "100vh" : "60vh" },
		config: { ...config.stiff },
	});
	const opacityBannerAnim = useSpring({
		to: { opacity: bannerVisible ? "1" : "0" },
		config: { ...config.stiff },
	});
	const opacityLinkAnim = useSpring({
		to: { opacity: bannerVisible ? "0" : "1" },
		config: { ...config.stiff, duration: 700 },
	});
	const nav = useNavigate();
	useEffect(() => {
		if (linksVisible === true) {
			setTimeout(() => nav("home"), 1000);
		}
	}, [linksVisible]);
	return (
		<div className='w-full h-full'>
			<animated.div
				id='welcomeBanner'
				style={{ ...heightAnim, ...opacityBannerAnim }}
				className={`relative p-2 h-[100vh]`}>
				<div ref={bannerRef} className='popout hover:shadow-none group'>
					<div className=' tealpopin group-hover:shadow-none flex flex-col rounded-xl place-content-center group-hover:bg-opacity-5 w-full bg-teal-400'>
						<FlipFactoryLogoComposite />
						<WelcomeText />
					</div>
				</div>
			</animated.div>
			<Suspense
				fallback={
					<div className='text-2xl sm:text-3xl text-teal-200 font-lucky w-full p-8 text-center flex place-items-center place-content-center'>
						{/* <FlipFactoryLogoComposite /> */}
						getting factory feed
					</div>
				}>
				<LandingVideo />
			</Suspense>
			<animated.div style={{ ...height2Anim }} className=' w-full'>
				<WillWorkWithMetaverses />
				<animated.div style={{ ...opacityLinkAnim }}>
					<Link
						ref={linksRef}
						className={`flex place-content-center rounded-xl bg-zinc-800 p-2 place-items-center w-full text-center text-3xl font-inter font-black text-zinc-300`}
						to={"/litepaper"}>
						<IoIosPaper className='text-zinc-200' />
						Litepaper
					</Link>
				</animated.div>
			</animated.div>
			<Outlet />
		</div>
	);
};

export default Landing;
