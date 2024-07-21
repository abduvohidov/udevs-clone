import { ListUtility } from "@/enitites/list-utility/index";
import { ServiceCard } from "@/enitites/service-card/index";
import { serviceDesignIcon } from "@/shared/assets/icons/service-icons";
import { SERVICE_CONTENT } from "@/shared/lib/contents/service-content";
import { Container } from "@/shared/ui/grid/container";
import { Title } from "@/shared/ui/title/index";
import "./service.scss";

export const Service = () => {
	const content = SERVICE_CONTENT.map((object) => {
		return <ServiceCard title={object.title} image={object.image} />;
	});

	return (
		<section id="/service">
			<Container>
				<Title>Наши услуги</Title>
				<div className="service-content-wrapper">{content}</div>
			</Container>
		</section>
	);
};
