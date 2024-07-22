import { Contacts } from "@/widgets/contacts";
import { Header } from "@/widgets/header";
import { OurTeam } from "@/widgets/our-team/index";
import { SectionMobile } from "@/pages/home/ui/components/section-mobile";
import { Service } from "@/widgets/service";
import { SectionErpSystem } from "./components/section-erp-system";
import { SectionDesign } from "./components/section-design";

export const HomePage = () => {
  // return <><h1>Home page</h1></>
  return (
    <>
      <Header />
      <Service />
      <OurTeam />
      <SectionMobile />
      <SectionErpSystem />
      <SectionDesign />
      <Contacts />
    </>
  );
};
