import { Container, Row, Col } from "reactstrap";
import "../css/category-section.css";

function CategorySection() {
  const categories = [
    { name: "YENİ! Kore", img: "../../images/iteration-2-images/icons/1.svg" },
    { name: "Pizza", img: "../../images/iteration-2-images/icons/2.svg" },
    { name: "Burger", img: "../../images/iteration-2-images/icons/3.svg" },
    { name: "Kızartmalar", img: "../../images/iteration-2-images/icons/4.svg" },
    { name: "Fast Food", img: "../../images/iteration-2-images/icons/5.svg" },
    {
      name: "Gazlı İçecek",
      img: "../../images/iteration-2-images/icons/6.svg",
    },
  ];

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
