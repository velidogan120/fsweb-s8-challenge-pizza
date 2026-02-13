import { Container, Row, Col } from "reactstrap";
import "../css/category-section.css";
import { categories } from "../data.json";
function CategorySection() {
  return (
    <section className="category-section">
      <Container>
        <Row className="categories">
          {categories.map((category, index) => (
            <Col xs="6" md="2" className="category-item" key={index}>
              <a href="#">
                <img src={category.img} alt={category.name} />
                {category.name}
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CategorySection;
