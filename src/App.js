import { useRef, useState } from "react";
import { fibonacci } from "./fibonancci";
function App() {
  return (
    <div className="w-75 vh-100 m-auto pt-5">
      {/* Header */}
      <h1 className="text-center">Jest Test- SWT</h1>

      {/* Input */}
      <div className="input-group w-50 mt-5 mx-auto">
        <input type="text" ref={input} className="form-control" id="inputGroupFile01" />
        <button onClick={() => onClick()} className="btn btn-outline-secondary" type="button" id="button-addon1">Fibonacci</button>
      </div>

      {error && <h4 className="text-center mt-2 text-danger">{error}</h4>}

      {/* Result */}
      <h2 className="text-center mt-5">Result: {result && result}</h2>
    </div>
  );
}

export default App;
