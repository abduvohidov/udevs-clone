import { FC } from "react";
import "./title.scss";

interface TitleProps {
	children: string;
}

export const Title: FC<TitleProps> = ({ children }) => {
	return <h2 className="custom-title">{children}</h2>;
};
