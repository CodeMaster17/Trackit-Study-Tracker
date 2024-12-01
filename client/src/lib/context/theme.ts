import { createContext } from "react";

// Create Theme Context
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
