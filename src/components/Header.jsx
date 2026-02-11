import { Container, Button, Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../css/header.css";
import { Link, useLocation } from "react-router";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <>
      <header>
        <div
          className={`home-${pathname.startsWith("/order") ? "other" : "banner"}`}
        >
          <Container className="position-relative">
            <img src="../../images/iteration-1-images/logo.svg" alt="logo" />
            {pathname === "/order" && (
              <Breadcrumb className="position-absolute start-0 bottom-0 custom-breadcrumb">
                <BreadcrumbItem>
                  <Link to="/">Anasayfa</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Sipariş Oluştur</BreadcrumbItem>
              </Breadcrumb>
            )}
            {pathname === "/" && (
              <div>
                <h3 className="badge">fırsatı kaçırma</h3>
                <h2>KOD ACIKTIRIR</h2>
                <h2>Pizza, DOYURUR</h2>
                <Link
                  to="/order"
                  className="btn btn-warning rounded-pill px-5 py-2 fs-5 mt-5 fw-medium"
                >
                  ACIKTIM
                </Link>
              </div>
            )}
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
