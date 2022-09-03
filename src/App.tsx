import "./App.css";
import { CustomButton } from "./components/html/button";

function App() {
  return (
    <div className="App">
      <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        Primary Button
      </CustomButton>
    </div>
  );
}

export default App;
