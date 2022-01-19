import { createContext } from "react";

export const data = {
  number: 123,
  text: "Context API...",
};
const DataContext = createContext(null);
export default DataContext;
