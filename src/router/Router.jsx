import { Routes, Route } from "react-router";
import HomeContainer from "../components/container/HomeContainer";
import OrderContainer from "../components/container/OrderContainer";
import OrderSummaryCompleted from "../components/container/OrderSummaryContainer";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/order" element={<OrderContainer />} />
      <Route path="/order-completed" element={<OrderSummaryCompleted />} />
    </Routes>
  );
};

export default Router;
