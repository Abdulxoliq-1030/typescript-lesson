import "./App.css";
import Counter from "./components/state/counter";
import { LoggedIn } from "./components/state/loggedin";

function App() {
  return (
    <div className="App">
      {/* <LoggedIn /> */}
      <Counter />
    </div>
  );
}

export default App;
