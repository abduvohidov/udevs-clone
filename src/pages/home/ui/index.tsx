import { SectionServices } from "@/enitites/section-services";
import { TypesSectionService } from "@/enitites/section-services/types";
import {
  mobile_os,
  technology,
} from "@/enitites/section-services/ui/constants";
import { Contacts } from "@/widgets/contacts";
import { Header } from "@/widgets/header";
import { OurTeam } from "@/widgets/our-team/index";
import { Service } from "@/widgets/service";

export const HomePage = () => {
  // return <><h1>Home page</h1></>
  return (
    <>
      <Header />
      <Service />
      <OurTeam />
      <SectionServices
        typeSides={TypesSectionService.RIGHT}
        title="Мобильная разработка"
        titleSub="В сотрудничестве со стартапами мы научились создавать творческий и функциональный пользовательский интерфейс для мобильных приложений."
        titleBottom="Технологии"
        utilityTop={mobile_os}
        utilityBottom={technology}
        img="https://udevs.io/static/mobile_dev-6180df87085fd146c501a19e6156fbd2.png"
      />
      <Contacts />
    </>
  );
};
