import "./App.css";
import { Private } from "./components/auth/private";
import { Profile } from "./components/auth/profile";
import { Counter } from "./components/class/counter";

function App() {
  return (
    <div className="App">
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
