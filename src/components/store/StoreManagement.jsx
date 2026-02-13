import { useState } from "react";
import Router from "../../router/Router";

const StoreManagement = () => {
  const [order, setOrder] = useState(null);
  return <Router order={order} setOrder={setOrder} />;
};

export default StoreManagement;
