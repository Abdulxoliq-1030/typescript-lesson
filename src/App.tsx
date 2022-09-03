import "./App.css";
import { Box } from "./components/context/box";
import { ThemeContextProvider } from "./components/context/theme-context";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
