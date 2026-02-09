import { Container, Row, Col, Button } from "reactstrap";
import "../css/card-section.css";
function CardSection() {
  return (
    <section className="card-section">
      <Container className="p-5">
        <div className="order">
          <Row className="g-4">
            <Col sm="12" lg="6">
              <div className="order-card h-100">
                <h3>Özel</h3>
                <h3>Lezzetus</h3>
                <p>Position:Absolute Acı Burger</p>
                <Button className="btn btn-white">Sipariş Ver</Button>
              </div>
            </Col>

            <Col sm="12" lg="6">
              <Row className="right-cards g-4">
                <Col xs="12">
                  <div className="order-card">
                    <h3>Hackathlon</h3>
                    <h3>Burger Menü</h3>
                    <Button className="btn btn-white">Sipariş Ver</Button>
                  </div>
                </Col>

                <Col xs="12">
                  <div className="order-card">
                    <h3>
                      <span>Çoooook</span> hızlı
                    </h3>
                    <h3>npm gibi kurye</h3>
                    <Button className="btn btn-white">Sipariş Ver</Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default CardSection;
