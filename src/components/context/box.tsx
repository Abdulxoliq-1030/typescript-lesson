import { useContext } from "react";
import { ThemeContext } from "./theme-context";

export const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}
    >
      Theme context
    </div>
  );
};
