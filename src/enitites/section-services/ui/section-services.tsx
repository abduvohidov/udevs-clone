import { Title } from "@/shared/ui/title";
import { Container, Row } from "@/shared/ui/grid";
import { SectionServicesInfo } from "./section-services-info";
import { SectionServicesImage } from "./section-services-img";
import { SectionServicesClientInfo } from "./section-services-clients-info";
import {
  ISectionService,
  TypesSectionService,
  TypesSectionServiceSides,
} from "../types";

export const SectionServices = ({
  typeSides,
  typeService,
  title,
  titleSub,
  titleBottom,
  utilityTop,
  utilityBottom,
  bgColorUtility,
  clientsProposal,
  img,
  logo,
}: ISectionService) => {
  const isLeft = typeSides == TypesSectionServiceSides.LEFT && (
    <SectionServicesImage img={img} />
  );
  const isRight = typeSides == TypesSectionServiceSides.RIGHT && (
    <SectionServicesImage img={img} />
  );
  const isService = typeService == TypesSectionService.isSERVICES && (
    <SectionServicesInfo
      titleSub={titleSub}
      titleBottom={titleBottom}
      utilityTop={utilityTop}
      utilityBottom={utilityBottom}
      bgColorUtility={bgColorUtility}
    />
  );
  const isClient = typeService == TypesSectionService.isCLIENT && (
    <SectionServicesClientInfo
      img={logo || ""}
      titleSub={titleSub}
      utilityTop={utilityTop}
      clientsProposal={clientsProposal}
      titleBottom={titleBottom}
      utilityBottom={utilityBottom}
      bgColorUtility={bgColorUtility}
    />
  );

  return (
    <Container>
      <Row className="mx-auto">
        <Title children={title || ""} />
        {isLeft}
        {isService}
        {isClient}
        {isRight}
      </Row>
    </Container>
  );
};
