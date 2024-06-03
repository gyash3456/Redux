import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import TodoMain from "./TodoComponent/TodoMain";

function App() {
    const dispatch = useDispatch();
    return (
        <div className="App">
            {/* <button
        onClick={() => {
          dispatch({ type: "PRODUCT_LIST" });
        }}
      >
        Fetch Product List
      </button> */}
            <TodoMain />
        </div>
    );
}

export default App;
