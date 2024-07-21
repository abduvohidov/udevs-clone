import "./our-team.scss";
import { Col } from "@/shared/ui/grid/col";
import { Flex } from "@/shared/ui/grid/flex";
import { Title } from "@/shared/ui/title/index";
import { Subtitle } from "@/shared/ui/subtitle/index";
import { Container } from "@/shared/ui/grid/container";
import { ourTeamIcon } from "@/shared/assets/icons/our-team";
import useWideScreen from "@/shared/lib/hooks/useWideScreen";

export const OurTeam = () => {
	const isWideScreen = useWideScreen();
	return (
		<section id="ourteam" className="ourteam">
			<Container>
				<Flex justify="center" align="end">
					<Col className="ourteam-col">
						<Title>Выделенная команда</Title>
						{!isWideScreen && (
							<img
								className="ourteam-img"
								src={ourTeamIcon}
								alt="our team vector image"
							/>
						)}
						<div className="subtitle-wrapper">
							<Subtitle subtitleFor="components">
								Для каждого проекта мы формируем команду, в которую входят
								проект менеджер, бизнес-аналитик, UI/UX дизайнер, DevOps,
								QA-инженер, бэкенд и фронтенд разработчики
							</Subtitle>
						</div>
						<p className="ourteam-subtitle">
							<span className="ourteam-subtitle-num">100+</span>{" "}
							{isWideScreen && <br />}
							Сотрудников
						</p>
					</Col>
					{isWideScreen && (
						<img
							className="ourteam-img"
							src={ourTeamIcon}
							alt="our team vector image"
						/>
					)}
				</Flex>
			</Container>
		</section>
	);
};
