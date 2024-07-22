import { SectionServices } from "@/enitites/section-services";
import {
  TypesSectionService,
  TypesSectionServiceSides,
} from "@/enitites/section-services/types";
import { icons } from "./constants";
import { primaryBgImage } from "@/shared/assets/icons/bg-image";

export const SectionItConsulting = () => {
  const image = "https://udevs.io/static/consulting-41b53d1dd307a65f09f8017660a0304c.svg";

  return (
    <section
      id="SectionItConsulting"
      className="my-5"
      style={{ backgroundImage: `url(${primaryBgImage})` }}
    >
      <SectionServices
        typeSides={TypesSectionServiceSides.RIGHT}
        typeService={TypesSectionService.isSERVICES}
        title="IT консалтинг"
        titleSub="Мы можем повысить квалификацию ваших сотрудников тем самым увеличить эффективность вашей компании."
        utilityTop={icons}
        img={image}
      />
    </section>
  );
};
