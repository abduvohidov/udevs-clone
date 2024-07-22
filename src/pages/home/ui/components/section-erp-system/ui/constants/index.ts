import {
    LogoAndroid,
    LogoCrsPlatform,
    LogoFlutter,
    LogoIOS,
    LogoKotlin,
    LogoSwift,
  } from "@/shared/assets/icons/section-services-icon";
  
  export interface ISectionServiceIcon {
    id: number;
    icon: string;
    title: string;
  }
  
  export const mobile_os: Array<ISectionServiceIcon> = [
    {
      id: 1,
      icon: LogoIOS,
      title: "iOS",
    },
    {
      id: 2,
      icon: LogoAndroid,
      title: "Android",
    },
    {
      id: 3,
      icon: LogoCrsPlatform,
      title: "Crossplatform",
    },
  ];
  
  export const technology: Array<ISectionServiceIcon> = [
    {
      id: 1,
      icon: LogoSwift,
      title: "Swift",
    },
    {
      id: 2,
      icon: LogoKotlin,
      title: "Kotlin",
    },
    {
      id: 3,
      icon: LogoFlutter,
      title: "Flutter",
    },
  ];
  