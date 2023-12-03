import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Checkout } from "../pages/Checkout";
import { Layout } from "../layout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}
