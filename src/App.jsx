import React, { useState, useEffect, memo, useMemo } from "react";
import "./App.css";

let Memos = () => {
  console.log("Memmmmmooooooo");
  return <div style={{ width: 40, height: 20, backgroundColor: "blue" }} />;
};

const Memod = memo(Memos);

let handleUseMemos = () => {
  console.log("Initial Calls");
}

function App() {
  const [render, setRender] = useState(0);
  const [cube, setCube] = useState(false);



  let handleRender = () => {
    console.log("Rendered", render);
    setRender((prev) => prev + 1);
  };

  useEffect(() => {
    handleRender;
  });

  let cubeColor = () => {
    console.log("color changed");
    setCube(!cube);
  };

  return (
    <div className="App">
      <button onClick={handleRender}>Re-Render</button>
      <br />
      <br />
      {render}
      <br />
      <br />
      <div className={cube ? "cube" : "cubeChange"}></div>
      <br />
      <button onClick={handleUseMemos}>Click Use MEmos</button>
      <button onClick={cubeColor}>Change Cube Color</button>
      <div>
        <Memod />
      </div>
    </div>
  );
}

export default App;
