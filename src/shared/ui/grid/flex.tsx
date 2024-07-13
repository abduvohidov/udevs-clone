import { FC }                        from "react";
import { RowOrFlex, RowOrFlexProps } from "@/shared/ui/grid/row-or-flex";

type FlexProps = Omit<RowOrFlexProps, "type">;

export const Flex: FC<FlexProps> = (props: FlexProps) => {
	return <RowOrFlex type="flex" {...props} />
}
