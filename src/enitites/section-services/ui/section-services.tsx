import { Title } from "@/shared/ui/title";
import { Container, Row } from "@/shared/ui/grid";
import { SectionServicesInfo } from "./section-services-info";
import { SectionServicesImage } from "./section-services-img";
import { SectionServicesClientInfo } from "./section-services-clients-info";
import { ISectionService, TypesSectionService, TypesSectionServiceSides } from "../types";

export const SectionServices = ({
  typeSides,
  typeService,
  title,
  titleSub,
  titleBottom,
  utilityTop,
  utilityBottom,
  img,
  logo,
}: ISectionService) => {

  const isLeft = typeSides == TypesSectionServiceSides.LEFT && <SectionServicesImage img={img} />
  const isRight = typeSides == TypesSectionServiceSides.RIGHT && <SectionServicesImage img={img} />
  const isService = typeService == TypesSectionService.isSERVICES && <SectionServicesInfo titleSub={titleSub} titleBottom={titleBottom} utilityTop={utilityTop} utilityBottom={utilityBottom}/>
  const isClient = typeService == TypesSectionService.isCLIENT && <SectionServicesClientInfo titleSub={titleSub} titleBottom={titleBottom} utilityTop={utilityTop} utilityBottom={utilityBottom} img={logo || ""}/>

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
