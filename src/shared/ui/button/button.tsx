import React, { FC } from "react";
import "./button.scss";
import Link from "../../../../node_modules/next/link";

interface ButtonProps {
	type: "button" | "link";
	width: "full" | "notfull";
	content: string;
	url: string;
}

export const Button: FC<ButtonProps> = ({ type, width, content, url }) => {
	return type === "button" ? (
		<button
			className={`custom_btn ${width === "full" ? "full-width-btn" : ""}`}
		>
			{content}
		</button>
	) : (
		<Link
			className={`custom_btn ${width === "full" ? "full-width-btn" : ""}`}
			href={url}
		>
			{content}
		</Link>
	);
};
