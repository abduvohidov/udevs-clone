import { FC } from "react";
import Image from "../../../../node_modules/next/image";
import "./service-card.scss";

interface ServiceCardProps {
	title: string;
	image: string;
}

export const ServiceCard: FC<ServiceCardProps> = ({ title, image }) => {
	return (
		<div className="service-card">
			<Image width={35} height={35} src={image} alt={title} />
			<p className="service-card-text">{title}</p>
		</div>
	);
};
