import "./nav-mobile.scss";
import { Xmark } from "@gravity-ui/icons";
import { Logo } from "@/shared/ui/logo/logo";
import { Flex } from "@/shared/ui/grid/flex";
import { Button } from "@/shared/ui/button/button";
import Link from "../../../../node_modules/next/link";
import React, { FC, Dispatch, SetStateAction } from "react";
import { SocailMediaList } from "@/shared/ui/social-media-list/ui/social.media-list";

interface NavMobileProps {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	isOpen: boolean;
}

export const NavMobile: FC<NavMobileProps> = ({ setIsOpen, isOpen }) => {
	return (
		<div className={`sidebar ${isOpen ? "sidebar-opened" : ""}`}>
			<Flex justify="between" align="center">
				<Logo width={96} height={32} />
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="sidebar-close-btn"
				>
					<Xmark color="blue" width="20" height="20" />
				</button>
			</Flex>
			<ul className="sidebar-list">
				<li className="sidebar-item">
					<Link className="sidebar-link" href="/services">
						Услуги
					</Link>
				</li>
				<li>
					<Link className="sidebar-link" href="ourclients">
						Клиенты
					</Link>
				</li>
				<li>
					<Link className="sidebar-link" href="ourteam">
						Команда
					</Link>
				</li>
			</ul>
			<Button url="/contact" type="link" width="full" content="Связаться" />
			<SocailMediaList />
		</div>
	);
};
