import { Title } from "@/shared/ui/title";
import { SectionLeft } from "./section-leftside";
import { Container, Row } from "@/shared/ui/grid";
import { SectionRight } from "./section-rigthside";
import { ISectionService, TypesSectionService } from "../types";

export const SectionServices = ({
  typeSides,
  title,
  titleSub,
  titleBottom,
  utilityTop,
  utilityBottom,
  img,
}: ISectionService) => {
  function sectionServiceType() {
    if (typeSides === TypesSectionService.RIGHT) {
      return (
        <SectionRight
          titleSub={titleSub}
          titleBottom={titleBottom}
          utilityTop={utilityTop}
          utilityBottom={utilityBottom}
          img={img}
        />
      );
    } else if (typeSides === TypesSectionService.LEFT) {
      return (
        <SectionLeft
          titleSub={titleSub}
          titleBottom={titleBottom}
          utilityTop={utilityTop}
          utilityBottom={utilityBottom}
          img={img}
        />
      );
    }
  }

  const section = (
    <Container>
      <Row className="mx-auto">
        <Title children={title} />
        {sectionServiceType()}
      </Row>
    </Container>
  );

  return section;
};
