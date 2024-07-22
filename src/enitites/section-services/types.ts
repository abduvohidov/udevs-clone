import { ListUtilityProps } from "../list-utility";

export enum TypesSectionService {
  RIGHT = "RIGHT",
  LEFT = "LEFT",
}

export enum TypesUtility {}

export interface ISectionService extends ISectionServiceInfo, IImage {
  typeSides: string;
  title: string;
}

export interface ISectionServiceInfo {
  titleSub: string;
  titleBottom?: string;
  utilityTop: Array<ListUtilityProps & any>;
  utilityBottom?: Array<ListUtilityProps & any>;
}

export interface IImage {
  img: string;
}
