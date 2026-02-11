import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { useEffect, useRef, useState } from "react";
import "../../css/order-container.css";
import { Link } from "react-router";

function OrderContainer() {
  const [quantity, setQuantity] = useState(1);

  const extras = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Sucuk",
    "Ananas",
    "Kabak",
  ];
  const selectedExtras = ["Pepperoni", "Mısır", "Jalepeno", "Ananas", "Sosis"];

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div style={{ minHeight: "100vh" }} className="order-container py-5">
      <Container>
        <h4>Position Absolute Acı Pizza</h4>

        <Row className="mt-4 mb-3">
          <Col>
            <h5 className="fw-bold">85.50₺</h5>
          </Col>
          <Col className="text-end">
            4.9 &nbsp; <span className="ms-5">(200)</span>
          </Col>
        </Row>

        <Form>
          <Row className="mt-3 mb-5 gap-5 flex-wrap">
            <Col xs="12">
              <p>
                Frontend Dev olarak hala position:absolute kullanıyorsan bu çok
                acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
                çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel
                olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
                genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan
                oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya
                bazen pizzetta denir.
              </p>
            </Col>
            <Col>
              <Label className="fw-bold">
                Boyut Seç <span style={{ color: "red" }}>*</span>
              </Label>

              <FormGroup check>
                <Input type="radio" name="size" /> <Label check>Küçük</Label>
              </FormGroup>

              <FormGroup check>
                <Input type="radio" name="size" /> <Label check>Orta</Label>
              </FormGroup>

              <FormGroup check>
                <Input type="radio" name="size" /> <Label check>Büyük</Label>
              </FormGroup>
            </Col>
            <Col>
              <Label className="fw-bold">
                Hamur Seç <span style={{ color: "red" }}>*</span>
              </Label>

              <Input type="select" className="fw-bold">
                <option>Hamur Kalınlığı</option>
                <option>İnce</option>
                <option>Orta</option>
                <option>Kalın</option>
              </Input>
            </Col>
          </Row>

          <div className="my-5 fw-bold">
            <h6>Ek Malzemeler</h6>
            <p style={{ fontSize: "16px", fontWeight: "500" }}>
              En Fazla 10 malzeme seçebilirsiniz. 5₺
            </p>

            <Row xs={2} md={3} className="g-3 mt-4">
              {extras.map((extra, index) => (
                <Col key={index}>
                  <FormGroup check style={{ whiteSpace: "nowrap" }}>
                    <Input
                      type="checkbox"
                      defaultChecked={selectedExtras.includes(extra)}
                    />
                    <Label check className="ms-2">
                      {extra}
                    </Label>
                  </FormGroup>
                </Col>
              ))}
            </Row>
          </div>

          <div className="mt-4">
            <Label className="fw-bold">Sipariş Notu</Label>
            <Input
              type="textarea"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              className="px-4 pt-3"
            />
          </div>

          <hr className="my-4" />

          <div className="order-info mt-4 align-items-center order-container-buttons">
            <div className="info-card">
              <Card>
                <CardBody>
                  <h6 className="fw-bold mb-4">Sipariş Toplamı</h6>

                  <Row className="mb-2">
                    <Col>Seçimler</Col>
                    <Col className="text-end">25.00₺</Col>
                  </Row>

                  <Row className="total">
                    <Col>Toplam</Col>
                    <Col className="text-end">110.50₺</Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
            <div className="amount">
              <div className="d-flex">
                <Button
                  color="warning rounded-end-0 py-2 px-4"
                  onClick={decrease}
                >
                  -
                </Button>
                <div style={{ padding: "10px 20px" }}>{quantity}</div>
                <Button
                  color="warning rounded-start-0 py-2 px-4"
                  onClick={increase}
                >
                  +
                </Button>
              </div>
            </div>

            <div className="text-end complete-order">
              <Link
                to="/order-completed"
                className="btn btn-warning py-2 px-4 w-100"
              >
                SİPARİŞ VER
              </Link>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default OrderContainer;
