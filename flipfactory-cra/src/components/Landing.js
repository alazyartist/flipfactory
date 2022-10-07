import React, { lazy, Suspense, useEffect, useState } from "react";
import { animated, config, useSpring } from "react-spring";
import useOnScreen from "../hooks/useOnScreen";
import FlipFactoryLogoComposite from "./FlipFactoryLogoComposite";
import LandingVideo from "./LandingVideo";
import WelcomeText from "./WelcomeText";
import WillWorkWithMetaverses from "./WillWorkWithMetaverses";
import { IoIosPaper } from "react-icons/io";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import AmbuandFlip from "../AmbuandFlip";

const Landing = () => {
	const [linksRef, linksVisible] = useOnScreen({ rootMargin: "0px" });
	const [bannerRef, bannerVisible] = useOnScreen({ rootMargin: "-200px" });
	const location = useLocation();
	const [loaded, setLoaded] = useState(false);
	const heightAnim = useSpring({
		from: { height: "0vh" },
		to: { height: loaded ? "40vh" : "35vh" },
		config: { ...config.stiff },
	});

	const opacityBannerAnim = useSpring({
		from: { opacity: "0" },
		to: { opacity: "1" },
		config: { ...config.stiff },
	});
	const opacityLinkAnim = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { ...config.stiff, duration: 700 },
	});
	const nav = useNavigate();
	useEffect(() => {
		setLoaded(true);
	}, []);

	useEffect(() => {
		if (location.pathname.includes("/home")) {
			setLoaded(false);
		}
	}, [location]);

	return (
		<div className='w-full h-full'>
			<animated.div
				id='welcomeBanner'
				style={{ ...heightAnim, ...opacityBannerAnim }}
				className={`relative p-2 h-[100vh]`}>
				<div ref={bannerRef} className='popout hover:shadow-none group'>
					<div className=' tealpopin group-hover:shadow-none flex flex-col rounded-xl place-content-center group-hover:bg-opacity-5 w-full bg-teal-400'>
						<FlipFactoryLogoComposite />
						<WelcomeText loaded={loaded} />
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
			<div className=' w-full'>
				<WillWorkWithMetaverses />
				<AmbuandFlip />
				<animated.div style={{ ...opacityLinkAnim }}>
					<Link
						ref={linksRef}
						className={`flex place-content-center rounded-xl bg-zinc-800 p-2 place-items-center w-full text-center text-3xl font-inter font-black text-zinc-300`}
						to={"/litepaper"}>
						<IoIosPaper className='text-zinc-200' />
						Litepaper
					</Link>
				</animated.div>
				{!location.pathname.includes("/home") && (
					<div className='h-20 flex place-content-center place-items-center'>
						<button
							onClick={() => nav("/home")}
							className='font-lucky text-zinc-300 text-4xl bg-teal-600 rounded-xl p-2'>
							Enter FlipFactory
						</button>
					</div>
				)}
			</div>
			<Outlet />
		</div>
	);
};

export default Landing;
