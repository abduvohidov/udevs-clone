"use client";
import "./select-tools.scss";
import { TOOLS_CONTENT } from "@/shared/lib/contents/instruments-content";
import { FC } from "react";
import { Flex } from "@/shared/ui/grid/flex";
import useWideScreen from "@/shared/lib/hooks/useWideScreen";

interface SelectToolsProps {
	getSelectedValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SelectTools: FC<SelectToolsProps> = ({ getSelectedValue }) => {
	const isWideScreen = useWideScreen();
	const dynamicJustify = isWideScreen ? "start" : "center";
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
	return (
		<Flex className="select-tools" justify={dynamicJustify}>
			{content}
		</Flex>
	);
};
