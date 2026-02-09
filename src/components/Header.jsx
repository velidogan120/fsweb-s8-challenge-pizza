import { Container, Button } from "reactstrap";
import "../css/header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="home-banner">
          <Container>
            <img src="../../images/iteration-1-images/logo.svg" alt="logo" />
            <div>
              <h3 className="badge">fırsatı kaçırma</h3>
              <h2>KOD ACIKTIRIR</h2>
              <h2>Pizza, DOYURUR</h2>
              <Button className="btn btn-warning rounded-pill px-4 fs-2">
                ACIKTIM
              </Button>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
