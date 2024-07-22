import { FC } from "react";
import "./card-select.scss";
import { Flex } from "@/shared/ui/grid/flex";

interface CardSelectProps {
	data: Array<{ title: string; image: string; option: string }>;
	clickedValue: string;
}

export const CardSelect: FC<CardSelectProps> = ({ data, clickedValue }) => {
	const content = data.map(({ title, image, option }) => (
		<div
			className={`card-select ${option} ${
				clickedValue === option || clickedValue === "all" ? "" : "with-opacity"
			}`}
		>
			<img src={image} alt={title} className="card-select-image" />
			<p className="card-select-title">{title}</p>
		</div>
	));

	return <Flex className="select-list">{content}</Flex>;
};
