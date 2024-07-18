import { Logo } from "@/shared/ui/logo/logo";
import { Container } from "@/shared/ui/grid/container";
import Image from "../../../../node_modules/next/image";
import { IntroVector } from "@/shared/assets/icons/vectors";
import { primaryBgImage } from "@/shared/assets/icons/bg-image";

import "./Intro.scss";
import { IntroTypeWritter } from "@/enitites/intro-typewritter/index";
import { Button } from "@/shared/ui/button/button";

export const Intro = () => {
	return (
		<div
			className="intro"
			style={{ backgroundImage: `url(${primaryBgImage})` }}
		>
			<Container>
				<div className="intro-flex">
					<div className="intro-flex-column">
						<Logo width={297} height={89} />
						<h1 className="intro-title">IT-Аутсорсинг Компания</h1>
						<IntroTypeWritter />
						<Button
							url="/contact"
							type="link"
							width="notfull"
							content="Связаться"
						/>
					</div>
					<Image
						src={IntroVector}
						width={550}
						height={414}
						alt="Intro vector"
					/>
				</div>
			</Container>
		</div>
	);
};
