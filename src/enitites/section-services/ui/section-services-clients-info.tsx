import { Col } from "@/shared/ui/grid";
import { IImage, ISectionServiceInfo } from "../types";
import { Subtitle } from "@/shared/ui/subtitle";
import cls from "./section-services.module.scss";
import { ListUtility } from "@/enitites/list-utility";

export const SectionServicesClientInfo = ({
  img,
  titleSub,
  titleBottom,
  clientsProposal,
  utilityTop,
}: ISectionServiceInfo & IImage) => {
  return (
    <Col xxl={6} lg={6} className={cls.clientsInfo} >
      <img src={img} alt=".png"/>
      <span className={clientsProposal?.className}>
        <img src={clientsProposal?.icon} alt={clientsProposal?.title} />
        {clientsProposal?.title}
        </span>
      <Subtitle subtitleFor="clients" children={titleSub} />
      <h3 className={cls.TitleBottom}>{titleBottom}</h3>
      <ListUtility data={utilityTop} className={cls.SectionOSUtilities} />
    </Col>
  );
};
