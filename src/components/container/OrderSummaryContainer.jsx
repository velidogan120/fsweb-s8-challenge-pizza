import { Container, Row, Col, Card, CardBody } from "reactstrap";
import "../../css/order-summary-container.css";
function OrderSummaryContainer() {
  return (
    <div className="order-summary d-flex justify-content-center align-items-center">
      <Container className="text-center">
        <h6 style={{ color: "#f5c518", fontStyle: "italic" }}>
          lezzetin yolda
        </h6>

        <h1
          className="fw-light"
          style={{
            fontSize: "64px",
            letterSpacing: "2px",
          }}
        >
          SİPARİŞ ALINDI
        </h1>

        <hr
          className="mx-auto border-light opacity-75 my-5"
          style={{ width: "300px" }}
        />

        <div className="mt-4 ">
          <h5 className="fw-bold">Position Absolute Acı Pizza</h5>
          <div className="col-4 col-md-2 my-4 mx-auto text-start row-gap-2 d-flex flex-column">
            <p className="mb-1">
              Boyut:
              <span className="fw-bold ms-1"> L</span>
            </p>
            <p className="mb-1">
              Hamur:
              <span className="fw-bold ms-1"> Süper İnce</span>
            </p>
            <p className="mb-0" style={{ whiteSpace: "nowrap" }}>
              Ek Malzemeler:
              <span className="fw-bold ms-1">
                Pepperoni,
                <span className="d-block">Sosis, Mısır, Ananas,</span> Jalepeno
              </span>
            </p>
          </div>
        </div>

        <Row className="justify-content-center mt-5 fw-bold">
          <Col xs="10" sm="6" md="4">
            <Card className=" order-summary-card">
              <CardBody>
                <h5 className="mb-4 text-start">Sipariş Toplamı</h5>

                <Row className="mb-2">
                  <Col className="text-start">Seçimler</Col>
                  <Col className="text-end">25.00₺</Col>
                </Row>

                <Row>
                  <Col className="text-start">Toplam</Col>
                  <Col className="text-end">110.50₺</Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OrderSummaryContainer;
