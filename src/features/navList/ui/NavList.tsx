"use client";
import { arrowBottomIcon } from "@/shared/assets/arrow-bottom";
import { NAVLIST_CONTENT } from "@/shared/lib/contents/navList-content";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "./NavList.scss";
export const NavList = () => {
	const pathname = usePathname();
	const content = NAVLIST_CONTENT?.map(
		({ name, link, isContent, content }, index) => {
			return (
				<li key={index} className="nav-item dropdown">
					<Link
						id="dropdownMenuLink"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						className={`nav-link dropdown-toggle ${
							pathname === link ? "active" : ""
						}`}
						href={link}
					>
						{isContent ? (
							<>
								<span className="dropdown-toggle" data-toggle="dropdown">
									{name}
								</span>
								<Image
									src={arrowBottomIcon}
									alt="arrow bottom"
									width="13"
									height="12"
								/>
							</>
						) : (
							name
						)}
					</Link>
					{isContent && (
						<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
							{name === "Язык" ? (
								""
							) : (
								<span className="dropdown-title">{name}</span>
							)}
							{content &&
								content.map(({ title, icon, url }, idx) => (
									<Link key={idx} className="dropdown-item" href={url}>
										<Image src={icon} alt="icon" width="45" height="45" />
										{title}
									</Link>
								))}
						</div>
					)}
				</li>
			);
		}
	);

	return <ul className="nav__ul">{content}</ul>;
};
