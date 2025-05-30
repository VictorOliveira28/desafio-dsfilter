import type { ProductDTO } from "../../models/product";
import "./styles.css";

type Props = {
  product: ProductDTO;
};

export default function Product({ product }: Props) {
  return (
    <div className="dsf-product">
      <p className="dsf-product-name">{product.name}</p>
      <p className="dsf-product-price">R$ {product.price.toFixed(2)}</p>
    </div>
  );
}
