import "./App.css";
import Counter from "./components/Counter";
import Fetch from "./components/Fetch";
import FetchReducer from "./components/FetchReducer";

function App() {
  return (
    <div>
      <h1>Redux Tutorial</h1>
      {/* <Counter /> */}
      {/* <Fetch /> */}
      <FetchReducer />
    </div>
  );
}

export default App;

// const arr = [10, 20, 30, 40, 50]

// const reducer = (acc, el) => acc + el
// const initialVal = 0

// const res = arr.reduce(reducer ,initialVal)

// console.log(res)
