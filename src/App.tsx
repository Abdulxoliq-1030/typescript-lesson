import { UserContextProvider } from "./components/context/user-context";
import { User } from "./components/context/user";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
