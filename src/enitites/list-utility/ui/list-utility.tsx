import { FC } from "react";
import "./list-utility.scss";

export interface ListUtilityProps {
	data: Array<{
		title: string;
		icon: string;
	}>;
	bgColor?: "light" | "darker";
	className?: string;
}

export const ListUtility: FC<ListUtilityProps> = ({
	data,
	bgColor = "light",
	className,
}) => {
	const content = data.map(({ title, icon }) => {
		return (
			<li
				className={`list-utility-item ${className} ${
					bgColor === "darker" ? "darker" : ""
				}`}
				key={title}
			>
				<img className="list-utility-image" src={icon} alt={title} />
				<p className="list-utility-title">{title}</p>
			</li>
		);
	});

	return <ul className="list-utility">{content}</ul>;
};
