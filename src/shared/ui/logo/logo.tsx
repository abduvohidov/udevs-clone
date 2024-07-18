import { LogoImage } from "@/shared/assets/icons/logo";
import React, { FC } from "react";
import Image from "../../../../node_modules/next/image";
import { Link } from "../link/link";

interface LogoProps {
	width?: number;
	height?: number;
}

export const Logo: FC<LogoProps> = ({ width, height }) => {
	return (
		<Link href="/">
			<Image src={LogoImage} alt="Logo" width={width} height={height} />
		</Link>
	);
};
