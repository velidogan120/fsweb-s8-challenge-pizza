import { Container, Row, Col } from "reactstrap";
import "../../src/css/footer.css";
import { FaTwitter } from "react-icons/fa";
import { useLocation } from "react-router";
function Footer() {
  const { pathname } = useLocation();
  return (
    <footer style={{ display: pathname === "/order" ? "none" : "block" }}>
      <div className="page-info">
        <Container className="p-5">
          <Row className="g-5 gap-y-5 px-5 py-3">
            <Col md="4" className="contact">
              <img
                src="../../images/iteration-2-images/footer/logo-footer.svg"
                alt=""
              />
              <ul className="contact-list d-flex flex-column gap-3 m-0 p-1 pt-4">
                <li className="contact-item d-flex align-items-start gap-3">
                  <img
                    src="../../images/iteration-2-images/footer/icons/icon-1.png"
                    alt=""
                  />
                  341 Londonderry Road, Istanbul Türkiye
                </li>
                <li className="contact-item d-flex align-items-start gap-3">
                  <img
                    src="../../images/iteration-2-images/footer/icons/icon-2.png"
                    alt=""
                  />
                  aciktim@teknolojikyemekler.com
                </li>
                <li className="contact-item d-flex align-items-start gap-3">
                  <img
                    src="../../images/iteration-2-images/footer/icons/icon-3.png"
                    alt=""
                  />
                  +90 216 123 45 67
                </li>
              </ul>
            </Col>

            <Col md="4" className="menu">
              <h3>Hot Menu</h3>
              <ul className="menu-list m-0 p-0 d-flex flex-column gap-3">
                <li className="menu-item">
                  <a href="#">Terminal Pizza</a>
                </li>
                <li className="menu-item">
                  <a href="#">5 Kişilik Hackathlon Pizza</a>
                </li>
                <li className="menu-item">
                  <a href="#">useEffect Tavuklu Pizza</a>
                </li>
                <li className="menu-item">
                  <a href="#">Beyaz Console Frosty</a>
                </li>
                <li className="menu-item">
                  <a href="#">Testler Geçti Mutlu Burger</a>
                </li>
                <li className="menu-item">
                  <a href="#">Position Absolute Acı Burger</a>
                </li>
              </ul>
            </Col>

            <Col md="4" className="instagram">
              <h3>Instagram</h3>
              <Row className="insta-images g-2" xs="3">
                <img
                  src="../../images/iteration-2-images/footer/insta/li-0.png"
                  alt=""
                />
                <img
                  src="../../images/iteration-2-images/footer/insta/li-1.png"
                  alt=""
                />
                <img
                  src="../../images/iteration-2-images/footer/insta/li-2.png"
                  alt=""
                />
                <img
                  src="../../images/iteration-2-images/footer/insta/li-3.png"
                  alt=""
                />
                <img
                  src="../../images/iteration-2-images/footer/insta/li-4.png"
                  alt=""
                />
                <img
                  src="../../images/iteration-2-images/footer/insta/li-5.png"
                  alt=""
                />
              </Row>
            </Col>
          </Row>

          <div className="copyright mt-5 border-top border-1 pt-5 d-flex justify-content-between">
            <p>© 2023 Teknolojik Yemekler.</p>
            <FaTwitter />
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
