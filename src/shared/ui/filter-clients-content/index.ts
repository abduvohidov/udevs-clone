import { UTILITIES_TOP_CONTENT } from "@/shared/lib/contents/clients-content";
import { IUtilityTopContent } from "./types";

export function filterClientsContent(
	excluded: Array<string | any>
): Array<IUtilityTopContent> {
	const fiteredData = UTILITIES_TOP_CONTENT.filter((utilityContent) => {
		return !excluded.includes(utilityContent.title);
	});
	return fiteredData;
}
