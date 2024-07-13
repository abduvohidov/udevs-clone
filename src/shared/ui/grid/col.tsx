import { FC, PropsWithChildren, useEffect, useState } from "react";
import { classNames }                                 from "@/shared/lib/classNames/classNames";

type ColProps = PropsWithChildren<{
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
	xxl?: number;
	className?: string;
}>

function prepareClass({className, ...grids}: Omit<ColProps, "children">): string[] {
	const classFlex: string[] = []

	if (className) {
		classFlex.push(className)
	}

	const classGrid = (
		Object
			.entries<number>(grids)
			.map(([key, value]) => {
				if (key === "xs") {
					return `col-${value}`
				}

				return `col-${key}-${value}`
			})
	)

	if (classGrid.length) {
		classFlex.push(...classGrid);
	} else {
		classFlex.push("col")
	}


	return classFlex
}

export const Col: FC<ColProps> = (props: ColProps) => {
	const {children, ...options}  = props
	const [classCol, setClassCol] = useState<string[]>([])

	useEffect(() => {
		setClassCol(prepareClass(options))
	}, [props])


	return (
		<div className={classNames(classCol)}>
			{children}
		</div>
	)
}
