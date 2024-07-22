import {
  LogoArchitect,
  LogoAtomicDesign,
  LogoBackend,
  LogoDevops,
  LogoFigma,
  LogoFrontend,
  LogoIllustrator,
  LogoLottie,
  LogoMobileDesign,
  LogoProto,
  LogoQA,
  LogoSketch,
  LogoUI,
  LogoUIUX,
  LogoUX,
  LogoWebDesign,
} from "@/shared/assets/icons/section-services-icon";

export interface ISectionServiceIcon {
  id: number;
  icon: string;
  title: string;
}

export const icons: Array<ISectionServiceIcon> = [
  {
    id: 1,
    icon: LogoFrontend,
    title: "Frontend",
  },
  {
    id: 2,
    icon: LogoBackend,
    title: "Backend",
  },
  {
    id: 3,
    icon: LogoArchitect,
    title: "Architecture",
  },
  {
    id: 4,
    icon: LogoDevops,
    title: "DevOps",
  },
  {
    id: 5,
    icon: LogoUIUX,
    title: "UX/UI",
  },
  {
    id: 6,
    icon: LogoQA,
    title: "QA",
  },
];
