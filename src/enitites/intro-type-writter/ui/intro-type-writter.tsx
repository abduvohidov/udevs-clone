import useWideScreen from "@/shared/lib/hooks/useWideScreen";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const IntroTypeWritter = () => {
	const isWideScreen = useWideScreen();
	const content = [
		"Разработка мобильных приложений",
		"Разработка и внедрение ERP систем",
		"UI / UX дизайн",
		"IT консалтинг",
		"Оптимизация инфраструктуры",
	];
	return (
		<span
			style={{
				color: `var(--primary)`,
				fontWeight: "500",
				fontSize: `${isWideScreen ? "42px" : "24px"}`,
				lineHeight: "54px",
			}}
		>
			<Typewriter
				words={content}
				loop={0} // Infinite loop
				cursor
				cursorStyle="|"
				typeSpeed={100} // Moderate typing speed
				deleteSpeed={50} // Moderate deleting speed
				delaySpeed={1000} // Delay between words
			/>
		</span>
	);
};
