import "./styles.css";
import { useContext, useEffect, useState } from "react";
import { ContextProducts } from "../../utils/context-product";

export default function Header() {
  const { contextProducts } = useContext(ContextProducts);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount(contextProducts.length);
  }, [contextProducts]);

  return (
    <>
      <div className="dsf-container">
        <header className="dsf-header">
          <div className="dsf-logo">
            <h1>DSFilter</h1>
          </div>
          <div className="dsf-quantity-products">
            <p>{count} Produto(s)</p>
          </div>
        </header>
      </div>
    </>
  );
}
