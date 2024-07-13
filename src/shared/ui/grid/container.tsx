import { FC, PropsWithChildren, useEffect, useState } from "react";
import { classNames }                                 from "@/shared/lib/classNames/classNames";

enum TypeFluid {
	sm  = "sm",
	md  = "md",
	lg  = "lg",
	xl  = "xl",
	xxl = "xxl"
}

function prepareClass({fluid, className}: ContainerProps): string[] {
	const classContainer: string[] = []

	if (className) {
		classContainer.push(className)
	}

	switch (true) {
		case fluid === true: {
			classContainer.push("container-fluid");
			break;
		}
		case isFluid(fluid): {
			classContainer.push(`container-${fluid}`);
			break;
		}
		default: {
			classContainer.push("container");
			break;
		}
	}

	return classContainer
}

function isFluid(type: any): type is TypeFluid {
	return Object.values(TypeFluid).some(value => value === type)
}

type ContainerProps = PropsWithChildren<{
	className?: string
	fluid?: true | TypeFluid;
}>

export const Container: FC<ContainerProps> = (props: ContainerProps) => {
	const {children} = props
	const [classContainer, setClassContainer] = useState<string[]>([])

	useEffect(() => {
		setClassContainer(prepareClass(props))
	}, [props])


	return (
		<div className={classNames(classContainer)}>
			{children}
		</div>
	)
}
