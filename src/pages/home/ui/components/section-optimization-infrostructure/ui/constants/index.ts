import {
  LogoArchitect,
  LogoAutoTesting,
  LogoCICD,
  LogoCloud,
  LogoDevops,
  LogoLoadTesting,
  LogoStressTesting,
} from "@/shared/assets/icons/section-services-icon";

export interface ISectionServiceIcon {
  id: number;
  icon: string;
  title: string;
}

export const icons: Array<ISectionServiceIcon> = [
  {
    id: 1,
    icon: LogoArchitect,
    title: "Architecture",
  },
  {
    id: 2,
    icon: LogoAutoTesting,
    title: "Auto testing",
  },
  {
    id: 3,
    icon: LogoStressTesting,
    title: "Stress testing",
  },
  {
    id: 4,
    icon: LogoLoadTesting,
    title: "Load testing",
  },
  {
    id: 5,
    icon: LogoDevops,
    title: "Devops",
  },
  {
    id: 6,
    icon: LogoCloud,
    title: "Cloud",
  },
  {
    id: 7,
    icon: LogoCICD,
    title: "CI / CD",
  },
];
