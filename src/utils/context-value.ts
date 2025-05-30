import { createContext } from "react";
import { type Values } from "../models/values";

export type ContextValuesType = {
  contextValue: Values;
  setContextValue: (value: Values) => void;
};

export const ContextValue = createContext({} as ContextValuesType);
