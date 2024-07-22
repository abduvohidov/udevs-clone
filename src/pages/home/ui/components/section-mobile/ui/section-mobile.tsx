import { SectionServices } from "@/enitites/section-services";
import {
  TypesSectionService,
  TypesSectionServiceSides,
} from "@/enitites/section-services/types";
import { mobile_os, technology } from "./constants";
import { primaryBgImage } from "@/shared/assets/icons/bg-image";

export const SectionMobile = () => {

  const image = "https://udevs.io/static/mobile_dev-6180df87085fd146c501a19e6156fbd2.png"

  return (
    <section id="SectionMobile" style={{backgroundImage: `url(${primaryBgImage})`}}>
      <SectionServices
        typeSides={TypesSectionServiceSides.RIGHT}
        typeService={TypesSectionService.isSERVICES}
        title="Мобильная разработка"
        titleSub="В сотрудничестве со стартапами мы научились создавать творческий и функциональный пользовательский интерфейс для мобильных приложений."
        utilityTop={mobile_os}
        titleBottom="Технологии"
        utilityBottom={technology}
        img={image}
      />
    </section>
  );
};
