import React, { useState, useMemo } from "react";
import "./demo.css";
const Demo = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);

  let handleChange = (e) => {
    setNumber(e.target.value);
  };

  let changeTheme = () => {
    setTheme(!theme);
  };


  let slowFunction = (num) => {   
    console.log("Hello");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  let doubleNum = useMemo(() => {
    return (
      <>
        {console.log("slow")}
        {slowFunction(number)}
      </>
    );
  }, [number]);

 

  return (
    <div className="main">
      <input type="number" name="number" id="number" onChange={handleChange} />
      <br />
      <button onClick={changeTheme}>Change Theme</button>
      {console.log(theme)}
      <div className={theme ? "darkTheme" : "lightTheme"}>
        <h1>{doubleNum}</h1>
      </div>
    </div>
  );
};





export default Demo;
