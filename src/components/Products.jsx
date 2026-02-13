import { Row, Col } from "reactstrap";
import { products } from "../data.json";
const Products = () => {
  return (
    <div>
      <Row className="products p-5 gap-4">
        {products.map((product, index) => (
          <Col md="4" className="product-card" key={index}>
            <img src={product.img} alt={product.name} className="mx-auto" />
            <h4>{product.name}</h4>
            <div className="product-info d-flex justify-content-between align-items-center">
              <h5>4.9</h5>
              <div>
                <span>(200)</span>
                <span className="price">60₺</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
