import { FC, PropsWithChildren } from "react";
import NextLink                  from "next/link";
import { Link as GravityLink }   from "@gravity-ui/uikit";

type LinkProps = PropsWithChildren<{
	href: string;
	className?: string;
}>;

export const Link: FC<LinkProps> = (props) => {
	const {className, href, children} = props;

	function isText(children: LinkProps["children"]): boolean {
		return typeof children === "string"
	}

	const childrenIsText = isText(children)
	return (
		<NextLink
			href={href}
			legacyBehavior={childrenIsText}
		>
			{
				childrenIsText
					? <GravityLink className={className}>{children}</GravityLink>
					: children
			}
		</NextLink>
	)
}
