import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p className="text-4xl">Fire Chat</p>
    </div>
  );
}

export default App;
