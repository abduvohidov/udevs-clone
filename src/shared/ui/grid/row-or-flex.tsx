import { FC, PropsWithChildren, useEffect, useState } from "react";
import { classNames }                                 from "@/shared/lib/classNames/classNames";

export type RowOrFlexProps = PropsWithChildren<{
	type: "row" | "flex"
	column?: boolean;
	reverse?: boolean;
	align?: "start" | "center" | "stretch" | "end";
	justify?: "start" | "center" | "stretch" | "end";
	className?: string;
}>

function getFlexDirection(options: { column?: boolean; reverse?: boolean }): string {
	if (!options.column && !options.reverse) {
		return ""
	}

	if (options.column && options.reverse) {
		return "flex-column-reverse"
	} else if (options.reverse) {
		return "flex-row-reverse"
	} else {
		return "flex-column"
	}
}

function prepareClass({
	column,
	reverse,
	align: alignType,
	justify: justifyType,
	className
}: RowOrFlexProps, defaultClass: string): string[] {
	const classProps: string[] = [defaultClass]

	if (className) {
		classProps.push(className)
	}

	if (column || reverse) {
		classProps.push(getFlexDirection({column, reverse}))
	}

	if (alignType) {
		classProps.push(`align-items-${alignType}`)
	}

	if (justifyType) {
		classProps.push(`justify-content-${justifyType}`)
	}


	return classProps
}

export const RowOrFlex: FC<RowOrFlexProps> = (props: RowOrFlexProps) => {
	const {children} = props
	const [classRowOrFlex, setClassRowOrFlex] = useState<string[]>([])

	useEffect(() => {
		if (props.type === "flex") {
			setClassRowOrFlex(prepareClass(props, "d-flex"))
		} else {
			setClassRowOrFlex(prepareClass(props, props.type))
		}
	}, [props])

	return (
		<div className={classNames(classRowOrFlex)}>
			{children}
		</div>
	)
}
