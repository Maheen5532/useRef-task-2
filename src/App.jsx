import { useRef } from "react";
import "./App.css";

function App() {
  const inputValueRef = useRef("");

  const handleChange = (e) => {
    inputValueRef.current = e.target.value;
  };

  const handleLogValue = () => {
    alert(`Input Value: ${inputValueRef.current}`);
  };

  return (
    <>
    <div id="main-dev">
    <div class="container">
        <h1>Track Input Value</h1>
        <input type="text" placeholder="Type something..." onChange={handleChange}/>
        <button onClick={handleLogValue} >Show Value </button>
      </div>
    </div>
    </>
  );
}

export default App;