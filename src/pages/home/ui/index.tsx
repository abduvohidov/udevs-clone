import { Contacts } from "@/widgets/contacts";
import { Header } from "@/widgets/header";
import { Instruments } from "@/widgets/instruments/index";
import { OurClients } from "@/widgets/our-clients/index";
import { OurTeam } from "@/widgets/our-team/index";
import { SectionMobile } from "@/pages/home/ui/components/section-mobile";
import { Service } from "@/widgets/service";
import { SectionErpSystem } from "./components/section-erp-system";
import { SectionDesign } from "./components/section-design";
import { SectionOptimizationInfrostucture } from "./components/section-optimization-infrostructure";
import { SectionItConsulting } from "./components/section-itconsulting";
import { Steps } from "@/widgets/steps/index";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Service />
      <OurTeam />
      <SectionMobile />
      <SectionErpSystem />
      <SectionDesign />
      <SectionOptimizationInfrostucture />
      <SectionItConsulting />
      <Instruments/>
      <OurClients/>
      <Steps/>
      <Contacts />
    </>
  );
};
