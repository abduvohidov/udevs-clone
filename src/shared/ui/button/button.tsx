import "./button.scss";
import React, { FC } from "react";
import Link from "../../../../node_modules/next/link";

interface ButtonProps {
	type: "button" | "link";
	width: "full" | "notfull";
	content: string;
	url: string;
	fontsize?: string;
	margin?: string;
}

export const Button: FC<ButtonProps> = ({
	type,
	width,
	content,
	url,
	fontsize = 14,
	margin = "0",
}) => {
	const custom_style = {
		fontSize: fontsize,
		margin: margin,
	};
	return type === "button" ? (
		<button
			style={custom_style}
			className={`custom_btn ${width === "full" ? "full-width-btn" : ""}`}
		>
			{content}
		</button>
	) : (
		<Link
			style={custom_style}
			className={`custom_btn ${width === "full" ? "full-width-btn" : ""}`}
			href={url}
		>
			{content}
		</Link>
	);
};

