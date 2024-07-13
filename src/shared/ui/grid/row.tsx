import { FC }                        from "react";
import { RowOrFlex, RowOrFlexProps } from "@/shared/ui/grid/row-or-flex";
import { classNames }                from "@/shared/lib/classNames/classNames";

export interface RowProps extends Omit<RowOrFlexProps, "type"> {
	noMargin?: boolean;
}

function prepareClass({noMargin, className}: RowProps): string[] {
	const classProps = [];

	if (className) {
		classProps.push(className)
	}

	if (noMargin) {
		classProps.push("mx-0")
	}

	return classProps
}

export const Row: FC<RowProps> = ({noMargin, className, ...props}: RowProps) => {
	const options = {
		className: className,
		noMargin: noMargin
	}

	return <RowOrFlex
		type="row"
		className={classNames(prepareClass(options))}
		{...props}
	/>
}
