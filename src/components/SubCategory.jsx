import { Row, Col, Container } from "reactstrap";
import "../css/sub-category.css";
import Products from "./Products";
import { subCategories } from "../data.json";
const SubCategory = () => {
  return (
    <div className="sub-category p-5">
      <Container>
        <div className="section-info d-flex flex-column g-4 text-center">
          <h3 className="sub-badge">en çok paketlenen menüler</h3>
          <h2>
            Acıktıran
            <span>Kodlara Doyuran</span>
            Lezzetler
          </h2>
        </div>

        <div className="category">
          <Row className="categories">
            {subCategories.map((category, index) => (
              <Col xs="6" md="2" className="category-item" key={index}>
                <a
                  href="#"
                  style={{
                    background:
                      category.name === "Pizza"
                        ? "var(--dark)"
                        : "var(--white)",
                    color: category.name === "Pizza" ? "#fff" : "inherit",
                  }}
                >
                  <img src={category.img} alt={category.name} />
                  {category.name}
                </a>
              </Col>
            ))}
          </Row>
        </div>
        <Products />
      </Container>
    </div>
  );
};

export default SubCategory;
