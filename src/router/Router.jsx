import { Routes } from "react-router";
import HomeContainer from "../components/container/HomeContainer";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/order" element={<Order />} />
      <Route path="/order-completed" element={<OrderCompleted />} />
    </Routes>
  );
};

export default Router;
