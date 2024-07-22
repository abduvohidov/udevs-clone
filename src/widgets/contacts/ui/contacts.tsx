import "./contacts.scss";
import './contacts-responsive.scss';
import { Card, Icon } from "@gravity-ui/uikit";
import { Title } from "@/shared/ui/title";
import { Row } from "@/shared/ui/grid/row";
import { Col, Container, Flex } from "@/shared/ui/grid";
import { InputText } from "@/shared/ui/input-text";
import { Button } from "@/shared/ui/button/button";
import { LogoYoutube, LogoInstagram, LogoLinkedin, LogoFacebook, LogoLocation, LogoPhone, LogoTelegram, LogoMail } from "@/shared/assets/icons/contacts-icon";
import { LogoLink } from "@/shared/ui/logo-link";

export const Contacts = () => {
  return (
    <Container>
      <Title children="Свяжитесь с нами" />
      <Card className="card-contacts" view="clear">
        <Row justify="center">
          <Col xxl={6} xl={6} lg={12} className="mx-auto">
            <h2 className="px-2">Оставьте нам сообщение</h2>
            <InputText className="mt-4 d-block" labelText="Имя" />
            <InputText className="mt-4 d-block" labelText="Ваша почта" />
            <InputText className="my-4 h-25" labelText="Кратко опишите свой проект"/>
            <Button width="notfull" fontsize="18px" type="button" margin="0 0.5rem" url="#!" content="Отправить"/>
          </Col>

          <Col xxl={6} xl={6} lg={12} className="card-contacts-info mx-auto mt-5">
              <LogoLink contentText="Ташкент,  Юнусабадский район, проспект Амира Темура, 129Б" logoname={LogoLocation} size={32} fill="blue"/>
              <LogoLink contentText="+998 33 66 00 999" logoname={LogoPhone} size={26} fill="blue"/>
              <LogoLink contentText="azizbek.b@udevs.io" logoname={LogoMail} size={26} fill="blue"/>
              <LogoLink contentText="t.me/azizbekbrakhodirov" logoname={LogoTelegram} size={26} fill="blue"/>

            <Flex className="py-4">
              <LogoLink logoname={LogoYoutube} size={26} fill="blue" className="me-2"/>
              <LogoLink logoname={LogoInstagram} size={26} fill="blue" className="mx-2"/>
              <LogoLink logoname={LogoFacebook} size={26} fill="blue" className="mx-2"/>
              <LogoLink logoname={LogoLinkedin} size={26} fill="blue" className="mx-2"/>
            </Flex>
            <div id="our-address">
              <iframe
                src="https://yandex.com/map-widget/v1/?from=mapframe&ll=69.288059%2C41.355647&mode=usermaps&source=mapframe&um=constructor%3A7ca26e40b93ebc46d15bad846f85d1b7e00f167fb123e4d14ca535dfc64a7c41&utm_source=mapframe&z=17.05"
                className="yandex-map"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};
