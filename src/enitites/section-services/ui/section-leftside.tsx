import { IImage, ISectionServiceInfo } from "../types";
import { SectionServicesImage } from "./section-services-img";
import { SectionServicesInfo } from "./section-services-info";

export const SectionLeft = ({
  titleSub,
  titleBottom,
  utilityTop,
  utilityBottom,
  img,
}: ISectionServiceInfo & IImage) => {
  return (
    <>
      <SectionServicesImage img={img} />
      <SectionServicesInfo
        titleSub={titleSub}
        titleBottom={titleBottom}
        utilityTop={utilityTop}
        utilityBottom={utilityBottom}
      />
    </>
  );
};
