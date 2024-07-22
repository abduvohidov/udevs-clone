import { IImage } from "../types";
import { Col, Flex } from "@/shared/ui/grid";
import cls from "./section-services.module.scss";

export const SectionServicesImage = ({ img }: IImage) => {
  return (
    <Col xxl={6} lg={6}>
      <Flex justify="center">
        <img src={img} alt=".png" className={cls.SectionMainImage} />
      </Flex>
    </Col>
  );
};
