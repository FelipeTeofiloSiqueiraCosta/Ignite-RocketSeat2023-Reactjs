import { MapPin } from "@phosphor-icons/react/dist/ssr";
import Logo from "../../assets/images/Logo.svg";
import { Badge, List } from "./styles";
import { ShoppingCart } from "@phosphor-icons/react";

export function Menu() {
  return (
    <nav>
      <List>
        <li>
          <img src={Logo} alt="Logo" title="Coffee Delivery Logo" />
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
