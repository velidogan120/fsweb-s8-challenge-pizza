import { Routes, Route } from "react-router";
import HomeContainer from "../components/container/HomeContainer";
import OrderContainer from "../components/container/OrderContainer";
import OrderSummaryContainer from "../components/container/OrderSummaryContainer";
const Router = ({ order, setOrder }) => {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/order" element={<OrderContainer setOrder={setOrder} />} />
      <Route
        path="/order-completed"
        element={<OrderSummaryContainer order={order} />}
      />
    </Routes>
  );
};

export default Router;
