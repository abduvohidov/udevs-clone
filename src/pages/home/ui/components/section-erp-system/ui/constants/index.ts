import {
  LogoCRM,
  LogoECommerce,
  LogoELearning,
  LogoFlutter,
  LogoKotlin,
  LogoPOS,
  LogoSMS,
  LogoSwift,
  LogoWareHouse,
} from "@/shared/assets/icons/section-services-icon";

export interface ISectionServiceIcon {
  id: number;
  icon: string;
  title: string;
}

export const erp: Array<ISectionServiceIcon> = [
  {
    id: 1,
    icon: LogoCRM,
    title: "CRM",
  },
  {
    id: 2,
    icon: LogoELearning,
    title: "eLearning",
  },
  {
    id: 3,
    icon: LogoECommerce,
    title: "E-Commerce",
  },
  {
    id: 4,
    icon: LogoPOS,
    title: "POS",
  },
  {
    id: 5,
    icon: LogoSMS,
    title: "SMS / EMAIL",
  },
  {
    id: 6,
    icon: LogoWareHouse,
    title: "WareHouse",
  },
];
