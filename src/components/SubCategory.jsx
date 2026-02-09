import { Row, Col, Container } from "reactstrap";
import "../css/sub-category.css";
import Products from "./Products";
const SubCategory = () => {
  const subCategories = [
    { name: "Ramen", img: "../../images/iteration-2-images/icons/1.svg" },
    { name: "Pizza", img: "../../images/iteration-2-images/icons/2.svg" },
    { name: "Burger", img: "../../images/iteration-2-images/icons/3.svg" },
    {
      name: "French Fries",
      img: "../../images/iteration-2-images/icons/4.svg",
    },
    { name: "Fast Food", img: "../../images/iteration-2-images/icons/5.svg" },
    {
      name: "Soft Drinks",
      img: "../../images/iteration-2-images/icons/6.svg",
    },
  ];
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
                <a href="#">
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
