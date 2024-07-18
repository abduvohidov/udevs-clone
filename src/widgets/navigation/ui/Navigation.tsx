import "./Navigation.scss";
import { useState } from "react";
import { Bars } from "@gravity-ui/icons";
import { Logo } from "@/shared/ui/logo/logo";
import { Flex } from "@/shared/ui/grid/flex";
import { Button } from "@/shared/ui/button/button";
import { NavList } from "@/features/navList/index";
import { Container } from "@/shared/ui/grid/container";
import { NavMobile } from "@/enitites/nav-moblie/index";

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<nav className="nav">
			<Container className="nav-container">
				<Flex align="center" justify="between">
					<Logo width={96} height={32} />
					<button
						className="nav-mobile-open"
						onClick={() => setIsOpen(!isOpen)}
					>
						<Bars color="blue" width="20" height="20" />
					</button>
					{isOpen && <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />}
					<Flex align="center" justify="between">
						<NavList />
						<Button
							margin="0 0 0 20px"
							url="/contact"
							type="link"
							width="notfull"
							content="Связаться"
						/>
					</Flex>
				</Flex>
			</Container>
		</nav>
	);
};
