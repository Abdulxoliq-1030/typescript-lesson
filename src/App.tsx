import "./App.css";
import Button from "./components/button";
import Input from "./components/input";

function App() {
  return (
    <div className="App">
      <Button
        handleClick={(event, id) => console.log("Button Clicked", event, id)}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
