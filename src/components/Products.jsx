import { Row, Col } from "reactstrap";
const Products = () => {
  const products = [
    {
      name: "Terminal Pizza",
      img: "../../images/iteration-2-images/pictures/food-1.png",
    },
    {
      name: "Position Absolute Acı Pizza",
      img: "../../images/iteration-2-images/pictures/food-2.png",
    },
    {
      name: "useEffect Tavuklu Burger",
      img: "../../images/iteration-2-images/pictures/food-3.png",
    },
  ];
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
