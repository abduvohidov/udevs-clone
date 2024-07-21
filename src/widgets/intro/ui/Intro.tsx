import { Logo } from "@/shared/ui/logo/logo";
import { Container } from "@/shared/ui/grid/container";
import { IntroVector } from "@/shared/assets/icons/vectors";
import { primaryBgImage } from "@/shared/assets/icons/bg-image";

import "./Intro.scss";
import { IntroTypeWritter } from "@/enitites/intro-type-writter";
import { Button } from "@/shared/ui/button/button";
import { Flex } from "@/shared/ui/grid/flex";
import useWideScreen from "@/shared/lib/hooks/useWideScreen";

export const Intro = () => {
	const isWideScreen = useWideScreen();
	return (
		<div
			className="intro"
			style={{ backgroundImage: `url(${primaryBgImage})` }}
		>
			<Container>
				<Flex justify="between" align="center" className="intro-wrapper">
					<div className="intro-left-part">
						<Logo
							width={isWideScreen ? 297 : 125}
							height={isWideScreen ? 89 : 41}
						/>
						<h1 className="intro-title">IT-Аутсорсинг Компания</h1>
						<IntroTypeWritter />
						<div className="intro-btn-wrapper">
							{isWideScreen && (
								<Button
									fontsize="20px"
									url="/contact"
									type="link"
									width="notfull"
									content="Связаться"
								/>
							)}
						</div>
					</div>
					<img src={IntroVector} className="intro-image" alt="Intro vector" />
				</Flex>
			</Container>
		</div>
	);
};
