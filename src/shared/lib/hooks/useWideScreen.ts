"use client";
import { useState, useEffect } from "react";

const useWideScreen = (threshold: number = 768): boolean => {
	const [isWideScreen, setIsWideScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth > threshold);
		};

		handleResize(); // Set initial value
		window.addEventListener("resize", handleResize);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [threshold]);

	return isWideScreen;
};

export default useWideScreen;
