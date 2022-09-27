import React, { useRef, useEffect, useState } from "react";

const useOnScreen = (options) => {
	const [ref, setRef] = useState(null);
	const [onScreen, setOnScreen] = useState(false);
	useEffect(() => {
		const iobserver = new IntersectionObserver(([entry]) => {
			setOnScreen(entry.isIntersecting);
		}, options);
		if (ref) {
			iobserver.observe(ref);
		}

		return () => {
			if (ref) {
				iobserver.unobserve(ref);
			}
		};
	}, [ref, options]);
	return [setRef, onScreen];
};

export default useOnScreen;
