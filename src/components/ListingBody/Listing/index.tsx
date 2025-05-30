import "./styles.css";
import { useContext, useEffect } from "react";
import { ContextProducts } from "../../../utils/context-product";
import { ContextValue } from "../../../utils/context-value";
import * as productService from "../../../services/product-service";
import Product from "../../Product";

export default function Listing() {
  const { contextValue } = useContext(ContextValue);
  const { contextProducts, setContextProducts } = useContext(ContextProducts);

  useEffect(() => {
    let minValue = contextValue.valueMin;
    if (minValue == undefined || minValue < 0) {
      minValue = 0;
    }
    let maxValue = contextValue.valueMax;
    if (maxValue == undefined || maxValue <= 0) {
      maxValue = Number.MAX_VALUE;
    }
    setContextProducts(productService.findByPrice(minValue, maxValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contextValue]);

  return (
    <section className="dsf-section-container">
      <div className="dsf-card-product-list">
        {contextProducts.length > 0 &&
          contextProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
}
