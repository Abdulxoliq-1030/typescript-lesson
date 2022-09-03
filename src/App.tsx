import "./App.css";
import { RandomNumber } from "./components/restriction/random-number";

function App() {
  return (
    <div className="App">
      <RandomNumber value={10} isPositive isNegative isZero />
    </div>
  );
}

export default App;
