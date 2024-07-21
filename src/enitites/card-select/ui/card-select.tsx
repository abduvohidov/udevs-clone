import { Flex } from "@/shared/ui/grid/flex";
import { FC } from "react";
import "./card-select.scss";

interface CardSelectProps {
	option:
		| "Frontend"
		| "Backend"
		| "Devops"
		| "Testing"
		| "UXUI"
		| "Infrastructure"
		| "Mobile";
	data: Array<{ title: string; image: string }>;
	isClicked: boolean;
}

export const CardSelect: FC<CardSelectProps> = ({ option, data, isClicked, }) => {

    const content = data.map(({ title, image}) =>(
        <div className={`card-select ${option} ${isClicked && "with-opacity"}`}>
            <img src={image} alt={title} className="card-select-image" />
            <p className="card-select-title">{title}</p>
        </div>
    ))
    
	return <Flex className="select-list">{content}</Flex>;
};
