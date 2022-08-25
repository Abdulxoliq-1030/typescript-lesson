import "./App.css";
import Greet from "./components/greet";
import Heading from "./components/heading";
import Oscar from "./components/oscar";
import Status from "./components/status";

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicabrio</Heading>
      </Oscar>
      <Greet name={"Abdulxoliq"} messageCount={10} isLoggedIn={false} />
    </div>
  );
}

export default App;
