import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { History } from "../pages/History";
import { DefaultLayout } from "../layouts/Default.layout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
}
