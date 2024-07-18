import React, { FC, Dispatch, SetStateAction } from "react";
import { Xmark } from "@gravity-ui/icons";
import "./NavMobile.scss";
import { Logo } from "@/shared/ui/logo/logo";
import Link from "../../../../node_modules/next/link";
import { Button } from "@/shared/ui/button/button";
import { SocailMediaList } from "@/shared/ui/socialMedia-list/socailMediaList";

interface NavMobileProps {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	isOpen: boolean;
}

export const NavMobile: FC<NavMobileProps> = ({ setIsOpen, isOpen }) => {
	return (
		<div className={`sidebar ${isOpen ? "sidebar-opened" : ""}`}>
			<div className="sidebar-top">
				<Logo width={96} height={32} />
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="sidebar-close-btn"
				>
					<Xmark color="blue" width="20" height="20" />
				</button>
			</div>
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
			<SocailMediaList  />
		</div>
	);
};
