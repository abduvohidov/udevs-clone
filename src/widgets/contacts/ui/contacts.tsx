import { Col } from "@/shared/ui/grid";
import { Row } from "@/shared/ui/grid/row";
import { InputText } from "@/shared/ui/input-text";
import { Title } from "@/shared/ui/title";

export const Contacts = () => {
  return (
    <>
      <Title children="Свяжитесь с нами" />
      <Row>
        <Col xxl={6}>
        <h3 className="px-2">Оставьте нам сообщение</h3>
        <InputText className="d-block" labelText="Имя"/>
        <InputText className="d-block" labelText="Ваша почта"/>
        <InputText className="h-100" labelText="Кратко опишите свой проект"/>
        </Col>
        <Col xxl={6}>

        </Col>
      </Row>
    </>
  );
};
