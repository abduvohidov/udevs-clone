import {
  LogoAdminPanel,
  LogoCrsPlatform,
  LogoWebsite,
} from "@/shared/assets/icons/section-services-icon";

export interface ISectionServiceIcon {
  id: number;
  icon: string;
  title: string;
}

export const icons: Array<ISectionServiceIcon> = [
  {
    id: 1,
    icon: LogoWebsite,
    title: "Website",
  },
  {
    id: 2,
    icon: LogoAdminPanel,
    title: "Admin panel",
  },
  {
    id: 3,
    icon: LogoCrsPlatform,
    title: "Crossplatform",
  },
];
