import "./App.css";
import { List } from "./components/generics/list";

function App() {
  return (
    <div className="App">
      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3, 4, 5]} onClick={(item) => console.log(item)} />
      {/* <List
        items={[
          {
            first: "Bruce",
            last: "Wayne",
          },
          {
            first: "Bruce",
            last: "Wayne",
          },
          {
            first: "Bruce",
            last: "Wayne",
          },
          {
            first: "Bruce",
            last: "Wayne",
          },
        ]}
        onClick={(item) => console.log(item)}
      /> */}
    </div>
  );
}

export default App;
