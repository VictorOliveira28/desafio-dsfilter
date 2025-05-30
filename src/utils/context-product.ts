import { createContext } from "react";
import type { ProductDTO } from "../models/product";

export type ContextProductType = {
  contextProducts: ProductDTO[];
  setContextProducts: (products: ProductDTO[]) => void;
};

export const ContextProducts = createContext<ContextProductType>(
  {} as ContextProductType
);
