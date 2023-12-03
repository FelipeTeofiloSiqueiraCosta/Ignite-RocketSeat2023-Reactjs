import { MapPin } from "@phosphor-icons/react/dist/ssr";
import Logo from "../../assets/images/Logo.svg";
import { Badge, List } from "./styles";
import { ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav>
      <List>
        <li>
          <Link to="/">
            <img src={Logo} alt="Logo" title="Coffee Delivery Logo" />
          </Link>
        </li>
        <li>
          <Badge variant="primary">
            <MapPin size={22} weight="fill" />
            São Paulo, SP
          </Badge>
          <Badge variant="secondary">
            <ShoppingCart size={22} weight="fill" />
          </Badge>
        </li>
      </List>
    </nav>
  );
}
