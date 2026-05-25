import React, { useContext } from "react";
import { FormContext } from "../App";
import InputFields from "./task8input";

function Form() {

  const { darkMode, toggleTheme } = useContext(FormContext);

  return (

    <div className="form-box">

      <h1>useContext Form</h1>

      <button onClick={toggleTheme}>

        {
          darkMode ? "Light Mode" : "Dark Mode"
        }

      </button>

      <InputFields />

    </div>

  );
}

export default Form;