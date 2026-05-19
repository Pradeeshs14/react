import React, { useState } from "react";

function Task4() {

  // Counter State
  const [count, setCount] = useState(0);

  // Theme State
  const [darkMode, setDarkMode] = useState(false);

  // Increment Function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement Function
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset Function
  const reset = () => {
    setCount(0);
  };

  // Theme Toggle Function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (

    <div className={darkMode ? "dark container" : "light container"}>

      <h1>Counter & Theme Toggle</h1>

      <h2 className="count">{count}</h2>

      <div className="button-group">

        <button onClick={increment}>
          Increment
        </button>

        <button onClick={decrement}>
          Decrement
        </button>

        <button onClick={reset}>
          Reset
        </button>

      </div>

      <button className="theme-btn" onClick={toggleTheme}>

        {
          darkMode ? "Light Mode" : "Dark Mode"
        }

      </button>

    </div>
  );
}

export default Task4;