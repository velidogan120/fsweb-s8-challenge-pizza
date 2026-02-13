import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import "../../css/order-container.css";
import { extras } from "../../data.json";
function OrderContainer({ setOrder }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState([
    "Pepperoni",
    "Mısır",
    "Jalepeno",
    "Ananas",
    "Sosis",
  ]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isFormValid =
    name.trim().length >= 3 &&
    size &&
    dough &&
    selectedExtras.length >= 4 &&
    selectedExtras.length <= 10;

  const handleExtraChange = (extra) => {
    if (selectedExtras.includes(extra)) {
      setSelectedExtras(selectedExtras.filter((e) => e !== extra));
    } else {
      if (selectedExtras.length < 10) {
        setSelectedExtras([...selectedExtras, extra]);
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    try {
      setLoading(true);

      const orderData = {
        name,
        size,
        dough,
        extras: selectedExtras,
        notes,
        quantity,
        price: 110.5,
      };

      const response = await axios.post(
        "https://reqres.in/api/pizza",
        orderData,
        {
          headers: {
            "x-api-key": "reqres_205878e1fa5f4a9cbdf63614ec704cc7",
          },
        },
      );
      if (response.status === 201) {
        setOrder(response.data);
        setName("");
        setSize("");
        setDough("");
        setSelectedExtras(selectedExtras);
        setNotes("");
        setQuantity(1);
        navigate("/order-completed");
        window.scrollTo(0, 0);
      }

      console.log("Sipariş Özeti:", response.data);
    } catch (error) {
      setError(true);
      console.error("Hata:", error);
    } finally {
      setLoading(false);
    }
  };

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div style={{ minHeight: "100vh" }} className="order-container py-5">
      <div>
        <Modal isOpen={error} centered>
          <ModalHeader>Hata Mesajı</ModalHeader>
          <ModalBody>
            Sipariş gönderilirken bir hata oluştu. Lütfen daha sonra tekrar
            deneyiniz.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => setError(false)}>
              Kapat
            </Button>
          </ModalFooter>
        </Modal>
      </div>
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

        <Form onSubmit={handleSubmit}>
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
                <Input
                  id="size-small"
                  type="radio"
                  name="size"
                  value="S"
                  onChange={(e) => setSize(e.target.value)}
                />
                <Label htmlFor="size-small" check>
                  Küçük
                </Label>
              </FormGroup>

              <FormGroup check>
                <Input
                  id="size-medium"
                  type="radio"
                  name="size"
                  value="M"
                  onChange={(e) => setSize(e.target.value)}
                />
                <Label htmlFor="size-medium" check>
                  Orta
                </Label>
              </FormGroup>

              <FormGroup check>
                <Input
                  id="size-large"
                  type="radio"
                  name="size"
                  value="L"
                  onChange={(e) => setSize(e.target.value)}
                />
                <Label htmlFor="size-large" check>
                  Büyük
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <Label className="fw-bold">
                Hamur Seç <span style={{ color: "red" }}>*</span>
              </Label>

              <Input
                type="select"
                value={dough}
                onChange={(e) => setDough(e.target.value)}
                className="fw-bold"
              >
                <option value="">Hamur Kalınlığı</option>
                <option value="İnce">İnce</option>
                <option value="Orta">Orta</option>
                <option value="Kalın">Kalın</option>
              </Input>
            </Col>
          </Row>

          <div className="my-5 fw-bold">
            <h6>Ek Malzemeler</h6>
            <p style={{ fontSize: "16px", fontWeight: "500" }}>
              En az 4, En fazla 10 malzeme seçebilirsiniz. 5₺
            </p>

            <Row xs={2} md={3} className="g-3 mt-4">
              {extras.map((extra, index) => (
                <Col key={index}>
                  <FormGroup check style={{ whiteSpace: "nowrap" }}>
                    <Input
                      id={`extra-${extra}`}
                      type="checkbox"
                      data-cy={`extra-${extra}`}
                      defaultChecked={selectedExtras.includes(extra)}
                      onChange={() => handleExtraChange(extra)}
                    />
                    <Label htmlFor={`extra-${extra}`} check className="ms-2">
                      {extra}
                    </Label>
                  </FormGroup>
                </Col>
              ))}
            </Row>
          </div>

          <div className="mt-4">
            <Label className="fw-bold">Sipariş Notu</Label>
            <div className="my-3">
              <Label className="fw-bold">
                İsim <span style={{ color: "red" }}>*</span>
              </Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                minLength={3}
                data-cy="name-input"
                required
                placeholder="En az 3 karakter"
              />
            </div>

            <Input
              type="textarea"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
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
              <Button
                type="submit"
                color="warning"
                className="py-2 px-4 w-100"
                disabled={!isFormValid || loading}
                data-cy="submit-button"
              >
                {loading ? "Gönderiliyor..." : "SİPARİŞ VER"}
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default OrderContainer;
