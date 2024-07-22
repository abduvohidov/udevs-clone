import { icons } from "./constants";
import { SectionServices } from "@/enitites/section-services";
import { primaryBgImage } from "@/shared/assets/icons/bg-image";
import { TypesSectionService, TypesSectionServiceSides } from "@/enitites/section-services/types";

export const SectionOptimizationInfrostucture = () => {
  const image =
    "https://udevs.io/static/desktop-be2444bb4c87961054714533a5d5a728.png";

  return (
    <section
      id="SectionOptimizationInfrostucture"
      className="my-5"
      style={{ backgroundImage: `url(${primaryBgImage})` }}
    >
      <SectionServices
        typeSides={TypesSectionServiceSides.LEFT}
        typeService={TypesSectionService.isSERVICES}
        title="Оптимизация инфраструктуры"
        titleSub="Наши опытные специалисты помогут оптимизировать вашу инфраструктуру."
        utilityTop={icons}
        img={image}
        bgColorUtility={"darker"}
      />
    </section>
  );
};
