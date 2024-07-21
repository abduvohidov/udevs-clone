"use client";
import "./select-tools.scss";
import { TOOLS_CONTENT } from "@/shared/lib/contents/instruments-content";
import { FC } from "react";

interface SelectToolsProps {
	getSelectedValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SelectTools: FC<SelectToolsProps> = ({ getSelectedValue }) => {
	const content = TOOLS_CONTENT.map((title, index) => (
		<label className="radio-button" key={index}>
			<input
				type="radio"
				name="radio"
				value={title}
				onChange={getSelectedValue}
				className="radio-button__input"
			/>
			<span className="radio-button__custom"></span>
			{title}
		</label>
	));
	return <div>{content}</div>;
};
