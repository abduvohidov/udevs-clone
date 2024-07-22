import { SectionServices } from "@/enitites/section-services";
import {
  TypesSectionService,
  TypesSectionServiceSides,
} from "@/enitites/section-services/types";
import { mobile_os, technology } from "./constants";
import { primaryBgImage } from "@/shared/assets/icons/bg-image";

export const SectionMobile = () => {

  const image = "https://udevs.io/static/desktop-be2444bb4c87961054714533a5d5a728.png"

  return (
    <section id="SectionMobile" style={{backgroundImage: `url(${primaryBgImage})`}}>
      <SectionServices
        typeSides={TypesSectionServiceSides.LEFT}
        typeService={TypesSectionService.isSERVICES}
        title="ERP cистемы"
        titleSub="IT Системы любого уровня сложности в удобные для вас сроки."
        utilityTop={mobile_os}
        titleBottom="Технологии"
        utilityBottom={technology}
        img={image}
      />
    </section>
  );
};
