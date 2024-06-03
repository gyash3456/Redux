import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch({ type: "PRODUCT_LIST" });
        }}
      >
        Fetch Product List
      </button>
    </div>
  );
}

export default App;
