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
}: ISectionServiceInfo) => {
  return (
    <Col xxl={6} className="ps-2">
      <Subtitle subtitleFor="components" children={titleSub} />
      <ListUtility data={utilityTop} className={cls.SectionOSUtilities} />
      <h2>{titleBottom}</h2>
      <ListUtility
        data={utilityBottom || []}
        className={cls.SectionTechnologyUtilities}
      />
    </Col>
  );
};
