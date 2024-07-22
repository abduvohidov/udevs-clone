import { Col } from "@/shared/ui/grid";
import { ISectionServiceInfo } from "../types";
import { Subtitle } from "@/shared/ui/subtitle";
import cls from "./section-services.module.scss";
import { ListUtility } from "@/enitites/list-utility";

export const SectionServicesInfo = ({
  titleSub,
  titleBottom,
  utilityTop,
  utilityBottom,
  bgColorUtility
}: ISectionServiceInfo) => {
  return (
    <Col xxl={6} lg={6} className="ps-2">
      <Subtitle subtitleFor="components" children={titleSub} />
      <ListUtility data={utilityTop} className={cls.SectionOSUtilities} bgColor={bgColorUtility}/>
      <h2 className={cls.TitleBottom}>{titleBottom}</h2>
      <ListUtility
        data={utilityBottom || []}
        className={cls.SectionTechnologyUtilities}
      />
    </Col>
  );
};
