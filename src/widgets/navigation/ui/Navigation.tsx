import { NavList } from "@/features/navList/index";
import { Container } from "@/shared/ui/grid/container";
import { Bars } from "@gravity-ui/icons";
import "./Navigation.scss";
import { useState } from "react";
import { NavMobile } from "@/enitites/nav-moblie/index";
import { Logo } from "@/shared/ui/logo/logo";
import { Button } from "@/shared/ui/button/button";

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<nav className="nav">
			<Container className="nav-container">
				<Logo width={96} height={32} />
				<button className="nav-mobile-open" onClick={() => setIsOpen(!isOpen)}>
					<Bars color="blue" width="20" height="20" />
				</button>
				{isOpen && <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />}
				<div className="nav__navbar">
					<NavList />
					<Button
						url="/contact"
						type="link"
						width="notfull"
						content="Связаться"
					/>
				</div>
			</Container>
		</nav>
	);
};
