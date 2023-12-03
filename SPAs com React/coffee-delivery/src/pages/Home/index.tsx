import { AboutContainer, CooffeeListContainer, Icon } from "./styles";
import CoffeeDeliveryLogo from "../../assets/images/coffee-delivery.svg";
import Background from "../../assets/images/Background.png";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { CoffeeCard, CoffeeCardProps } from "../../components/CoffeeCard";
import ExpressoTradicional from "../../assets/images/Expresso_tradicional.png";
const coffees: CoffeeCardProps[] = [
  {
    description: "Café expresso feito com grãos selecionados",
    imageUrl: ExpressoTradicional,
    name: "Expresso Tradicional",
    value: 9.9,
    type: ["Expresso"],
  },
  {
    description: "Café expresso feito com grãos selecionados",
    imageUrl: ExpressoTradicional,
    name: "Expresso Tradicional",
    value: 9.9,
    type: ["Expresso"],
  },
  {
    description: "Café expresso feito com grãos selecionados",
    imageUrl: ExpressoTradicional,
    name: "Expresso Tradicional",
    value: 9.9,
    type: ["Expresso"],
  },
  {
    description: "Café expresso feito com grãos selecionados",
    imageUrl: ExpressoTradicional,
    name: "Expresso Tradicional",
    value: 119.9,
    type: ["Expresso"],
  },
  {
    description: "Café expresso feito com grãos selecionados",
    imageUrl: ExpressoTradicional,
    name: "Expresso Tradicional",
    value: 9.9,
    type: ["Expresso"],
  },
];

export function Home() {
  return (
    <div style={{ padding: "20px 0px" }}>
      <AboutContainer>
        <img src={Background} alt="" />
        <main>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul>
            <li>
              <div>
                <Icon bgColor="yellow-dark">
                  <ShoppingCart size={16} weight="fill" />
                </Icon>
                Compra simples e segura
              </div>
              <div>
                <Icon bgColor="yellow">
                  <Timer size={16} weight="fill" />
                </Icon>
                Entrega rápida e rastreada
              </div>
            </li>

            <li>
              <div>
                <Icon bgColor="base-text">
                  <Package size={16} weight="fill" />
                </Icon>
                Embalagem mantém o café intacto
              </div>

              <div>
                <Icon bgColor="purple">
                  <Coffee size={16} weight="fill" />
                </Icon>
                O café chega fresquinho até você
              </div>
            </li>
          </ul>
        </main>
        <img
          src={CoffeeDeliveryLogo}
          alt="Coffee delivery logo"
          title="Coffee delivery logo"
        />
      </AboutContainer>
      <CooffeeListContainer>
        <main>
          <h2>Nossos cafés</h2>
          <ul>
            {coffees.map(({ description, imageUrl, name, value, type }) => {
              return (
                <li key={name}>
                  <CoffeeCard
                    description={description}
                    imageUrl={imageUrl}
                    name={name}
                    value={value}
                    type={type}
                  />
                </li>
              );
            })}
          </ul>
        </main>
      </CooffeeListContainer>
    </div>
  );
}
