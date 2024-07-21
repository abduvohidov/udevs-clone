import { FC } from "react";
import "./subtitle.scss";

interface SubtitleProps {
	children: string;
	subtitleFor: "clients" | "components";
}

export const Subtitle: FC<SubtitleProps> = ({ children, subtitleFor }) => {
	return (
		<p
			className={
				subtitleFor == "clients" ? "clients-subtitle" : "componetns-subtitle"
			}
		>
			{children}
		</p>
	);
};
