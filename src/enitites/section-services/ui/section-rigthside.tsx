import { IImage, ISectionServiceInfo } from "../types";
import { SectionServicesImage } from "./section-services-img";
import { SectionServicesInfo } from "./section-services-info";

export const SectionRight = ({
  titleSub,
  titleBottom,
  utilityTop,
  utilityBottom,
  img,
}: ISectionServiceInfo & IImage) => {
  return (
    <>
      <SectionServicesInfo
        titleSub={titleSub}
        titleBottom={titleBottom}
        utilityTop={utilityTop}
        utilityBottom={utilityBottom}
      />
      <SectionServicesImage img={img} />
    </>
  );
};
