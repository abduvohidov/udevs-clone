import { icons } from "./constants";
import { SectionServices } from "@/enitites/section-services";
import { primaryBgImage } from "@/shared/assets/icons/bg-image";
import {
  TypesSectionService,
  TypesSectionServiceSides,
} from "@/enitites/section-services/types";

export const SectionIman = () => {
  const logo = "https://udevs.io/static/iman-8d343bfc270029c181003633c9652299.svg"
  const image = "https://udevs.io/static/imanApp-121e2c6598e85d2d53bec9ad7504dee3.png"
  return (
    <section
      id="SectionIman"
      className="my-5"
      style={{ backgroundImage: `url(${primaryBgImage})` }}
    >
      <SectionServices
        typeSides={TypesSectionServiceSides.RIGHT}
        typeService={TypesSectionService.isCLIENT}
        titleSub="Iman - It is a mutual financing platform based on the principles of Islamic Finance. Buyers, sellers and investors meet here."
        titleBottom="Мы разрабатывали:"
        utilityTop={icons}
        img={image}
        bgColorUtility={"darker"}
        logo={logo}
      />
    </section>
  );
};
