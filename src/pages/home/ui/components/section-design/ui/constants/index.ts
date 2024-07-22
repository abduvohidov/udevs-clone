import {
  LogoAtomicDesign,
    LogoCrsPlatform,
    LogoFigma,
    LogoFlutter,
    LogoIllustrator,
    LogoKotlin,
    LogoLottie,
    LogoMobileDesign,
    LogoProto,
    LogoSketch,
    LogoSwift,
    LogoUI,
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
      icon: LogoUX,
      title: "UX",
    },
    {
      id: 2,
      icon: LogoUI,
      title: "UI",
    },
    {
      id: 3,
      icon: LogoProto,
      title: "Prototyping",
    },
    {
      id: 4,
      icon: LogoMobileDesign,
      title: "Mobile Design",
    },
    {
      id: 5,
      icon: LogoWebDesign,
      title: "Web Design",
    },
    {
      id: 6,
      icon: LogoAtomicDesign,
      title: "Atomic Design",
    },
  ];
  
  export const technology: Array<ISectionServiceIcon> = [
    {
      id: 1,
      icon: LogoFigma,
      title: "Figma",
    },
    {
      id: 2,
      icon: LogoSketch,
      title: "Sketch",
    },
    {
      id: 3,
      icon: LogoLottie,
      title: "Lottie",
    },
    {
      id: 4,
      icon: LogoIllustrator,
      title: "Illustrator",
    },
  ];
  