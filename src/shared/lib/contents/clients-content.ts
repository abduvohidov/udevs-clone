import {
	LogoAdminPanel,
	LogoCrsPlatform,
	LogoMobileDesign,
	LogoWebDesign,
	LogoWebsite,
} from "@/shared/assets/icons/section-services-icon";
import { IUtilityTopContent } from "@/shared/ui/filter-clients-content/types";

export const UTILITIES_TOP_CONTENT: Array<IUtilityTopContent> = [
	{
		title: "Website",
		icon: LogoWebsite,
	},

	{
		title: "Admin Panel",
		icon: LogoAdminPanel,
	},
	{
		title: "Crossplatform",
		icon: LogoCrsPlatform,
	},
	{
		title: "Web design",
		icon: LogoWebDesign,
	},
	{
		title: "Mobile design",
		icon: LogoMobileDesign,
	},
];
