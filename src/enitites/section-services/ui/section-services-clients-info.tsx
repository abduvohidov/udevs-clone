import { Col } from "@/shared/ui/grid";
import { IImage, ISectionServiceInfo } from "../types";
import { Subtitle } from "@/shared/ui/subtitle";
import cls from "./section-services.module.scss";
import { ListUtility } from "@/enitites/list-utility";

export const SectionServicesClientInfo = ({
  titleSub,
  titleBottom,
  utilityTop,
  img,
}: ISectionServiceInfo & IImage) => {
  return (
    <Col xxl={6} lg={6}>
      <img src={img} alt=".png" />
      <Subtitle subtitleFor="components" children={titleSub} />
      <h2 className={cls.TitleBottom}>{titleBottom}</h2>
      <ListUtility data={utilityTop} className={cls.SectionOSUtilities} />
    </Col>
  );
};
