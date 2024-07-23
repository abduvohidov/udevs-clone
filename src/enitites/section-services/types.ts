import { ListUtilityProps } from "../list-utility";

export enum TypesSectionServiceSides {
	RIGHT = "RIGHT",
	LEFT = "LEFT",
}

export enum TypesSectionService {
	isSERVICES = "SERVICES",
	isCLIENT = "CLIENT",
}

export interface ISectionService extends ISectionServiceInfo, IImage {
	typeSides: string;
	typeService: string;
	title?: string;
	logo?: string;
	clientsProposal?: { icon: string; title: string; className: string };
}

export interface ISectionServiceInfo {
	titleSub: string;
	titleBottom?: string;
	utilityTop: Array<ListUtilityProps & any>;
	utilityBottom?: Array<ListUtilityProps & any>;
	clientsProposal?: { icon: string; title: string; className: string };
	bgColorUtility?: "light" | "darker";
}

export interface IImage {
	img: string;
}
