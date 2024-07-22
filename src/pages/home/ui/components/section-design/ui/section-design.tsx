import { SectionServices } from "@/enitites/section-services";
import {
  TypesSectionService,
  TypesSectionServiceSides,
} from "@/enitites/section-services/types";
import { icons, technology } from "./constants";
import { primaryBgImage } from "@/shared/assets/icons/bg-image";

export const SectionDesign = () => {
  const image =
    "https://udevs.io/static/design-0951fd1e6afedab989f63e037535430f.png";

  return (
    <section
      id="SectionDesign"
      className="my-5"
      style={{ backgroundImage: `url(${primaryBgImage})` }}
    >
      <SectionServices
        typeSides={TypesSectionServiceSides.RIGHT}
        typeService={TypesSectionService.isSERVICES}
        title="UI / UX Дизайн"
        titleSub="Наша компания придерживается подхода к дизайну, ориентированного на человека.."
        utilityTop={icons}
        titleBottom="Технологии"
        utilityBottom={technology}
        img={image}
      />
    </section>
  );
};
