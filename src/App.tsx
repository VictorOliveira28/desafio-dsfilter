import "./index.css";
import Header from "./components/Header";
import ListingBody from "./components/ListingBody";
import { ContextValue } from "./utils/context-value";
import { ContextProducts } from "./utils/context-product";
import { useState } from "react";
import type { Values } from "./models/values";
import type { ProductDTO } from "./models/product";

function App() {
  const [contextValue, setContextValue] = useState<Values>({});
  const [contextProducts, setContextProducts] = useState<ProductDTO[]>([]);

  return (
    <>
      <ContextValue.Provider value={{ contextValue, setContextValue }}>
        <ContextProducts.Provider
          value={{ contextProducts, setContextProducts }}
        >
          <Header />
          <ListingBody />
        </ContextProducts.Provider>
      </ContextValue.Provider>
    </>
  );
}

export default App;
