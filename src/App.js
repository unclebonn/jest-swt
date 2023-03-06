import { useRef, useState } from "react";
import { fibonacci } from "./fibonancci";

import Login from "./Components/login/Login";

function App() {
  const [result, setResult] = useState(undefined);
  const [error, setError] = useState(undefined);
  const input = useRef();

  const onClick = () => {
    try {
      const fibonacciNumber = fibonacci(input.current.value);
      setResult(fibonacciNumber);
      setError(null);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-75 vh-100 m-auto pt-5">
        {/* Header */}
        <h1 className="text-center">Jest Test- SWT</h1>

        {/* Input */}
        <div className="input-group w-50 mt-5 mx-auto">
          <input
            type="text"
            ref={input}
            className="form-control"
            id="inputGroupFile01"
          />
          <button
            onClick={() => onClick()}
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
          >
            Fibonacci
          </button>
        </div>

        {error && <h4 className="text-center mt-2 text-danger">{error}</h4>}

        {/* Result */}
        <h2 className="text-center mt-5">Result: {result && result}</h2>
      </div>
      <Login />
    </>
  );
}

export default App;
