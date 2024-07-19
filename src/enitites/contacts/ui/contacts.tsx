import { Button } from "@/shared/ui/button/button";
import { Col, Container } from "@/shared/ui/grid";
import { Row } from "@/shared/ui/grid/row";
import { InputText } from "@/shared/ui/input-text";
import { Title } from "@/shared/ui/title";

export const Contacts = () => {
  return (
    <>
      <Container>
        <Title children="Свяжитесь с нами" />
        <Row>
          <Col xxl={6}>
            <h3 className="px-2">Оставьте нам сообщение</h3>
            <InputText className="mt-4 d-block" labelText="Имя" />
            <InputText className="mt-4 d-block" labelText="Ваша почта" />
            <InputText
              className="my-4 h-25"
              labelText="Кратко опишите свой проект"
            />
            <Button width="full" type="button" url="#!" content="Отправить" />
          </Col>
          <Col xxl={6}>
            <iframe
              src="https://yandex.com/map-widget/v1/?from=mapframe&ll=69.288059%2C41.355647&mode=usermaps&source=mapframe&um=constructor%3A7ca26e40b93ebc46d15bad846f85d1b7e00f167fb123e4d14ca535dfc64a7c41&utm_source=mapframe&z=17.05"
              width="800"
              height="400"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
};
