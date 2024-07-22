import { Col, Container, Flex, Row } from "@/shared/ui/grid";
import cls from "./section-services.module.scss";
import { Title } from "@/shared/ui/title";
import { Subtitle } from "@/shared/ui/subtitle";
import { ListUtility, ListUtilityProps } from "@/enitites/list-utility";

interface ISectionService {
  title: string;
  titleSub: string;
  titleBottom: string;
  utilityTop: Array<ListUtilityProps & any>;
  utilityBottom: Array<ListUtilityProps & any>;
  img: string;
}

export const SectionServices = ({
  title,
  titleSub,
  titleBottom,
  utilityTop,
  utilityBottom,
  img,
}: ISectionService) => {
  const section = (
    <Container>
      <Row className="mx-auto">
        <Title children={title} />
        <Col xxl={6}>
          <Subtitle subtitleFor="components" children={titleSub} />
          <ListUtility data={utilityTop} className={cls.SectionOSUtilities} />
          <h2>{titleBottom}</h2>
          <ListUtility
            data={utilityBottom}
            className={cls.SectionTechnologyUtilities}
          />
        </Col>
        <Col xxl={6}>
          <Flex justify="center">
            <img src={img} alt=".png" className={cls.SectionMainImage} />
          </Flex>
        </Col>
      </Row>
    </Container>
  );

  return section;
};
