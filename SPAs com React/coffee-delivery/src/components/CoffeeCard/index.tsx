import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { CoffeeCardContainer } from "./style";
import { useState } from "react";

export interface CoffeeCardProps {
  name: string;
  description: string;
  value: number;
  type: string[];
  imageUrl: string;
}
export function CoffeeCard({
  description,
  name,
  type,
  value,
  imageUrl,
}: CoffeeCardProps) {
  const [amount, setAmount] = useState(1);

  return (
    <CoffeeCardContainer>
      <header>
        <img src={imageUrl} />
        <section>
          {type.map((type) => {
            return <span key={"card-type-" + type}>{type}</span>;
          })}
        </section>
      </header>
      <main>
        <h1>{name}</h1>
        <p>{description}</p>
      </main>
      <footer>
        <div className="price">
          <span>R$</span>
          {Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
          }).format(value)}
        </div>
        <div className="amount">
          <div className="amount-button">
            <Minus size={14} onClick={() => setAmount((state) => state - 1)} />
            {amount}
            <Plus size={14} onClick={() => setAmount((state) => state + 1)} />
          </div>
          <button onClick={() => console.log("comprar")}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </footer>
    </CoffeeCardContainer>
  );
}
