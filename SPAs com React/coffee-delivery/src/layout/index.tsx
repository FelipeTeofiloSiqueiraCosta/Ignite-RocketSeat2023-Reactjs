import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu";

export function Layout() {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
}
